# ListShipmentRatesResponseBody

A list shipment rates response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rates** | [**Array&lt;Rate&gt;**](Rate.md) | An array of shipment rates | [default to undefined]
**invalid_rates** | [**Array&lt;Rate&gt;**](Rate.md) | An array of invalid shipment rates | [default to undefined]
**rate_request_id** | **string** | A string that uniquely identifies the rate request | [readonly] [default to undefined]
**shipment_id** | **string** | A string that uniquely identifies the shipment | [readonly] [default to undefined]
**created_at** | **string** | When the rate was created | [default to undefined]
**status** | [**RateResponseStatus**](RateResponseStatus.md) |  | [readonly] [default to undefined]
**errors** | [**Array&lt;ModelError&gt;**](ModelError.md) |  | [default to undefined]

## Example

```typescript
import { ListShipmentRatesResponseBody } from 'shipstation-client';

const instance: ListShipmentRatesResponseBody = {
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
