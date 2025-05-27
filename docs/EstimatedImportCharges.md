# EstimatedImportCharges

Estimated import charges for commercial invoices for international shipments. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taxes** | [**MonetaryValue**](MonetaryValue.md) | Estimated import taxes. | [optional] [default to undefined]
**duties** | [**MonetaryValue**](MonetaryValue.md) | Estimated import duties. | [optional] [default to undefined]

## Example

```typescript
import { EstimatedImportCharges } from 'shipstation-client';

const instance: EstimatedImportCharges = {
    taxes,
    duties,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
