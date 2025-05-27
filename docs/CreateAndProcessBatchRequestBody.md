# CreateAndProcessBatchRequestBody

A create and process batch request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_batch_id** | **string** | A string that uniquely identifies the external batch | [optional] [default to undefined]
**batch_notes** | **string** | Add custom messages for a particular batch | [optional] [default to undefined]
**shipment_ids** | **Array&lt;string&gt;** | Array of shipment IDs used in the batch | [optional] [default to undefined]
**rate_ids** | **Array&lt;string&gt;** | Array of rate IDs used in the batch | [optional] [default to undefined]
**process_labels** | [**CreateAndProcessBatchRequestBodyProcessLabels**](CreateAndProcessBatchRequestBodyProcessLabels.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateAndProcessBatchRequestBody } from 'shipstation-client';

const instance: CreateAndProcessBatchRequestBody = {
    external_batch_id,
    batch_notes,
    shipment_ids,
    rate_ids,
    process_labels,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
