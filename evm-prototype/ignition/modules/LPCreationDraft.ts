import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const positionManagerAddress= "0x0924225A898f369B79B57364Ed75b529A630A96d";
const token0Address= "0x036CbD53842c5426634e7929541eC2318f3dCF7e"; //USDC Base Mainnet
const token1Address= "0xc438b0c0e80a8fa1b36898d1b36a3fc2ec371c54"; //BLEP Super Meme

const LPCreationDraft = buildModule("LPCreationDraft", (m) => {
  // Define module inputs. You'll need to fill these with specific values later.
  const positionManagerAddress = m.getParameter("positionManagerAddress");
  const token0Address = m.getParameter("token0Address");
  const token1Address = m.getParameter("token1Address");

  // Deploy the contract
  const uniswapV3Liquidity = m.contract("UniswapV3Liquidity", [
    positionManagerAddress,
    token0Address,
    token1Address,
  ]);

  // You can add more actions here, like calling functions after deployment if needed
  // For example, if you wanted to call a function after deployment:
  // m.call(uniswapV3Liquidity, "createLiquidityPosition", [/* arguments */]);

  return { uniswapV3Liquidity };
});

export default LPCreationDraft;