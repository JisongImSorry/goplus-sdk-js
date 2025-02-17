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
import {ApiClient} from '../ApiClient';

/**
 * The GetAccessTokenRequest model module.
 * @module model/GetAccessTokenRequest
 * @version 1.0
 */
export class GetAccessTokenRequest {
  /**
   * Constructs a new <code>GetAccessTokenRequest</code>.
   * @alias module:model/GetAccessTokenRequest
   * @class
   * @param app_key {String} app_key
   * @param sign {String} Sign Method Concatenate app_key, time, app_secret in turn, and do sha1() . Example app_key = mBOMg20QW11BbtyH4Zh0 time = 1647847498 app_secret = V6aRfxlPJwN3ViJSIFSCdxPvneajuJsh sign = sha1(mBOMg20QW11BbtyH4Zh01647847498V6aRfxlPJwN3ViJSIFSCdxPvneajuJsh)        = 7293d385b9225b3c3f232b76ba97255d0e21063e
   * @param time {Number} Quest timestamp (Second)
   */
  constructor(app_key, sign, time) {
    this.app_key = app_key;
    this.sign = sign;
    this.time = time;
  }

  /**
   * Constructs a <code>GetAccessTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAccessTokenRequest} obj Optional instance to populate.
   * @return {module:model/GetAccessTokenRequest} The populated <code>GetAccessTokenRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAccessTokenRequest();
      if (data.hasOwnProperty('app_key'))
        obj.app_key = ApiClient.convertToType(data['app_key'], 'String');
      if (data.hasOwnProperty('sign'))
        obj.sign = ApiClient.convertToType(data['sign'], 'String');
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Number');
    }
    return obj;
  }
}

/**
 * app_key
 * @member {String} app_key
 */
GetAccessTokenRequest.prototype.app_key = undefined;

/**
 * Sign Method Concatenate app_key, time, app_secret in turn, and do sha1() . Example app_key = mBOMg20QW11BbtyH4Zh0 time = 1647847498 app_secret = V6aRfxlPJwN3ViJSIFSCdxPvneajuJsh sign = sha1(mBOMg20QW11BbtyH4Zh01647847498V6aRfxlPJwN3ViJSIFSCdxPvneajuJsh)        = 7293d385b9225b3c3f232b76ba97255d0e21063e
 * @member {String} sign
 */
GetAccessTokenRequest.prototype.sign = undefined;

/**
 * Quest timestamp (Second)
 * @member {Number} time
 */
GetAccessTokenRequest.prototype.time = undefined;

