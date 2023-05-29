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
import {ApiClient} from "../ApiClient";
import {ResponseWrapperListApproveNFT1155ListResponse} from '../model/ResponseWrapperListApproveNFT1155ListResponse';
import {ResponseWrapperListApproveNFTListResponse} from '../model/ResponseWrapperListApproveNFTListResponse';
import {ResponseWrapperListApproveTokenOutListResponse} from '../model/ResponseWrapperListApproveTokenOutListResponse';

/**
* ApproveControllerV2 service.
* @module api/ApproveControllerV2Api
* @version 1.0
*/
export class ApproveControllerV2Api {

    /**
    * Constructs a new ApproveControllerV2Api. 
    * @alias module:api/ApproveControllerV2Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addressNFT1155ApproveListUsingGET1 operation.
     * @callback moduleapi/ApproveControllerV2Api~addressNFT1155ApproveListUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseWrapperListApproveNFT1155ListResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check risk of all erc1155 approvals under one EOA.
     * @param {String} addresses contract address
     * @param {String} chainId chain id
     * @param {Object} opts Optional parameters
     * @param {String} opts.Authorization Authorization (test：Bearer 81|9ihH8JzEuFu4MQ9DjWmH5WrNCPW...)
     * @param {module:api/ApproveControllerV2Api~addressNFT1155ApproveListUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    addressNFT1155ApproveListUsingGET1(addresses, chainId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'addresses' is set
      if (addresses === undefined || addresses === null) {
        throw new Error("Missing the required parameter 'addresses' when calling addressNFT1155ApproveListUsingGET1");
      }
      // verify the required parameter 'chainId' is set
      if (chainId === undefined || chainId === null) {
        throw new Error("Missing the required parameter 'chainId' when calling addressNFT1155ApproveListUsingGET1");
      }

      let pathParams = {
        'chainId': chainId
      };
      let queryParams = {
        'addresses': addresses
      };
      let headerParams = {
        'Authorization': opts['Authorization']
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = ResponseWrapperListApproveNFT1155ListResponse;

      return this.apiClient.callApi(
        '/api/v2/nft1155_approval_security/{chainId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the addressNFT721ApproveListUsingGET1 operation.
     * @callback moduleapi/ApproveControllerV2Api~addressNFT721ApproveListUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseWrapperListApproveNFTListResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check risk of all erc721 approvals under one EOA.
     * @param {String} addresses contract address
     * @param {String} chainId chain id
     * @param {Object} opts Optional parameters
     * @param {String} opts.Authorization Authorization (test：Bearer 81|9ihH8JzEuFu4MQ9DjWmH5WrNCPW...)
     * @param {module:api/ApproveControllerV2Api~addressNFT721ApproveListUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    addressNFT721ApproveListUsingGET1(addresses, chainId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'addresses' is set
      if (addresses === undefined || addresses === null) {
        throw new Error("Missing the required parameter 'addresses' when calling addressNFT721ApproveListUsingGET1");
      }
      // verify the required parameter 'chainId' is set
      if (chainId === undefined || chainId === null) {
        throw new Error("Missing the required parameter 'chainId' when calling addressNFT721ApproveListUsingGET1");
      }

      let pathParams = {
        'chainId': chainId
      };
      let queryParams = {
        'addresses': addresses
      };
      let headerParams = {
        'Authorization': opts['Authorization']
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = ResponseWrapperListApproveNFTListResponse;

      return this.apiClient.callApi(
        '/api/v2/nft721_approval_security/{chainId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the addressTokenApproveListUsingGET1 operation.
     * @callback moduleapi/ApproveControllerV2Api~addressTokenApproveListUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseWrapperListApproveTokenOutListResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check risk of all erc20 approvals under one EOA.
     * @param {String} addresses contract address
     * @param {String} chainId chain id
     * @param {Object} opts Optional parameters
     * @param {String} opts.Authorization Authorization (test：Bearer 81|9ihH8JzEuFu4MQ9DjWmH5WrNCPW...)
     * @param {module:api/ApproveControllerV2Api~addressTokenApproveListUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    addressTokenApproveListUsingGET1(addresses, chainId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'addresses' is set
      if (addresses === undefined || addresses === null) {
        throw new Error("Missing the required parameter 'addresses' when calling addressTokenApproveListUsingGET1");
      }
      // verify the required parameter 'chainId' is set
      if (chainId === undefined || chainId === null) {
        throw new Error("Missing the required parameter 'chainId' when calling addressTokenApproveListUsingGET1");
      }

      let pathParams = {
        'chainId': chainId
      };
      let queryParams = {
        'addresses': addresses
      };
      let headerParams = {
        'Authorization': opts['Authorization']
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = ResponseWrapperListApproveTokenOutListResponse;

      return this.apiClient.callApi(
        '/api/v2/token_approval_security/{chainId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}