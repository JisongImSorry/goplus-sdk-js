"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseWrapperTokenSecurityLpHolders = void 0;
var _ApiClient = require("../ApiClient");
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
 * The ResponseWrapperTokenSecurityLpHolders model module.
 * @module model/ResponseWrapperTokenSecurityLpHolders
 * @version 1.0
 */
class ResponseWrapperTokenSecurityLpHolders {
  /**
   * Constructs a new <code>ResponseWrapperTokenSecurityLpHolders</code>.
   * @alias module:model/ResponseWrapperTokenSecurityLpHolders
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>ResponseWrapperTokenSecurityLpHolders</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperTokenSecurityLpHolders} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperTokenSecurityLpHolders} The populated <code>ResponseWrapperTokenSecurityLpHolders</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperTokenSecurityLpHolders();
      if (data.hasOwnProperty('is_locked')) obj.is_locked = _ApiClient.ApiClient.convertToType(data['is_locked'], 'Number');
      if (data.hasOwnProperty('is_contract')) obj.is_contract = _ApiClient.ApiClient.convertToType(data['is_contract'], 'Number');
      if (data.hasOwnProperty('address')) obj.address = _ApiClient.ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('balance')) obj.balance = _ApiClient.ApiClient.convertToType(data['balance'], 'String');
      if (data.hasOwnProperty('locked_detail')) obj.locked_detail = _ApiClient.ApiClient.convertToType(data['locked_detail'], ['String']);
      if (data.hasOwnProperty('tag')) obj.tag = _ApiClient.ApiClient.convertToType(data['tag'], 'String');
      if (data.hasOwnProperty('percent')) obj.percent = _ApiClient.ApiClient.convertToType(data['percent'], 'String');
    }
    return obj;
  }
}

/**
 * It describes whether the tokens owned by the holder are locked \"1\" means true; \"0\" means false;  (3) “tag” describes the address's public tag. Example:Burn (Notice:About \"locked\": We only support the token lock addresses or black hole addresses that we have included. )
 * @member {Number} is_locked
 */
exports.ResponseWrapperTokenSecurityLpHolders = ResponseWrapperTokenSecurityLpHolders;
ResponseWrapperTokenSecurityLpHolders.prototype.is_locked = undefined;

/**
 * It describes whether the holder is a contract \"1\" means true; \"0\" means false.
 * @member {Number} is_contract
 */
ResponseWrapperTokenSecurityLpHolders.prototype.is_contract = undefined;

/**
 * It describes the holder address; 
 * @member {String} address
 */
ResponseWrapperTokenSecurityLpHolders.prototype.address = undefined;

/**
 * It describes the balance of the holder. 
 * @member {String} balance
 */
ResponseWrapperTokenSecurityLpHolders.prototype.balance = undefined;

/**
 * It is an array, decribes lock position info of this holder, only shows when \"locked\": 1. This Array may contain multiple objects for multiple locking info. In every objetc, \"amount\" describes the number of token locked, \"end_time\" describes when the token will be unlocked, \"opt_time\" describes when the token was locked.(Notice:When \"locked\":0, or lock address is a black hole address,  \"locked_detail\" will be no return.)
 * @member {Array.<String>} locked_detail
 */
ResponseWrapperTokenSecurityLpHolders.prototype.locked_detail = undefined;

/**
 * It describes the address's public tag. Example:Burn Address/Deployer; 
 * @member {String} tag
 */
ResponseWrapperTokenSecurityLpHolders.prototype.tag = undefined;

/**
 * It  describes the percentage of tokens held by this holder (Notice:About \"percent\": 1 means 100% here.)
 * @member {String} percent
 */
ResponseWrapperTokenSecurityLpHolders.prototype.percent = undefined;