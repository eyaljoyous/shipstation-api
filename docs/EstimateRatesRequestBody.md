# EstimateRatesRequestBody

A rate estimate request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_country_code** | **string** | A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)  | [default to undefined]
**from_postal_code** | **string** | postal code | [default to undefined]
**from_city_locality** | **string** | from postal code | [default to undefined]
**from_state_province** | **string** | From state province | [default to undefined]
**to_country_code** | **string** | A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)  | [default to undefined]
**to_postal_code** | **string** | postal code | [default to undefined]
**to_city_locality** | **string** | The city locality the package is being shipped to | [default to undefined]
**to_state_province** | **string** | To state province | [default to undefined]
**weight** | [**Weigth**](Weigth.md) | The weight of the package | [default to undefined]
**dimensions** | [**Dimensions**](Dimensions.md) | The dimensions of the package | [optional] [default to undefined]
**confirmation** | [**DeliveryConfirmation**](DeliveryConfirmation.md) |  | [optional] [default to undefined]
**address_residential_indicator** | [**AddressResidentialIndicator**](AddressResidentialIndicator.md) |  | [optional] [default to undefined]
**ship_date** | **string** | ship date | [default to undefined]

## Example

```typescript
import { EstimateRatesRequestBody } from 'shipstation-client';

const instance: EstimateRatesRequestBody = {
    from_country_code,
    from_postal_code,
    from_city_locality,
    from_state_province,
    to_country_code,
    to_postal_code,
    to_city_locality,
    to_state_province,
    weight,
    dimensions,
    confirmation,
    address_residential_indicator,
    ship_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
