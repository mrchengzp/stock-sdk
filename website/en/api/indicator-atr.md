# ATR

Average True Range - volatility indicator.

## Usage

```typescript
const data = await sdk.getKlineWithIndicators('sz000858', {
  indicators: { atr: true }
});

data.forEach(k => {
  console.log(`ATR: ${k.atr?.atr}`);
});
```

## Manual Calculation

```typescript
import { calcATR } from 'stock-sdk';

const highs = [/* high prices */];
const lows = [/* low prices */];
const closes = [/* close prices */];

const atr = calcATR(highs, lows, closes, 14);
```

## Formula

$$TR = max(High - Low, |High - Close_{prev}|, |Low - Close_{prev}|)$$
$$ATR = SMA(TR, n)$$

## Interpretation

- **High ATR**: High volatility
- **Low ATR**: Low volatility
- Used for stop-loss placement and position sizing

