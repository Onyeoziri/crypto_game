// SPDX-License-Identifier: UNLICENSED
//Jin Chen
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/utils/Address.sol";

contract NFTTransferContract is IERC721Receiver {
    using Address for address;

    address private _owner;

    constructor() {
        _owner = msg.sender;
    }

    function transferNFT(address nftContract, uint256 tokenId, address recipient) external {
        require(msg.sender == _owner, "Only the contract owner can call this function");

        IERC721(nftContract).safeTransferFrom(address(this), recipient, tokenId);
    }

    function mintNFT(address nftContract, address recipient, uint256 tokenId) external {
        require(msg.sender == _owner, "Only the contract owner can call this function");

        IERC721(nftContract).safeTransferFrom(msg.sender, recipient, tokenId);
    }

    function onERC721Received(address operator, address from, uint256 tokenId, bytes memory data) external view override returns (bytes4) {
        return this.onERC721Received.selector;
    }
}