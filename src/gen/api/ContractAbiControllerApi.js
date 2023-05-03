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
import {ApiClient} from "../ApiClient";
import {ParseAbiDataRequest} from '../model/ParseAbiDataRequest';
import {ResponseWrapperParseAbiDataResponse} from '../model/ResponseWrapperParseAbiDataResponse';

/**
* ContractAbiController service.
* @module api/ContractAbiControllerApi
* @version 1.0
*/
export class ContractAbiControllerApi {

    /**
    * Constructs a new ContractAbiControllerApi. 
    * @alias module:api/ContractAbiControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getAbiDataInfoUsingPOST operation.
     * @callback moduleapi/ContractAbiControllerApi~getAbiDataInfoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseWrapperParseAbiDataResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get abi decode info
     * @param {module:model/ParseAbiDataRequest} body abiDataRequest
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization example：Bearer 81|9ihH8JzEuFu4MQ9DjWmH5WrNCPW...
     * @param {module:api/ContractAbiControllerApi~getAbiDataInfoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAbiDataInfoUsingPOST(body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getAbiDataInfoUsingPOST");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'Authorization': opts['authorization']
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = ResponseWrapperParseAbiDataResponse;

      return this.apiClient.callApi(
        '/api/v1/abi/input_decode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}