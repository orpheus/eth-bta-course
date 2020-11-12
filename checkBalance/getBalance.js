let infuraProjectId = "ed1b1ce69942434f8734d5b37594c1ff";
let metamaskWallet = "0x23977e8d19E101375c23C7d26B04E9D1f94f8F1d";

let Web3 = require("web3");

let web3 = new Web3(new Web3.providers.HttpProvider(`https://ropsten.infura.io/v3/${infuraProjectId}`))

web3.eth.getBalance(metamaskWallet).then(balance => console.log(`Balance: ${balance}`));


