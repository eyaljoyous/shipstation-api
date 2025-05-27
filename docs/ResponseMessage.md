# ResponseMessage

A response message that displays when additional info is needed for an address validation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | [**AddressValidationCode**](AddressValidationCode.md) |  | [readonly] [default to undefined]
**message** | **string** | Message explaining the address validation error | [readonly] [default to undefined]
**type** | [**AddressValidationMessageType**](AddressValidationMessageType.md) |  | [readonly] [default to undefined]
**detail_code** | [**AddressValidationDetailCode**](AddressValidationDetailCode.md) |  | [default to undefined]

## Example

```typescript
import { ResponseMessage } from 'shipstation-client';

const instance: ResponseMessage = {
    code,
    message,
    type,
    detail_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
