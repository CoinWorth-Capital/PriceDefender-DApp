// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC721Enumerable {
    // Returns the total amount of tokens stored by the contract
    function totalSupply() external view returns (uint256);

    // Returns a token ID owned by `owner` at a given `index` of its token list
    function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256);

    // Returns a token ID at a given `index` of all the tokens stored by the contract
    function tokenByIndex(uint256 index) external view returns (uint256);

    // Returns the number of tokens in `owner`'s account
    function balanceOf(address owner) external view returns (uint256);

    // Returns the owner of the `tokenId` token
    function ownerOf(uint256 tokenId) external view returns (address);

    // Safely transfers `tokenId` token from `from` to `to`
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;

    // Safely transfers `tokenId` token from `from` to `to`
    function safeTransferFrom(address from, address to, uint256 tokenId) external;

    // Transfers `tokenId` token from `from` to `to`
    function transferFrom(address from, address to, uint256 tokenId) external;

    // Gives permission to `to` to transfer `tokenId` token to another account
    function approve(address to, uint256 tokenId) external;

    // Returns the account approved for `tokenId` token
    function getApproved(uint256 tokenId) external view returns (address);

    // Approve or remove `operator` as an operator for the caller
    function setApprovalForAll(address operator, bool approved) external;

    // Returns if the `operator` is allowed to manage all of the assets of `owner`
    function isApprovedForAll(address owner, address operator) external view returns (bool);
}