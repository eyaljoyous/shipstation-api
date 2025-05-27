# Warehouse

A warehouse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**warehouse_id** | **string** | A string that uniquely identifies the warehouse | [optional] [readonly] [default to undefined]
**is_default** | **boolean** | Designates which single warehouse is the default on the account | [optional] [default to false]
**name** | **string** | Name of the warehouse | [optional] [default to undefined]
**created_at** | **string** | Timestamp that indicates when the warehouse was created | [optional] [readonly] [default to undefined]
**origin_address** | [**Address**](Address.md) | The origin address of the warehouse | [optional] [default to undefined]
**return_address** | [**Address**](Address.md) | The return address associated with the warehouse | [optional] [default to undefined]

## Example

```typescript
import { Warehouse } from 'shipstation-client';

const instance: Warehouse = {
    warehouse_id,
    is_default,
    name,
    created_at,
    origin_address,
    return_address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
