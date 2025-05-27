# PartialShippingAddressTo

A complete or partial mailing address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instructions** | **string** | Additional text about how to handle the shipment at this address.  | [optional] [default to undefined]
**geolocation** | [**Array&lt;PartialShippingAddressToGeolocationInner&gt;**](PartialShippingAddressToGeolocationInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PartialShippingAddressTo } from 'shipstation-client';

const instance: PartialShippingAddressTo = {
    instructions,
    geolocation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
