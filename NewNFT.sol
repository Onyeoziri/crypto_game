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
}


