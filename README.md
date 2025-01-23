# PriceDefender-DApp
App to explore automated single-sided liquidity support for ERC-20 tokens via Uniswap API
Intended for large holders of tokens with between $1M and $500M USD market cap

### Problem Statement
- Downside volatility is a dramatic risk for medium and long term holders of memecoin assets
- Reducing downside volatility allows for trust and organic growth of their community
- Memecoin treasuries and whales seem to use liquidity provision without much strategy to achieve stability and growth for their assets
- Accumulating coins via market orders costs the whale in transaction fees, but accumulating via single sided liquidity pays the whale fees

### Prototype Proof-of-Concept
- Memecoin whale who believes in medium/long term price appreciation commits 25% or so of his USD value in memecoin A into this prototype in the form of USDC
- If the specific trigger criteria for Price Defender is met (e.g. 10% decline in 6 hours), Price Defender will open a single-sided liquidity position on Uniswap V3 to support price and accumulate more tokens
- After a set time, or all the liquidity provided is consumed, Price Defender will close the LP position and send whale all coin balances
- Whale can manually refill Price Defender with USDC and optionally update criteria for triggers, and the process can repeat

### Minimal Tech Stack
- A Base L2 Solidity deployment of the core smart contract, which manages deposits, interacts with Uniswap, returns funds to user wallet
- A price oracle to connect to the smart contract, via Chainlink feeds or Uniswap's Subgraph, checks prices
- A basic node.js front end to show balances and activity logs
- An optional backend with TypeScript/Node.ts if required

### Key Questions
- What offerings are currently available for automated liquidity provision?
- How are these protocols used by whales and coin treasuries today?
- What does optimal liquidity provision look like for coins between 1M and 500M USD market cap?
- Does single-sided liquidity provision offer value to these market actors?
- What kind of structure would make them the most comfortable trusting their funds to this project?
- What benefit of this protocol is most exciting for users? Is it adding stability to a coin they like, or accumulating at good prices while being paid fees to do so?
- By adding lending protocol use at the strat, leverage or hedging can be achieved, making this maneuver more profitable if price recovers or closer to delta neutral.

### Risks and Vulnerabilities
- Does this make the whale more vulnerable to rug-pull or large exits by others?
- How can this code be secured appropriately?
- Can this tool, if it becomes mainstream enough, lead to a specific type of price manipulation?
- Why not just use limit orders? Is the added complexity of supplying single-sided LP worth it?

### Similar Services, Automated Liquidity Management
- Goosefx.io/ssl offers "single sided liquidity provision" on Solana, but it's just a market maker effectively that you have to give up 50% of fees to
- Gamma.xyz supports Uniswap and QuickSwap, 50M TVL primarliy on BNB Chain, Arbitrum, and Polygon. They offer enterprise strategy consulting, their apps aim to maximize profitability and minimize impermanent loss. Only offer double-sided liquidity provision.
- Revert.finance supports 1M TVL primarily on Uniswap, Sushiswap, Pancakeswap, allows for collateralizing LP positions, automatically moving LP to be in a tight range, provides a feature called auto-exit, allows for backtesting LP positions. Revert has a great UI but still only allows for double sided liquidity provision. Additionally, their concentrated auto adjustments will result in impermanent losses.

### Similar Services, Position Automation Tools
- Gelato.network/web3-functions offers triggers for automation with smart contracts, EVM only
- Arrakis offers automatic rebalancing for V3 liquidity provision

### Tools For Building This
- Uniswap V4 Hooks?
- Uniswap’s SDK: Use @uniswap/v3-sdk for advanced liquidity management
- Base <> Chainlink Integration: https://docs.base.org/tutorials/oracles-chainlink-price-feeds/
- On Solana: Orca's pools feature allows for concentrated liquidity, but it's still double sided. Same thing for Crema Finance and Raydium.
- Alchemy Webhooks: Set up real-time notifications for liquidity changes
- Third-Party Libraries: Platforms like Gelato automate liquidity operations on Uniswap
