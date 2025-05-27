# ListShipmentsResponseBody

A list shipment response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipments** | [**Array&lt;Shipment&gt;**](Shipment.md) | The list of shipments returned by the api call | [default to undefined]
**total** | **number** | Total number of shipments returned by the api call | [readonly] [default to undefined]
**page** | **number** |  | [readonly] [default to undefined]
**pages** | **number** |  | [readonly] [default to undefined]
**links** | [**PaginationLink**](PaginationLink.md) |  | [readonly] [default to undefined]

## Example

```typescript
import { ListShipmentsResponseBody } from 'shipstation-client';

const instance: ListShipmentsResponseBody = {
    shipments,
    total,
    page,
    pages,
    links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
