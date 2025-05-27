# DownloadsApi

All URIs are relative to *https://api.shipstation.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**downloadFile**](#downloadfile) | **GET** /v2/downloads/{dir}/{subdir}/{filename} | Download file|

# **downloadFile**
> File downloadFile()

Download labels and other shipment-related documents.

### Example

```typescript
import {
    DownloadsApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new DownloadsApi(configuration);

let subdir: string; // (default to undefined)
let filename: string; // (default to undefined)
let dir: string; // (default to undefined)
let download: string; // (optional) (default to undefined)
let rotation: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.downloadFile(
    subdir,
    filename,
    dir,
    download,
    rotation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subdir** | [**string**] |  | defaults to undefined|
| **filename** | [**string**] |  | defaults to undefined|
| **dir** | [**string**] |  | defaults to undefined|
| **download** | [**string**] |  | (optional) defaults to undefined|
| **rotation** | [**number**] |  | (optional) defaults to undefined|


### Return type

**File**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, image/png, application/zpl, application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The request was a success |  -  |
|**400** | The request contained errors. |  -  |
|**404** | The specified resource does not exist. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

