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
import {ApiClient} from '../ApiClient';
import {TaTokenSecurityResponse} from './TaTokenSecurityResponse';

/**
 * The ResponseWrapperTaTokenSecurityResponse model module.
 * @module model/ResponseWrapperTaTokenSecurityResponse
 * @version 1.0
 */
export class ResponseWrapperTaTokenSecurityResponse {
  /**
   * Constructs a new <code>ResponseWrapperTaTokenSecurityResponse</code>.
   * @alias module:model/ResponseWrapperTaTokenSecurityResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponseWrapperTaTokenSecurityResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperTaTokenSecurityResponse} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperTaTokenSecurityResponse} The populated <code>ResponseWrapperTaTokenSecurityResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperTaTokenSecurityResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('result'))
        obj.result = TaTokenSecurityResponse.constructFromObject(data['result']);
    }
    return obj;
  }
}

/**
 * Code 1：Success
 * @member {Number} code
 */
ResponseWrapperTaTokenSecurityResponse.prototype.code = undefined;

/**
 * Response message
 * @member {String} message
 */
ResponseWrapperTaTokenSecurityResponse.prototype.message = undefined;

/**
 * @member {module:model/TaTokenSecurityResponse} result
 */
ResponseWrapperTaTokenSecurityResponse.prototype.result = undefined;

