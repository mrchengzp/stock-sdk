/**
 * 腾讯财经 - 批量操作
 */
import {
  RequestClient,
  CODE_LIST_URL,
  chunkArray,
  asyncPool,
  DEFAULT_BATCH_SIZE,
  DEFAULT_CONCURRENCY,
} from '../../core';
import type { FullQuote } from '../../types';
import { getFullQuotes } from './quote';

/**
 * 获取全部 A 股行情的配置选项
 */
export interface GetAllAShareQuotesOptions {
  /** 单次请求的股票数量，默认 500 */
  batchSize?: number;
  /** 最大并发请求数，默认 7 */
  concurrency?: number;
  /** 进度回调函数 */
  onProgress?: (completed: number, total: number) => void;
}

/**
 * 从远程获取 A 股代码列表
 * @param client 请求客户端
 * @param includeExchange 是否包含交易所前缀（如 sh、sz、bj），默认 true
 */
export async function getAShareCodeList(
  client: RequestClient,
  includeExchange: boolean = true
): Promise<string[]> {
  const timeout = client.getTimeout();
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const resp = await fetch(CODE_LIST_URL, {
      signal: controller.signal,
    });

    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }

    const codeList: string[] = await resp.json();

    if (includeExchange) {
      return codeList;
    }

    // 移除交易所前缀（sh、sz、bj）
    return codeList.map((code) => code.replace(/^(sh|sz|bj)/, ''));
  } finally {
    clearTimeout(timeoutId);
  }
}

/**
 * 批量获取股票行情
 * @param client 请求客户端
 * @param codes 股票代码列表
 * @param options 配置选项
 */
export async function getAllQuotesByCodes(
  client: RequestClient,
  codes: string[],
  options: GetAllAShareQuotesOptions = {}
): Promise<FullQuote[]> {
  const {
    batchSize = DEFAULT_BATCH_SIZE,
    concurrency = DEFAULT_CONCURRENCY,
    onProgress,
  } = options;

  const chunks = chunkArray(codes, batchSize);
  const totalChunks = chunks.length;
  let completedChunks = 0;

  const tasks = chunks.map((chunk) => async () => {
    const result = await getFullQuotes(client, chunk);
    completedChunks++;
    if (onProgress) {
      onProgress(completedChunks, totalChunks);
    }
    return result;
  });

  const results = await asyncPool(tasks, concurrency);
  return results.flat();
}

