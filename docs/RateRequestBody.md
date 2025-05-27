# RateRequestBody

A rate request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_ids** | **Array&lt;string&gt;** | Array of carrier ids to get rates for | [default to undefined]
**package_types** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**service_codes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**calculate_tax_amount** | **boolean** | Calculate the duties and tariffs for cross border shipments. | [optional] [default to undefined]
**preferred_currency** | **string** | The currencies that are supported by ShipStation are the ones that specified by ISO 4217: https://www.iso.org/iso-4217-currency-codes.html  | [optional] [default to undefined]
**is_return** | **boolean** | Indicate if it\&#39;s a return shipment | [optional] [default to undefined]

## Example

```typescript
import { RateRequestBody } from 'shipstation-client';

const instance: RateRequestBody = {
    carrier_ids,
    package_types,
    service_codes,
    calculate_tax_amount,
    preferred_currency,
    is_return,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
