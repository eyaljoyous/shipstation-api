# CreateReturnLabelRequestBody

A create return label request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charge_event** | [**LabelChargeEvent**](LabelChargeEvent.md) | The label charge event.  | [optional] [default to undefined]
**label_layout** | [**LabelLayout**](LabelLayout.md) | The layout (size) that you want the label to be in.  The &#x60;label_format&#x60; determines which sizes are allowed.  &#x60;4x6&#x60; is supported for all label formats, whereas &#x60;letter&#x60; (8.5\&quot; x 11\&quot;) is only supported for &#x60;pdf&#x60; format.  | [optional] [default to undefined]
**label_format** | [**LabelFormat**](LabelFormat.md) | The file format that you want the label to be in.  We recommend &#x60;pdf&#x60; format because it is supported by all carriers, whereas some carriers do not support the &#x60;png&#x60; or &#x60;zpl&#x60; formats.  | [optional] [default to undefined]
**label_download_type** | [**LabelDownloadType**](LabelDownloadType.md) |  | [optional] [default to undefined]
**display_scheme** | [**DisplayScheme**](DisplayScheme.md) | The display format that the label should be shown in. | [optional] [default to undefined]
**label_image_id** | **string** | The label image resource that was used to create a custom label image. | [optional] [default to undefined]

## Example

```typescript
import { CreateReturnLabelRequestBody } from 'shipstation-client';

const instance: CreateReturnLabelRequestBody = {
    charge_event,
    label_layout,
    label_format,
    label_download_type,
    display_scheme,
    label_image_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
