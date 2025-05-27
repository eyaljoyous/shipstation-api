# GetManifestByIdResponseBody

A get manifest by id response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manifest_id** | **string** | A string that uniquely identifies the manifest | [readonly] [default to undefined]
**form_id** | **string** | A string that uniquely identifies the form | [readonly] [default to undefined]
**created_at** | **string** | The date-time that the manifest was created | [readonly] [default to undefined]
**ship_date** | **string** | The date-time that the manifests shipments will be picked up | [readonly] [default to undefined]
**shipments** | **number** | The number of shipments that are included in this manifest | [readonly] [default to undefined]
**label_ids** | **Array&lt;string&gt;** | An array of the label ids used in this manifest. | [default to undefined]
**warehouse_id** | **string** | A string that uniquely identifies the warehouse | [readonly] [default to undefined]
**submission_id** | **string** | A string that uniquely identifies the submission | [readonly] [default to undefined]
**carrier_id** | **string** | A string that uniquely identifies the carrier | [readonly] [default to undefined]
**manifest_download** | [**ManifestDownload**](ManifestDownload.md) |  | [readonly] [default to undefined]

## Example

```typescript
import { GetManifestByIdResponseBody } from 'shipstation-client';

const instance: GetManifestByIdResponseBody = {
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
