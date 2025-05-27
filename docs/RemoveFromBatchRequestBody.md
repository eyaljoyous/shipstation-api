# RemoveFromBatchRequestBody

A modify batch request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipment_ids** | **Array&lt;string&gt;** | The Shipment Ids to be modified on the batch | [optional] [default to undefined]
**rate_ids** | **Array&lt;string&gt;** | Array of Rate IDs to be modifed on the batch | [optional] [default to undefined]

## Example

```typescript
import { RemoveFromBatchRequestBody } from 'shipstation-client';

const instance: RemoveFromBatchRequestBody = {
    shipment_ids,
    rate_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
