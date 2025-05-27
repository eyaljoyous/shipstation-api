# CreateAndProcessBatchRequestBodyProcessLabels

The information used to process the batch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_batch_and_process_labels** | **boolean** | When \&#39;true\&#39;, the batch will be enqueued for processing | [optional] [default to undefined]
**ship_date** | **string** | The Ship date the batch is being processed for | [optional] [default to undefined]
**label_layout** | [**LabelLayout**](LabelLayout.md) |  | [optional] [default to LabelLayout__4x6]
**label_format** | [**LabelFormat**](LabelFormat.md) |  | [optional] [default to undefined]
**display_scheme** | [**DisplayScheme**](DisplayScheme.md) | The display format that the label should be shown in. | [optional] [default to undefined]

## Example

```typescript
import { CreateAndProcessBatchRequestBodyProcessLabels } from 'shipstation-client';

const instance: CreateAndProcessBatchRequestBodyProcessLabels = {
    create_batch_and_process_labels,
    ship_date,
    label_layout,
    label_format,
    display_scheme,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
