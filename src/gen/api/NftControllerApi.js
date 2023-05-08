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
import {ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6c} from '../model/ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6c';

/**
* NftController service.
* @module api/NftControllerApi
* @version 1.0
*/
export class NftControllerApi {

    /**
    * Constructs a new NftControllerApi. 
    * @alias module:api/NftControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getNftInfoUsingGET1 operation.
     * @callback moduleapi/NftControllerApi~getNftInfoUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6c{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get NFT&#x27;s security and risk data.
     * @param {String} chainId Chain id, (eth: 1, bsc: 56, Polygon: 137, Avalanche: 43114)
     * @param {String} contractAddresses NFT contract address
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization (test：Bearer 81|9ihH8JzEuFu4MQ9DjWmH5WrNCPW...)
     * @param {String} opts.tokenId tokenId (default to <.>)
     * @param {module:api/NftControllerApi~getNftInfoUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getNftInfoUsingGET1(chainId, contractAddresses, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'chainId' is set
      if (chainId === undefined || chainId === null) {
        throw new Error("Missing the required parameter 'chainId' when calling getNftInfoUsingGET1");
      }
      // verify the required parameter 'contractAddresses' is set
      if (contractAddresses === undefined || contractAddresses === null) {
        throw new Error("Missing the required parameter 'contractAddresses' when calling getNftInfoUsingGET1");
      }

      let pathParams = {
        'chain_id': chainId
      };
      let queryParams = {
        'contract_addresses': contractAddresses,'token_id': opts['tokenId']
      };
      let headerParams = {
        'Authorization': opts['authorization']
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6c;

      return this.apiClient.callApi(
        '/api/v1/nft_security/{chain_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}