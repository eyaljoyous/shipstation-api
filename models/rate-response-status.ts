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
 * The possible rate response status values
 * @export
 * @enum {string}
 */

export const RateResponseStatus = {
    Working: 'working',
    Completed: 'completed',
    Partial: 'partial',
    Error: 'error'
} as const;

export type RateResponseStatus = typeof RateResponseStatus[keyof typeof RateResponseStatus];



