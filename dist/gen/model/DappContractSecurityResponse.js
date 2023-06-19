"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DappContractSecurityResponse = void 0;
var _ApiClient = require("../ApiClient");
var _AuditInfo = require("./AuditInfo");
var _ContractsSecurity = require("./ContractsSecurity");
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
 * The DappContractSecurityResponse model module.
 * @module model/DappContractSecurityResponse
 * @version 1.0
 */
class DappContractSecurityResponse {
  /**
   * Constructs a new <code>DappContractSecurityResponse</code>.
   * @alias module:model/DappContractSecurityResponse
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>DappContractSecurityResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DappContractSecurityResponse} obj Optional instance to populate.
   * @return {module:model/DappContractSecurityResponse} The populated <code>DappContractSecurityResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DappContractSecurityResponse();
      if (data.hasOwnProperty('audit_info')) obj.audit_info = _ApiClient.ApiClient.convertToType(data['audit_info'], [_AuditInfo.AuditInfo]);
      if (data.hasOwnProperty('contracts_security')) obj.contracts_security = _ApiClient.ApiClient.convertToType(data['contracts_security'], [_ContractsSecurity.ContractsSecurity]);
      if (data.hasOwnProperty('is_audit')) obj.is_audit = _ApiClient.ApiClient.convertToType(data['is_audit'], 'Number');
      if (data.hasOwnProperty('project_name')) obj.project_name = _ApiClient.ApiClient.convertToType(data['project_name'], 'String');
      if (data.hasOwnProperty('trust_list')) obj.trust_list = _ApiClient.ApiClient.convertToType(data['trust_list'], 'Number');
      if (data.hasOwnProperty('url')) obj.url = _ApiClient.ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }
}

/**
 * audit info(Notice:When the dApp was not audited, (\"is_audit\"=0), it will return \"null\".If there are multiple audit reports, the information of the latest audit report is displayed.)
 * @member {Array.<module:model/AuditInfo>} audit_info
 */
exports.DappContractSecurityResponse = DappContractSecurityResponse;
DappContractSecurityResponse.prototype.audit_info = undefined;

/**
 * @member {Array.<module:model/ContractsSecurity>} contracts_security
 */
DappContractSecurityResponse.prototype.contracts_security = undefined;

/**
 * It describes whether the dApp was audited by a reputable audit firm. \"1\" means true; \"0\" means that we have not found audit information for this dApp .(Notice:Return \"0\" does not mean the dApp was not audited. Maybe we just haven't found audit information for this dApp yet.)
 * @member {Number} is_audit
 */
DappContractSecurityResponse.prototype.is_audit = undefined;

/**
 * It describes the dApp project name.
 * @member {String} project_name
 */
DappContractSecurityResponse.prototype.project_name = undefined;

/**
 * It describes whether the dapp is a famous and trustworthy one. \"1\" means true;  \"0\" means that this dapp is not yet in our trusted list.(Notice:(1) Only \"trust_list\": \"1\" means it is a famous and trustworthy dapp.  (2) \"0\" return doesn't mean it is risky.)
 * @member {Number} trust_list
 */
DappContractSecurityResponse.prototype.trust_list = undefined;

/**
 * It describes the dApp's website link.
 * @member {String} url
 */
DappContractSecurityResponse.prototype.url = undefined;