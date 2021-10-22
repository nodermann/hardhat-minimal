require("@nomiclabs/hardhat-truffle5");

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      hardfork: "london",
      accounts: {
        count: 20
      },
      mining: {
        auto: false,
        interval: 1000
      },
    },
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  }
};