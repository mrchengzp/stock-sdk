# CCI

Commodity Channel Index indicator.

## Usage

```typescript
const data = await sdk.getKlineWithIndicators('sz000858', {
  indicators: { cci: true }
});

data.forEach(k => {
  console.log(`CCI: ${k.cci?.cci}`);
});
```

## Manual Calculation

```typescript
import { calcCCI } from 'stock-sdk';

const highs = [/* high prices */];
const lows = [/* low prices */];
const closes = [/* close prices */];

const cci = calcCCI(highs, lows, closes, 14);
```

## Formula

$$TP = \frac{High + Low + Close}{3}$$
$$CCI = \frac{TP - SMA(TP)}{0.015 \times MD}$$

Where MD is the mean deviation.

## Interpretation

- **CCI > 100**: Overbought
- **CCI < -100**: Oversold
- **CCI crossing 0**: Potential trend change

