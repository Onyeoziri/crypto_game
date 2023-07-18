// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NewNFT is ERC721URIStorage, Ownable {
	constructor() ERC721("NewNFT", "NNFT"){}
	function mint(
		address _target,
		uint256 _tokenID,
		string calldata _URI
    )
	external onlyOwner{
        _target = msg.sender;
		_mint(_target, _tokenID);
		_setTokenURI(_tokenID, _URI);
	}
     function transferNFT(address nftContract, uint256 tokenId, address recipient) external {
        require(msg.sender == _owner, "Only the contract owner can call this function");

        IERC721(nftContract).safeTransferFrom(address(this), recipient, tokenId);
    }

    // function onERC721Received(address operator, address from, uint256 tokenId, bytes memory data) external view override returns (bytes4) {
    //     return this.onERC721Received.selector;
    // }

}


