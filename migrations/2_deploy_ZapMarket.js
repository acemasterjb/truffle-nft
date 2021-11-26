const BigNumber = require("bn.js");
var Web3 = require('web3');

const ZapMarket = artifacts.require("ZapMarket");
const ZapToken = artifacts.require("ZapTokenBSC");

module.exports = async function(deployer, network) {
    // Deployed ZapToken on Ethereum Mainnet
    const ethMainAddress = '0x6781a0f84c7e9e846dcb84a9a5bd49333067b104';

    // Deployed ZapToken on Rinkeby
    const rinkebyAddress = '0x5877451904f0484cc49DAFdfb8f9b33C8C31Ee2F';

    // Deployed ZapToken on BSC Testnet
    const bscTestAddress = '0x09d8AF358636D9BCC9a3e177B66EB30381a4b1a8';

    // Deployed ZapToken on BSC Mainnet
    const bscMainAddress = '0xC5326b32E8BaEF125AcD68f8bC646fD646104F1c';

    // Collection name
    const name = 'Zap Collection';

    // Will store the ZapToken address depending on the network
    var tokenAddress = '';

    // Will store the ZapToken address if localhost deployment is detected
    var localhostAddress = '';

    // Will store the symbol depending on the network
    var symbol = '';

    // Will store the contractURI depending on the network
    var contractURI = '';

    // Will store the network name
    var network = '';

    var ZapToken;

    switch (network) {
        // Localhost deployment
        case "development":
            await deployer.deploy(ZapToken);
            zapToken = await ZapToken.deployed();

            tokenAddress = zapToken.address;
            symbol = "ZAPLCL";
            contractURI = 'https://bafybeiev76hwk2gu7xmy5h3dn2f6iquxkhu4dhwpjgmt6ookrn6ykbtfi4.ipfs.dweb.link/'
            dep_network = "Localhost"
            break;

        case "mainnet":
            tokenAddress = ethMainAddress
            symbol = 'ZAP'
            contractURI = 'https://bafybeiev76hwk2gu7xmy5h3dn2f6iquxkhu4dhwpjgmt6ookrn6ykbtfi4.ipfs.dweb.link/mainnet'
            dep_network = "Ethereum Mainnet"
            break;

        // BSC Testnet deployment
        case "testnet":
            tokenAddress = bscTestAddress
            symbol = "ZAPBSC"
            contractURI = 'https://bafybeiev76hwk2gu7xmy5h3dn2f6iquxkhu4dhwpjgmt6ookrn6ykbtfi4.ipfs.dweb.link/bscTest'
            dep_network = "BSC TESTNET"
            break;

        // BSC Mainnet Deployment
        case "bscMainnet":
            tokenAddress = bscMainAddress
            symbol = "ZAP"
            contractURI = 'https://bafybeiev76hwk2gu7xmy5h3dn2f6iquxkhu4dhwpjgmt6ookrn6ykbtfi4.ipfs.dweb.link/bsc'
            dep_network = "BSC MAINNET"
    }

    // Sets the fee at to 5%
    const platformFee = {
        fee: {
            value: new BigNumber('5e+18')
        },
    };

    console.log("\nContracts deploying to: ", dep_network)
    console.log("Deployer address is: ", signers[0].address)
    console.log("With starting balance: ", accounts[0], "\n")
}