# AdvancedShipmentOptionsWindsorFrameworkDetails

The Windsor framework is a new regulation in the UK that simplifies customs procedures for goods moved from the UK mainland to Northern Ireland.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**movement_indicator** | **string** | An indicator that will tell the carrier and HMRC the type of movement for the shipment. | [optional] [default to undefined]
**not_at_risk** | **boolean** | An indicator that allows a shipper to declare the shipment as not-at-risk. | [optional] [default to undefined]

## Example

```typescript
import { AdvancedShipmentOptionsWindsorFrameworkDetails } from 'shipstation-client';

const instance: AdvancedShipmentOptionsWindsorFrameworkDetails = {
    movement_indicator,
    not_at_risk,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
