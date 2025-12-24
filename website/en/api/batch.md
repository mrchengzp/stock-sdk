# Batch Query

Efficiently fetch large amounts of stock data.

## getAllAShareQuotes

Get all A-Share real-time quotes.

```typescript
const quotes = await sdk.getAllAShareQuotes({
  batchSize: 500,
  concurrency: 5,
  onProgress: (completed, total) => {
    console.log(`Progress: ${completed}/${total}`);
  },
});
```

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| batchSize | `number` | 500 | Codes per request |
| concurrency | `number` | 7 | Parallel requests |
| onProgress | `function` | - | Progress callback |

## getAllHKShareQuotes

Get all HK stock quotes.

```typescript
const quotes = await sdk.getAllHKShareQuotes({
  concurrency: 5,
  onProgress: (c, t) => console.log(`${c}/${t}`),
});
```

## getAllUSShareQuotes

Get all US stock quotes.

```typescript
const quotes = await sdk.getAllUSShareQuotes({
  concurrency: 5,
  onProgress: (c, t) => console.log(`${c}/${t}`),
});
```

## getAllQuotesByCodes

Get quotes for specific code list.

```typescript
const codes = ['sh600000', 'sz000001', 'sh600519', ...];

const quotes = await sdk.getAllQuotesByCodes(codes, {
  batchSize: 100,
  concurrency: 3,
});
```

## batchRaw

Low-level batch query for mixed data types.

```typescript
const result = await sdk.batchRaw([
  'r_sz000858',  // Real-time quote
  'r_sh600519',  // Real-time quote
]);
```

## Performance Tips

1. **Adjust concurrency based on network**
   - Low latency: Use higher concurrency (7-10)
   - High latency: Use lower concurrency (3-5)

2. **Use progress callbacks for UI feedback**
   ```typescript
   onProgress: (completed, total) => {
     updateProgressBar(completed / total * 100);
   }
   ```

3. **Handle errors gracefully**
   ```typescript
   try {
     const quotes = await sdk.getAllAShareQuotes();
   } catch (error) {
     // Implement retry or fallback
   }
   ```

