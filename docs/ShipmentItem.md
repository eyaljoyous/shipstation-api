# ShipmentItem

A shipment item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | item name | [optional] [default to undefined]
**sales_order_id** | **string** | sales order id | [optional] [default to undefined]
**sales_order_item_id** | **string** | sales order item id | [optional] [default to undefined]
**quantity** | **number** | The quantity of this item included in the shipment | [optional] [default to undefined]
**sku** | **string** | Item Stock Keeping Unit | [optional] [default to undefined]
**external_order_id** | **string** | external order id | [optional] [default to undefined]
**external_order_item_id** | **string** | external order item id | [optional] [default to undefined]
**asin** | **string** | Amazon Standard Identification Number | [optional] [default to undefined]
**order_source_code** | [**OrderSourceName**](OrderSourceName.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ShipmentItem } from 'shipstation-client';

const instance: ShipmentItem = {
    name,
    sales_order_id,
    sales_order_item_id,
    quantity,
    sku,
    external_order_id,
    external_order_item_id,
    asin,
    order_source_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
