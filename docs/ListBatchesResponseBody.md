# ListBatchesResponseBody

A list batch response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batches** | [**Array&lt;Batch&gt;**](Batch.md) | Batch List | [default to undefined]
**total** | **number** | The total number of batches the API call returned | [readonly] [default to undefined]
**page** | **number** | The page that is currently being read | [readonly] [default to undefined]
**pages** | **number** | The total number of batch pages the API call returned | [readonly] [default to undefined]
**links** | [**PaginationLink**](PaginationLink.md) |  | [readonly] [default to undefined]

## Example

```typescript
import { ListBatchesResponseBody } from 'shipstation-client';

const instance: ListBatchesResponseBody = {
    batches,
    total,
    page,
    pages,
    links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
