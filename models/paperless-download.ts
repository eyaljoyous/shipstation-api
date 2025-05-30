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
 * The paperless details which may contain elements like `href`, `instructions` and `handoff_code`. 
 * @export
 * @interface PaperlessDownload
 */
export interface PaperlessDownload {
    [key: string]: any;

    /**
     * The URL of the linked resource, if any
     * @type {string}
     * @memberof PaperlessDownload
     */
    'href'?: string;
    /**
     * The instructions for the paperless download. 
     * @type {string}
     * @memberof PaperlessDownload
     */
    'instructions'?: string | null;
    /**
     * The handoff code for the paperless download. 
     * @type {string}
     * @memberof PaperlessDownload
     */
    'handoff_code'?: string | null;
}

