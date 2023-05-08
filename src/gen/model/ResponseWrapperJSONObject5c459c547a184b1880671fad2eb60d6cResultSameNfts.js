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
 * The ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultSameNfts model module.
 * @module model/ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultSameNfts
 * @version 1.0
 */
export class ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultSameNfts {
  /**
   * Constructs a new <code>ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultSameNfts</code>.
   * @alias module:model/ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultSameNfts
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultSameNfts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultSameNfts} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultSameNfts} The populated <code>ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultSameNfts</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultSameNfts();
      if (data.hasOwnProperty('nft_address'))
        obj.nftAddress = ApiClient.convertToType(data['nft_address'], 'String');
      if (data.hasOwnProperty('nft_name'))
        obj.nftName = ApiClient.convertToType(data['nft_name'], 'String');
      if (data.hasOwnProperty('nft_owner_number'))
        obj.nftOwnerNumber = ApiClient.convertToType(data['nft_owner_number'], 'Number');
      if (data.hasOwnProperty('create_block_number'))
        obj.createBlockNumber = ApiClient.convertToType(data['create_block_number'], 'Number');
      if (data.hasOwnProperty('nft_symbol'))
        obj.nftSymbol = ApiClient.convertToType(data['nft_symbol'], 'String');
    }
    return obj;
  }
}

/**
 * It describes the address of the NFTs;
 * @member {String} nftAddress
 */
ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultSameNfts.prototype.nftAddress = undefined;

/**
 * It describes the name of the NFT;
 * @member {String} nftName
 */
ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultSameNfts.prototype.nftName = undefined;

/**
 * It describes the holders of the NFT;
 * @member {Number} nftOwnerNumber
 */
ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultSameNfts.prototype.nftOwnerNumber = undefined;

/**
 * describes the number of blocks created for the NFT. Return \"null\" means no NFTs with duplicate name and symbol.
 * @member {Number} createBlockNumber
 */
ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultSameNfts.prototype.createBlockNumber = undefined;

/**
 * It describes the symbol of the NFT;
 * @member {String} nftSymbol
 */
ResponseWrapperJSONObject5c459c547a184b1880671fad2eb60d6cResultSameNfts.prototype.nftSymbol = undefined;

