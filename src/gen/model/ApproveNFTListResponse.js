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
import {ApproveResult} from './ApproveResult';

/**
 * The ApproveNFTListResponse model module.
 * @module model/ApproveNFTListResponse
 * @version 1.0
 */
export class ApproveNFTListResponse {
  /**
   * Constructs a new <code>ApproveNFTListResponse</code>.
   * @alias module:model/ApproveNFTListResponse
   * @class
   */
  constructor() {
  }

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
      if (data.hasOwnProperty('approved_list'))
        obj.approvedList = ApiClient.convertToType(data['approved_list'], [ApproveResult]);
      if (data.hasOwnProperty('chain_id'))
        obj.chainId = ApiClient.convertToType(data['chain_id'], 'String');
      if (data.hasOwnProperty('is_open_source'))
        obj.isOpenSource = ApiClient.convertToType(data['is_open_source'], 'Number');
      if (data.hasOwnProperty('is_verified'))
        obj.isVerified = ApiClient.convertToType(data['is_verified'], 'Number');
      if (data.hasOwnProperty('malicious_address'))
        obj.maliciousAddress = ApiClient.convertToType(data['malicious_address'], 'Number');
      if (data.hasOwnProperty('malicious_behavior'))
        obj.maliciousBehavior = ApiClient.convertToType(data['malicious_behavior'], ['String']);
      if (data.hasOwnProperty('nft_address'))
        obj.nftAddress = ApiClient.convertToType(data['nft_address'], 'String');
      if (data.hasOwnProperty('nft_name'))
        obj.nftName = ApiClient.convertToType(data['nft_name'], 'String');
      if (data.hasOwnProperty('nft_symbol'))
        obj.nftSymbol = ApiClient.convertToType(data['nft_symbol'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/ApproveResult>} approvedList
 */
ApproveNFTListResponse.prototype.approvedList = undefined;

/**
 * ChainID
 * @member {String} chainId
 */
ApproveNFTListResponse.prototype.chainId = undefined;

/**
 * Whether the contract is verified on blockchain explorer.
 * @member {Number} isOpenSource
 */
ApproveNFTListResponse.prototype.isOpenSource = undefined;

/**
 * Whether NFT is certified on a reputable trading platform.
 * @member {Number} isVerified
 */
ApproveNFTListResponse.prototype.isVerified = undefined;

/**
 * Whether the NFT is malicious or contains high risk.
 * @member {Number} maliciousAddress
 */
ApproveNFTListResponse.prototype.maliciousAddress = undefined;

/**
 * Specific malicious behaviors or risks of this NFT.
 * @member {Array.<String>} maliciousBehavior
 */
ApproveNFTListResponse.prototype.maliciousBehavior = undefined;

/**
 * nft address
 * @member {String} nftAddress
 */
ApproveNFTListResponse.prototype.nftAddress = undefined;

/**
 * NFT name
 * @member {String} nftName
 */
ApproveNFTListResponse.prototype.nftName = undefined;

/**
 * NFT symbol
 * @member {String} nftSymbol
 */
ApproveNFTListResponse.prototype.nftSymbol = undefined;

