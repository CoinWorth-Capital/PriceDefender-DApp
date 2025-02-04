// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.26;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint amount) external returns (bool);
    function transfer(address recipient, uint amount) external returns (bool);
}

contract ValueLock {

    IERC20 public immutable usdc;

    mapping(address => uint) public balances;

    error InvalidAddress(string message);
    error InvalidAmount(string message);
    error TransferFailed();
    error InsufficientBalance();

    //events for logging
    event Deposited(address indexed user, uint amount);
    event Withdrawn(address indexed user, uint amount);

    constructor(address _usdc) {
        if (_usdc == address(0)) { revert InvalidAddress("Invalid USDC address"); }
        usdc = IERC20(_usdc);
    }

    function deposit(uint amount) external {
        if (amount <= 0) { revert InvalidAmount("Deposit must be greater than zero"); }

        bool success = usdc.transferFrom(msg.sender, address(this), amount);
        if (success == false) { revert TransferFailed(); }

        balances[msg.sender] += amount;
        emit Deposited(msg.sender, amount);
    }

    function withdraw(uint amount) external {
        if (amount <= 0) { revert InvalidAmount("Withdrawal must be greater than zero"); }
        if (amount > balances[msg.sender]) { revert InsufficientBalance(); }

        balances[msg.sender] -= amount;

        bool success = usdc.transfer(msg.sender, amount);
        if (success == false) { revert TransferFailed(); }
        
        emit Withdrawn(msg.sender, amount);
    }
}