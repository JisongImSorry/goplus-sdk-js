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
import {ResponseWrapperGetDefiInfoResult} from './ResponseWrapperGetDefiInfoResult';

/**
 * The ResponseWrapperGetDefiInfo model module.
 * @module model/ResponseWrapperGetDefiInfo
 * @version 1.0
 */
export class ResponseWrapperGetDefiInfo {
  /**
   * Constructs a new <code>ResponseWrapperGetDefiInfo</code>.
   * @alias module:model/ResponseWrapperGetDefiInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponseWrapperGetDefiInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperGetDefiInfo} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperGetDefiInfo} The populated <code>ResponseWrapperGetDefiInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperGetDefiInfo();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('result'))
        obj.result = ResponseWrapperGetDefiInfoResult.constructFromObject(data['result']);
    }
    return obj;
  }
}

/**
 * Code 1：Success
 * @member {Number} code
 */
ResponseWrapperGetDefiInfo.prototype.code = undefined;

/**
 * Response message
 * @member {String} message
 */
ResponseWrapperGetDefiInfo.prototype.message = undefined;

/**
 * @member {module:model/ResponseWrapperGetDefiInfoResult} result
 */
ResponseWrapperGetDefiInfo.prototype.result = undefined;

