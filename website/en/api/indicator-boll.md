# BOLL (Bollinger Bands)

Bollinger Bands indicator.

## Usage

```typescript
const data = await sdk.getKlineWithIndicators('sz000858', {
  indicators: { boll: true }
});

data.forEach(k => {
  console.log(`Upper: ${k.boll?.upper}, Mid: ${k.boll?.mid}, Lower: ${k.boll?.lower}`);
});
```

## Manual Calculation

```typescript
import { calcBOLL } from 'stock-sdk';

const closes = [/* close prices */];
const result = calcBOLL(closes, 20, 2);

// result.upper - Upper band
// result.mid   - Middle band (MA)
// result.lower - Lower band
```

## Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| period | 20 | MA period |
| multiplier | 2 | Standard deviation multiplier |

## Formula

$$Middle = SMA_{20}$$
$$Upper = Middle + 2 \times \sigma$$
$$Lower = Middle - 2 \times \sigma$$

Where $\sigma$ is the standard deviation.

