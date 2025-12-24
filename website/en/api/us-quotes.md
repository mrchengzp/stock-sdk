# US Stock Quotes

Get real-time quotes for US stocks.

## getUSQuotes

```typescript
const quotes = await sdk.getUSQuotes(['AAPL', 'MSFT', 'BABA']);
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| codes | `string[]` | Yes | US stock tickers |

### Return Type

```typescript
interface USQuote {
  code: string;           // Stock code
  name: string;           // Stock name
  price: number;          // Current price (USD)
  change: number;         // Price change
  changePercent: number;  // Change percentage
  volume: number;         // Trading volume
  amount: number;         // Trading amount
  high: number;           // Day high
  low: number;            // Day low
  open: number;           // Open price
  prevClose: number;      // Previous close
  time: string;           // Quote time
  high52w: number;        // 52-week high
  low52w: number;         // 52-week low
  pe: number;             // P/E ratio
  marketCap: number;      // Market cap
}
```

## getUSHistoryKline

Get US stock historical K-line data.

```typescript
// Note: Use market.ticker format for K-line
const klines = await sdk.getUSHistoryKline('105.MSFT', {
  period: 'daily',
  startDate: '20240101',
  endDate: '20241231',
});
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| code | `string` | Yes | US stock code (market.ticker) |
| options.period | `'daily' \| 'weekly' \| 'monthly'` | No | K-line period (default: daily) |
| options.startDate | `string` | No | Start date (YYYYMMDD) |
| options.endDate | `string` | No | End date (YYYYMMDD) |
| options.adjust | `'' \| 'qfq' \| 'hfq'` | No | Adjust type (default: hfq) |

### Market Codes

| Code | Market |
|------|--------|
| 105 | NASDAQ |
| 106 | NYSE |
| 107 | Other |

## getAllUSShareQuotes

Get all US stock quotes.

```typescript
const allQuotes = await sdk.getAllUSShareQuotes({
  concurrency: 5,
  onProgress: (completed, total) => {
    console.log(`Progress: ${completed}/${total}`);
  },
});
```

## Example

```typescript
import { StockSDK } from 'stock-sdk';

const sdk = new StockSDK();

// Get US stock quotes
const quotes = await sdk.getUSQuotes(['AAPL', 'MSFT', 'GOOGL', 'BABA']);
quotes.forEach(q => {
  console.log(`${q.name}: USD ${q.price} (${q.changePercent}%)`);
});
// Apple Inc.: USD 180.00 (1.20%)
// Microsoft Corp.: USD 380.00 (0.80%)

// Get US stock K-line
const klines = await sdk.getUSHistoryKline('105.AAPL', {
  period: 'daily',
  startDate: '20240101',
});
console.log(`Got ${klines.length} K-line records`);
```

