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
import {ApiClient} from '../ApiClient';
import {ApproveNFTListResponse} from './ApproveNFTListResponse';

/**
 * The ResponseWrapperListApproveNFTListResponse model module.
 * @module model/ResponseWrapperListApproveNFTListResponse
 * @version 1.0
 */
export class ResponseWrapperListApproveNFTListResponse {
  /**
   * Constructs a new <code>ResponseWrapperListApproveNFTListResponse</code>.
   * @alias module:model/ResponseWrapperListApproveNFTListResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponseWrapperListApproveNFTListResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperListApproveNFTListResponse} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperListApproveNFTListResponse} The populated <code>ResponseWrapperListApproveNFTListResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperListApproveNFTListResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], [ApproveNFTListResponse]);
    }
    return obj;
  }
}

/**
 * Code 1: Success
 * @member {Number} code
 */
ResponseWrapperListApproveNFTListResponse.prototype.code = undefined;

/**
 * Response message
 * @member {String} message
 */
ResponseWrapperListApproveNFTListResponse.prototype.message = undefined;

/**
 * Response result
 * @member {Array.<module:model/ApproveNFTListResponse>} result
 */
ResponseWrapperListApproveNFTListResponse.prototype.result = undefined;

