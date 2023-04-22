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
import {ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResult} from './ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResult';

/**
 * The ResponseWrapperJSONObject59da6cfeB2f246e4936a6968cc97141b model module.
 * @module model/ResponseWrapperJSONObject59da6cfeB2f246e4936a6968cc97141b
 * @version 1.0
 */
export class ResponseWrapperJSONObject59da6cfeB2f246e4936a6968cc97141b {
  /**
   * Constructs a new <code>ResponseWrapperJSONObject59da6cfeB2f246e4936a6968cc97141b</code>.
   * @alias module:model/ResponseWrapperJSONObject59da6cfeB2f246e4936a6968cc97141b
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponseWrapperJSONObject59da6cfeB2f246e4936a6968cc97141b</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperJSONObject59da6cfeB2f246e4936a6968cc97141b} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperJSONObject59da6cfeB2f246e4936a6968cc97141b} The populated <code>ResponseWrapperJSONObject59da6cfeB2f246e4936a6968cc97141b</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperJSONObject59da6cfeB2f246e4936a6968cc97141b();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('result'))
        obj.result = ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResult.constructFromObject(data['result']);
    }
    return obj;
  }
}

/**
 * Code 1：Success
 * @member {Number} code
 */
ResponseWrapperJSONObject59da6cfeB2f246e4936a6968cc97141b.prototype.code = undefined;

/**
 * Response message
 * @member {String} message
 */
ResponseWrapperJSONObject59da6cfeB2f246e4936a6968cc97141b.prototype.message = undefined;

/**
 * @member {module:model/ResponseWrapperJSONObject59da6cfeb2f246e4936a6968cc97141bResult} result
 */
ResponseWrapperJSONObject59da6cfeB2f246e4936a6968cc97141b.prototype.result = undefined;

