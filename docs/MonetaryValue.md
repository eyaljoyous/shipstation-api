# MonetaryValue

A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | The currencies that are supported by ShipStation are the ones that specified by ISO 4217: https://www.iso.org/iso-4217-currency-codes.html  | [default to undefined]
**amount** | **number** | The monetary amount, in the specified currency. | [default to undefined]

## Example

```typescript
import { MonetaryValue } from 'shipstation-client';

const instance: MonetaryValue = {
    currency,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
