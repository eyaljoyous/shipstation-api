# ModelError

The error structure that gets returned with almost all failed API calls 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_source** | [**ErrorSource**](ErrorSource.md) |  | [default to undefined]
**error_type** | [**ErrorType**](ErrorType.md) |  | [default to undefined]
**error_code** | [**ErrorCode**](ErrorCode.md) |  | [default to undefined]
**message** | **string** | An error message associated with the failed API call | [readonly] [default to undefined]

## Example

```typescript
import { ModelError } from 'shipstation-client';

const instance: ModelError = {
    error_source,
    error_type,
    error_code,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
