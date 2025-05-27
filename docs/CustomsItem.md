# CustomsItem

The customs declaration for a single item in the shipment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customs_item_id** | **string** | A string that uniquely identifies the customs item | [readonly] [default to undefined]
**description** | **string** | A description of the item | [optional] [default to undefined]
**quantity** | **number** | The quantity of this item in the shipment. | [optional] [default to 0]
**value** | **number** | The monetary amount, in the specified currency. | [optional] [default to undefined]
**value_currency** | **string** | The currencies that are supported by ShipStation are the ones that specified by ISO 4217: https://www.iso.org/iso-4217-currency-codes.html  | [optional] [default to undefined]
**weight** | [**Weight**](Weight.md) | The item weight | [optional] [default to undefined]
**harmonized_tariff_code** | **string** | The [Harmonized Tariff Code](https://en.wikipedia.org/wiki/Harmonized_System) of this item. | [optional] [default to undefined]
**country_of_origin** | **string** | The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) where this item originated  | [optional] [default to undefined]
**unit_of_measure** | **string** |  | [optional] [default to undefined]
**sku** | **string** | The SKU (Stock Keeping Unit) of the customs item | [optional] [default to undefined]
**sku_description** | **string** | Description of the Custom Item\&#39;s SKU | [optional] [default to undefined]

## Example

```typescript
import { CustomsItem } from 'shipstation-client';

const instance: CustomsItem = {
    customs_item_id,
    description,
    quantity,
    value,
    value_currency,
    weight,
    harmonized_tariff_code,
    country_of_origin,
    unit_of_measure,
    sku,
    sku_description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
