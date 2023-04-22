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

/**
 * The ResponseWrapperMapstringstringa9a4024ae50a4a3aa475dba457d7c10eResult model module.
 * @module model/ResponseWrapperMapstringstringa9a4024ae50a4a3aa475dba457d7c10eResult
 * @version 1.0
 */
export class ResponseWrapperMapstringstringa9a4024ae50a4a3aa475dba457d7c10eResult {
  /**
   * Constructs a new <code>ResponseWrapperMapstringstringa9a4024ae50a4a3aa475dba457d7c10eResult</code>.
   * Response result
   * @alias module:model/ResponseWrapperMapstringstringa9a4024ae50a4a3aa475dba457d7c10eResult
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponseWrapperMapstringstringa9a4024ae50a4a3aa475dba457d7c10eResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperMapstringstringa9a4024ae50a4a3aa475dba457d7c10eResult} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperMapstringstringa9a4024ae50a4a3aa475dba457d7c10eResult} The populated <code>ResponseWrapperMapstringstringa9a4024ae50a4a3aa475dba457d7c10eResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperMapstringstringa9a4024ae50a4a3aa475dba457d7c10eResult();
      if (data.hasOwnProperty('website_contract_security'))
        obj.websiteContractSecurity = ApiClient.convertToType(data['website_contract_security'], ['String']);
      if (data.hasOwnProperty('phishing_site'))
        obj.phishingSite = ApiClient.convertToType(data['phishing_site'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} websiteContractSecurity
 */
ResponseWrapperMapstringstringa9a4024ae50a4a3aa475dba457d7c10eResult.prototype.websiteContractSecurity = undefined;

/**
 * It means whether the website is a phishing site. \"1\" means true; \"0\" means that we have not found malicious behavior of this website.
 * @member {Number} phishingSite
 */
ResponseWrapperMapstringstringa9a4024ae50a4a3aa475dba457d7c10eResult.prototype.phishingSite = undefined;

