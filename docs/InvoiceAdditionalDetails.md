# InvoiceAdditionalDetails

The additional information to put on commercial invoice 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**freight_charge** | [**MonetaryValue**](MonetaryValue.md) | Freight Charge for shipment. | [optional] [default to undefined]
**insurance_charge** | [**MonetaryValue**](MonetaryValue.md) | Insurance Charge for shipment. | [optional] [default to undefined]
**discount** | [**MonetaryValue**](MonetaryValue.md) | Discount for shipment. | [optional] [default to undefined]
**estimated_import_charges** | [**EstimatedImportCharges**](EstimatedImportCharges.md) | Estimated import charges for commercial invoices for international shipments. | [optional] [default to undefined]
**other_charge** | [**MonetaryValue**](MonetaryValue.md) | Other charge for shipment. | [optional] [default to undefined]
**other_charge_description** | **string** | Description for the other charge (if provided). | [optional] [default to undefined]

## Example

```typescript
import { InvoiceAdditionalDetails } from 'shipstation-client';

const instance: InvoiceAdditionalDetails = {
    freight_charge,
    insurance_charge,
    discount,
    estimated_import_charges,
    other_charge,
    other_charge_description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
