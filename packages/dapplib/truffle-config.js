require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan random place artwork grid gloom slot genuine'; 
let testAccounts = [
"0xc907e37604e1385d5b155d1156ced12bdb28441ed551bff2eec1b44c126bedf8",
"0x68ed49a985ffae1f7d3c9b2c84dcdace8929ff91dd21ede01ab022e4b37cdc9d",
"0x3a34805c877eb35850a2adab3218023506ce3c6643463ab5ca8739fb1555f798",
"0xa7eac460a5d998f0675c414fc92a3e7ccda362814aef6bbdb99d749d51c77017",
"0xc8e110446b59d1a40c4657058be495102367ec536a54a59c32efc15e40a5e024",
"0x7869bc98593f1c9c253cb0d9d1cb232d10049defbe3d4e5d6e7bd0d2f10e0182",
"0x56a6d6d02d790a70a6580df644db75c386d7ffa36131d14dfb622fd6f48e0560",
"0x5e2becf7d7beb45fcdbbb1687a89c82eee7f087dc86e97f819a154eb47158776",
"0x468d587347317ce5c664399995c0c941bafa4276bfd94d561e0a32fa658ec0d8",
"0x9628abfa689fdf3ae6b831df21aae09654f1259c9ace072199871940e32583a1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

