require('dotenv').config()

var HDWalletProvider = require("@truffle/hdwallet-provider");
var Web3 = require('web3');

const MNEMONIC = process.env.MNEMONIC
const PRIVATE_KEYS = process.env.PRIVATE_KEYS.split(",")


const provider = new HDWalletProvider({
    mnemonic: MNEMONIC,
    privateKeys: PRIVATE_KEYS == [] ? null : PRIVATE_KEYS,
    providerOrUrl: "http://127.0.0.1:8545",
    // providerOrUrl: "https://data-seed-prebsc-2-s2.binance.org:8545/",
  })
const web3 = new Web3(provider)

async function main () {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts)
    console.log(web3.utils.fromWei(await web3.eth.getBalance(accounts[0])))
}

main()
    .then(() =>
        process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });