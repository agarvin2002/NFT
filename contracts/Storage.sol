//SPDX-License-Identifier:MIT
pragma solidity 0.8.19;

contract Storage{
    uint number;
    function store(uint _number) external{
        number = _number;
    }
    function retrive() external view returns(uint){
        return number;
    }
}