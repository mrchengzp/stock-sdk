# History K-Line

Get historical K-line (candlestick) data.

## getHistoryKline

```typescript
const klines = await sdk.getHistoryKline('sz000858', {
  period: 'daily',
  startDate: '20240101',
  endDate: '20241231',
  adjust: 'hfq',
});
```

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| code | `string` | Yes | - | Stock code with exchange prefix |
| options.period | `'daily' \| 'weekly' \| 'monthly'` | No | `'daily'` | K-line period |
| options.startDate | `string` | No | - | Start date (YYYYMMDD) |
| options.endDate | `string` | No | - | End date (YYYYMMDD) |
| options.adjust | `'' \| 'qfq' \| 'hfq'` | No | `'hfq'` | Price adjustment |

### Adjustment Types

| Value | Description |
|-------|-------------|
| `''` | No adjustment (raw prices) |
| `'qfq'` | Forward adjustment |
| `'hfq'` | Backward adjustment (recommended) |

### Return Type

```typescript
interface KlineData {
  date: string;    // Date (YYYY-MM-DD)
  open: number;    // Open price
  close: number;   // Close price
  high: number;    // High price
  low: number;     // Low price
  volume: number;  // Trading volume
  amount: number;  // Trading amount
  amplitude: number;      // Amplitude (%)
  changePercent: number;  // Change percentage
  change: number;         // Price change
  turnoverRate: number;   // Turnover rate (%)
}
```

## Example

```typescript
import { StockSDK } from 'stock-sdk';

const sdk = new StockSDK();

// Daily K-line with backward adjustment
const daily = await sdk.getHistoryKline('sz000858', {
  period: 'daily',
  startDate: '20240101',
  endDate: '20241231',
  adjust: 'hfq',
});

daily.forEach(k => {
  console.log(`${k.date}: O ${k.open} H ${k.high} L ${k.low} C ${k.close}`);
});

// Weekly K-line
const weekly = await sdk.getHistoryKline('sz000858', {
  period: 'weekly',
  startDate: '20240101',
});

// Monthly K-line without adjustment
const monthly = await sdk.getHistoryKline('sz000858', {
  period: 'monthly',
  adjust: '',
});
```

