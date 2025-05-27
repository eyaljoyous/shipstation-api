# ErrorWithLabelIdResponseBody

An error response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **string** | A UUID that uniquely identifies the request id. This can be given to the support team to help debug non-trivial issues that may occur  | [default to undefined]
**errors** | [**Array&lt;ErrorWithLabelId&gt;**](ErrorWithLabelId.md) | The errors associated with the failed API call | [default to undefined]

## Example

```typescript
import { ErrorWithLabelIdResponseBody } from 'shipstation-client';

const instance: ErrorWithLabelIdResponseBody = {
    request_id,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
