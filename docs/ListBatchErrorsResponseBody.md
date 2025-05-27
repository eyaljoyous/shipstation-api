# ListBatchErrorsResponseBody

A batch errors response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**Array&lt;BatchResponseError&gt;**](BatchResponseError.md) | The errors currently associated with the batch | [readonly] [default to undefined]
**links** | [**PaginationLink**](PaginationLink.md) |  | [readonly] [default to undefined]

## Example

```typescript
import { ListBatchErrorsResponseBody } from 'shipstation-client';

const instance: ListBatchErrorsResponseBody = {
    errors,
    links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
