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


// May contain unused imports in some cases
// @ts-ignore
import type { Address } from './address';

/**
 * A warehouse
 * @export
 * @interface Warehouse
 */
export interface Warehouse {
    /**
     * A string that uniquely identifies the warehouse
     * @type {string}
     * @memberof Warehouse
     */
    'warehouse_id'?: string;
    /**
     * Designates which single warehouse is the default on the account
     * @type {boolean}
     * @memberof Warehouse
     */
    'is_default'?: boolean | null;
    /**
     * Name of the warehouse
     * @type {string}
     * @memberof Warehouse
     */
    'name'?: string;
    /**
     * Timestamp that indicates when the warehouse was created
     * @type {string}
     * @memberof Warehouse
     */
    'created_at'?: string;
    /**
     * The origin address of the warehouse
     * @type {Address}
     * @memberof Warehouse
     */
    'origin_address'?: Address;
    /**
     * The return address associated with the warehouse
     * @type {Address}
     * @memberof Warehouse
     */
    'return_address'?: Address;
}

