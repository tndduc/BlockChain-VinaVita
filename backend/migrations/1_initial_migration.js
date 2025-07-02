const Migrations = artifacts.require("Cruds");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
