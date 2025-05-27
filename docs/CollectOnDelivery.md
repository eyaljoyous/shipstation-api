# CollectOnDelivery

Defer payment until package is delivered, instead of when it is ordered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_type** | [**CollectOnDeliveryPaymentType**](CollectOnDeliveryPaymentType.md) |  | [optional] [default to undefined]
**payment_amount** | [**PaymentAmount**](PaymentAmount.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CollectOnDelivery } from 'shipstation-client';

const instance: CollectOnDelivery = {
    payment_type,
    payment_amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
