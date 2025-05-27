# PartialShippingAddressToGeolocationInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Enum of available type of geolocation items:   - \&#39;what3words\&#39; functionality allows to specify a location by providing 3 words that have been assign to the specific location see [link](https://what3words.com/business) for more details.  | [optional] [default to undefined]
**value** | **string** | value of the geolocation item | [optional] [default to undefined]

## Example

```typescript
import { PartialShippingAddressToGeolocationInner } from 'shipstation-client';

const instance: PartialShippingAddressToGeolocationInner = {
    type,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
