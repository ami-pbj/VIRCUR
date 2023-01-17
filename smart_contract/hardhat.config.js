require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/OvioniI6b_esv1ojXUzIpmh-8-xPNCFD',
      accounts: ['db94d541be5faef1d41a507815050ab40e78d881d644d40dd663615deb35ab4f']
    }
  }
};
