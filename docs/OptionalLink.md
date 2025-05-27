# OptionalLink

A link to a related resource, or an empty object if there is no resource to link to

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **string** | The URL of the linked resource, if any | [optional] [default to undefined]
**type** | **string** | The type of resource, or the type of relationship to the parent resource | [optional] [default to undefined]

## Example

```typescript
import { OptionalLink } from 'shipstation-client';

const instance: OptionalLink = {
    href,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
