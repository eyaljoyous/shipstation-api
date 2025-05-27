# Package

A package associated with a shipment 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipment_package_id** | **string** | A string that uniquely identifies this shipment package | [optional] [readonly] [default to undefined]
**package_id** | **string** | A string that uniquely identifies this [package type] | [optional] [default to undefined]
**package_code** | **string** | The [package type] such as &#x60;thick_envelope&#x60;, &#x60;small_flat_rate_box&#x60;, &#x60;large_package&#x60;, etc.  The code &#x60;package&#x60; indicates a custom or unknown package type.  | [optional] [default to undefined]
**package_name** | **string** | The name of the of the [package type] | [optional] [default to undefined]
**weight** | [**Weight**](Weight.md) | The package weight | [default to undefined]
**dimensions** | [**Dimensions**](Dimensions.md) | The package dimensions | [optional] [default to undefined]
**insured_value** | [**MonetaryValue**](MonetaryValue.md) | The insured value of the package.  Requires the &#x60;insurance_provider&#x60; field of the shipment to be set.  | [optional] [default to undefined]
**label_messages** | [**LabelMessages**](LabelMessages.md) |  | [optional] [default to undefined]
**external_package_id** | **string** | An external package id. | [optional] [default to undefined]
**tracking_number** | **string** | The tracking number for the package.  The format depends on the carrier.  | [optional] [readonly] [default to undefined]
**content_description** | **string** | A short description of the package content. Required for shipments moving to, from, and through Mexico.  | [optional] [default to undefined]
**products** | [**Array&lt;Products&gt;**](Products.md) | Details about products inside packages (Information provided would be used on custom documentation) | [optional] [default to undefined]

## Example

```typescript
import { Package } from 'shipstation-client';

const instance: Package = {
    shipment_package_id,
    package_id,
    package_code,
    package_name,
    weight,
    dimensions,
    insured_value,
    label_messages,
    external_package_id,
    tracking_number,
    content_description,
    products,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
