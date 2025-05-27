# DeprecatedManifest

Deprecated manifest resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manifest_id** | **string** | A string that uniquely identifies the manifest | [optional] [default to undefined]
**form_id** | **string** | A string that uniquely identifies the form | [optional] [default to undefined]
**created_at** | **string** | The date-time that the manifest was created | [optional] [default to undefined]
**ship_date** | **string** | The date-time that the manifests shipments will be picked up | [optional] [default to undefined]
**shipments** | **number** | The number of shipments that are included in this manifest | [optional] [readonly] [default to undefined]
**warehouse_id** | **string** | A string that uniquely identifies the warehouse | [optional] [default to undefined]
**submission_id** | **string** | A string that uniquely identifies the submission | [optional] [default to undefined]
**carrier_id** | **string** | A string that uniquely identifies the carrier | [optional] [default to undefined]
**manifest_download** | [**ManifestDownload**](ManifestDownload.md) |  | [optional] [default to undefined]
**label_ids** | **Array&lt;string&gt;** | An array of the label ids used in this manifest. | [optional] [default to undefined]

## Example

```typescript
import { DeprecatedManifest } from 'shipstation-client';

const instance: DeprecatedManifest = {
    manifest_id,
    form_id,
    created_at,
    ship_date,
    shipments,
    warehouse_id,
    submission_id,
    carrier_id,
    manifest_download,
    label_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
