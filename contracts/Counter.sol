//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

contract Counter {
    uint256 public counter;

    function plusOne() public {
        counter = counter + 1;
    }
}