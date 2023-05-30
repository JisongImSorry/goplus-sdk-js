"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApproveNFTListResponse = void 0;
var _ApiClient = require("../ApiClient");
var _ApproveResult = require("./ApproveResult");
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
 * The ApproveNFTListResponse model module.
 * @module model/ApproveNFTListResponse
 * @version 1.0
 */
class ApproveNFTListResponse {
  /**
   * Constructs a new <code>ApproveNFTListResponse</code>.
   * @alias module:model/ApproveNFTListResponse
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>ApproveNFTListResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApproveNFTListResponse} obj Optional instance to populate.
   * @return {module:model/ApproveNFTListResponse} The populated <code>ApproveNFTListResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApproveNFTListResponse();
      if (data.hasOwnProperty('approved_list')) obj.approved_list = _ApiClient.ApiClient.convertToType(data['approved_list'], [_ApproveResult.ApproveResult]);
      if (data.hasOwnProperty('chain_id')) obj.chain_id = _ApiClient.ApiClient.convertToType(data['chain_id'], 'String');
      if (data.hasOwnProperty('is_open_source')) obj.is_open_source = _ApiClient.ApiClient.convertToType(data['is_open_source'], 'Number');
      if (data.hasOwnProperty('is_verified')) obj.is_verified = _ApiClient.ApiClient.convertToType(data['is_verified'], 'Number');
      if (data.hasOwnProperty('malicious_address')) obj.malicious_address = _ApiClient.ApiClient.convertToType(data['malicious_address'], 'Number');
      if (data.hasOwnProperty('malicious_behavior')) obj.malicious_behavior = _ApiClient.ApiClient.convertToType(data['malicious_behavior'], ['String']);
      if (data.hasOwnProperty('nft_address')) obj.nft_address = _ApiClient.ApiClient.convertToType(data['nft_address'], 'String');
      if (data.hasOwnProperty('nft_name')) obj.nft_name = _ApiClient.ApiClient.convertToType(data['nft_name'], 'String');
      if (data.hasOwnProperty('nft_symbol')) obj.nft_symbol = _ApiClient.ApiClient.convertToType(data['nft_symbol'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/ApproveResult>} approved_list
 */
exports.ApproveNFTListResponse = ApproveNFTListResponse;
ApproveNFTListResponse.prototype.approved_list = undefined;

/**
 * ChainID
 * @member {String} chain_id
 */
ApproveNFTListResponse.prototype.chain_id = undefined;

/**
 * Whether the contract is verified on blockchain explorer.
 * @member {Number} is_open_source
 */
ApproveNFTListResponse.prototype.is_open_source = undefined;

/**
 * Whether NFT is certified on a reputable trading platform.
 * @member {Number} is_verified
 */
ApproveNFTListResponse.prototype.is_verified = undefined;

/**
 * Whether the NFT is malicious or contains high risk.
 * @member {Number} malicious_address
 */
ApproveNFTListResponse.prototype.malicious_address = undefined;

/**
 * Specific malicious behaviors or risks of this NFT.
 * @member {Array.<String>} malicious_behavior
 */
ApproveNFTListResponse.prototype.malicious_behavior = undefined;

/**
 * nft address
 * @member {String} nft_address
 */
ApproveNFTListResponse.prototype.nft_address = undefined;

/**
 * NFT name
 * @member {String} nft_name
 */
ApproveNFTListResponse.prototype.nft_name = undefined;

/**
 * NFT symbol
 * @member {String} nft_symbol
 */
ApproveNFTListResponse.prototype.nft_symbol = undefined;