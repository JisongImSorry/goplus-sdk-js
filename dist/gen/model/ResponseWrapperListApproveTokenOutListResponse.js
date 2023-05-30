"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseWrapperListApproveTokenOutListResponse = void 0;
var _ApiClient = require("../ApiClient");
var _ApproveTokenOutListResponse = require("./ApproveTokenOutListResponse");
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
 * The ResponseWrapperListApproveTokenOutListResponse model module.
 * @module model/ResponseWrapperListApproveTokenOutListResponse
 * @version 1.0
 */
class ResponseWrapperListApproveTokenOutListResponse {
  /**
   * Constructs a new <code>ResponseWrapperListApproveTokenOutListResponse</code>.
   * @alias module:model/ResponseWrapperListApproveTokenOutListResponse
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>ResponseWrapperListApproveTokenOutListResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperListApproveTokenOutListResponse} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperListApproveTokenOutListResponse} The populated <code>ResponseWrapperListApproveTokenOutListResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperListApproveTokenOutListResponse();
      if (data.hasOwnProperty('code')) obj.code = _ApiClient.ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('message')) obj.message = _ApiClient.ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('result')) obj.result = _ApiClient.ApiClient.convertToType(data['result'], [_ApproveTokenOutListResponse.ApproveTokenOutListResponse]);
    }
    return obj;
  }
}

/**
 * Code 1：Success
 * @member {Number} code
 */
exports.ResponseWrapperListApproveTokenOutListResponse = ResponseWrapperListApproveTokenOutListResponse;
ResponseWrapperListApproveTokenOutListResponse.prototype.code = undefined;

/**
 * Response message
 * @member {String} message
 */
ResponseWrapperListApproveTokenOutListResponse.prototype.message = undefined;

/**
 * Response result
 * @member {Array.<module:model/ApproveTokenOutListResponse>} result
 */
ResponseWrapperListApproveTokenOutListResponse.prototype.result = undefined;