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
 * The source of the error, as indicated by the name this informs us if the API call failed because of the carrier, the order source, or the ShipStation API itself. 
 * @export
 * @enum {string}
 */

export const ErrorSource = {
    Carrier: 'carrier',
    OrderSource: 'order_source',
    ShipStation: 'ShipStation'
} as const;

export type ErrorSource = typeof ErrorSource[keyof typeof ErrorSource];



