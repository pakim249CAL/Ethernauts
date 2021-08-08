# Ethernaut Challenges

I'm just solving ethernaut challenges

1. Clone respository
2. Create .env file and put PRIVATE_KEY=put_key_here (NO QUOTES)
3. npm install hardhat
4. To run any scripts, use npx hardhat run scripts/script.js

Tips:
* The format to call a payable function in the web console is await contract.function({value: payment}). Can be empty for non-payable.
* The format to send a contract ether is await contract.send(number)
* 

Solutions:
0. Tutorial level (Used web console)
1. Simply send some ether via contribute and then send ether to the contract directly to win. (Used web console)
2. The constructor name is slightly different from the contract name. You can simply call this misnamed function to win. (Used web console)
3. Because the random number is based on the current block number, CoinFlipExploiter can simply calculate the random number and call CoinFlip's flip function with the precomputed outcome. Do this ten times to win. (Used remix)
4. The transaction origin is always an EOA account while msg.sender can be the intermediary in a chain of contracts. Just make a contract that calls the telephone contract to win. (Used remix)
5. This is a demonstration of the behavior of numbers in early solidity versions. Just transfer more than 20 tokens from yourself to cause an underflow and bring your token up to near the max amount.
6. Openzeppelin has great documentation on fallback functions. After doing the research, compute web3.utils.sha3() of the data you want to send. In this instance, this is the string "pwn()". This will trigger the delegateCall and call pwn from the Delegate contract with the Delegation storage as the context. Check your gas limit if this isn't working.
