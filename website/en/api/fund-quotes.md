# Fund Quotes

Get real-time quotes for mutual funds.

## getFundQuotes

```typescript
const quotes = await sdk.getFundQuotes(['000001', '110011']);
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| codes | `string[]` | Yes | Fund codes (6 digits) |

### Return Type

```typescript
interface FundQuote {
  code: string;           // Fund code
  name: string;           // Fund name
  nav: number;            // Net Asset Value
  accNav: number;         // Accumulated NAV
  navDate: string;        // NAV date
  change: number;         // Daily change
  changePercent: number;  // Daily change percentage
  // ... more fields
}
```

## Example

```typescript
import { StockSDK } from 'stock-sdk';

const sdk = new StockSDK();

const funds = await sdk.getFundQuotes(['000001', '110011', '519736']);
funds.forEach(f => {
  console.log(`${f.name}: NAV ${f.nav} (${f.changePercent}%)`);
});
// Huaxia Growth: NAV 1.234 (0.50%)
// Efunds Select: NAV 2.567 (-0.30%)
```

