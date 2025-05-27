# Carrier

A carrier object that represents a provider such as UPS, USPS, DHL, etc that has been tied to the current account. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_id** | **string** | A string that uniquely identifies the carrier. | [optional] [readonly] [default to undefined]
**carrier_code** | **string** | The [shipping carrier] who will ship the package, such as &#x60;fedex&#x60;, &#x60;dhl_express&#x60;, &#x60;stamps_com&#x60;, etc.  | [optional] [readonly] [default to undefined]
**account_number** | **string** | The account number that the carrier is connected to. | [optional] [readonly] [default to undefined]
**requires_funded_amount** | **boolean** | Indicates whether the carrier requires funding to use its services | [optional] [readonly] [default to undefined]
**balance** | **number** | Current available balance | [optional] [readonly] [default to undefined]
**nickname** | **string** | Nickname given to the account when initially setting up the carrier. | [optional] [readonly] [default to undefined]
**friendly_name** | **string** | Screen readable name | [optional] [readonly] [default to undefined]
**funding_source_id** | **string** | Funding source ID for the carrier | [optional] [readonly] [default to undefined]
**primary** | **boolean** | Is this the primary carrier that is used by default when no carrier is specified in label/shipment creation | [optional] [readonly] [default to undefined]
**has_multi_package_supporting_services** | **boolean** | Carrier supports multiple packages per shipment | [optional] [readonly] [default to undefined]
**supports_label_messages** | **boolean** | The carrier supports adding custom label messages to an order. | [optional] [readonly] [default to undefined]
**disabled_by_billing_plan** | **boolean** | The carrier is disabled by the current ShipStation account\&#39;s billing plan. | [optional] [readonly] [default to undefined]
**services** | [**Array&lt;Service&gt;**](Service.md) | A list of services that are offered by the carrier | [optional] [readonly] [default to undefined]
**packages** | [**Array&lt;PackageType&gt;**](PackageType.md) | A list of package types that are supported by the carrier | [optional] [readonly] [default to undefined]
**_options** | [**Array&lt;CarrierAdvancedOption&gt;**](CarrierAdvancedOption.md) | A list of options that are available to that carrier | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Carrier } from 'shipstation-client';

const instance: Carrier = {
    carrier_id,
    carrier_code,
    account_number,
    requires_funded_amount,
    balance,
    nickname,
    friendly_name,
    funding_source_id,
    primary,
    has_multi_package_supporting_services,
    supports_label_messages,
    disabled_by_billing_plan,
    services,
    packages,
    _options,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
