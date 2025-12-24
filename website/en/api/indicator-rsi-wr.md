# RSI / WR

Relative Strength Index and Williams %R indicators.

## RSI Usage

```typescript
const data = await sdk.getKlineWithIndicators('sz000858', {
  indicators: { rsi: { periods: [6, 12, 24] } }
});

data.forEach(k => {
  console.log(`RSI6: ${k.rsi?.rsi6}, RSI12: ${k.rsi?.rsi12}`);
});
```

## WR Usage

```typescript
const data = await sdk.getKlineWithIndicators('sz000858', {
  indicators: { wr: true }
});

data.forEach(k => {
  console.log(`WR6: ${k.wr?.wr6}, WR10: ${k.wr?.wr10}`);
});
```

## Manual Calculation

```typescript
import { calcRSI, calcWR } from 'stock-sdk';

const closes = [/* close prices */];
const highs = [/* high prices */];
const lows = [/* low prices */];

// RSI
const rsi6 = calcRSI(closes, 6);
const rsi12 = calcRSI(closes, 12);

// Williams %R
const wr = calcWR(highs, lows, closes, 6);
```

## RSI Formula

$$RSI = 100 - \frac{100}{1 + RS}$$

Where $RS = \frac{Avg Gain}{Avg Loss}$

## WR Formula

$$WR = \frac{High_n - Close}{High_n - Low_n} \times (-100)$$

