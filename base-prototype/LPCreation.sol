// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.26;

// Import Uniswap v3 NFP Manager, IERC
import "https://raw.githubusercontent.com/Uniswap/v3-periphery/main/contracts/interfaces/INonfungiblePositionManager.sol";
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/refs/heads/master/contracts/token/ERC721/IERC721.sol";

contract CreateLP {
    INonFungiblePositionManager public immutable positionManager;
    address public token0; // Example: USDC
    address public token1; // Example: BLEP Memecoin 
}