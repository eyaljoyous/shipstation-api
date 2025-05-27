# DeletePickupByIdResponseBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **string** | A UUID that uniquely identifies the request id. This can be given to the support team to help debug non-trivial issues that may occur  | [default to undefined]
**errors** | [**Array&lt;ModelError&gt;**](ModelError.md) | The errors associated with the failed API call | [default to undefined]
**pickup_id** | **string** | Pickup Resource ID | [default to undefined]

## Example

```typescript
import { DeletePickupByIdResponseBody } from 'shipstation-client';

const instance: DeletePickupByIdResponseBody = {
    request_id,
    errors,
    pickup_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
