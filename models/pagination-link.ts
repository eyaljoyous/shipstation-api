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
import type { Link } from './link';
// May contain unused imports in some cases
// @ts-ignore
import type { OptionalLink } from './optional-link';

/**
 * Helpful links to other pages of results
 * @export
 * @interface PaginationLink
 */
export interface PaginationLink {
    /**
     * The link to the first page of results.  This object will _always_ have an `href` field. If there are no results, then the first page will contain an empty array of items. 
     * @type {Link}
     * @memberof PaginationLink
     */
    'first': Link;
    /**
     * The link to the final page of results.  This object will _always_ have an `href` field. If there are no results, then the final page will contain an empty array of items. 
     * @type {Link}
     * @memberof PaginationLink
     */
    'last': Link;
    /**
     * The link to the previous page of results.  The `href` field will only be set when the `page` is 2 or greater. 
     * @type {OptionalLink}
     * @memberof PaginationLink
     */
    'prev': OptionalLink;
    /**
     * The link to the next page of results.  The `href` field will only be set when the `page` is less than `pages`. 
     * @type {OptionalLink}
     * @memberof PaginationLink
     */
    'next': OptionalLink;
}

