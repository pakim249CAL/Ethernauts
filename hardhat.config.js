require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-truffle5");
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/6adOn8fQFLYEk7XrpUHgQ2gaBGiB3Sv7",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  solidity:  {
    compilers: [
      {
        version: "0.6.0",
      },
      {
        version: "0.8.0",
        settings: {},
      },
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};
