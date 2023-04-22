/*
 * GoPlus Security API Documentation
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
import {ApiClient} from '../ApiClient';

/**
 * The ApproveAddressInfo model module.
 * @module model/ApproveAddressInfo
 * @version 1.0
 */
export class ApproveAddressInfo {
  /**
   * Constructs a new <code>ApproveAddressInfo</code>.
   * @alias module:model/ApproveAddressInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ApproveAddressInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApproveAddressInfo} obj Optional instance to populate.
   * @return {module:model/ApproveAddressInfo} The populated <code>ApproveAddressInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApproveAddressInfo();
      if (data.hasOwnProperty('contract_name'))
        obj.contractName = ApiClient.convertToType(data['contract_name'], 'String');
      if (data.hasOwnProperty('creator_address'))
        obj.creatorAddress = ApiClient.convertToType(data['creator_address'], 'String');
      if (data.hasOwnProperty('deployed_time'))
        obj.deployedTime = ApiClient.convertToType(data['deployed_time'], 'Number');
      if (data.hasOwnProperty('doubt_list'))
        obj.doubtList = ApiClient.convertToType(data['doubt_list'], 'Number');
      if (data.hasOwnProperty('is_contract'))
        obj.isContract = ApiClient.convertToType(data['is_contract'], 'Number');
      if (data.hasOwnProperty('is_open_source'))
        obj.isOpenSource = ApiClient.convertToType(data['is_open_source'], 'Number');
      if (data.hasOwnProperty('malicious_behavior'))
        obj.maliciousBehavior = ApiClient.convertToType(data['malicious_behavior'], ['String']);
      if (data.hasOwnProperty('tag'))
        obj.tag = ApiClient.convertToType(data['tag'], 'String');
      if (data.hasOwnProperty('trust_list'))
        obj.trustList = ApiClient.convertToType(data['trust_list'], 'Number');
    }
    return obj;
  }
}

/**
 * Spender name
 * @member {String} contractName
 */
ApproveAddressInfo.prototype.contractName = undefined;

/**
 * Spender's deployer
 * @member {String} creatorAddress
 */
ApproveAddressInfo.prototype.creatorAddress = undefined;

/**
 * Spender's deployed time
 * @member {Number} deployedTime
 */
ApproveAddressInfo.prototype.deployedTime = undefined;

/**
 * Whether the spender has a history of malicious behavior or contains high risk.
 * @member {Number} doubtList
 */
ApproveAddressInfo.prototype.doubtList = undefined;

/**
 * Whether the spender is a contract.
 * @member {Number} isContract
 */
ApproveAddressInfo.prototype.isContract = undefined;

/**
 * Whether the spender is verified on blockchain explorer.
 * @member {Number} isOpenSource
 */
ApproveAddressInfo.prototype.isOpenSource = undefined;

/**
 * Specific malicious behaviors or risks of this spender.
 * @member {Array.<String>} maliciousBehavior
 */
ApproveAddressInfo.prototype.maliciousBehavior = undefined;

/**
 * Spender tag
 * @member {String} tag
 */
ApproveAddressInfo.prototype.tag = undefined;

/**
 * Whether the spender is on the whitelist, and can be trusted
 * @member {Number} trustList
 */
ApproveAddressInfo.prototype.trustList = undefined;

