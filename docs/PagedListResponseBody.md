# PagedListResponseBody

Many ShipStation endpoints return a paged list of items.  In addition to the returned items, these responses also include information about the total number of items, the number of pages of results, and URLs of other pages of results. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | The total number of items across all pages of results | [default to undefined]
**page** | **number** | The current page number of results.  For example, if there are 80 results, and the page size is 25, then &#x60;page&#x60; could be 1, 2, 3, or 4.  The first three pages would contain 25 items each, and the fourth page would contain the five remaining items. | [default to undefined]
**pages** | **number** | The total number of pages of results.  For example, if there are 80 results, and the page size is 25, then &#x60;pages&#x60; would be 4.  The first three pages would contain 25 items each, and the fourth page would contain the five remaining items.  If there are no results, then &#x60;pages&#x60; will be zero. | [default to undefined]
**links** | [**PaginationLink**](PaginationLink.md) |  | [default to undefined]

## Example

```typescript
import { PagedListResponseBody } from 'shipstation-client';

const instance: PagedListResponseBody = {
    total,
    page,
    pages,
    links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
