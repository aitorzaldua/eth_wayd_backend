// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract HiTellMe {
    //State variables
    uint TotalHis = 0;

    //Inizialized
    constructor() {
        console.log ("Hi mate, how are you doing? I am: %s", msg.sender);
    }

    //Functions
    function sayHi() public {
        TotalHis += 1;
        console.log ("I am happy! I am: %s", msg.sender);

    }

    function sumHis() public view returns (uint256) {
        console.log ("%s people said hi to me", TotalHis);
        return TotalHis;

    }
}
