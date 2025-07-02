const Cruds = artifacts.require("Cruds");

module.exports = function (deployer) {
   console.log("🔁 Deploying Cruds...");
  deployer.deploy(Cruds);
};
