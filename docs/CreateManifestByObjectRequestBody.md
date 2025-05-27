# CreateManifestByObjectRequestBody

A create manifest request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_id** | **string** | A string that uniquely identifies the carrier | [default to undefined]
**excluded_label_ids** | **Array&lt;string&gt;** | The list of label ids to exclude from the manifest | [optional] [default to undefined]
**label_ids** | **Array&lt;string&gt;** | The list of label ids to include for the manifest | [optional] [default to undefined]
**warehouse_id** | **string** | A string that uniquely identifies the warehouse | [default to undefined]
**ship_date** | **string** | The ship date that the shipment will be sent out on | [default to undefined]

## Example

```typescript
import { CreateManifestByObjectRequestBody } from 'shipstation-client';

const instance: CreateManifestByObjectRequestBody = {
    carrier_id,
    excluded_label_ids,
    label_ids,
    warehouse_id,
    ship_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
