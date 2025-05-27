# ListPickupResponseBody

A list pickup response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pickups** | [**Array&lt;Pickup&gt;**](Pickup.md) | An array of pickups associated with the user\&#39;s account. | [default to undefined]
**total** | **number** | The total number of pickups returned | [readonly] [default to undefined]
**page** | **number** | Current page of the list pickups results | [readonly] [default to undefined]
**pages** | **number** | Total number of pages for list pickups results | [readonly] [default to undefined]
**links** | [**PaginationLink**](PaginationLink.md) | Helpful links to other pages of results | [readonly] [default to undefined]

## Example

```typescript
import { ListPickupResponseBody } from 'shipstation-client';

const instance: ListPickupResponseBody = {
    pickups,
    total,
    page,
    pages,
    links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
