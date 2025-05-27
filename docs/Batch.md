# Batch

Batches are an advanced feature of ShipStation designed for users who need to generate hundreds or thousands of labels at a time. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label_layout** | [**LabelLayout**](LabelLayout.md) | label layout | [readonly] [default to undefined]
**label_format** | [**LabelFormat**](LabelFormat.md) |  | [readonly] [default to undefined]
**batch_id** | **string** | A string that uniquely identifies the batch | [readonly] [default to undefined]
**batch_number** | **string** | The batch number. | [readonly] [default to undefined]
**external_batch_id** | **string** | A string that uniquely identifies the external batch | [readonly] [default to undefined]
**batch_notes** | **string** | Custom notes you can add for each created batch | [readonly] [default to '']
**created_at** | **string** | The date and time the batch was created in ShipStation | [readonly] [default to undefined]
**processed_at** | **string** | The date and time the batch was processed in ShipStation | [readonly] [default to undefined]
**errors** | **number** | The number of errors that occurred while generating the batch | [readonly] [default to undefined]
**process_errors** | [**Array&lt;ModelError&gt;**](ModelError.md) | The errors associated with the failed API call | [default to undefined]
**warnings** | **number** | The number of warnings that occurred while generating the batch | [readonly] [default to undefined]
**completed** | **number** | The number of labels generated in the batch | [readonly] [default to undefined]
**forms** | **number** | The number of forms for customs that are available for download | [readonly] [default to undefined]
**count** | **number** | The total of errors, warnings, and completed properties | [readonly] [default to undefined]
**batch_shipments_url** | [**OptionalLink**](OptionalLink.md) | The batch shipments endpoint | [default to undefined]
**batch_labels_url** | [**OptionalLink**](OptionalLink.md) | Link to batch labels query | [default to undefined]
**batch_errors_url** | [**OptionalLink**](OptionalLink.md) | Link to batch errors endpoint | [readonly] [default to undefined]
**label_download** | [**LabelDownload**](LabelDownload.md) | The label download for the batch | [readonly] [default to undefined]
**form_download** | [**OptionalLink**](OptionalLink.md) | The form download for any customs that are needed | [readonly] [default to undefined]
**paperless_download** | [**PaperlessDownload**](PaperlessDownload.md) | The paperless details which may contain elements like &#x60;href&#x60;, &#x60;instructions&#x60; and &#x60;handoff_code&#x60;. | [readonly] [default to undefined]
**status** | [**BatchStatus**](BatchStatus.md) |  | [readonly] [default to undefined]

## Example

```typescript
import { Batch } from 'shipstation-client';

const instance: Batch = {
    label_layout,
    label_format,
    batch_id,
    batch_number,
    external_batch_id,
    batch_notes,
    created_at,
    processed_at,
    errors,
    process_errors,
    warnings,
    completed,
    forms,
    count,
    batch_shipments_url,
    batch_labels_url,
    batch_errors_url,
    label_download,
    form_download,
    paperless_download,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
