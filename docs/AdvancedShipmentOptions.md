# AdvancedShipmentOptions

Advanced shipment options

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bill_to_account** | **string** | This field is used to [bill shipping costs to a third party].  This field must be used in conjunction with the &#x60;bill_to_country_code&#x60;, &#x60;bill_to_party&#x60;, and &#x60;bill_to_postal_code&#x60; fields.  | [optional] [default to undefined]
**bill_to_country_code** | **string** | The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.  | [optional] [default to undefined]
**bill_to_party** | [**BillToParty**](BillToParty.md) | Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the &#x60;bill_to_account&#x60;, &#x60;bill_to_country_code&#x60;, and &#x60;bill_to_postal_code&#x60; fields must also be set.  | [optional] [default to undefined]
**bill_to_postal_code** | **string** | The postal code of the third-party that is responsible for shipping costs.  | [optional] [default to undefined]
**contains_alcohol** | **boolean** | Indicates that the shipment contains alcohol. | [optional] [default to false]
**delivered_duty_paid** | **boolean** | Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.  | [optional] [default to false]
**dry_ice** | **boolean** | Indicates if the shipment contain dry ice | [optional] [default to false]
**dry_ice_weight** | [**Weight**](Weight.md) | The weight of the dry ice in the shipment | [optional] [default to undefined]
**non_machinable** | **boolean** | Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.  | [optional] [default to false]
**saturday_delivery** | **boolean** | Enables Saturday delivery, if supported by the carrier. | [optional] [default to false]
**fedex_freight** | [**AdvancedShipmentOptionsFedexFreight**](AdvancedShipmentOptionsFedexFreight.md) |  | [optional] [default to undefined]
**use_ups_ground_freight_pricing** | **boolean** | Whether to use [UPS Ground Freight pricing] If enabled, then a &#x60;freight_class&#x60; must also be specified.  | [optional] [default to undefined]
**freight_class** | **string** | The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport&#x3D;1), such as \&quot;77.5\&quot;, \&quot;110\&quot;, or \&quot;250\&quot;.  | [optional] [default to undefined]
**custom_field1** | **string** | An arbitrary field that can be used to store information about the shipment.  | [optional] [default to undefined]
**custom_field2** | **string** | An arbitrary field that can be used to store information about the shipment.  | [optional] [default to undefined]
**custom_field3** | **string** | An arbitrary field that can be used to store information about the shipment.  | [optional] [default to undefined]
**origin_type** | [**OriginType**](OriginType.md) |  | [optional] [default to undefined]
**additional_handling** | **boolean** | Indicate to the carrier that this shipment requires additional handling.  | [optional] [default to undefined]
**shipper_release** | **boolean** |  | [optional] [default to undefined]
**collect_on_delivery** | [**CollectOnDelivery**](CollectOnDelivery.md) |  | [optional] [default to undefined]
**third_party_consignee** | **boolean** | Third Party Consignee option is a value-added service that allows the shipper to supply goods without commercial invoices being attached | [optional] [default to false]
**dangerous_goods** | **boolean** | Indicates if the Dangerous goods are present in the shipment | [optional] [default to false]
**dangerous_goods_contact** | [**AdvancedShipmentOptionsDangerousGoodsContact**](AdvancedShipmentOptionsDangerousGoodsContact.md) |  | [optional] [default to undefined]
**windsor_framework_details** | [**AdvancedShipmentOptionsWindsorFrameworkDetails**](AdvancedShipmentOptionsWindsorFrameworkDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AdvancedShipmentOptions } from 'shipstation-client';

const instance: AdvancedShipmentOptions = {
    bill_to_account,
    bill_to_country_code,
    bill_to_party,
    bill_to_postal_code,
    contains_alcohol,
    delivered_duty_paid,
    dry_ice,
    dry_ice_weight,
    non_machinable,
    saturday_delivery,
    fedex_freight,
    use_ups_ground_freight_pricing,
    freight_class,
    custom_field1,
    custom_field2,
    custom_field3,
    origin_type,
    additional_handling,
    shipper_release,
    collect_on_delivery,
    third_party_consignee,
    dangerous_goods,
    dangerous_goods_contact,
    windsor_framework_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
