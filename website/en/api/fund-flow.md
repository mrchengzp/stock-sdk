# Fund Flow

Get capital flow data for stocks.

## getFundFlow

```typescript
const flows = await sdk.getFundFlow(['sz000858', 'sh600519']);
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| codes | `string[]` | Yes | Stock codes |

### Return Type

```typescript
interface FundFlowData {
  code: string;            // Stock code
  name: string;            // Stock name
  mainNet: number;         // Main capital net inflow
  mainNetRatio: number;    // Main capital net ratio (%)
  superLargeNet: number;   // Super large order net
  superLargeRatio: number; // Super large order ratio (%)
  largeNet: number;        // Large order net
  largeRatio: number;      // Large order ratio (%)
  mediumNet: number;       // Medium order net
  mediumRatio: number;     // Medium order ratio (%)
  smallNet: number;        // Small order net
  smallRatio: number;      // Small order ratio (%)
}
```

## getPanelLargeOrder

Get large order ratio from order book.

```typescript
const orders = await sdk.getPanelLargeOrder(['sz000858']);
```

### Return Type

```typescript
interface PanelLargeOrderData {
  code: string;
  name: string;
  buyLargeRatio: number;   // Buy side large order ratio
  sellLargeRatio: number;  // Sell side large order ratio
}
```

## Example

```typescript
import { StockSDK } from 'stock-sdk';

const sdk = new StockSDK();

// Get fund flow
const flows = await sdk.getFundFlow(['sz000858', 'sh600519']);
flows.forEach(f => {
  console.log(`${f.name}:`);
  console.log(`  Main Net: ${f.mainNet} (${f.mainNetRatio}%)`);
  console.log(`  Large Net: ${f.largeNet}`);
});

// Get large order ratio
const orders = await sdk.getPanelLargeOrder(['sz000858']);
orders.forEach(o => {
  console.log(`${o.name}: Buy ${o.buyLargeRatio}%, Sell ${o.sellLargeRatio}%`);
});
```

