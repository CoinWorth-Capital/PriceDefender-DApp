# PriceDefender-DApp: Ethereum/Base Implementation
App to explore automated single-sided liquidity support for ERC-20 tokens via Uniswap API
Intended for large holders of tokens with between $1M and $500M USD market cap

### Minimal Tech Stack
- A Solidity smart contract deployed on Base L2 or Ethereum which manages deposits, interacts with Uniswap v3, and returns funds to user wallet
- A price oracle to connect via Chainlink feeds or Uniswap's Subgraph, checks real-time prices
- A basic front end (React/TypeScript) to manage deposits/withdrawals, display balances and liquidity actions taken
- (An optional backend with TypeScript/Node.js if required for additional automation)

### Running in Remix
- Must deploy USDC at address 0x0924225A898f369B79B57364Ed75b529A630A96d as IERC
- Must approve ValueLock deployed at its address
- You can now interact with ValueLock

### Next Step
Focus on coding and testing the Solidity smart contracts that:

- Manages deposits/withdrawals
- Interacts with Uniswap v3 to manage liquidity positions
- Integrates with price oracles (using Chainlink or Uniswap Subgraph)


