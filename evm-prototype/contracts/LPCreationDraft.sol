// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

import "@uniswap/v3-periphery/contracts/interfaces/INonfungiblePositionManager.sol"; //actually needs v4
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract UniswapV3Liquidity {
    INonfungiblePositionManager public immutable positionManager;
    address public token0; // Example: USDC
    address public token1; // Example: Memecoin

    constructor(address _positionManager, address _token0, address _token1) {
        positionManager = INonfungiblePositionManager(_positionManager);
        token0 = _token0;
        token1 = _token1;
    }

    function createLiquidityPosition(
        uint256 amount0Desired,
        uint256 amount1Desired,
        uint24 fee,
        int24 tickLower,
        int24 tickUpper
    ) external {
        // Step 1: Transfer tokens from user to contract
        IERC20(token0).transferFrom(msg.sender, address(this), amount0Desired);
        IERC20(token1).transferFrom(msg.sender, address(this), amount1Desired);

        // Step 2: Approve the NonfungiblePositionManager to spend tokens
        IERC20(token0).approve(address(positionManager), amount0Desired);
        IERC20(token1).approve(address(positionManager), amount1Desired);

        // Step 3: Define the mint parameters
        INonfungiblePositionManager.MintParams memory params = INonfungiblePositionManager.MintParams({
            token0: token0,
            token1: token1,
            fee: fee,
            tickLower: tickLower,
            tickUpper: tickUpper,
            amount0Desired: amount0Desired,
            amount1Desired: amount1Desired,
            amount0Min: 0, // Set to 0 for now (use slippage protection in production)
            amount1Min: 0, // Set to 0 for now
            recipient: msg.sender,
            deadline: block.timestamp + 600 // 10 min deadline
        });

        // Step 4: Call mint function to create the LP position
        (, , uint256 amount0, uint256 amount1) = positionManager.mint(params);

        // Step 5: Refund any unused tokens
        if (amount0Desired > amount0) {
            IERC20(token0).transfer(msg.sender, amount0Desired - amount0);
        }
        if (amount1Desired > amount1) {
            IERC20(token1).transfer(msg.sender, amount1Desired - amount1);
        }
    }
}
