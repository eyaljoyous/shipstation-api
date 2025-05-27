# GetPackageTypeByIdResponseBody

A get package type by id response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_id** | **string** | A string that uniquely identifies the package. | [optional] [default to undefined]
**package_code** | **string** | A [package type] , such as &#x60;thick_envelope&#x60;, &#x60;small_flat_rate_box&#x60;, &#x60;large_package&#x60;, etc.  Use the code &#x60;package&#x60; for custom or unknown package types.  | [default to undefined]
**name** | **string** |  | [default to undefined]
**dimensions** | [**Dimensions**](Dimensions.md) | The custom dimensions for the package. | [optional] [default to undefined]
**description** | **string** | Provides a helpful description for the custom package. | [optional] [default to undefined]

## Example

```typescript
import { GetPackageTypeByIdResponseBody } from 'shipstation-client';

const instance: GetPackageTypeByIdResponseBody = {
    package_id,
    package_code,
    name,
    dimensions,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
