"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseWrapperTokenSecurityResult = void 0;
var _ApiClient = require("../ApiClient");
var _ResponseWrapperTokenSecurityDex = require("./ResponseWrapperTokenSecurityDex");
var _ResponseWrapperTokenSecurityLpHolders = require("./ResponseWrapperTokenSecurityLpHolders");
/*
 * GoPlus Security API Document
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */

/**
 * The ResponseWrapperTokenSecurityResult model module.
 * @module model/ResponseWrapperTokenSecurityResult
 * @version 1.0
 */
class ResponseWrapperTokenSecurityResult {
  /**
   * Constructs a new <code>ResponseWrapperTokenSecurityResult</code>.
   * key is contract address
   * @alias module:model/ResponseWrapperTokenSecurityResult
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>ResponseWrapperTokenSecurityResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperTokenSecurityResult} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperTokenSecurityResult} The populated <code>ResponseWrapperTokenSecurityResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperTokenSecurityResult();
      if (data.hasOwnProperty('note')) obj.note = _ApiClient.ApiClient.convertToType(data['note'], 'String');
      if (data.hasOwnProperty('lp_total_supply')) obj.lp_total_supply = _ApiClient.ApiClient.convertToType(data['lp_total_supply'], 'String');
      if (data.hasOwnProperty('lp_holders')) obj.lp_holders = _ApiClient.ApiClient.convertToType(data['lp_holders'], [_ResponseWrapperTokenSecurityLpHolders.ResponseWrapperTokenSecurityLpHolders]);
      if (data.hasOwnProperty('is_airdrop_scam')) obj.is_airdrop_scam = _ApiClient.ApiClient.convertToType(data['is_airdrop_scam'], 'String');
      if (data.hasOwnProperty('other_potential_risks')) obj.other_potential_risks = _ApiClient.ApiClient.convertToType(data['other_potential_risks'], 'String');
      if (data.hasOwnProperty('transfer_pausable')) obj.transfer_pausable = _ApiClient.ApiClient.convertToType(data['transfer_pausable'], 'String');
      if (data.hasOwnProperty('trading_cooldown')) obj.trading_cooldown = _ApiClient.ApiClient.convertToType(data['trading_cooldown'], 'String');
      if (data.hasOwnProperty('hidden_owner')) obj.hidden_owner = _ApiClient.ApiClient.convertToType(data['hidden_owner'], 'String');
      if (data.hasOwnProperty('selfdestruct')) obj.selfdestruct = _ApiClient.ApiClient.convertToType(data['selfdestruct'], 'String');
      if (data.hasOwnProperty('owner_percent')) obj.owner_percent = _ApiClient.ApiClient.convertToType(data['owner_percent'], 'String');
      if (data.hasOwnProperty('is_whitelisted')) obj.is_whitelisted = _ApiClient.ApiClient.convertToType(data['is_whitelisted'], 'String');
      if (data.hasOwnProperty('holder_count')) obj.holder_count = _ApiClient.ApiClient.convertToType(data['holder_count'], 'String');
      if (data.hasOwnProperty('trust_list')) obj.trust_list = _ApiClient.ApiClient.convertToType(data['trust_list'], 'String');
      if (data.hasOwnProperty('is_honeypot')) obj.is_honeypot = _ApiClient.ApiClient.convertToType(data['is_honeypot'], 'String');
      if (data.hasOwnProperty('holders')) obj.holders = _ApiClient.ApiClient.convertToType(data['holders'], [_ResponseWrapperTokenSecurityLpHolders.ResponseWrapperTokenSecurityLpHolders]);
      if (data.hasOwnProperty('dex')) obj.dex = _ApiClient.ApiClient.convertToType(data['dex'], [_ResponseWrapperTokenSecurityDex.ResponseWrapperTokenSecurityDex]);
      if (data.hasOwnProperty('is_open_source')) obj.is_open_source = _ApiClient.ApiClient.convertToType(data['is_open_source'], 'String');
      if (data.hasOwnProperty('sell_tax')) obj.sell_tax = _ApiClient.ApiClient.convertToType(data['sell_tax'], 'String');
      if (data.hasOwnProperty('token_name')) obj.token_name = _ApiClient.ApiClient.convertToType(data['token_name'], 'String');
      if (data.hasOwnProperty('creator_address')) obj.creator_address = _ApiClient.ApiClient.convertToType(data['creator_address'], 'String');
      if (data.hasOwnProperty('creator_percent')) obj.creator_percent = _ApiClient.ApiClient.convertToType(data['creator_percent'], 'String');
      if (data.hasOwnProperty('is_proxy')) obj.is_proxy = _ApiClient.ApiClient.convertToType(data['is_proxy'], 'String');
      if (data.hasOwnProperty('creator_balance')) obj.creator_balance = _ApiClient.ApiClient.convertToType(data['creator_balance'], 'String');
      if (data.hasOwnProperty('is_in_dex')) obj.is_in_dex = _ApiClient.ApiClient.convertToType(data['is_in_dex'], 'String');
      if (data.hasOwnProperty('owner_balance')) obj.owner_balance = _ApiClient.ApiClient.convertToType(data['owner_balance'], 'String');
      if (data.hasOwnProperty('total_supply')) obj.total_supply = _ApiClient.ApiClient.convertToType(data['total_supply'], 'String');
      if (data.hasOwnProperty('is_true_token')) obj.is_true_token = _ApiClient.ApiClient.convertToType(data['is_true_token'], 'String');
      if (data.hasOwnProperty('can_take_back_ownership')) obj.can_take_back_ownership = _ApiClient.ApiClient.convertToType(data['can_take_back_ownership'], 'String');
      if (data.hasOwnProperty('is_blacklisted')) obj.is_blacklisted = _ApiClient.ApiClient.convertToType(data['is_blacklisted'], 'String');
      if (data.hasOwnProperty('owner_address')) obj.owner_address = _ApiClient.ApiClient.convertToType(data['owner_address'], 'String');
      if (data.hasOwnProperty('slippage_modifiable')) obj.slippage_modifiable = _ApiClient.ApiClient.convertToType(data['slippage_modifiable'], 'String');
      if (data.hasOwnProperty('buy_tax')) obj.buy_tax = _ApiClient.ApiClient.convertToType(data['buy_tax'], 'String');
      if (data.hasOwnProperty('external_call')) obj.external_call = _ApiClient.ApiClient.convertToType(data['external_call'], 'String');
      if (data.hasOwnProperty('cannot_sell_all')) obj.cannot_sell_all = _ApiClient.ApiClient.convertToType(data['cannot_sell_all'], 'String');
      if (data.hasOwnProperty('lp_holder_count')) obj.lp_holder_count = _ApiClient.ApiClient.convertToType(data['lp_holder_count'], 'String');
      if (data.hasOwnProperty('personal_slippage_modifiable')) obj.personal_slippage_modifiable = _ApiClient.ApiClient.convertToType(data['personal_slippage_modifiable'], 'String');
      if (data.hasOwnProperty('is_anti_whale')) obj.is_anti_whale = _ApiClient.ApiClient.convertToType(data['is_anti_whale'], 'String');
      if (data.hasOwnProperty('is_mintable')) obj.is_mintable = _ApiClient.ApiClient.convertToType(data['is_mintable'], 'String');
      if (data.hasOwnProperty('owner_change_balance')) obj.owner_change_balance = _ApiClient.ApiClient.convertToType(data['owner_change_balance'], 'String');
      if (data.hasOwnProperty('cannot_buy')) obj.cannot_buy = _ApiClient.ApiClient.convertToType(data['cannot_buy'], 'String');
      if (data.hasOwnProperty('anti_whale_modifiable')) obj.anti_whale_modifiable = _ApiClient.ApiClient.convertToType(data['anti_whale_modifiable'], 'String');
      if (data.hasOwnProperty('token_symbol')) obj.token_symbol = _ApiClient.ApiClient.convertToType(data['token_symbol'], 'String');
    }
    return obj;
  }
}

/**
 * It describes whether the contract has other things investors need to know.  Example:  \"note”: “Contract owner is a multisign contract.”(Notice:(1) If we haven't found any other thing which is valuable yet, there will be no return.  (2) Type: string.)
 * @member {String} note
 */
exports.ResponseWrapperTokenSecurityResult = ResponseWrapperTokenSecurityResult;
ResponseWrapperTokenSecurityResult.prototype.note = undefined;

/**
 * It describes the supply number of the LP token. Example:\"lp_total_supply\": \"100000000\". No return means no LP.(Notice:(1) When \"is_in_dex\": \"0\", there will be no return.  (2) It is LP token number, NOT token number)
 * @member {String} lp_total_supply
 */
ResponseWrapperTokenSecurityResult.prototype.lp_total_supply = undefined;

/**
 * Top10 LP token holders info(Notice:When \"is_in_dex\": \"0\", there will be no return. )
 * @member {Array.<module:model/ResponseWrapperTokenSecurityLpHolders>} lp_holders
 */
ResponseWrapperTokenSecurityResult.prototype.lp_holders = undefined;

/**
 * It describes whether the token is an airdrop scam. \"1\" means true; \"0\" means false; None means no result (Because We did not find conclusive information on whether token is an airdrop scam).(Notice:Only \"is_airdrop_scam\": \"1\" means it is an airdrop scam.)
 * @member {String} is_airdrop_scam
 */
ResponseWrapperTokenSecurityResult.prototype.is_airdrop_scam = undefined;

/**
 * It describes whether the contract has other potential risks. Example: “other_potential_risks”: “Owner can set different transaction taxes for each user, which can trigger serious losses.”(Notice:(1) If we haven't found any other potential risk yet, there will be no return.  (2) Type: string.)
 * @member {String} other_potential_risks
 */
ResponseWrapperTokenSecurityResult.prototype.other_potential_risks = undefined;

/**
 * It describes whether trading can be pausable by token contract. \"1\" means true; \"0\" means false; No return means unknown.(Notice:(1) When \"is_open_source\": \"0\", there will be no return.  (2) Sometimes, when \"is_proxy\": \"1\", there will be no return.  (3) This feature means that the contract owner will be able to suspend trading at any time, after that anyone will not be able to sell, except those who have special authority.  (4) This function generally relies on ownership. When the contract does not have an owner (or if the owner is a black hole address) and the owner cannot be retrieved, this function will most likely be disabled.)
 * @member {String} transfer_pausable
 */
ResponseWrapperTokenSecurityResult.prototype.transfer_pausable = undefined;

/**
 * It describes whether the contract has trading-cool-down mechanism which can limits the minimum time between two transactions. \"1\" means true;  \"0\" means false;  No return means unknown.(Notice:(1) When \"is_open_source\": \"0\", there will be no return. (2) Sometimes, when \"is_proxy\": \"1\", there will be no return. )
 * @member {String} trading_cooldown
 */
ResponseWrapperTokenSecurityResult.prototype.trading_cooldown = undefined;

/**
 * It describes whether the contract has hidden owners. For contract with a hidden owner, developer can still manipulate the contract even if the ownership has been abandoned. “1” means true; \"0\" means false; No return means unknown.(Notice:(1) When \"is_open_source\": \"0\", there will be no return.  (2) Sometimes, when \"is_proxy\": \"1\", there will be no return.  (3) Hidden owner is often used by developers to hide ownership and is often accompanied by malicious functionality. When the hidden owner exists, it is assumed that ownership has not been abandoned.)
 * @member {String} hidden_owner
 */
ResponseWrapperTokenSecurityResult.prototype.hidden_owner = undefined;

/**
 * It describes whether this contract can self destruct. \"1\" means true;  \"0\" means false; No return means unknown.(Notice:(1) When \"is_open_source\": \"0\", there will be no return.  (2) When the self-destruct function is triggered, this contract will be destroyed, all functions will be unavailable, and all related assets will be erased.)
 * @member {String} selfdestruct
 */
ResponseWrapperTokenSecurityResult.prototype.selfdestruct = undefined;

/**
 * It describes the percentage of tokens held by the contract owner.  Example:\"owner_balance\": \"0.1\".  No return or return empty means there is no ownership or can't find ownership.(Notice:(1) 1 means 100% here. (2) When \"owner_address\" returns empty, or no return, there will be no return.)
 * @member {String} owner_percent
 */
ResponseWrapperTokenSecurityResult.prototype.owner_percent = undefined;

/**
 * It describes whether the whitelist function is not included in the contract. If there is a whitelist, some addresses may not be able to trade normally. \"1\" means true; \"0\" means false;  No return means unknown.(Notice:(1) When \"is_open_source\": \"0\", there will be no return.  (2) Sometimes, when \"is_proxy\": \"1\", there will be no return.  (3) Whitelisting is mostly used to allow specific addresses to make early transactions, tax-free, and not affected by transaction suspension. (4) For contracts without an owner (or the owner is a black hole address), the whitelist will not be able to get updated. However, the existing whitelist is still in effect.)
 * @member {String} is_whitelisted
 */
ResponseWrapperTokenSecurityResult.prototype.is_whitelisted = undefined;

/**
 * It describes the number of token holders. Example:\"holder_count\": \"4342\"
 * @member {String} holder_count
 */
ResponseWrapperTokenSecurityResult.prototype.holder_count = undefined;

/**
 * It describes whether the token is a famous and trustworthy one. \"1\" means true; No return no result (Because We did not find conclusive information on whether token is a airdrop scam).(Notice:(1) Only \"trust_list\": \"1\" means it is a famous and trustworthy token.  (2) No return doesn't mean it is risky.)
 * @member {String} trust_list
 */
ResponseWrapperTokenSecurityResult.prototype.trust_list = undefined;

/**
 * It describes whether the token is a honeypot. \"HoneyPot\" means that the token maybe cannot be sold because of the token contract's function, Or the token contains malicious code.  \"1\" means true;  \"0\" means false;  No return means unknown.(Notice:(1) When \"is_open_source\": \"0\", there will be no return.  (2) Sometimes, when \"is_proxy\": \"1\", there will be no return.  (3) Hight risk, definitely scam.)
 * @member {String} is_honeypot
 */
ResponseWrapperTokenSecurityResult.prototype.is_honeypot = undefined;

/**
 * Top10 holders info
 * @member {Array.<module:model/ResponseWrapperTokenSecurityLpHolders>} holders
 */
ResponseWrapperTokenSecurityResult.prototype.holders = undefined;

/**
 * It describes Dex information of where the token that can be traded.(Notice:When \"is_in_dex\": \"0\", there will be empty array. )
 * @member {Array.<module:model/ResponseWrapperTokenSecurityDex>} dex
 */
ResponseWrapperTokenSecurityResult.prototype.dex = undefined;

/**
 * It describes whether this contract is open source.  \"1\" means true;  \"0\" means false.(Notice:Un-open-sourced contracts may hide various unknown mechanisms and are extremely risky. When the contract is not open source, we will not be able to detect other risk items.)
 * @member {String} is_open_source
 */
ResponseWrapperTokenSecurityResult.prototype.is_open_source = undefined;

/**
 * It describes the tax when selling the token.  Example: \"sell_tax\": 0.1%.  No return means unknown.(Notice:(1) When \"is_in_dex\": \"0\", there will be no return.  (2) Sell tax will cause the actual value received when selling a token to be less than expected, and too much buy tax may lead to large losses. (3) When \"sell_tax\": \"1\", it means sell-tax is 100% or this token cannot be sold. (4) Sometimes token's  trading-cool-down mechanism would affect our sandbox system. When \"trading_cooldown\": \"1\", \"sell_tax\" may return \"1\".)
 * @member {String} sell_tax
 */
ResponseWrapperTokenSecurityResult.prototype.sell_tax = undefined;

/**
 * Token Name
 * @member {String} token_name
 */
ResponseWrapperTokenSecurityResult.prototype.token_name = undefined;

/**
 * It describes this contract's owner address.  Example: \"creator_address\": \"0x744aF9cBb7606BB040f6FBf1c0a0B0dcBA6385E5\";
 * @member {String} creator_address
 */
ResponseWrapperTokenSecurityResult.prototype.creator_address = undefined;

/**
 * It describes the percentage of tokens held by the contract owner. Example:\"owner_balance\": 0.1.(Notice:1 means 100% here.)
 * @member {String} creator_percent
 */
ResponseWrapperTokenSecurityResult.prototype.creator_percent = undefined;

/**
 * It describes whether this contract has a proxy contract.  \"1\" means true;  \"0\" means false;  No return means unknown.(Notice:(1) When \"is_open_source\": \"0\", there will be no return.  (2) Most Proxy contracts are accompanied by modifiable implementation contracts, and implementation contracts may contain significant potential risk. When the contract is a Proxy, we will stop detecting other risk items.)
 * @member {String} is_proxy
 */
ResponseWrapperTokenSecurityResult.prototype.is_proxy = undefined;

/**
 * It describes the balance of the contract owner.  Example:\"owner_balance\": 100000000.
 * @member {String} creator_balance
 */
ResponseWrapperTokenSecurityResult.prototype.creator_balance = undefined;

/**
 * It describes whether the token can be traded on the main Dex. \"1\" means true; \"0\" means false(Notice:It only counts when the token has a marketing pair with mainstream coins/tokens.)
 * @member {String} is_in_dex
 */
ResponseWrapperTokenSecurityResult.prototype.is_in_dex = undefined;

/**
 * It describes the balance of the contract owner.  Example: \"owner_balance\": \"100000000\".  No return or return empty means there is no ownership or can't find ownership.(Notice:When \"owner_address\" returns empty, or no return, there will be no return.)
 * @member {String} owner_balance
 */
ResponseWrapperTokenSecurityResult.prototype.owner_balance = undefined;

/**
 * It describes the supply number of the token. Example:\"total_supply\": 100000000
 * @member {String} total_supply
 */
ResponseWrapperTokenSecurityResult.prototype.total_supply = undefined;

/**
 * It describes whether the token is true or fake. \"1\" means true token; \"0\" means fake token; None means no result (Because we did not find decisive information about the truth or falsity)(Notice:Only \"is_true_token\": \"0\" means it is a fake token.)
 * @member {String} is_true_token
 */
ResponseWrapperTokenSecurityResult.prototype.is_true_token = undefined;

/**
 * It describes whether this contract has the function to take back ownership.  \"1\" means true;  \"0\" means false;  No return means unknown.(Notice:(1) When \"is_open_source\": \"0\", there will be no return.  (2) Sometimes, when \"is_proxy\": \"1\", there will be no return.  (3) Ownership is mostly used to adjust the parameters and status of the contract, such as minting, modification of slippage, suspension of trading, setting blacklsit, etc.  When the contract does not have an owner (or if the owner is a black hole address) and the owner cannot be retrieved, these functions will most likely be disabled.)
 * @member {String} can_take_back_ownership
 */
ResponseWrapperTokenSecurityResult.prototype.can_take_back_ownership = undefined;

/**
 * It describes whether the blacklist function is not included in the contract. If there is a blacklist, some addresses may not be able to trade normally. \"1\" means true; \"0\" means false;  No return means unknown.(Notice:(1) When \"is_open_source\": \"0\",  there will be no return.  (2) Sometimes, when \"is_proxy\": \"1\", there will be no return.  (3) The contract owner may add any address into the blacklist, and the token holder in blacklist will not be able to trade. Abuse of the blacklist function will lead to great risks.  (4) For contracts without an owner (or the owner is a black hole address), the blacklist will not be able to get updated. However, the existing blacklist is still in effect.)
 * @member {String} is_blacklisted
 */
ResponseWrapperTokenSecurityResult.prototype.is_blacklisted = undefined;

/**
 * It describes this contract's owner address.  Example: \"owner_address\": \"0x744aF9cBb7606BB040f6FBf1c0a0B0dcBA6385E5\";  No return means unknown; Return empty means there is no ownership or can't find ownership.(Notice:(1) When \"is_open_source\": \"0\", there will be no return.  (2) Sometimes, when \"is_proxy\": \"1\", there will be no return.  (3) Ownership is mostly used to adjust the parameters and status of the contract, such as minting, modification of slippage, suspension of trading, setting blacklist, etc.  When the contract does not have an owner (or if the owner is a black hole address) and the owner cannot be retrieved, these functions will most likely be disabled.)
 * @member {String} owner_address
 */
ResponseWrapperTokenSecurityResult.prototype.owner_address = undefined;

/**
 * It describes whether the trading tax can be modifiable by token contract. \"1\" means true; \"0\" means false; No return means unknown.(Notice:(1) When When \"is_open_source\": \"0\", there will be no return.  (2) Sometimes, when \"is_proxy\": \"1\", there will be no return.  (3) Token with modifiable tax means that the contract owner can modify the buy tax or sell tax of the token. This may cause some losses, especially since some contracts have unlimited modifiable tax rates, which would make the token untradeable.  (4) This function generally relies on ownership. When the contract does not have an owner (or if the owner is a black hole address) and the owner cannot be retrieved, this function will most likely be disabled.)
 * @member {String} slippage_modifiable
 */
ResponseWrapperTokenSecurityResult.prototype.slippage_modifiable = undefined;

/**
 * It describes the tax when buying the token.  Example: \"buy_tax\": 0.1%.  No return means unknown.(Notice:(1) When \"is_in_dex\": \"0\", there will be no return.  (2) Buy tax will cause the actual value received when buying a token to be less than expected, and too much buy tax may lead to heavy losses. (3) When \"buy_tax\": \"1\", it means buy tax is 100% or cannot buy. (4) Sometimes token's anti-bot mechanism would affect our sandbox system, leading to \"cannoy_buy\": \"1\",  causing the display of \"buy_tax\": \"1\". (5)Some of the token is deisgned not for sale, leading to \"cannot_buy\":1, causing the display of \"buy_tax\": \"1\".)
 * @member {String} buy_tax
 */
ResponseWrapperTokenSecurityResult.prototype.buy_tax = undefined;

/**
 * It describes whether the contract would call functions of other contracts when primary methods are executed. \"1\" means true;  \"0\" means false; No return means unknown.(Notice:(1) When \"is_open_source\": \"0\", there will be no return.  (2) External call would cause the implementation of this contract to be highly dependent on other external contracts, which may be a potential risk.)
 * @member {String} external_call
 */
ResponseWrapperTokenSecurityResult.prototype.external_call = undefined;

/**
 * It describes whether the contract has the function restricting token holder selling all the token.  \"1\" means true;  \"0\" means false;  No return means unknown.(Notice:(1) When \"is_in_dex\": \"0\", there will be no return.  (2) This feature means that you will not be able to sell all your tokens in a single sale. Sometimes you need to leave a certain percentage of the token, e.g. 10%, sometimes you need to leave a fixed number of token, such as 10 token. (3) When \"buy_tax\": \"1\", there will be no return.)
 * @member {String} cannot_sell_all
 */
ResponseWrapperTokenSecurityResult.prototype.cannot_sell_all = undefined;

/**
 * It describes the number of LP token holders. Example:\"lp_holder_count\": \"4342\". No return means no LP.(Notice:When \"is_in_dex\": \"0\", there will be no return.)
 * @member {String} lp_holder_count
 */
ResponseWrapperTokenSecurityResult.prototype.lp_holder_count = undefined;

/**
 * It describes whether the owner can set a different tax rate for every assigned address. \"1\" means ture; \"0\" means false; No return means unknown.(Notice:(1) When \"is_open_source\": \"0\",  there will be no return.  (2) Sometimes, when \"is_proxy\": \"1\", there will be no return.  (3) The contract owner may set a very outrageous tax rate for assigned address to block it from trading. Abuse of this funtcion will lead to great risks.  (4) For contracts without an owner (or the owner is a black hole address), this function would not able to be used. However, the existing tax rate would be still in effect.)
 * @member {String} personal_slippage_modifiable
 */
ResponseWrapperTokenSecurityResult.prototype.personal_slippage_modifiable = undefined;

/**
 * It describes whether the contract has the function to limit the maximum amount of transactions or the maximum token position that for single address.  \"1\" means true;  \"0\" means false;  No return means unknown.(Notice:(1) When \"is_open_source\": \"0\", there will be no return. (2) Sometimes, when \"is_proxy\": \"1\", there will be no return. )
 * @member {String} is_anti_whale
 */
ResponseWrapperTokenSecurityResult.prototype.is_anti_whale = undefined;

/**
 * It describes whether this contract has the function to mint tokens.  \"1\" means true;  \"0\" means false;  No return means unknown.(Notice:(1) When \"is_open_source\": \"0\", there will be no return.  (2) Sometimes, when \"is_proxy\": \"1\", there will be no return.  (3) Mint function will directly trigger a massive sell-off, causing the coin price to plummet. It is extremely risky.  (4) This function generally relies on ownership. When the contract does not have an owner (or if the owner is a black hole address) and the owner cannot be retrieved, this function will most likely be disabled.)
 * @member {String} is_mintable
 */
ResponseWrapperTokenSecurityResult.prototype.is_mintable = undefined;

/**
 * It describes whether the contract owner has the authority to change the balance of any token holder.  \"1\" means true;  \"0\" means false;  No return means unknown.(Notice:(1) When \"is_open_source\": \"0\", there will be no return.  (2) Sometimes, when \"is_proxy\": \"1\", there will be no return.  (3) Token with this feature means that the owner can modify anyone's balance, resulting in an asset straight to zero or a massive minting and sell-off.  (4) This function generally relies on ownership. When the contract does not have an owner (or if the owner is a black hole address) and the owner cannot be retrieved, this function will most likely be disabled.)
 * @member {String} owner_change_balance
 */
ResponseWrapperTokenSecurityResult.prototype.owner_change_balance = undefined;

/**
 * It deiscribes whether the Token can be bought. \"1\" means true;  \"0\" means false;  No return means unknown.(Notice:(1) Generally, \"cannot_buy\": \"1\" would be found in Reward Tokens. Such Tokens are issued as rewards for some on-chain applications and cannot be bought directly by users. (2) Sometimes token's anti-bot mechanism would affect our sandbox system, causing the display of \"buy_tax\": \"1\". (3) When “cannot_buy”: \"1\", our sandbox system might be bloked, causing the display of \"buy_tax\": \"1\" and \"sell_tax\": \"1\")
 * @member {String} cannot_buy
 */
ResponseWrapperTokenSecurityResult.prototype.cannot_buy = undefined;

/**
 * It describes whether the contract has the function to modify the maximum amount of transactions or the maximum token position.  \"1\" means true;  \"0\" means false;  No return means unknown.(Notice:(1) When \"is_open_source\": \"0\", there will be no return. (2) Sometimes, when \"is_proxy\": \"1\", there will be no return.  (3)When the anti whale value is set to a very small value, all tradinge would fail.)
 * @member {String} anti_whale_modifiable
 */
ResponseWrapperTokenSecurityResult.prototype.anti_whale_modifiable = undefined;

/**
 * Token Symbol
 * @member {String} token_symbol
 */
ResponseWrapperTokenSecurityResult.prototype.token_symbol = undefined;