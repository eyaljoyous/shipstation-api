# UpdateSKUStockLevelsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_type** | **string** | The type of update to perform:   increment: Increase inventory quantity for specified location.   decrement: Decreate inventory quantity for specified location given a set of filters.   adjust: Adjust on hand quantity of inventory for specified location to the quantity indicated. This is done by either adding or removing inventory in the condition specified.   modify: Modify attributes on specified inventory. The filters work the same as for decrement transaction type.  | [default to undefined]
**inventory_location_id** | **string** |  | [default to undefined]
**sku** | **string** |  | [default to undefined]
**quantity** | **number** |  | [default to undefined]
**cost** | [**GetInventoryLevels200ResponseInventoryInnerAverageCost**](GetInventoryLevels200ResponseInventoryInnerAverageCost.md) |  | [optional] [default to undefined]
**condition** | **string** |  | [optional] [default to undefined]
**lot** | **string** |  | [optional] [default to undefined]
**usable_start_date** | **string** |  | [optional] [default to undefined]
**usable_end_date** | **string** |  | [optional] [default to undefined]
**effective_at** | **string** |  | [optional] [default to undefined]
**reason** | **string** |  | [optional] [default to undefined]
**notes** | **string** |  | [optional] [default to undefined]
**new_inventory_location_id** | **string** | Used with the modify transaction type to move inventory to a new location | [optional] [default to undefined]
**new_cost** | [**UpdateSKUStockLevelsRequestNewCost**](UpdateSKUStockLevelsRequestNewCost.md) |  | [optional] [default to undefined]
**new_condition** | **string** | Used with the modify transaction type to change the condition of existing inventory | [optional] [default to undefined]

## Example

```typescript
import { UpdateSKUStockLevelsRequest } from 'shipstation-client';

const instance: UpdateSKUStockLevelsRequest = {
    transaction_type,
    inventory_location_id,
    sku,
    quantity,
    cost,
    condition,
    lot,
    usable_start_date,
    usable_end_date,
    effective_at,
    reason,
    notes,
    new_inventory_location_id,
    new_cost,
    new_condition,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
