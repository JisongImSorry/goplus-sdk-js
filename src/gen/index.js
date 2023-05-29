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
import {ApiClient} from './ApiClient';
import {AbiAddressInfo} from './model/AbiAddressInfo';
import {AbiParamInfo} from './model/AbiParamInfo';
import {ApproveAddressInfo} from './model/ApproveAddressInfo';
import {ApproveErc1155Result} from './model/ApproveErc1155Result';
import {ApproveNFT1155ListResponse} from './model/ApproveNFT1155ListResponse';
import {ApproveNFTListResponse} from './model/ApproveNFTListResponse';
import {ApproveResult} from './model/ApproveResult';
import {ApproveTokenOutListResponse} from './model/ApproveTokenOutListResponse';
import {ApproveTokenResult} from './model/ApproveTokenResult';
import {AuditInfo} from './model/AuditInfo';
import {ContractApproveResponse} from './model/ContractApproveResponse';
import {Contracts} from './model/Contracts';
import {ContractsSecurity} from './model/ContractsSecurity';
import {DappContractSecurityResponse} from './model/DappContractSecurityResponse';
import {GetAccessTokenRequest} from './model/GetAccessTokenRequest';
import {GetAccessTokenResponse} from './model/GetAccessTokenResponse';
import {JSONObject} from './model/JSONObject';
import {Mapstringstring} from './model/Mapstringstring';
import {ParseAbiDataRequest} from './model/ParseAbiDataRequest';
import {ParseAbiDataResponse} from './model/ParseAbiDataResponse';
import {ResponseWrapperAddressContract} from './model/ResponseWrapperAddressContract';
import {ResponseWrapperAddressContractResult} from './model/ResponseWrapperAddressContractResult';
import {ResponseWrapperContractApproveResponse} from './model/ResponseWrapperContractApproveResponse';
import {ResponseWrapperDappContractSecurityResponse} from './model/ResponseWrapperDappContractSecurityResponse';
import {ResponseWrapperGetAccessTokenResponse} from './model/ResponseWrapperGetAccessTokenResponse';
import {ResponseWrapperGetDefiInfo} from './model/ResponseWrapperGetDefiInfo';
import {ResponseWrapperGetDefiInfoResult} from './model/ResponseWrapperGetDefiInfoResult';
import {ResponseWrapperGetDefiInfoResultOwner} from './model/ResponseWrapperGetDefiInfoResultOwner';
import {ResponseWrapperGetNftInfo} from './model/ResponseWrapperGetNftInfo';
import {ResponseWrapperGetNftInfoResult} from './model/ResponseWrapperGetNftInfoResult';
import {ResponseWrapperGetNftInfoResultPrivilegedBurn} from './model/ResponseWrapperGetNftInfoResultPrivilegedBurn';
import {ResponseWrapperGetNftInfoResultPrivilegedMinting} from './model/ResponseWrapperGetNftInfoResultPrivilegedMinting';
import {ResponseWrapperGetNftInfoResultSameNfts} from './model/ResponseWrapperGetNftInfoResultSameNfts';
import {ResponseWrapperGetNftInfoResultSelfDestruct} from './model/ResponseWrapperGetNftInfoResultSelfDestruct';
import {ResponseWrapperGetNftInfoResultTransferWithoutApproval} from './model/ResponseWrapperGetNftInfoResultTransferWithoutApproval';
import {ResponseWrapperJSONObject} from './model/ResponseWrapperJSONObject';
import {ResponseWrapperListApproveNFT1155ListResponse} from './model/ResponseWrapperListApproveNFT1155ListResponse';
import {ResponseWrapperListApproveNFTListResponse} from './model/ResponseWrapperListApproveNFTListResponse';
import {ResponseWrapperListApproveTokenOutListResponse} from './model/ResponseWrapperListApproveTokenOutListResponse';
import {ResponseWrapperListGetChainsList} from './model/ResponseWrapperListGetChainsList';
import {ResponseWrapperListGetChainsListResult} from './model/ResponseWrapperListGetChainsListResult';
import {ResponseWrapperListJSONObject} from './model/ResponseWrapperListJSONObject';
import {ResponseWrapperMapstringstring} from './model/ResponseWrapperMapstringstring';
import {ResponseWrapperParseAbiDataResponse} from './model/ResponseWrapperParseAbiDataResponse';
import {ResponseWrapperPhishingSite} from './model/ResponseWrapperPhishingSite';
import {ResponseWrapperPhishingSiteResult} from './model/ResponseWrapperPhishingSiteResult';
import {ResponseWrapperTaTokenSecurityResponse} from './model/ResponseWrapperTaTokenSecurityResponse';
import {ResponseWrapperTokenSecurity} from './model/ResponseWrapperTokenSecurity';
import {ResponseWrapperTokenSecurityDex} from './model/ResponseWrapperTokenSecurityDex';
import {ResponseWrapperTokenSecurityLpHolders} from './model/ResponseWrapperTokenSecurityLpHolders';
import {ResponseWrapperTokenSecurityResult} from './model/ResponseWrapperTokenSecurityResult';
import {ResponseWrapperobject} from './model/ResponseWrapperobject';
import {TaTokenSecurityResponse} from './model/TaTokenSecurityResponse';
import {ApproveControllerV1Api} from './api/ApproveControllerV1Api';
import {ApproveControllerV2Api} from './api/ApproveControllerV2Api';
import {ContractAbiControllerApi} from './api/ContractAbiControllerApi';
import {DappControllerApi} from './api/DappControllerApi';
import {DefiControllerApi} from './api/DefiControllerApi';
import {NftControllerApi} from './api/NftControllerApi';
import {TokenControllerApi} from './api/TokenControllerApi';
import {TokenControllerV1Api} from './api/TokenControllerV1Api';
import {WebsiteControllerApi} from './api/WebsiteControllerApi';

/**
* Object.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var GoPlusSecurityApiDocument = require('index'); // See note below*.
* var xxxSvc = new GoPlusSecurityApiDocument.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new GoPlusSecurityApiDocument.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new GoPlusSecurityApiDocument.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new GoPlusSecurityApiDocument.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AbiAddressInfo model constructor.
     * @property {module:model/AbiAddressInfo}
     */
    AbiAddressInfo,

    /**
     * The AbiParamInfo model constructor.
     * @property {module:model/AbiParamInfo}
     */
    AbiParamInfo,

    /**
     * The ApproveAddressInfo model constructor.
     * @property {module:model/ApproveAddressInfo}
     */
    ApproveAddressInfo,

    /**
     * The ApproveErc1155Result model constructor.
     * @property {module:model/ApproveErc1155Result}
     */
    ApproveErc1155Result,

    /**
     * The ApproveNFT1155ListResponse model constructor.
     * @property {module:model/ApproveNFT1155ListResponse}
     */
    ApproveNFT1155ListResponse,

    /**
     * The ApproveNFTListResponse model constructor.
     * @property {module:model/ApproveNFTListResponse}
     */
    ApproveNFTListResponse,

    /**
     * The ApproveResult model constructor.
     * @property {module:model/ApproveResult}
     */
    ApproveResult,

    /**
     * The ApproveTokenOutListResponse model constructor.
     * @property {module:model/ApproveTokenOutListResponse}
     */
    ApproveTokenOutListResponse,

    /**
     * The ApproveTokenResult model constructor.
     * @property {module:model/ApproveTokenResult}
     */
    ApproveTokenResult,

    /**
     * The AuditInfo model constructor.
     * @property {module:model/AuditInfo}
     */
    AuditInfo,

    /**
     * The ContractApproveResponse model constructor.
     * @property {module:model/ContractApproveResponse}
     */
    ContractApproveResponse,

    /**
     * The Contracts model constructor.
     * @property {module:model/Contracts}
     */
    Contracts,

    /**
     * The ContractsSecurity model constructor.
     * @property {module:model/ContractsSecurity}
     */
    ContractsSecurity,

    /**
     * The DappContractSecurityResponse model constructor.
     * @property {module:model/DappContractSecurityResponse}
     */
    DappContractSecurityResponse,

    /**
     * The GetAccessTokenRequest model constructor.
     * @property {module:model/GetAccessTokenRequest}
     */
    GetAccessTokenRequest,

    /**
     * The GetAccessTokenResponse model constructor.
     * @property {module:model/GetAccessTokenResponse}
     */
    GetAccessTokenResponse,

    /**
     * The JSONObject model constructor.
     * @property {module:model/JSONObject}
     */
    JSONObject,

    /**
     * The Mapstringstring model constructor.
     * @property {module:model/Mapstringstring}
     */
    Mapstringstring,

    /**
     * The ParseAbiDataRequest model constructor.
     * @property {module:model/ParseAbiDataRequest}
     */
    ParseAbiDataRequest,

    /**
     * The ParseAbiDataResponse model constructor.
     * @property {module:model/ParseAbiDataResponse}
     */
    ParseAbiDataResponse,

    /**
     * The ResponseWrapperAddressContract model constructor.
     * @property {module:model/ResponseWrapperAddressContract}
     */
    ResponseWrapperAddressContract,

    /**
     * The ResponseWrapperAddressContractResult model constructor.
     * @property {module:model/ResponseWrapperAddressContractResult}
     */
    ResponseWrapperAddressContractResult,

    /**
     * The ResponseWrapperContractApproveResponse model constructor.
     * @property {module:model/ResponseWrapperContractApproveResponse}
     */
    ResponseWrapperContractApproveResponse,

    /**
     * The ResponseWrapperDappContractSecurityResponse model constructor.
     * @property {module:model/ResponseWrapperDappContractSecurityResponse}
     */
    ResponseWrapperDappContractSecurityResponse,

    /**
     * The ResponseWrapperGetAccessTokenResponse model constructor.
     * @property {module:model/ResponseWrapperGetAccessTokenResponse}
     */
    ResponseWrapperGetAccessTokenResponse,

    /**
     * The ResponseWrapperGetDefiInfo model constructor.
     * @property {module:model/ResponseWrapperGetDefiInfo}
     */
    ResponseWrapperGetDefiInfo,

    /**
     * The ResponseWrapperGetDefiInfoResult model constructor.
     * @property {module:model/ResponseWrapperGetDefiInfoResult}
     */
    ResponseWrapperGetDefiInfoResult,

    /**
     * The ResponseWrapperGetDefiInfoResultOwner model constructor.
     * @property {module:model/ResponseWrapperGetDefiInfoResultOwner}
     */
    ResponseWrapperGetDefiInfoResultOwner,

    /**
     * The ResponseWrapperGetNftInfo model constructor.
     * @property {module:model/ResponseWrapperGetNftInfo}
     */
    ResponseWrapperGetNftInfo,

    /**
     * The ResponseWrapperGetNftInfoResult model constructor.
     * @property {module:model/ResponseWrapperGetNftInfoResult}
     */
    ResponseWrapperGetNftInfoResult,

    /**
     * The ResponseWrapperGetNftInfoResultPrivilegedBurn model constructor.
     * @property {module:model/ResponseWrapperGetNftInfoResultPrivilegedBurn}
     */
    ResponseWrapperGetNftInfoResultPrivilegedBurn,

    /**
     * The ResponseWrapperGetNftInfoResultPrivilegedMinting model constructor.
     * @property {module:model/ResponseWrapperGetNftInfoResultPrivilegedMinting}
     */
    ResponseWrapperGetNftInfoResultPrivilegedMinting,

    /**
     * The ResponseWrapperGetNftInfoResultSameNfts model constructor.
     * @property {module:model/ResponseWrapperGetNftInfoResultSameNfts}
     */
    ResponseWrapperGetNftInfoResultSameNfts,

    /**
     * The ResponseWrapperGetNftInfoResultSelfDestruct model constructor.
     * @property {module:model/ResponseWrapperGetNftInfoResultSelfDestruct}
     */
    ResponseWrapperGetNftInfoResultSelfDestruct,

    /**
     * The ResponseWrapperGetNftInfoResultTransferWithoutApproval model constructor.
     * @property {module:model/ResponseWrapperGetNftInfoResultTransferWithoutApproval}
     */
    ResponseWrapperGetNftInfoResultTransferWithoutApproval,

    /**
     * The ResponseWrapperJSONObject model constructor.
     * @property {module:model/ResponseWrapperJSONObject}
     */
    ResponseWrapperJSONObject,

    /**
     * The ResponseWrapperListApproveNFT1155ListResponse model constructor.
     * @property {module:model/ResponseWrapperListApproveNFT1155ListResponse}
     */
    ResponseWrapperListApproveNFT1155ListResponse,

    /**
     * The ResponseWrapperListApproveNFTListResponse model constructor.
     * @property {module:model/ResponseWrapperListApproveNFTListResponse}
     */
    ResponseWrapperListApproveNFTListResponse,

    /**
     * The ResponseWrapperListApproveTokenOutListResponse model constructor.
     * @property {module:model/ResponseWrapperListApproveTokenOutListResponse}
     */
    ResponseWrapperListApproveTokenOutListResponse,

    /**
     * The ResponseWrapperListGetChainsList model constructor.
     * @property {module:model/ResponseWrapperListGetChainsList}
     */
    ResponseWrapperListGetChainsList,

    /**
     * The ResponseWrapperListGetChainsListResult model constructor.
     * @property {module:model/ResponseWrapperListGetChainsListResult}
     */
    ResponseWrapperListGetChainsListResult,

    /**
     * The ResponseWrapperListJSONObject model constructor.
     * @property {module:model/ResponseWrapperListJSONObject}
     */
    ResponseWrapperListJSONObject,

    /**
     * The ResponseWrapperMapstringstring model constructor.
     * @property {module:model/ResponseWrapperMapstringstring}
     */
    ResponseWrapperMapstringstring,

    /**
     * The ResponseWrapperParseAbiDataResponse model constructor.
     * @property {module:model/ResponseWrapperParseAbiDataResponse}
     */
    ResponseWrapperParseAbiDataResponse,

    /**
     * The ResponseWrapperPhishingSite model constructor.
     * @property {module:model/ResponseWrapperPhishingSite}
     */
    ResponseWrapperPhishingSite,

    /**
     * The ResponseWrapperPhishingSiteResult model constructor.
     * @property {module:model/ResponseWrapperPhishingSiteResult}
     */
    ResponseWrapperPhishingSiteResult,

    /**
     * The ResponseWrapperTaTokenSecurityResponse model constructor.
     * @property {module:model/ResponseWrapperTaTokenSecurityResponse}
     */
    ResponseWrapperTaTokenSecurityResponse,

    /**
     * The ResponseWrapperTokenSecurity model constructor.
     * @property {module:model/ResponseWrapperTokenSecurity}
     */
    ResponseWrapperTokenSecurity,

    /**
     * The ResponseWrapperTokenSecurityDex model constructor.
     * @property {module:model/ResponseWrapperTokenSecurityDex}
     */
    ResponseWrapperTokenSecurityDex,

    /**
     * The ResponseWrapperTokenSecurityLpHolders model constructor.
     * @property {module:model/ResponseWrapperTokenSecurityLpHolders}
     */
    ResponseWrapperTokenSecurityLpHolders,

    /**
     * The ResponseWrapperTokenSecurityResult model constructor.
     * @property {module:model/ResponseWrapperTokenSecurityResult}
     */
    ResponseWrapperTokenSecurityResult,

    /**
     * The ResponseWrapperobject model constructor.
     * @property {module:model/ResponseWrapperobject}
     */
    ResponseWrapperobject,

    /**
     * The TaTokenSecurityResponse model constructor.
     * @property {module:model/TaTokenSecurityResponse}
     */
    TaTokenSecurityResponse,

    /**
    * The ApproveControllerV1Api service constructor.
    * @property {module:api/ApproveControllerV1Api}
    */
    ApproveControllerV1Api,

    /**
    * The ApproveControllerV2Api service constructor.
    * @property {module:api/ApproveControllerV2Api}
    */
    ApproveControllerV2Api,

    /**
    * The ContractAbiControllerApi service constructor.
    * @property {module:api/ContractAbiControllerApi}
    */
    ContractAbiControllerApi,

    /**
    * The DappControllerApi service constructor.
    * @property {module:api/DappControllerApi}
    */
    DappControllerApi,

    /**
    * The DefiControllerApi service constructor.
    * @property {module:api/DefiControllerApi}
    */
    DefiControllerApi,

    /**
    * The NftControllerApi service constructor.
    * @property {module:api/NftControllerApi}
    */
    NftControllerApi,

    /**
    * The TokenControllerApi service constructor.
    * @property {module:api/TokenControllerApi}
    */
    TokenControllerApi,

    /**
    * The TokenControllerV1Api service constructor.
    * @property {module:api/TokenControllerV1Api}
    */
    TokenControllerV1Api,

    /**
    * The WebsiteControllerApi service constructor.
    * @property {module:api/WebsiteControllerApi}
    */
    WebsiteControllerApi
};
