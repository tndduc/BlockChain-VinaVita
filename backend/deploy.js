const fs = require('fs');
const {Web3} = require('web3');



const abi = JSON.parse(fs.readFileSync("D:/Project/Blockchain-based-healthcare-data-system-with-disease-prediction-main/backend/contracts/Cruds.abi"));
const bytecode = fs.readFileSync("D:/Project/Blockchain-based-healthcare-data-system-with-disease-prediction-main/backend/contracts/Cruds.bin").toString();

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));

async function deploy() {
    // const w3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(abi);
    contract = contract.deploy({data: bytecode});

    const deployContract = await contract.send({
        from: "0x800A57649c6B0Fd25d6031F3d0d3Ef701425ec6f",
        gas: "6721975",
    })
    console.log(deployContract.options.address);
}

deploy();
