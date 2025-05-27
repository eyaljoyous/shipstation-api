# PackageTypesApi

All URIs are relative to *https://api.shipstation.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPackageType**](#createpackagetype) | **POST** /v2/packages | Create custom package type|
|[**deletePackageTyp**](#deletepackagetyp) | **DELETE** /v2/packages/{package_id} | Delete a custom package by id|
|[**getPackageTypeById**](#getpackagetypebyid) | **GET** /v2/packages/{package_id} | Get custom package type by id|
|[**listPackageTypes**](#listpackagetypes) | **GET** /v2/packages | List custom package types|
|[**updatePackageType**](#updatepackagetype) | **PUT** /v2/packages/{package_id} | Update custom package type by id|

# **createPackageType**
> CreatePackageTypeResponseBody createPackageType(createPackageTypeRequestBody)

Create a custom package type to better assist in getting accurate rate estimates

### Example

```typescript
import {
    PackageTypesApi,
    Configuration,
    CreatePackageTypeRequestBody
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new PackageTypesApi(configuration);

let createPackageTypeRequestBody: CreatePackageTypeRequestBody; //

const { status, data } = await apiInstance.createPackageType(
    createPackageTypeRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPackageTypeRequestBody** | **CreatePackageTypeRequestBody**|  | |


### Return type

**CreatePackageTypeResponseBody**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The request was a success. |  -  |
|**400** | The request contained errors. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePackageTyp**
> string deletePackageTyp()

Delete a custom package using the ID

### Example

```typescript
import {
    PackageTypesApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new PackageTypesApi(configuration);

let packageId: string; //Package ID (default to undefined)

const { status, data } = await apiInstance.deletePackageTyp(
    packageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **packageId** | [**string**] | Package ID | defaults to undefined|


### Return type

**string**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | The request was successful. |  -  |
|**400** | The API returns a 400 response when no &#x60;package&#x60; corresponds to the &#x60;package_id&#x60; provided. |  -  |
|**404** | The API returns a 404 response when no &#x60;package&#x60; corresponds to the &#x60;package_id&#x60; provided. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPackageTypeById**
> GetPackageTypeByIdResponseBody getPackageTypeById()

Get Custom Package Type by ID

### Example

```typescript
import {
    PackageTypesApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new PackageTypesApi(configuration);

let packageId: string; //Package ID (default to undefined)

const { status, data } = await apiInstance.getPackageTypeById(
    packageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **packageId** | [**string**] | Package ID | defaults to undefined|


### Return type

**GetPackageTypeByIdResponseBody**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The request was a success. |  -  |
|**400** | The request contained errors. |  -  |
|**404** | The API returns a 404 response when no &#x60;package&#x60; corresponds to the &#x60;package_id&#x60; provided. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPackageTypes**
> ListPackageTypesResponseBody listPackageTypes()

List the custom package types associated with the account

### Example

```typescript
import {
    PackageTypesApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new PackageTypesApi(configuration);

const { status, data } = await apiInstance.listPackageTypes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ListPackageTypesResponseBody**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The request was a success. |  -  |
|**400** | The request contained errors. |  -  |
|**404** | The specified resource does not exist. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePackageType**
> string updatePackageType(updatePackageTypeRequestBody)

Update the custom package type object by ID

### Example

```typescript
import {
    PackageTypesApi,
    Configuration,
    UpdatePackageTypeRequestBody
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new PackageTypesApi(configuration);

let packageId: string; //Package ID (default to undefined)
let updatePackageTypeRequestBody: UpdatePackageTypeRequestBody; //

const { status, data } = await apiInstance.updatePackageType(
    packageId,
    updatePackageTypeRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePackageTypeRequestBody** | **UpdatePackageTypeRequestBody**|  | |
| **packageId** | [**string**] | Package ID | defaults to undefined|


### Return type

**string**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | The request was successful. |  -  |
|**400** | The request contained errors. |  -  |
|**404** | The specified resource does not exist. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

