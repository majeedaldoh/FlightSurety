var HDWalletProvider = require("truffle-hdwallet-provider");


module.exports = {
    networks: {

        dev_hd: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "http://127.0.0.1:7545/", 0, 50);
            },
            network_id: '*',
            gas: 4712388,
            gasPrice: 100000000000,
        },

        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: '*',
            gas: 4712388,
            gasPrice: 100000000000,
        },

        truffle_dev: {
            host: "127.0.0.1",
            port: 9545,
            network_id: '*',
            gas: 6721975,
            gasPrice: 20000000000,
        },
        rinkeby: {
            provider: function() {
                return new HDWalletProvider("https://goerli.infura.io/v3/325895f857b74e9db432de518cd2a2d3")
            },
            network_id: '4',
            gas: 4500000,
            gasPrice: 10000000000,
        }
    },
};