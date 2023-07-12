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
import {DappContractSecurityResponse} from './DappContractSecurityResponse';

/**
 * The ResponseWrapperDappContractSecurityResponse model module.
 * @module model/ResponseWrapperDappContractSecurityResponse
 * @version 1.0
 */
export class ResponseWrapperDappContractSecurityResponse {
  /**
   * Constructs a new <code>ResponseWrapperDappContractSecurityResponse</code>.
   * @alias module:model/ResponseWrapperDappContractSecurityResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponseWrapperDappContractSecurityResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperDappContractSecurityResponse} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperDappContractSecurityResponse} The populated <code>ResponseWrapperDappContractSecurityResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperDappContractSecurityResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('result'))
        obj.result = DappContractSecurityResponse.constructFromObject(data['result']);
    }
    return obj;
  }
}

/**
 * Code 1: Success
 * @member {Number} code
 */
ResponseWrapperDappContractSecurityResponse.prototype.code = undefined;

/**
 * Response message
 * @member {String} message
 */
ResponseWrapperDappContractSecurityResponse.prototype.message = undefined;

/**
 * @member {module:model/DappContractSecurityResponse} result
 */
ResponseWrapperDappContractSecurityResponse.prototype.result = undefined;

