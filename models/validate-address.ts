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
 * The possible validate address values
 * @export
 * @enum {string}
 */

export const ValidateAddress = {
    NoValidation: 'no_validation',
    ValidateOnly: 'validate_only',
    ValidateAndClean: 'validate_and_clean'
} as const;

export type ValidateAddress = typeof ValidateAddress[keyof typeof ValidateAddress];



