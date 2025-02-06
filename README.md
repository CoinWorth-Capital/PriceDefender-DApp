# PriceDefender-DApp
App to create automated single-sided liquidity support for ERC-20 tokens via Uniswap v4
Intended for large holders of tokens with between $1M and $500M USD market cap
A modified version can also be built on Solana, using double-sided liquidity "zaps" with small ranges

### Value Proposition
- Makes tokens more attractive investments via support at key prices and healthy recoveries after declines 
- Helps whales to defend key psychological price levels via liquidity automation
- Helps whales acheive healthy recoveries after broader market downturns
- Helps whales purchase quality assets at great prices

### User Pain/Pleasure Points
- Downside volatility is a dramatic risk for medium and long term holders of memecoin assets
- Reducing downside volatility allows for trust and organic growth of their community
- Memecoin treasuries and whales use liquidity provision without strategies that could help achieve stability and growth for their assets
- Accumulating coins via market orders costs the whale in transaction fees, but accumulating via single sided liquidity pays the whale fees
- Coins that recover quickly and healthily from general market downturns become more attractive to investors

### App Example Action Flow
To begin:
- Whale or Treasury deposits stablecoins into PD. This capital is deployed as LP when specific conditions are met.

When market conditions are normal/bullish:
- Memecoin whale who believes in medium/long term price appreciation of that token commits 20% of his USD value in memecoin A via USDC
- If the specific trigger criteria for Price Defender is met (e.g. Hitting 1.1M in market cap, or 5% decline in 6 hours, etc.), Price Defender will open a single-sided liquidity position on Uniswap V3 to support price and accumulate more tokens
- After a set time (e.g. 6 hours ) or all the liquidity provided is consumed, Price Defender will close the LP position and send whale all coin balances

When market conditions are short term corrective/bearish:
- Price Defender detects that an overall market correction is happening, and waits to deploy LP to support price recovery
- Single sided LP is deployed in a large buy range (e.g. 1M - 1.5M on a coin with historically 1-2M market cap)
- This liquidity helps price recover more smoothly and improves coin's attractiveness to investors on screener sites
- After a set time (e.g. 7 days ) or all the liquidity provided is consumed, Price Defender will close the LP position and send whale all coin balances
