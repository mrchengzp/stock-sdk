# KDJ

Stochastic oscillator indicator.

## Usage

```typescript
const data = await sdk.getKlineWithIndicators('sz000858', {
  indicators: { kdj: true }
});

data.forEach(k => {
  console.log(`K: ${k.kdj?.k}, D: ${k.kdj?.d}, J: ${k.kdj?.j}`);
});
```

## Manual Calculation

```typescript
import { calcKDJ } from 'stock-sdk';

const highs = [/* high prices */];
const lows = [/* low prices */];
const closes = [/* close prices */];

const result = calcKDJ(highs, lows, closes, 9, 3, 3);

// result.k - K line
// result.d - D line
// result.j - J line
```

## Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| period | 9 | RSV period |
| kPeriod | 3 | K smoothing period |
| dPeriod | 3 | D smoothing period |

## Formula

$$RSV = \frac{Close - Low_n}{High_n - Low_n} \times 100$$
$$K = \frac{2}{3} K_{prev} + \frac{1}{3} RSV$$
$$D = \frac{2}{3} D_{prev} + \frac{1}{3} K$$
$$J = 3K - 2D$$

