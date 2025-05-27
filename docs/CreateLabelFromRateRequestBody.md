# CreateLabelFromRateRequestBody

A purchase label without shipment request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validate_address** | [**ValidateAddress**](ValidateAddress.md) |  | [optional] [default to undefined]
**label_layout** | [**LabelLayout**](LabelLayout.md) |  | [optional] [default to undefined]
**label_format** | [**LabelFormat**](LabelFormat.md) |  | [optional] [default to undefined]
**label_download_type** | [**LabelDownloadType**](LabelDownloadType.md) |  | [optional] [default to undefined]
**display_scheme** | [**DisplayScheme**](DisplayScheme.md) | The display format that the label should be shown in. | [optional] [default to undefined]

## Example

```typescript
import { CreateLabelFromRateRequestBody } from 'shipstation-client';

const instance: CreateLabelFromRateRequestBody = {
    validate_address,
    label_layout,
    label_format,
    label_download_type,
    display_scheme,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
