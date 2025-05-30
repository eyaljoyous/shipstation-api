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
 * A service offered by the carrier
 * @export
 * @interface Service
 */
export interface Service {
    /**
     * A string that uniquely identifies the carrier
     * @type {string}
     * @memberof Service
     */
    'carrier_id'?: string;
    /**
     * A string that uniquely identifies a ShipStation resource, such as a carrier, label, shipment, etc.
     * @type {string}
     * @memberof Service
     */
    'carrier_code'?: string;
    /**
     * service code
     * @type {string}
     * @memberof Service
     */
    'service_code'?: string;
    /**
     * User friendly service name
     * @type {string}
     * @memberof Service
     */
    'name'?: string;
    /**
     * Supports domestic shipping
     * @type {boolean}
     * @memberof Service
     */
    'domestic'?: boolean;
    /**
     * Supports international shipping.
     * @type {boolean}
     * @memberof Service
     */
    'international'?: boolean;
    /**
     * Carrier supports multiple packages per shipment
     * @type {boolean}
     * @memberof Service
     */
    'is_multi_package_supported'?: boolean;
}

