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
import type { Batch } from './batch';
// May contain unused imports in some cases
// @ts-ignore
import type { PaginationLink } from './pagination-link';

/**
 * A list batch response body
 * @export
 * @interface ListBatchesResponseBody
 */
export interface ListBatchesResponseBody {
    /**
     * Batch List
     * @type {Array<Batch>}
     * @memberof ListBatchesResponseBody
     */
    'batches': Array<Batch>;
    /**
     * The total number of batches the API call returned
     * @type {number}
     * @memberof ListBatchesResponseBody
     */
    'total': number;
    /**
     * The page that is currently being read
     * @type {number}
     * @memberof ListBatchesResponseBody
     */
    'page': number;
    /**
     * The total number of batch pages the API call returned
     * @type {number}
     * @memberof ListBatchesResponseBody
     */
    'pages': number;
    /**
     * 
     * @type {PaginationLink}
     * @memberof ListBatchesResponseBody
     */
    'links': PaginationLink;
}

