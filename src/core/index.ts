/**
 * Core 模块导出
 */

// 请求客户端
export { RequestClient, type RequestClientOptions } from './request';

// 解析器
export {
  decodeGBK,
  parseResponse,
  safeNumber,
  safeNumberOrNull,
  toNumber,
} from './parser';

// 工具函数
export {
  chunkArray,
  asyncPool,
  getMarketCode,
  getPeriodCode,
  getAdjustCode,
} from './utils';

// 常量
export * from './constants';

