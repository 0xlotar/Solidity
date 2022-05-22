// SPDX-License-Identifier: BSD0
pragma solidity ^0.8.4;

contract Keyboards {
  string[] public createdKeyboards;

  function getKeyboards() view public returns(string[] memory) {
    return createdKeyboards;
  }
  function create(string calldata _description) external{
      createdKeyboards.push(_description);
  }

}
