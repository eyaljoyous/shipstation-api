# GetInventoryLevels200ResponseInventoryInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | **string** |  | [optional] [default to undefined]
**on_hand** | **number** |  | [optional] [default to undefined]
**allocated** | **number** |  | [optional] [default to undefined]
**available** | **number** |  | [optional] [default to undefined]
**average_cost** | [**GetInventoryLevels200ResponseInventoryInnerAverageCost**](GetInventoryLevels200ResponseInventoryInnerAverageCost.md) |  | [optional] [default to undefined]
**inventory_warehouse_id** | **string** |  | [optional] [default to undefined]
**inventory_location_id** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GetInventoryLevels200ResponseInventoryInner } from 'shipstation-client';

const instance: GetInventoryLevels200ResponseInventoryInner = {
    sku,
    on_hand,
    allocated,
    available,
    average_cost,
    inventory_warehouse_id,
    inventory_location_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
