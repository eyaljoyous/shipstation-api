# ManifestsApi

All URIs are relative to *https://api.shipstation.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createManifest**](#createmanifest) | **POST** /v2/manifests | Create manifest|
|[**getManifestById**](#getmanifestbyid) | **GET** /v2/manifests/{manifest_id} | Get manifest by id|
|[**listManifests**](#listmanifests) | **GET** /v2/manifests | List manifests|

# **createManifest**
> CreateManifestResponseBody createManifest(createManifestRequestBody)

Each ShipStation manifest is created for a specific warehouse, so you\'ll need to provide the warehouse_id rather than the ship_from address. You can create a warehouse for each location that you want to create manifests for. 

### Example

```typescript
import {
    ManifestsApi,
    Configuration,
    CreateManifestRequestBody
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new ManifestsApi(configuration);

let createManifestRequestBody: CreateManifestRequestBody; //

const { status, data } = await apiInstance.createManifest(
    createManifestRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createManifestRequestBody** | **CreateManifestRequestBody**|  | |


### Return type

**CreateManifestResponseBody**

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

# **getManifestById**
> GetManifestByIdResponseBody getManifestById()

Get Manifest By Id

### Example

```typescript
import {
    ManifestsApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new ManifestsApi(configuration);

let manifestId: string; //The Manifest Id (default to undefined)

const { status, data } = await apiInstance.getManifestById(
    manifestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **manifestId** | [**string**] | The Manifest Id | defaults to undefined|


### Return type

**GetManifestByIdResponseBody**

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
|**404** | The API returns a 404 response when no &#x60;manifest&#x60; corresponds to the &#x60;manifest_id&#x60; provided. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listManifests**
> ListManifestsResponseBody listManifests()

Similar to querying shipments, we allow you to query manifests since there will likely be a large number over a long period of time.

### Example

```typescript
import {
    ManifestsApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new ManifestsApi(configuration);

let warehouseId: string; //Warehouse ID (optional) (default to undefined)
let shipDateStart: string; //ship date start range (optional) (default to undefined)
let shipDateEnd: string; //ship date end range (optional) (default to undefined)
let createdAtStart: string; //Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time) (optional) (default to undefined)
let createdAtEnd: string; //Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time) (optional) (default to undefined)
let carrierId: string; //Carrier ID (optional) (default to undefined)
let page: number; //Return a specific page of results. Defaults to the first page. If set to a number that\'s greater than the number of pages of results, an empty page is returned.  (optional) (default to 1)
let pageSize: number; //The number of results to return per response. (optional) (default to 25)
let labelIds: Array<string>; // (optional) (default to undefined)

const { status, data } = await apiInstance.listManifests(
    warehouseId,
    shipDateStart,
    shipDateEnd,
    createdAtStart,
    createdAtEnd,
    carrierId,
    page,
    pageSize,
    labelIds
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **warehouseId** | [**string**] | Warehouse ID | (optional) defaults to undefined|
| **shipDateStart** | [**string**] | ship date start range | (optional) defaults to undefined|
| **shipDateEnd** | [**string**] | ship date end range | (optional) defaults to undefined|
| **createdAtStart** | [**string**] | Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time) | (optional) defaults to undefined|
| **createdAtEnd** | [**string**] | Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time) | (optional) defaults to undefined|
| **carrierId** | [**string**] | Carrier ID | (optional) defaults to undefined|
| **page** | [**number**] | Return a specific page of results. Defaults to the first page. If set to a number that\&#39;s greater than the number of pages of results, an empty page is returned.  | (optional) defaults to 1|
| **pageSize** | [**number**] | The number of results to return per response. | (optional) defaults to 25|
| **labelIds** | **Array&lt;string&gt;** |  | (optional) defaults to undefined|


### Return type

**ListManifestsResponseBody**

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

