# TagsApi

All URIs are relative to *https://api.shipstation.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createTag**](#createtag) | **POST** /v2/tags/{tag_name} | Create a new tag|
|[**listTags**](#listtags) | **GET** /v2/tags | Get tags|

# **createTag**
> CreateTagResponseBody createTag()

Create a new Tag for customizing how you track your shipments

### Example

```typescript
import {
    TagsApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let tagName: string; // (default to undefined)

const { status, data } = await apiInstance.createTag(
    tagName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tagName** | [**string**] |  | defaults to undefined|


### Return type

**CreateTagResponseBody**

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

# **listTags**
> ListTagsResponseBody listTags()

Get a list of all tags associated with an account.

### Example

```typescript
import {
    TagsApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

const { status, data } = await apiInstance.listTags();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ListTagsResponseBody**

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

