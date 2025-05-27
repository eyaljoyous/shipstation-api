# CreateManifestResponseBody

A create manifest response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manifests** | [**Array&lt;Manifest&gt;**](Manifest.md) | Resulting Manifests | [optional] [default to undefined]
**manifest_request_id** | **string** | A string that uniquely identifies a manifest request | [optional] [readonly] [default to undefined]
**status** | [**ManifestRequestStatus**](ManifestRequestStatus.md) |  | [optional] [default to undefined]
**manifest_id** | **string** | A string that uniquely identifies the manifest | [default to undefined]
**form_id** | **string** | A string that uniquely identifies the form | [default to undefined]
**created_at** | **string** | The date-time that the manifest was created | [default to undefined]
**ship_date** | **string** | The date-time that the manifests shipments will be picked up | [default to undefined]
**shipments** | **number** | The number of shipments that are included in this manifest | [readonly] [default to undefined]
**warehouse_id** | **string** | A string that uniquely identifies the warehouse | [default to undefined]
**submission_id** | **string** | A string that uniquely identifies the submission | [default to undefined]
**carrier_id** | **string** | A string that uniquely identifies the carrier | [default to undefined]
**manifest_download** | [**ManifestDownload**](ManifestDownload.md) |  | [default to undefined]
**label_ids** | **Array&lt;string&gt;** | An array of the label ids used in this manifest. | [optional] [default to undefined]
**request_id** | **string** | A UUID that uniquely identifies the request id. This can be given to the support team to help debug non-trivial issues that may occur  | [default to undefined]
**errors** | [**Array&lt;ErrorWithLabelId&gt;**](ErrorWithLabelId.md) | The errors associated with the failed API call | [default to undefined]

## Example

```typescript
import { CreateManifestResponseBody } from 'shipstation-client';

const instance: CreateManifestResponseBody = {
    manifests,
    manifest_request_id,
    status,
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
    request_id,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
