# RatesInformation

A rates information resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rates** | [**Array&lt;Rate&gt;**](Rate.md) | An array of shipment rates | [optional] [default to undefined]
**invalid_rates** | [**Array&lt;Rate&gt;**](Rate.md) | An array of invalid shipment rates | [optional] [default to undefined]
**rate_request_id** | **string** | A string that uniquely identifies the rate request | [optional] [readonly] [default to undefined]
**shipment_id** | **string** | A string that uniquely identifies the shipment | [optional] [readonly] [default to undefined]
**created_at** | **string** | When the rate was created | [optional] [default to undefined]
**status** | [**RateResponseStatus**](RateResponseStatus.md) |  | [optional] [readonly] [default to undefined]
**errors** | [**Array&lt;ModelError&gt;**](ModelError.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RatesInformation } from 'shipstation-client';

const instance: RatesInformation = {
    rates,
    invalid_rates,
    rate_request_id,
    shipment_id,
    created_at,
    status,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
