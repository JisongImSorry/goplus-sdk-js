"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebsiteControllerApi = void 0;
var _ApiClient = require("../ApiClient");
var _ResponseWrapperPhishingSite = require("../model/ResponseWrapperPhishingSite");
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

/**
* WebsiteController service.
* @module api/WebsiteControllerApi
* @version 1.0
*/
class WebsiteControllerApi {
  /**
  * Constructs a new WebsiteControllerApi. 
  * @alias module:api/WebsiteControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the phishingSiteUsingGET operation.
   * @callback moduleapi/WebsiteControllerApi~phishingSiteUsingGETCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ResponseWrapperPhishingSite{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Check if the the url is a phishing site
   * @param {String} url Url
   * @param {Object} opts Optional parameters
   * @param {String} opts.Authorization Authorization (test：Bearer 81|9ihH8JzEuFu4MQ9DjWmH5WrNCPW...)
   * @param {module:api/WebsiteControllerApi~phishingSiteUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  phishingSiteUsingGET(url, opts, callback) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'url' is set
    if (url === undefined || url === null) {
      throw new Error("Missing the required parameter 'url' when calling phishingSiteUsingGET");
    }
    let pathParams = {};
    let queryParams = {
      'url': url
    };
    let headerParams = {
      'Authorization': opts['Authorization']
    };
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['*/*'];
    let returnType = _ResponseWrapperPhishingSite.ResponseWrapperPhishingSite;
    return this.apiClient.callApi('/api/v1/phishing_site', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
  }
}
exports.WebsiteControllerApi = WebsiteControllerApi;