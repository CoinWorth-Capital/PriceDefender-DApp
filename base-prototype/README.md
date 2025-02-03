# PriceDefender-DApp: Ethereum/Base Implementation
App to explore automated single-sided liquidity support for ERC-20 tokens via Uniswap API
Intended for large holders of tokens with between $1M and $500M USD market cap

### Minimal Tech Stack
- A Base L2 Solidity deployment of the core smart contract, which manages deposits, interacts with Uniswap, returns funds to user wallet
- A price oracle to connect to the smart contract, via Chainlink feeds or Uniswap's Subgraph, checks prices
- A basic node.js front end to deposit funds, and show balances/activity
- (An optional backend with TypeScript/Node.ts if required)