import { ethers } from "ethers";
import NonfungiblePositionManagerABI from "./NonfungiblePositionManagerABI.json"; // Import the ABI for NonfungiblePositionManager
import { parseUnits } from "ethers/lib/utils";

const INFURA_URL = "<YOUR_INFURA_OR_ALCHEMY_RPC_URL>";
const PRIVATE_KEY = "<YOUR_PRIVATE_KEY>";

// Uniswap v3 Nonfungible Position Manager contract address
const POSITION_MANAGER_ADDRESS = "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";

// Token addresses for the pair (example: WETH/USDC)
const TOKEN_0_ADDRESS = "0xC02aaA39b223FE8D0A0E5C4F27eAD9083C756Cc2"; // WETH
const TOKEN_1_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"; // USDC

// Initialize the provider and wallet
const provider = new ethers.providers.JsonRpcProvider(INFURA_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Instantiate the Nonfungible Position Manager contract
const positionManager = new ethers.Contract(
  POSITION_MANAGER_ADDRESS,
  NonfungiblePositionManagerABI,
  wallet
);

async function addLiquidity() {
  // Approve tokens for the position manager to spend
  const amount0 = parseUnits("1", 18); // 1 WETH
  const amount1 = parseUnits("2000", 6); // 2000 USDC

  // Approvals (example assumes standard ERC-20 tokens)
  const token0 = new ethers.Contract(TOKEN_0_ADDRESS, ["function approve(address spender, uint256 amount) public"], wallet);
  const token1 = new ethers.Contract(TOKEN_1_ADDRESS, ["function approve(address spender, uint256 amount) public"], wallet);

  console.log("Approving token0...");
  await token0.approve(POSITION_MANAGER_ADDRESS, amount0);
  console.log("Approving token1...");
  await token1.approve(POSITION_MANAGER_ADDRESS, amount1);

  // Mint a new position
  console.log("Adding liquidity...");
  const tx = await positionManager.mint({
    token0: TOKEN_0_ADDRESS,
    token1: TOKEN_1_ADDRESS,
    fee: 3000, // 0.3% fee tier
    tickLower: -887272, // Adjust this range as needed
    tickUpper: 887272,  // Adjust this range as needed
    amount0Desired: amount0,
    amount1Desired: amount1,
    amount0Min: 0,
    amount1Min: 0,
    recipient: wallet.address,
    deadline: Math.floor(Date.now() / 1000) + 60 * 20, // 20 minutes from now
  });

  console.log("Transaction sent. Waiting for confirmation...");
  await tx.wait();
  console.log("Liquidity position created successfully!");
}

// Execute the function
addLiquidity().catch((error) => {
  console.error("Error adding liquidity:", error);
});
