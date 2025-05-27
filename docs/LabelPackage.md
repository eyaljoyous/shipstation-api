# LabelPackage

A package returned in the response from creating a [shipping label] 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_id** | **number** | The shipment package id | [optional] [readonly] [default to undefined]
**package_code** | **string** | The [package type], such as &#x60;thick_envelope&#x60;, &#x60;small_flat_rate_box&#x60;, &#x60;large_package&#x60;, etc.  The code &#x60;package&#x60; indicates a custom or unknown package type.  | [optional] [default to undefined]
**weight** | [**Weight**](Weight.md) | The package weight | [default to undefined]
**dimensions** | [**Dimensions**](Dimensions.md) | The package dimensions | [optional] [default to undefined]
**insured_value** | [**MonetaryValue**](MonetaryValue.md) | The insured value of the package.  Requires the &#x60;insurance_provider&#x60; field of the shipment to be set.  | [optional] [default to undefined]
**tracking_number** | **string** | The tracking number for the package.  The format depends on the carrier.  | [optional] [readonly] [default to undefined]
**label_download** | [**LabelDownload**](LabelDownload.md) | The label download for the package | [optional] [readonly] [default to undefined]
**form_download** | [**OptionalLink**](OptionalLink.md) | The form download for any customs that are needed | [optional] [readonly] [default to undefined]
**qr_code_download** | [**OptionalLink**](OptionalLink.md) | The QR code download for the package | [optional] [readonly] [default to undefined]
**paperless_download** | [**PaperlessDownload**](PaperlessDownload.md) | The paperless details which may contain elements like &#x60;href&#x60;, &#x60;instructions&#x60; and &#x60;handoff_code&#x60;. | [optional] [readonly] [default to undefined]
**label_messages** | [**LabelMessages**](LabelMessages.md) |  | [optional] [default to undefined]
**external_package_id** | **string** | An external package id. | [optional] [default to undefined]
**content_description** | **string** | A short description of the package content. Required for shipments moving to, from, and through Mexico.  | [optional] [default to undefined]
**sequence** | **number** | Package sequence | [optional] [readonly] [default to undefined]
**has_label_documents** | **boolean** | Whether the package has label documents available for download | [optional] [default to undefined]
**has_form_documents** | **boolean** | Whether the package has form documents available for download | [optional] [default to undefined]
**has_qr_code_documents** | **boolean** | Whether the package has QR code documents available for download | [optional] [default to undefined]
**has_paperless_label_documents** | **boolean** | Whether the package has paperless documents available for download | [optional] [default to undefined]

## Example

```typescript
import { LabelPackage } from 'shipstation-client';

const instance: LabelPackage = {
    package_id,
    package_code,
    weight,
    dimensions,
    insured_value,
    tracking_number,
    label_download,
    form_download,
    qr_code_download,
    paperless_download,
    label_messages,
    external_package_id,
    content_description,
    sequence,
    has_label_documents,
    has_form_documents,
    has_qr_code_documents,
    has_paperless_label_documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
