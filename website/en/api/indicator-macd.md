# MACD

Moving Average Convergence Divergence indicator.

## Usage

```typescript
const data = await sdk.getKlineWithIndicators('sz000858', {
  indicators: { macd: true }
});

data.forEach(k => {
  console.log(`DIF: ${k.macd?.dif}, DEA: ${k.macd?.dea}, MACD: ${k.macd?.macd}`);
});
```

## Manual Calculation

```typescript
import { calcMACD } from 'stock-sdk';

const closes = [/* close prices */];
const result = calcMACD(closes, 12, 26, 9);

// result.dif  - DIF line (fast EMA - slow EMA)
// result.dea  - DEA line (signal line)
// result.macd - MACD histogram (2 * (DIF - DEA))
```

## Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| short | 12 | Short EMA period |
| long | 26 | Long EMA period |
| signal | 9 | Signal line period |

## Formula

$$DIF = EMA_{12} - EMA_{26}$$
$$DEA = EMA_9(DIF)$$
$$MACD = 2 \times (DIF - DEA)$$

