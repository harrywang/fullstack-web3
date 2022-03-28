require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: process.env.MUMBAI_ALCHEMY_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    polygon: {
      url: process.env.MATIC_ALCHEMY_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};