# Code Lists

Get stock code lists for different markets.

## getAShareCodeList

Get all A-Share stock codes.

```typescript
const codes = await sdk.getAShareCodeList();
// ['sh600000', 'sh600001', ..., 'sz000001', ...]

// Without exchange prefix
const codes = await sdk.getAShareCodeList(false);
// ['600000', '600001', ..., '000001', ...]
```

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| includeExchange | `boolean` | `true` | Include exchange prefix |

## getHKCodeList

Get all Hong Kong stock codes.

```typescript
const codes = await sdk.getHKCodeList();
// ['00001', '00002', ..., '00700', ...]
```

## getUSCodeList

Get all US stock codes.

```typescript
const codes = await sdk.getUSCodeList();
// ['105.AAPL', '105.MSFT', ..., '106.BABA', ...]

// Without market prefix
const codes = await sdk.getUSCodeList(false);
// ['AAPL', 'MSFT', ..., 'BABA', ...]
```

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| includeMarket | `boolean` | `true` | Include market prefix |

## Example

```typescript
import { StockSDK } from 'stock-sdk';

const sdk = new StockSDK();

// Get A-Share codes
const aCodes = await sdk.getAShareCodeList();
console.log(`A-Share: ${aCodes.length} stocks`);

// Get HK codes
const hkCodes = await sdk.getHKCodeList();
console.log(`HK: ${hkCodes.length} stocks`);

// Get US codes
const usCodes = await sdk.getUSCodeList();
console.log(`US: ${usCodes.length} stocks`);
```

