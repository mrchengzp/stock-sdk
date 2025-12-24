# BIAS

Bias ratio indicator - measures deviation from moving average.

## Usage

```typescript
const data = await sdk.getKlineWithIndicators('sz000858', {
  indicators: { bias: { periods: [6, 12, 24] } }
});

data.forEach(k => {
  console.log(`BIAS6: ${k.bias?.bias6}, BIAS12: ${k.bias?.bias12}`);
});
```

## Manual Calculation

```typescript
import { calcBIAS } from 'stock-sdk';

const closes = [/* close prices */];
const bias6 = calcBIAS(closes, 6);
const bias12 = calcBIAS(closes, 12);
```

## Formula

$$BIAS = \frac{Close - MA_n}{MA_n} \times 100$$

## Interpretation

- **Positive BIAS**: Price is above MA, potentially overbought
- **Negative BIAS**: Price is below MA, potentially oversold
- **High absolute value**: Price may revert to mean

