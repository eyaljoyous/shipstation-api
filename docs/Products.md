# Products

The customs declaration for a single item in the shipment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | A description of the item | [optional] [default to undefined]
**quantity** | **number** | The quantity of this item in the shipment. | [optional] [default to 0]
**value** | [**MonetaryValue**](MonetaryValue.md) | The declared value of each item | [optional] [default to undefined]
**weight** | [**Weight**](Weight.md) | The item weight | [optional] [default to undefined]
**harmonized_tariff_code** | **string** | The [Harmonized Tariff Code](https://en.wikipedia.org/wiki/Harmonized_System) of this item. | [optional] [default to undefined]
**country_of_origin** | **string** | The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) where this item originated  | [optional] [default to undefined]
**unit_of_measure** | **string** |  | [optional] [default to undefined]
**sku** | **string** | The SKU (Stock Keeping Unit) of the item | [optional] [default to undefined]
**sku_description** | **string** | Description of the Custom Item\&#39;s SKU | [optional] [default to undefined]
**mid_code** | **string** | Manufacturers Identification code | [optional] [default to undefined]
**product_url** | **string** | link to the item on the seller website | [optional] [default to undefined]
**vat_rate** | **number** | VAT rate applicable to the item | [optional] [default to undefined]
**dangerous_goods** | [**Array&lt;DangerousGoods&gt;**](DangerousGoods.md) | Details about dangerous goods inside products | [optional] [default to undefined]

## Example

```typescript
import { Products } from 'shipstation-client';

const instance: Products = {
    description,
    quantity,
    value,
    weight,
    harmonized_tariff_code,
    country_of_origin,
    unit_of_measure,
    sku,
    sku_description,
    mid_code,
    product_url,
    vat_rate,
    dangerous_goods,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
