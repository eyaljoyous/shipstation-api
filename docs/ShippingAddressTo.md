# ShippingAddressTo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of a contact person at this address.  This field may be set instead of - or in addition to - the &#x60;company_name&#x60; field.  | [default to undefined]
**phone** | **string** | The phone number of a contact person at this address.  The format of this phone number varies depending on the country.  | [default to undefined]
**email** | **string** | Email for the address owner.  | [optional] [default to undefined]
**company_name** | **string** | If this is a business address, then the company name should be specified here.  | [optional] [default to undefined]
**address_line1** | **string** | The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.  | [default to undefined]
**address_line2** | **string** | The second line of the street address.  For some addresses, this line may not be needed.  | [optional] [default to undefined]
**address_line3** | **string** | The third line of the street address.  For some addresses, this line may not be needed.  | [optional] [default to undefined]
**city_locality** | **string** | The name of the city or locality | [default to undefined]
**state_province** | **string** | The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.  | [default to undefined]
**postal_code** | **string** | postal code | [default to undefined]
**country_code** | **string** | The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)  | [default to undefined]
**address_residential_indicator** | [**AddressResidentialIndicator**](AddressResidentialIndicator.md) | Indicates whether this is a residential address. | [default to undefined]
**instructions** | **string** | Additional text about how to handle the shipment at this address.  | [optional] [default to undefined]
**geolocation** | [**Array&lt;PartialShippingAddressToGeolocationInner&gt;**](PartialShippingAddressToGeolocationInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ShippingAddressTo } from 'shipstation-client';

const instance: ShippingAddressTo = {
    name,
    phone,
    email,
    company_name,
    address_line1,
    address_line2,
    address_line3,
    city_locality,
    state_province,
    postal_code,
    country_code,
    address_residential_indicator,
    instructions,
    geolocation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
