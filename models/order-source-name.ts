/* tslint:disable */
/* eslint-disable */
/**
 * ShipStation API v2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The order sources that are supported by ShipStation
 * @export
 * @enum {string}
 */

export const OrderSourceName = {
    AmazonCa: 'amazon_ca',
    AmazonUs: 'amazon_us',
    Brightpearl: 'brightpearl',
    ChannelAdvisor: 'channel_advisor',
    Cratejoy: 'cratejoy',
    Ebay: 'ebay',
    Etsy: 'etsy',
    Jane: 'jane',
    GrouponGoods: 'groupon_goods',
    Magento: 'magento',
    Paypal: 'paypal',
    SellerActive: 'seller_active',
    Shopify: 'shopify',
    StitchLabs: 'stitch_labs',
    Squarespace: 'squarespace',
    ThreeDcart: 'three_dcart',
    Tophatter: 'tophatter',
    Walmart: 'walmart',
    WooCommerce: 'woo_commerce',
    Volusion: 'volusion'
} as const;

export type OrderSourceName = typeof OrderSourceName[keyof typeof OrderSourceName];



