const HelloNFTContract = artifacts.require("HelloNFTContract");

module.exports = function (deployer) {
  deployer.deploy(HelloNFTContract);
};
