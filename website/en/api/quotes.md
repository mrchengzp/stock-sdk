# A-Share Quotes

Get real-time quotes for A-Share stocks and indices.

## getSimpleQuotes

Get simplified quote data.

```typescript
const quotes = await sdk.getSimpleQuotes(['sh000001', 'sz000858']);
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| codes | `string[]` | Yes | Stock codes with exchange prefix |

### Return Type

```typescript
interface SimpleQuote {
  code: string;        // Stock code
  name: string;        // Stock name
  price: number;       // Current price
  change: number;      // Price change
  changePercent: number; // Change percentage
  volume: number;      // Trading volume
  amount: number;      // Trading amount
  high: number;        // Day high
  low: number;         // Day low
  open: number;        // Open price
  prevClose: number;   // Previous close
  time: string;        // Quote time
}
```

## getFullQuotes

Get detailed quote data with more fields.

```typescript
const quotes = await sdk.getFullQuotes(['sz000858']);
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| codes | `string[]` | Yes | Stock codes with exchange prefix |

### Return Type

```typescript
interface FullQuote extends SimpleQuote {
  turnoverRate: number;    // Turnover rate (%)
  pe: number;              // P/E ratio
  pb: number;              // P/B ratio
  totalMarketCap: number;  // Total market cap
  circulatingCap: number;  // Circulating market cap
  amplitude: number;       // Amplitude (%)
  // Buy/Sell orderbook
  bid1: number; bid1Vol: number;
  bid2: number; bid2Vol: number;
  bid3: number; bid3Vol: number;
  bid4: number; bid4Vol: number;
  bid5: number; bid5Vol: number;
  ask1: number; ask1Vol: number;
  ask2: number; ask2Vol: number;
  ask3: number; ask3Vol: number;
  ask4: number; ask4Vol: number;
  ask5: number; ask5Vol: number;
}
```

## Example

```typescript
import { StockSDK } from 'stock-sdk';

const sdk = new StockSDK();

// Get simple quotes
const simple = await sdk.getSimpleQuotes(['sh000001', 'sz000858', 'sh600519']);
simple.forEach(q => {
  console.log(`${q.name}: ${q.price} (${q.changePercent}%)`);
});

// Get full quotes with orderbook
const full = await sdk.getFullQuotes(['sz000858']);
const quote = full[0];
console.log(`${quote.name}`);
console.log(`Price: ${quote.price}`);
console.log(`P/E: ${quote.pe}`);
console.log(`Market Cap: ${quote.totalMarketCap}`);
console.log(`Bid1: ${quote.bid1} x ${quote.bid1Vol}`);
```

