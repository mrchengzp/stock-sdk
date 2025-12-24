# Technical Indicators

Get K-line data with built-in technical indicator calculations.

## getKlineWithIndicators

One-stop API to get K-line with multiple indicators.

```typescript
const data = await sdk.getKlineWithIndicators('sz000858', {
  period: 'daily',
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

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| code | `string` | Yes | Stock code |
| options.period | `'daily' \| 'weekly' \| 'monthly'` | No | K-line period |
| options.startDate | `string` | No | Start date |
| options.endDate | `string` | No | End date |
| options.adjust | `'' \| 'qfq' \| 'hfq'` | No | Price adjustment |
| options.indicators | `IndicatorConfig` | No | Indicators to calculate |

### Indicator Configuration

```typescript
interface IndicatorConfig {
  ma?: { periods: number[] };      // Moving Average
  macd?: boolean;                   // MACD
  boll?: boolean;                   // Bollinger Bands
  kdj?: boolean;                    // KDJ
  rsi?: { periods: number[] };     // RSI
  wr?: boolean;                     // Williams %R
  bias?: { periods: number[] };    // BIAS
  cci?: boolean;                    // CCI
  atr?: boolean;                    // ATR
}
```

### Return Type

Each K-line record includes indicator values:

```typescript
interface KlineWithIndicators extends KlineData {
  ma?: {
    ma5?: number;
    ma10?: number;
    ma20?: number;
    ma60?: number;
    // ... dynamic based on periods
  };
  macd?: {
    dif: number;
    dea: number;
    macd: number;
  };
  boll?: {
    upper: number;
    mid: number;
    lower: number;
  };
  kdj?: {
    k: number;
    d: number;
    j: number;
  };
  rsi?: {
    rsi6?: number;
    rsi12?: number;
    rsi24?: number;
  };
  wr?: {
    wr6: number;
    wr10: number;
  };
  bias?: {
    bias6?: number;
    bias12?: number;
    bias24?: number;
  };
  cci?: {
    cci: number;
  };
  atr?: {
    atr: number;
  };
}
```

## Example

```typescript
import { StockSDK } from 'stock-sdk';

const sdk = new StockSDK();

const data = await sdk.getKlineWithIndicators('sz000858', {
  startDate: '20240101',
  indicators: {
    ma: { periods: [5, 10, 20] },
    macd: true,
    boll: true,
  }
});

data.forEach(k => {
  console.log(`${k.date}: Close ${k.close}`);
  console.log(`  MA: 5=${k.ma?.ma5}, 10=${k.ma?.ma10}, 20=${k.ma?.ma20}`);
  console.log(`  MACD: DIF=${k.macd?.dif}, DEA=${k.macd?.dea}`);
  console.log(`  BOLL: Upper=${k.boll?.upper}, Mid=${k.boll?.mid}`);
});
```

