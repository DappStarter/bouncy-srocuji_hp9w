require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name rifle situate unaware install fashion equal gasp'; 
let testAccounts = [
"0x509384af6645196ecf729ba7fe595607529820baf5b160027bf4c4c0e724cf6a",
"0xa8f5935efe82ee384452847128b0cb5e73d840a27a0ab97c6c170cbd61009519",
"0xa0100204474a643a1d95a75c842fd3ecf41c6714220959e518d624e6c76cb8ad",
"0x73dadf9880f4a89f0fc44f327dab81ca4bbf2f45b0582b57beb367e67934082d",
"0x8568eeff08c592e7efc87e47d180c115bfad95885330cb8b686ff0e95018b4b0",
"0xd38ff810c49ac78fb03699c394b63e0297550304fba3b99f4cd985cedf532038",
"0xdd82117049e8a10724e6538c1120ef3f514d4561885a9bfa29b1822ec46d08c1",
"0xd3f0499053121b180d0ea73dd6b1f4556420d3fac4c42495ca47f589d384e674",
"0xcaa98ffbf7ba2c2cf915a879cf64d7b147e5b398e4a74333d1eb004faf1ef3f8",
"0x02ad92da67ad45559d32bbe3f6c04e42608bf3be5d95996915f1df9d60301ee7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


