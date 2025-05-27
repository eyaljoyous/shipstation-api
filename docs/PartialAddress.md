# PartialAddress

A complete or partial mailing address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of a contact person at this address.  This field may be set instead of - or in addition to - the &#x60;company_name&#x60; field.  | [optional] [default to undefined]
**phone** | **string** | The phone number of a contact person at this address.  The format of this phone number varies depending on the country.  | [optional] [default to undefined]
**email** | **string** | Email for the address owner.  | [optional] [default to undefined]
**company_name** | **string** | If this is a business address, then the company name should be specified here.  | [optional] [default to undefined]
**address_line1** | **string** | The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.  | [optional] [default to undefined]
**address_line2** | **string** | The second line of the street address.  For some addresses, this line may not be needed.  | [optional] [default to undefined]
**address_line3** | **string** | The third line of the street address.  For some addresses, this line may not be needed.  | [optional] [default to undefined]
**city_locality** | **string** | The name of the city or locality | [optional] [default to undefined]
**state_province** | **string** | The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.  | [optional] [default to undefined]
**postal_code** | **string** | postal code | [optional] [default to undefined]
**country_code** | **string** | The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)  | [optional] [default to undefined]
**address_residential_indicator** | [**AddressResidentialIndicator**](AddressResidentialIndicator.md) | Indicates whether this is a residential address. | [optional] [default to undefined]

## Example

```typescript
import { PartialAddress } from 'shipstation-client';

const instance: PartialAddress = {
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
