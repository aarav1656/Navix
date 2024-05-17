const { NAVISDKClient } = require("navi-sdk");
const {Sui, NAVX, vSui, USDT, USDC, WETH, CETUS, haSui} = require('navi-sdk/dist/address');
// const { USDC } = require('navi-sdk/dist/address');
console.log(NAVISDKClient);
const mnemonic = 'muscle trial enter damage sign day keep verify kite explain spread gap'; // Use an existing mnemonic or leave empty to generate a new one
const client = new NAVISDKClient({mnemonic, networkType: "testnet", numberOfAccounts: 2}); 

const account = client.accounts[0];
const account1 = client.accounts[1];

// console.log(account)
// console.log(account1)

client.getMnemonic();
client.mnemonic;
account.getAllCoins() 

//Get all objs for this type of token
account.getCoins(coinType = "0x2::sui::SUI")
account.getCoins(coinType = Sui)


client.getAllAccounts()
account.createAccountCap() 

account1.getPublicKey() //or
account1.address

const balanceMap = account.getWalletBalance()
balanceMap.then((res) => {
    console.log(res);
})

account.getNAVIPortfolio()
client.getPoolInfo(USDC)

account.getHealthFactor() //Return this account's health factor
client.getHealthFactor("0x93dac356b52c70c3ca9a46af85fbbbe8755942f6fc01ecef86ec5bf9a286fc24"); //You may check any address

account.depositToNavi(Sui, amount)
account.depositToNaviWithAccountCap(NAVX, amount， accountCap_Address_that_you_own)


account.withdraw(coinType = NAVX, amount)
account.withdrawWithAccountCap(coinType = NAVX, amount, accountCap_Address_that_you_own)

account.borrow(coinType = NAVX, amount)
account.repay(coinType = NAVX, amount)

account.claimAllRewards();

const debt_coin: CoinInfo = USDC; 
const to_liquidate_address = 'address_to_liquidate'; // Specifies the blockchain address of the account to be liquidated.
const collateral_coin: CoinInfo = Sui; // Designates Sui as the collateral coin. Note: 'collateral_coin' should not be the same as 'to_pay_coin'.
// End of Initialization Zone

//Option1 - Liquidate with all debt_coin, will return the rest
account.liquidate(debt_coin, to_liquidate_address, collateral_coin);

//Option2 - Liquidate with specific amount
let to_liquidate_amount = 10; //Number of coin that can be used for liquidation, no decimals required.
account.liquidate(debt_coin, to_liquidate_address, collateral_coin, to_liquidate_amount); //Liquidate with 10 USDC.
