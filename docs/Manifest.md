# Manifest

Used for combining packages into one scannable form that a carrier can use when picking up a large  number of shipments 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manifest_id** | **string** | A string that uniquely identifies the manifest | [optional] [readonly] [default to undefined]
**form_id** | **string** | A string that uniquely identifies the form | [optional] [readonly] [default to undefined]
**created_at** | **string** | The date-time that the manifest was created | [optional] [readonly] [default to undefined]
**ship_date** | **string** | The date-time that the manifests shipments will be picked up | [optional] [readonly] [default to undefined]
**shipments** | **number** | The number of shipments that are included in this manifest | [optional] [readonly] [default to undefined]
**label_ids** | **Array&lt;string&gt;** | An array of the label ids used in this manifest. | [optional] [default to undefined]
**warehouse_id** | **string** | A string that uniquely identifies the warehouse | [optional] [readonly] [default to undefined]
**submission_id** | **string** | A string that uniquely identifies the submission | [optional] [readonly] [default to undefined]
**carrier_id** | **string** | A string that uniquely identifies the carrier | [optional] [readonly] [default to undefined]
**manifest_download** | [**ManifestDownload**](ManifestDownload.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Manifest } from 'shipstation-client';

const instance: Manifest = {
    manifest_id,
    form_id,
    created_at,
    ship_date,
    shipments,
    label_ids,
    warehouse_id,
    submission_id,
    carrier_id,
    manifest_download,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
