# VoidLabelResponseBody

A void label response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **boolean** | Indicates whether the attempt to void the label was successful | [readonly] [default to undefined]
**message** | **string** |  | [readonly] [default to undefined]
**reason_code** | [**LabelVoidFailureReason**](LabelVoidFailureReason.md) | Indicates a normalized reason for the conditions if the void attempt was not approved. Will not populate if approved is true. “unknown” codes may be specified later. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { VoidLabelResponseBody } from 'shipstation-client';

const instance: VoidLabelResponseBody = {
    approved,
    message,
    reason_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
