# ListManifestsResponseBody

A list manifests response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manifests** | [**Array&lt;Manifest&gt;**](Manifest.md) | The list of available manifests | [default to undefined]
**total** | **number** | The total number of manifests returned | [readonly] [default to undefined]
**page** | **number** | Current page of the list manifests results | [readonly] [default to undefined]
**pages** | **number** | Total number of pages for list manifests results | [readonly] [default to undefined]
**links** | [**PaginationLink**](PaginationLink.md) | Helpful links to other pages of results | [readonly] [default to undefined]

## Example

```typescript
import { ListManifestsResponseBody } from 'shipstation-client';

const instance: ListManifestsResponseBody = {
    manifests,
    total,
    page,
    pages,
    links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
