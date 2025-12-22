/**
 * 工具函数
 */

/**
 * 将数组分割成指定大小的块
 */
export function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

/**
 * 并发控制执行异步任务
 * @param tasks 任务函数数组
 * @param concurrency 最大并发数
 */
export async function asyncPool<T>(
  tasks: (() => Promise<T>)[],
  concurrency: number
): Promise<T[]> {
  const results: T[] = [];
  const executing: Promise<void>[] = [];

  for (const task of tasks) {
    const p = Promise.resolve().then(() => task()).then((result) => {
      results.push(result);
    });

    executing.push(p as Promise<void>);

    if (executing.length >= concurrency) {
      await Promise.race(executing);
      // 移除已完成的 promise
      for (let i = executing.length - 1; i >= 0; i--) {
        // 检查是否已完成
        const status = await Promise.race([
          executing[i].then(() => 'fulfilled'),
          Promise.resolve('pending'),
        ]);
        if (status === 'fulfilled') {
          executing.splice(i, 1);
        }
      }
    }
  }

  await Promise.all(executing);
  return results;
}

/**
 * 根据股票代码获取东方财富市场代码
 * 支持带前缀(sh/sz/bj)或纯代码
 */
export function getMarketCode(symbol: string): string {
  // 如果有前缀，直接根据前缀判断
  if (symbol.startsWith('sh')) return '1';
  if (symbol.startsWith('sz') || symbol.startsWith('bj')) return '0';
  // 纯代码：6 开头为上海(1)，其他为深圳/北交所(0)
  return symbol.startsWith('6') ? '1' : '0';
}

/**
 * 获取 K 线周期代码
 */
export function getPeriodCode(period: 'daily' | 'weekly' | 'monthly'): string {
  const periodMap = { daily: '101', weekly: '102', monthly: '103' } as const;
  return periodMap[period];
}

/**
 * 获取复权类型代码
 */
export function getAdjustCode(adjust: '' | 'qfq' | 'hfq'): string {
  const adjustMap = { '': '0', qfq: '1', hfq: '2' } as const;
  return adjustMap[adjust];
}

