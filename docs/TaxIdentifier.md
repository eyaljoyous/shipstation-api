# TaxIdentifier

A tax identifier object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taxable_entity_type** | [**TaxableEntityType**](TaxableEntityType.md) |  | [default to undefined]
**identifier_type** | [**IdentifierType**](IdentifierType.md) |  | [default to undefined]
**issuing_authority** | **string** | The authority that issued this tax. This must be a valid 2 character ISO 3166 Alpha 2 country code. | [default to undefined]
**value** | **string** | The value of the identifier | [default to undefined]

## Example

```typescript
import { TaxIdentifier } from 'shipstation-client';

const instance: TaxIdentifier = {
    taxable_entity_type,
    identifier_type,
    issuing_authority,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
