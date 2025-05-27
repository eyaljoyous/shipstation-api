# GetPickupsResponseBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pickups** | [**Array&lt;Pickup&gt;**](Pickup.md) | An array of pickups associated with the user\&#39;s account. | [default to undefined]
**total** | **number** | The total number of pickups returned | [readonly] [default to undefined]
**page** | **number** | Current page of the list pickups results | [readonly] [default to undefined]
**pages** | **number** | Total number of pages for list pickups results | [readonly] [default to undefined]
**links** | [**PaginationLink**](PaginationLink.md) | Helpful links to other pages of results | [readonly] [default to undefined]
**request_id** | **string** | A UUID that uniquely identifies the request id. This can be given to the support team to help debug non-trivial issues that may occur  | [default to undefined]
**errors** | [**Array&lt;ModelError&gt;**](ModelError.md) | The errors associated with the failed API call | [default to undefined]

## Example

```typescript
import { GetPickupsResponseBody } from 'shipstation-client';

const instance: GetPickupsResponseBody = {
    pickups,
    total,
    page,
    pages,
    links,
    request_id,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
