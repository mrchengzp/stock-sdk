# Introduction

Stock SDK is a stock quote SDK designed for frontend and Node.js, providing real-time quotes and K-line data for A-Share, HK, US stocks and mutual funds.

## Features

- 🚀 **Zero Dependencies** - Pure TypeScript implementation, < 20KB minified
- 🌐 **Dual Runtime** - Supports both browser and Node.js 18+
- 📊 **Multi-Market** - A-Share, HK, US stocks and mutual funds
- 📈 **Technical Indicators** - Built-in MA, MACD, BOLL, KDJ, RSI, WR, etc.
- 💰 **Extended Data** - Fund flow, large order ratio, batch queries
- 🔧 **TypeScript** - Complete type definitions, excellent DX

## Why Stock SDK?

Most stock data tools are in the Python ecosystem (like AkShare), which is not convenient for frontend developers. Stock SDK aims to provide:

- Native JavaScript/TypeScript support
- Works directly in browser without backend
- Unified API for multiple markets
- Built-in technical indicator calculations

## Data Source

Stock SDK uses Tencent Finance API (`qt.gtimg.cn`) as the data source, which provides:

- Real-time quotes
- Historical K-line data
- Minute-level data
- Fund flow data

::: warning Disclaimer
This SDK is for learning and research purposes only. Please comply with relevant laws and regulations, and do not use it for commercial purposes.
:::

## Quick Links

- [Installation](/en/guide/installation)
- [Quick Start](/en/guide/getting-started)
- [API Documentation](/en/api/)
- [Online Playground](/en/playground/)

