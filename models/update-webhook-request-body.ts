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
import type { WebhookHeader } from './webhook-header';

/**
 * An update webhook request body
 * @export
 * @interface UpdateWebhookRequestBody
 */
export interface UpdateWebhookRequestBody {
    /**
     * The url that the wehbook sends the request
     * @type {string}
     * @memberof UpdateWebhookRequestBody
     */
    'url'?: string;
    /**
     * Array of custom webhook headers
     * @type {Array<WebhookHeader>}
     * @memberof UpdateWebhookRequestBody
     */
    'headers'?: Array<WebhookHeader>;
}

