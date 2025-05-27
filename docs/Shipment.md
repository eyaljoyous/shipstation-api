# Shipment

The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.  > **Note:** Either `ship_from` or `warehouse_id` must be set. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipment_id** | **string** | A string that uniquely identifies the shipment | [readonly] [default to undefined]
**carrier_id** | **string** | The carrier account that is billed for the shipping charges | [default to undefined]
**service_code** | **string** | The [carrier service] used to ship the package, such as &#x60;fedex_ground&#x60;, &#x60;usps_first_class_mail&#x60;, &#x60;flat_rate_envelope&#x60;, etc.  | [default to undefined]
**shipping_rule_id** | **string** | ID of the shipping rule, which you want to use to automate carrier/carrier service selection for the shipment  | [optional] [default to undefined]
**external_order_id** | **string** | ID that the Order Source assigned | [optional] [default to undefined]
**items** | [**Array&lt;ShipmentItem&gt;**](ShipmentItem.md) | Describe the packages included in this shipment as related to potential metadata that was imported from external order sources  | [optional] [default to undefined]
**tax_identifiers** | [**Array&lt;TaxIdentifier&gt;**](TaxIdentifier.md) |  | [optional] [default to undefined]
**external_shipment_id** | **string** | A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.  &gt; **Warning:** The &#x60;external_shipment_id&#x60; is limited to 50 characters. Any additional characters will be truncated.  | [optional] [default to undefined]
**shipment_number** | **string** | A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.  &gt; **Warning:** The &#x60;shipment_number&#x60; is limited to 50 characters. Any additional characters will be truncated.  | [optional] [default to undefined]
**ship_date** | **string** | The date that the shipment was (or will be) shippped.  ShipStation will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.  | [default to undefined]
**created_at** | **string** | The date and time that the shipment was created in ShipStation . | [readonly] [default to undefined]
**modified_at** | **string** | The date and time that the shipment was created or last modified. | [readonly] [default to undefined]
**shipment_status** | [**ShipmentStatus**](ShipmentStatus.md) | The current status of the shipment | [readonly] [default to undefined]
**ship_to** | [**ShippingAddressTo**](ShippingAddressTo.md) | The recipient\&#39;s mailing address | [default to undefined]
**ship_from** | [**ShippingAddress**](ShippingAddress.md) | The shipment\&#39;s origin address. If you frequently ship from the same location, consider [creating a warehouse].  Then you can simply specify the &#x60;warehouse_id&#x60; rather than the complete address each time.  | [default to undefined]
**warehouse_id** | **string** | The [warehouse] that the shipment is being shipped from.  Either &#x60;warehouse_id&#x60; or &#x60;ship_from&#x60; must be specified.  | [default to undefined]
**return_to** | [**ShippingAddress**](ShippingAddress.md) | The return address for this shipment.  Defaults to the &#x60;ship_from&#x60; address.  | [default to undefined]
**is_return** | **boolean** | An optional indicator if the shipment is intended to be a return. Defaults to false if not provided.  | [optional] [default to false]
**confirmation** | [**DeliveryConfirmation**](DeliveryConfirmation.md) | The type of delivery confirmation that is required for this shipment. | [default to undefined]
**customs** | [**InternationalShipmentOptions**](InternationalShipmentOptions.md) | Customs information.  This is usually only needed for international shipments.  | [default to undefined]
**advanced_options** | [**AdvancedShipmentOptions**](AdvancedShipmentOptions.md) | Advanced shipment options.  These are entirely optional. | [default to undefined]
**insurance_provider** | [**InsuranceProvider**](InsuranceProvider.md) | The insurance provider to use for any insured packages in the shipment.  | [default to undefined]
**tags** | [**Array&lt;Tag&gt;**](Tag.md) | Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.  | [readonly] [default to undefined]
**order_source_code** | [**OrderSourceName**](OrderSourceName.md) |  | [optional] [default to undefined]
**packages** | [**Array&lt;Package&gt;**](Package.md) | The packages in the shipment.  &gt; **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn\&#39;t allow it, an error will be returned.  | [default to undefined]
**total_weight** | [**Weigth**](Weigth.md) | The combined weight of all packages in the shipment | [readonly] [default to undefined]
**comparison_rate_type** | **string** | Calculate a rate for this shipment with the requested carrier using a ratecard that differs from the default.  Only supported for UPS and USPS. | [optional] [default to undefined]

## Example

```typescript
import { Shipment } from 'shipstation-client';

const instance: Shipment = {
    shipment_id,
    carrier_id,
    service_code,
    shipping_rule_id,
    external_order_id,
    items,
    tax_identifiers,
    external_shipment_id,
    shipment_number,
    ship_date,
    created_at,
    modified_at,
    shipment_status,
    ship_to,
    ship_from,
    warehouse_id,
    return_to,
    is_return,
    confirmation,
    customs,
    advanced_options,
    insurance_provider,
    tags,
    order_source_code,
    packages,
    total_weight,
    comparison_rate_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
