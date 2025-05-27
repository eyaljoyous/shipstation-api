# TagShipmentResponseBody

A shipment add tag response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipment_id** | **string** | A string that uniquely identifies the shipment | [readonly] [default to undefined]
**tag** | [**Tag**](Tag.md) | The tag that is now associated with this shipment | [readonly] [default to undefined]

## Example

```typescript
import { TagShipmentResponseBody } from 'shipstation-client';

const instance: TagShipmentResponseBody = {
    shipment_id,
    tag,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
