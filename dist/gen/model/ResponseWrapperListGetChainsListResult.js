"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseWrapperListGetChainsListResult = void 0;
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
 * The ResponseWrapperListGetChainsListResult model module.
 * @module model/ResponseWrapperListGetChainsListResult
 * @version 1.0
 */
class ResponseWrapperListGetChainsListResult {
  /**
   * Constructs a new <code>ResponseWrapperListGetChainsListResult</code>.
   * @alias module:model/ResponseWrapperListGetChainsListResult
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>ResponseWrapperListGetChainsListResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperListGetChainsListResult} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperListGetChainsListResult} The populated <code>ResponseWrapperListGetChainsListResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperListGetChainsListResult();
      if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * chain name
 * @member {String} name
 */
exports.ResponseWrapperListGetChainsListResult = ResponseWrapperListGetChainsListResult;
ResponseWrapperListGetChainsListResult.prototype.name = undefined;

/**
 * chain id
 * @member {String} id
 */
ResponseWrapperListGetChainsListResult.prototype.id = undefined;