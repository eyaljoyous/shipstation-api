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
import type { TrackEvent } from './track-event';
// May contain unused imports in some cases
// @ts-ignore
import type { TrackingStatusDetailCode } from './tracking-status-detail-code';

/**
 * A tracking information resource
 * @export
 * @interface TrackingInformation
 */
export interface TrackingInformation {
    [key: string]: any;

    /**
     * A tracking number for a package. The format depends on the carrier.
     * @type {string}
     * @memberof TrackingInformation
     */
    'tracking_number'?: string;
    /**
     * Carrier Tracking Url, if available
     * @type {string}
     * @memberof TrackingInformation
     */
    'tracking_url'?: string;
    /**
     * 
     * @type {TrackingStatusDetailCode}
     * @memberof TrackingInformation
     */
    'status_code'?: TrackingStatusDetailCode;
    /**
     * 
     * @type {TrackingStatusDetailCode}
     * @memberof TrackingInformation
     */
    'status_detail_code'?: TrackingStatusDetailCode;
    /**
     * A [shipping carrier] , such as `fedex`, `dhl_express`, `stamps_com`, etc. 
     * @type {string}
     * @memberof TrackingInformation
     */
    'carrier_code'?: string;
    /**
     * The unique ID of the [carrier account] that was used to create this label 
     * @type {number}
     * @memberof TrackingInformation
     */
    'carrier_id'?: number;
    /**
     * Status description
     * @type {string}
     * @memberof TrackingInformation
     */
    'status_description'?: string;
    /**
     * Status detail description
     * @type {string}
     * @memberof TrackingInformation
     */
    'status_detail_description'?: string;
    /**
     * Carrier status code
     * @type {string}
     * @memberof TrackingInformation
     */
    'carrier_status_code'?: string;
    /**
     * Carrier detail code
     * @type {string}
     * @memberof TrackingInformation
     */
    'carrier_detail_code'?: string;
    /**
     * carrier status description
     * @type {string}
     * @memberof TrackingInformation
     */
    'carrier_status_description'?: string;
    /**
     * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time. 
     * @type {string}
     * @memberof TrackingInformation
     */
    'ship_date'?: string;
    /**
     * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time. 
     * @type {string}
     * @memberof TrackingInformation
     */
    'estimated_delivery_date'?: string;
    /**
     * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time. 
     * @type {string}
     * @memberof TrackingInformation
     */
    'actual_delivery_date'?: string;
    /**
     * Exception description
     * @type {string}
     * @memberof TrackingInformation
     */
    'exception_description'?: string;
    /**
     * The events that have occured during the lifetime of this tracking number.
     * @type {Array<TrackEvent>}
     * @memberof TrackingInformation
     */
    'events'?: Array<TrackEvent>;
}



