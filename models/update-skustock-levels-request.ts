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
import type { GetInventoryLevels200ResponseInventoryInnerAverageCost } from './get-inventory-levels200-response-inventory-inner-average-cost';
// May contain unused imports in some cases
// @ts-ignore
import type { UpdateSKUStockLevelsRequestNewCost } from './update-skustock-levels-request-new-cost';

/**
 * 
 * @export
 * @interface UpdateSKUStockLevelsRequest
 */
export interface UpdateSKUStockLevelsRequest {
    /**
     * The type of update to perform:   increment: Increase inventory quantity for specified location.   decrement: Decreate inventory quantity for specified location given a set of filters.   adjust: Adjust on hand quantity of inventory for specified location to the quantity indicated. This is done by either adding or removing inventory in the condition specified.   modify: Modify attributes on specified inventory. The filters work the same as for decrement transaction type. 
     * @type {string}
     * @memberof UpdateSKUStockLevelsRequest
     */
    'transaction_type': UpdateSKUStockLevelsRequestTransactionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof UpdateSKUStockLevelsRequest
     */
    'inventory_location_id': string;
    /**
     * 
     * @type {string}
     * @memberof UpdateSKUStockLevelsRequest
     */
    'sku': string;
    /**
     * 
     * @type {number}
     * @memberof UpdateSKUStockLevelsRequest
     */
    'quantity': number;
    /**
     * 
     * @type {GetInventoryLevels200ResponseInventoryInnerAverageCost}
     * @memberof UpdateSKUStockLevelsRequest
     */
    'cost'?: GetInventoryLevels200ResponseInventoryInnerAverageCost;
    /**
     * 
     * @type {string}
     * @memberof UpdateSKUStockLevelsRequest
     */
    'condition'?: UpdateSKUStockLevelsRequestConditionEnum;
    /**
     * 
     * @type {string}
     * @memberof UpdateSKUStockLevelsRequest
     */
    'lot'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateSKUStockLevelsRequest
     */
    'usable_start_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateSKUStockLevelsRequest
     */
    'usable_end_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateSKUStockLevelsRequest
     */
    'effective_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateSKUStockLevelsRequest
     */
    'reason'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateSKUStockLevelsRequest
     */
    'notes'?: string;
    /**
     * Used with the modify transaction type to move inventory to a new location
     * @type {string}
     * @memberof UpdateSKUStockLevelsRequest
     */
    'new_inventory_location_id'?: string;
    /**
     * 
     * @type {UpdateSKUStockLevelsRequestNewCost}
     * @memberof UpdateSKUStockLevelsRequest
     */
    'new_cost'?: UpdateSKUStockLevelsRequestNewCost;
    /**
     * Used with the modify transaction type to change the condition of existing inventory
     * @type {string}
     * @memberof UpdateSKUStockLevelsRequest
     */
    'new_condition'?: UpdateSKUStockLevelsRequestNewConditionEnum;
}

export const UpdateSKUStockLevelsRequestTransactionTypeEnum = {
    Increment: 'increment',
    Decrement: 'decrement',
    Adjust: 'adjust',
    Modify: 'modify'
} as const;

export type UpdateSKUStockLevelsRequestTransactionTypeEnum = typeof UpdateSKUStockLevelsRequestTransactionTypeEnum[keyof typeof UpdateSKUStockLevelsRequestTransactionTypeEnum];
export const UpdateSKUStockLevelsRequestConditionEnum = {
    Sellable: 'sellable',
    Damaged: 'damaged',
    Expired: 'expired',
    QaHold: 'qa_hold'
} as const;

export type UpdateSKUStockLevelsRequestConditionEnum = typeof UpdateSKUStockLevelsRequestConditionEnum[keyof typeof UpdateSKUStockLevelsRequestConditionEnum];
export const UpdateSKUStockLevelsRequestNewConditionEnum = {
    Sellable: 'sellable',
    Damaged: 'damaged',
    Expired: 'expired',
    QaHold: 'qa_hold'
} as const;

export type UpdateSKUStockLevelsRequestNewConditionEnum = typeof UpdateSKUStockLevelsRequestNewConditionEnum[keyof typeof UpdateSKUStockLevelsRequestNewConditionEnum];


