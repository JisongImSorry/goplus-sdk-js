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
 * The ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultPrivilegedMinting model module.
 * @module model/ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultPrivilegedMinting
 * @version 1.0
 */
export class ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultPrivilegedMinting {
  /**
   * Constructs a new <code>ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultPrivilegedMinting</code>.
   * It describes whether the NFT contract has  minting methods which can only be triggered by an address with special privileges. (Notice:Some minting methods can only be triggered by an address with special privileges. Generally speaking, these are usually for the owner to mint.)
   * @alias module:model/ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultPrivilegedMinting
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultPrivilegedMinting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultPrivilegedMinting} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultPrivilegedMinting} The populated <code>ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultPrivilegedMinting</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultPrivilegedMinting();
      if (data.hasOwnProperty('owner_address'))
        obj.ownerAddress = ApiClient.convertToType(data['owner_address'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
      if (data.hasOwnProperty('owner_type'))
        obj.ownerType = ApiClient.convertToType(data['owner_type'], 'String');
    }
    return obj;
  }
}

/**
 * Owner_address describes the owner address.  null: the owner address cannot be fetched.
 * @member {String} ownerAddress
 */
ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultPrivilegedMinting.prototype.ownerAddress = undefined;

/**
 * The \"value\" describes the status of the risk. null: the contract is not open source or there is a proxy, it is not possible to detect whether the risk exists. -1: the risk is detected but the ownership give up. If the detection of a code vulnerability, it can also be considered risk-free.  0: the risk is not detected.  1: the risk is detected, and the owner address is a common address (EOA), then it can be said that there is a clear risk.  2: The risk is detected, but the owner address is a contract address, the risk is not significant.  3: The risk is detected, but the owner address is not detectable / or an array. 
 * @member {Number} value
 */
ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultPrivilegedMinting.prototype.value = undefined;

/**
 * \"blackhole\" : the owner is a blackhole address. \"contract\" : the owner is a contract. \"eoa\" : the owner is a common address (eoa). \"multi-address\": the owner is an array/list. null: the address is not detected.
 * @member {String} ownerType
 */
ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultPrivilegedMinting.prototype.ownerType = undefined;

