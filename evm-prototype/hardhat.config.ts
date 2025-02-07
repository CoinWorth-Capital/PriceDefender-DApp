import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
  },
};

// Add custom resolver for Uniswap v4 packages
import { resolve } from "path";
import { readdirSync } from "fs";

const nodeModulesPath = resolve(__dirname, "node_modules");

// Helper function to generate remappings
function generateRemappings() {
  return {
    paths: {
      "@uniswap/v4-core/": resolve(nodeModulesPath, "@uniswap/v4-core/"),
      "@uniswap/v4-periphery/": resolve(nodeModulesPath, "@uniswap/v4-periphery/"),
    },
  };
}

// Merge remappings with config
const finalConfig = {
  ...config,
  ...generateRemappings(),
};

export default finalConfig;