"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetDefiInfoResponseResult = void 0;
var _ApiClient = require("../ApiClient");
var _GetDefiInfoResponseResultOwner = require("./GetDefiInfoResponseResultOwner");
/*
 * GoPlus Security API Document
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.45
 *
 * Do not edit the class manually.
 *
 */

/**
 * The GetDefiInfoResponseResult model module.
 * @module model/GetDefiInfoResponseResult
 * @version 1.0
 */
class GetDefiInfoResponseResult {
  /**
   * Constructs a new <code>GetDefiInfoResponseResult</code>.
   * Response result
   * @alias module:model/GetDefiInfoResponseResult
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>GetDefiInfoResponseResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDefiInfoResponseResult} obj Optional instance to populate.
   * @return {module:model/GetDefiInfoResponseResult} The populated <code>GetDefiInfoResponseResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetDefiInfoResponseResult();
      if (data.hasOwnProperty('owner')) obj.owner = _GetDefiInfoResponseResultOwner.GetDefiInfoResponseResultOwner.constructFromObject(data['owner']);
      if (data.hasOwnProperty('privilege_withdraw')) obj.privilege_withdraw = _ApiClient.ApiClient.convertToType(data['privilege_withdraw'], 'Number');
      if (data.hasOwnProperty('withdraw_missing')) obj.withdraw_missing = _ApiClient.ApiClient.convertToType(data['withdraw_missing'], 'Number');
      if (data.hasOwnProperty('is_open_source')) obj.is_open_source = _ApiClient.ApiClient.convertToType(data['is_open_source'], 'Number');
      if (data.hasOwnProperty('blacklist')) obj.blacklist = _ApiClient.ApiClient.convertToType(data['blacklist'], 'Number');
      if (data.hasOwnProperty('contract_name')) obj.contract_name = _ApiClient.ApiClient.convertToType(data['contract_name'], 'String');
      if (data.hasOwnProperty('selfdestruct')) obj.selfdestruct = _ApiClient.ApiClient.convertToType(data['selfdestruct'], 'Number');
      if (data.hasOwnProperty('is_proxy')) obj.is_proxy = _ApiClient.ApiClient.convertToType(data['is_proxy'], 'Number');
      if (data.hasOwnProperty('approval_abuse')) obj.approval_abuse = _ApiClient.ApiClient.convertToType(data['approval_abuse'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {module:model/GetDefiInfoResponseResultOwner} owner
 */
exports.GetDefiInfoResponseResult = GetDefiInfoResponseResult;
GetDefiInfoResponseResult.prototype.owner = undefined;

/**
 * It descirbes whether the contract owner can withdraw all the assets in the contract, without uses' permission. \"1\" means true; \"0\" means false;  \"-1\" means unknown.
 * @member {Number} privilege_withdraw
 */
GetDefiInfoResponseResult.prototype.privilege_withdraw = undefined;

/**
 * It describes whether the contract lacks withdrawal method. If it is missing, users will be unable to withdraw the assets they have putted in. \"1\" means true; \"0\" means false;  \"-1\" means unknown.
 * @member {Number} withdraw_missing
 */
GetDefiInfoResponseResult.prototype.withdraw_missing = undefined;

/**
 * It describes whether this contract is open source.  \"1\" means true;  \"0\" means false.
 * @member {Number} is_open_source
 */
GetDefiInfoResponseResult.prototype.is_open_source = undefined;

/**
 * It describes whether the contract has blacklist function that would block user from withdrawing their assets. \"1\" means true; \"0\" means false;  \"-1\" means unknown.
 * @member {Number} blacklist
 */
GetDefiInfoResponseResult.prototype.blacklist = undefined;

/**
 * Name of the contract.
 * @member {String} contract_name
 */
GetDefiInfoResponseResult.prototype.contract_name = undefined;

/**
 * It describes whether this contract can self destruct. \"1\" means true;  \"0\" means false; “-1” means unknown.
 * @member {Number} selfdestruct
 */
GetDefiInfoResponseResult.prototype.selfdestruct = undefined;

/**
 * It describes whether this contract has a proxy contract.  \"1\" means true;  \"0\" means false; “-1” means unknown.
 * @member {Number} is_proxy
 */
GetDefiInfoResponseResult.prototype.is_proxy = undefined;

/**
 * It describes whether the owner can spend the allowance that obtained by the contract. If so, this function could potentially be abused to steal user assets. \"1\" means true;  \"0\" means false; “-1” means unknown.
 * @member {Number} approval_abuse
 */
GetDefiInfoResponseResult.prototype.approval_abuse = undefined;