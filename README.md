# Coin Degen - Crypto Portfolio & News Tracker

A modern cryptocurrency tracking platform built with Turborepo and Bun, featuring web, mobile, and API services.

## Overview

Coin Degen helps you track your crypto portfolios, monitor market trends, and stay updated with the latest crypto news. Built using modern technologies and real-time data from CoinGecko.

## Tech Stack

- **Runtime:** Bun
- **Monorepo:** Turborepo
- **Data Source:** CoinGecko API
- **Apps:**
  - `web`: Next.js
  - `mobile`: React Native Expo
  - `api`: Elysia.js

## Features

- 📊 Real-time cryptocurrency price tracking
- 💼 Multiple portfolio management
- 📱 Cross-platform support (Web & Mobile)
- 📰 Crypto news aggregation
- 📈 Market analysis tools
- 🔄 Real-time data synchronization

## Getting Started

1. Install dependencies:
```sh
bun install
```

2. Start development servers:
```sh
bun dev
```

## Project Structure

```
apps/
  ├── web/          # Next.js web application
  ├── mobile/       # React Native mobile app
  ├── api/          # Elysia.js backend service
```

## Development

Each app can be developed independently:

- Web App: `bun dev --filter web`
- Mobile App: `bun dev --filter mobile`
- API Server: `bun dev --filter api`

## Building

Build all applications:

```sh
bun run build
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT

## Acknowledgments

- Built with [Turborepo](https://turbo.build)
- Powered by [Bun](https://bun.sh)
- Market data by [CoinGecko](https://www.coingecko.com)
