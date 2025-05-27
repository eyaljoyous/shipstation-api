# ProcessBatchRequestBody

A process batch request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ship_date** | **string** | The Ship date the batch is being processed for | [optional] [default to undefined]
**label_layout** | [**LabelLayout**](LabelLayout.md) |  | [optional] [default to LabelLayout__4x6]
**label_format** | [**LabelFormat**](LabelFormat.md) |  | [optional] [default to undefined]
**display_scheme** | [**DisplayScheme**](DisplayScheme.md) | The display format that the label should be shown in. | [optional] [default to undefined]

## Example

```typescript
import { ProcessBatchRequestBody } from 'shipstation-client';

const instance: ProcessBatchRequestBody = {
    ship_date,
    label_layout,
    label_format,
    display_scheme,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
