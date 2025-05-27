# Rate

A rate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate_id** | **string** | A string that uniquely identifies the rate | [readonly] [default to undefined]
**rate_type** | [**RateType**](RateType.md) |  | [readonly] [default to undefined]
**carrier_id** | **string** | A string that uniquely identifies the carrier | [readonly] [default to undefined]
**shipping_amount** | [**MonetaryValue**](MonetaryValue.md) | The shipping amount. Should be added with confirmation_amount, insurance_amount and other_amount to calculate the total purchase price. | [readonly] [default to undefined]
**insurance_amount** | [**MonetaryValue**](MonetaryValue.md) | The insurance amount.  Should be added with shipping_amount, confirmation_amount and other_amount to calculate the total purchase price. | [readonly] [default to undefined]
**confirmation_amount** | [**MonetaryValue**](MonetaryValue.md) | The confirmation amount.  Should be added with shipping_amount, insurance_amount and other_amount to calculate the total purchase price. | [readonly] [default to undefined]
**other_amount** | [**MonetaryValue**](MonetaryValue.md) | Any other charges associated with this rate.  Should be added with shipping_amount, insurance_amount and confirmation_amount to calculate the total purchase price. | [readonly] [default to undefined]
**requested_comparison_amount** | [**MonetaryValue**](MonetaryValue.md) | The total shipping cost for the specified comparison_rate_type. | [optional] [readonly] [default to undefined]
**tax_amount** | [**MonetaryValue**](MonetaryValue.md) | Tariff and additional taxes associated with an international shipment. | [optional] [readonly] [default to undefined]
**zone** | **number** | Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of custom zones that vary depending upon the ship_to and ship_from location  | [readonly] [default to undefined]
**package_type** | **string** | package type that this rate was estimated for | [readonly] [default to undefined]
**delivery_days** | **number** | The number of days estimated for delivery, this will show the _actual_ delivery time if for example, the package gets shipped on a Friday  | [optional] [readonly] [default to undefined]
**guaranteed_service** | **boolean** | Indicates if the rate is guaranteed. | [readonly] [default to undefined]
**estimated_delivery_date** | **string** | An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date, but not a specific time.  The value _may_ contain a time component, but it will be set to &#x60;00:00:00&#x60; UTC by ShipStation .  | [optional] [readonly] [default to undefined]
**carrier_delivery_days** | **string** | The carrier delivery days | [optional] [readonly] [default to undefined]
**ship_date** | **string** | ship date | [optional] [readonly] [default to undefined]
**negotiated_rate** | **boolean** | Indicates if the rates been negotiated | [readonly] [default to undefined]
**service_type** | **string** | service type | [readonly] [default to undefined]
**service_code** | **string** | service code for the rate | [readonly] [default to undefined]
**trackable** | **boolean** | Indicates if rate is trackable | [readonly] [default to undefined]
**carrier_code** | **string** | carrier code | [readonly] [default to undefined]
**carrier_nickname** | **string** | carrier nickname | [readonly] [default to undefined]
**carrier_friendly_name** | **string** | carrier friendly name | [readonly] [default to undefined]
**validation_status** | [**ValidationStatus**](ValidationStatus.md) |  | [readonly] [default to undefined]
**warning_messages** | **Array&lt;string&gt;** | The warning messages | [default to undefined]
**error_messages** | **Array&lt;string&gt;** | The error messages | [default to undefined]

## Example

```typescript
import { Rate } from 'shipstation-client';

const instance: Rate = {
    rate_id,
    rate_type,
    carrier_id,
    shipping_amount,
    insurance_amount,
    confirmation_amount,
    other_amount,
    requested_comparison_amount,
    tax_amount,
    zone,
    package_type,
    delivery_days,
    guaranteed_service,
    estimated_delivery_date,
    carrier_delivery_days,
    ship_date,
    negotiated_rate,
    service_type,
    service_code,
    trackable,
    carrier_code,
    carrier_nickname,
    carrier_friendly_name,
    validation_status,
    warning_messages,
    error_messages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
