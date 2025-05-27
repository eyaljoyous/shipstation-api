# CreateBatchRequestBody

A create batch request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_batch_id** | **string** | A string that uniquely identifies the external batch | [optional] [default to undefined]
**batch_notes** | **string** | Add custom messages for a particular batch | [optional] [default to undefined]
**shipment_ids** | **Array&lt;string&gt;** | Array of shipment IDs used in the batch | [optional] [default to undefined]
**rate_ids** | **Array&lt;string&gt;** | Array of rate IDs used in the batch | [optional] [default to undefined]

## Example

```typescript
import { CreateBatchRequestBody } from 'shipstation-client';

const instance: CreateBatchRequestBody = {
    external_batch_id,
    batch_notes,
    shipment_ids,
    rate_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
