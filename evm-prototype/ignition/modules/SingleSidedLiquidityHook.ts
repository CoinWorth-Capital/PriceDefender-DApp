import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("SingleSidedLiquidityHookModule", (m) => {
  // Define contract parameters
  const POOL_MANAGER_ADDRESS = "0x..."; // Replace with actual Pool Manager address for your target network

  // Deploy the SingleSidedLiquidityHook contract
  const singleSidedLiquidityHook = m.contract("SingleSidedLiquidityHook", [
    POOL_MANAGER_ADDRESS,
  ]);

  // Additional setup after deployment if needed
  m.afterDeploy(async (DeploymentState: { artifacts: { requireContract: (arg0: string) => any; }; }) => {
    const hookContract = await DeploymentState.artifacts.requireContract(
      "SingleSidedLiquidityHook"
    );

    // Log deployment information
    console.log("Hook deployed to:", hookContract.address);
    console.log("Pool Manager Address:", POOL_MANAGER_ADDRESS);
    console.log("USDC Address:", await hookContract.USDC());
    console.log("WETH Address:", await hookContract.WETH());
    console.log("Pool Fee:", await hookContract.POOL_FEE());
  });

  // Return the deployed contract for further use
  return { singleSidedLiquidityHook };
});