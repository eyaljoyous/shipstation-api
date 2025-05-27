# DangerousGoods

Dangerous goods attribute associated with the product 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_number** | **string** | UN number to identify the dangerous goods. | [optional] [default to undefined]
**shipping_name** | **string** | Trade description of the dangerous goods. | [optional] [default to undefined]
**technical_name** | **string** | Recognized Technical or chemical name of dangerous goods. | [optional] [default to undefined]
**product_class** | **string** | Dangerous goods product class based on regulation. | [optional] [default to undefined]
**product_class_subsidiary** | **string** | A secondary of product class for substances presenting more than one particular hazard | [optional] [default to undefined]
**packaging_group** | **string** |  | [optional] [default to undefined]
**dangerous_amount** | [**DangerousAmount**](DangerousAmount.md) | This model represents the amount of the dangerous goods. | [optional] [default to undefined]
**quantity** | **number** | Quantity of dangerous goods. | [optional] [default to 0]
**packaging_instruction** | **string** | The specific standardized packaging instructions from the relevant regulatory agency that have been applied to the parcel/container. | [optional] [default to undefined]
**packaging_instruction_section** | **string** |  | [optional] [default to undefined]
**packaging_type** | **string** | The type of exterior packaging used to contain the dangerous good. | [optional] [default to undefined]
**transport_mean** | **string** |  | [optional] [default to undefined]
**transport_category** | **string** | Transport category assign to dangerous goods for the transport purpose. | [optional] [default to undefined]
**regulation_authority** | **string** | Name of the regulatory authority. | [optional] [default to undefined]
**regulation_level** | **string** |  | [optional] [default to undefined]
**radioactive** | **boolean** | Indication if the substance is radioactive. | [optional] [default to undefined]
**reportable_quantity** | **boolean** | Indication if the substance needs to be reported to regulatory authority based on the quantity. | [optional] [default to undefined]
**tunnel_code** | **string** | Defines which types of tunnels the shipment is allowed to go through | [optional] [default to undefined]
**additional_description** | **string** | Provider additonal description regarding the dangerous goods. This is used as a placed holder to provider additional context and varies by carrier | [optional] [default to undefined]

## Example

```typescript
import { DangerousGoods } from 'shipstation-client';

const instance: DangerousGoods = {
    id_number,
    shipping_name,
    technical_name,
    product_class,
    product_class_subsidiary,
    packaging_group,
    dangerous_amount,
    quantity,
    packaging_instruction,
    packaging_instruction_section,
    packaging_type,
    transport_mean,
    transport_category,
    regulation_authority,
    regulation_level,
    radioactive,
    reportable_quantity,
    tunnel_code,
    additional_description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
