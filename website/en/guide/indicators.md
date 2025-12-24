# Technical Indicators

Stock SDK provides built-in technical indicator calculations.

## Using getKlineWithIndicators

The easiest way to get K-line data with indicators:

```typescript
const data = await sdk.getKlineWithIndicators('sz000858', {
  startDate: '20240101',
  endDate: '20241231',
  indicators: {
    ma: { periods: [5, 10, 20, 60] },
    macd: true,
    boll: true,
    kdj: true,
    rsi: { periods: [6, 12, 24] },
    wr: true,
    bias: { periods: [6, 12, 24] },
    cci: true,
    atr: true,
  }
});
```

## Available Indicators

### MA (Moving Average)

```typescript
// In getKlineWithIndicators
indicators: {
  ma: { periods: [5, 10, 20, 60] }
}

// Result
data[0].ma?.ma5   // 5-period MA
data[0].ma?.ma10  // 10-period MA
data[0].ma?.ma20  // 20-period MA
data[0].ma?.ma60  // 60-period MA
```

### MACD

```typescript
indicators: { macd: true }

// Result
data[0].macd?.dif   // DIF line
data[0].macd?.dea   // DEA line (Signal)
data[0].macd?.macd  // MACD histogram
```

### BOLL (Bollinger Bands)

```typescript
indicators: { boll: true }

// Result
data[0].boll?.upper  // Upper band
data[0].boll?.mid    // Middle band
data[0].boll?.lower  // Lower band
```

### KDJ

```typescript
indicators: { kdj: true }

// Result
data[0].kdj?.k  // K line
data[0].kdj?.d  // D line
data[0].kdj?.j  // J line
```

### RSI (Relative Strength Index)

```typescript
indicators: { rsi: { periods: [6, 12, 24] } }

// Result
data[0].rsi?.rsi6   // 6-period RSI
data[0].rsi?.rsi12  // 12-period RSI
data[0].rsi?.rsi24  // 24-period RSI
```

### WR (Williams %R)

```typescript
indicators: { wr: true }

// Result
data[0].wr?.wr6   // 6-period WR
data[0].wr?.wr10  // 10-period WR
```

### BIAS

```typescript
indicators: { bias: { periods: [6, 12, 24] } }

// Result
data[0].bias?.bias6   // 6-period BIAS
data[0].bias?.bias12  // 12-period BIAS
data[0].bias?.bias24  // 24-period BIAS
```

### CCI (Commodity Channel Index)

```typescript
indicators: { cci: true }

// Result
data[0].cci?.cci  // CCI value
```

### ATR (Average True Range)

```typescript
indicators: { atr: true }

// Result
data[0].atr?.atr  // ATR value
```

## Manual Calculation

You can also calculate indicators manually using the calculation functions:

```typescript
import { calcMA, calcMACD, calcBOLL, calcKDJ, calcRSI } from 'stock-sdk';

// Get K-line first
const klines = await sdk.getHistoryKline('sz000858');

// Calculate MA
const closes = klines.map(k => k.close);
const ma5 = calcMA(closes, 5);

// Calculate MACD
const macdResult = calcMACD(closes);
// macdResult = { dif: number[], dea: number[], macd: number[] }

// Calculate BOLL
const bollResult = calcBOLL(closes);
// bollResult = { upper: number[], mid: number[], lower: number[] }

// Calculate KDJ
const highs = klines.map(k => k.high);
const lows = klines.map(k => k.low);
const kdjResult = calcKDJ(highs, lows, closes);
// kdjResult = { k: number[], d: number[], j: number[] }
```

## Next Steps

- [API Documentation](/en/api/indicators) for detailed indicator API
- [Batch Query](/en/guide/batch) for large-scale data fetching

