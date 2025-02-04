# PriceDefender-DApp: Solana Implementation
App to explore automated concentrated liquidity support SPL tokens via Orca API
Intended for large holders of tokens with between $1M and $500M USD market cap

### Minimal Tech Stack
- A Solana smart contract (Rust/Anchor), which manages deposits, interacts with Orca Whirlpools for LP, and returns funds to user wallet
- A price oracle connecting the smart contract via Pyth Network or Switchboard for real-time price updates
- A basic web front end (React/TypeScript) for deposits, withdrawals, balance display, and liquidity actions taken
- (An optional backend with TypeScript/Node.js if required for additional automation)