# AddressValidationResult

An address validation result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**AddressValidationStatus**](AddressValidationStatus.md) |  | [default to undefined]
**original_address** | [**Address**](Address.md) | The original address that was sent for validation | [default to undefined]
**matched_address** | [**Address**](Address.md) | The matched address found by the ShipStation API | [readonly] [default to undefined]
**messages** | [**Array&lt;ResponseMessage&gt;**](ResponseMessage.md) | The list of messages that were generated during the address validation request. | [readonly] [default to undefined]

## Example

```typescript
import { AddressValidationResult } from 'shipstation-client';

const instance: AddressValidationResult = {
    status,
    original_address,
    matched_address,
    messages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
