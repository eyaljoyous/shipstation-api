# BatchResponseError

A batch response error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **string** | Error message associated with the shipment. | [optional] [readonly] [default to undefined]
**shipment_id** | **string** | A string that uniquely identifies the shipment | [optional] [readonly] [default to undefined]
**external_shipment_id** | **string** | An external shipment id associated with the shipment | [optional] [readonly] [default to undefined]

## Example

```typescript
import { BatchResponseError } from 'shipstation-client';

const instance: BatchResponseError = {
    error,
    shipment_id,
    external_shipment_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
