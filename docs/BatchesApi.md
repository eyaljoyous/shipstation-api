# BatchesApi

All URIs are relative to *https://api.shipstation.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addToBatch**](#addtobatch) | **POST** /v2/batches/{batch_id}/add | Add to a batch|
|[**createBatch**](#createbatch) | **POST** /v2/batches | Create a batch|
|[**deleteBatch**](#deletebatch) | **DELETE** /v2/batches/{batch_id} | Delete batch by id|
|[**getBatchByExternalId**](#getbatchbyexternalid) | **GET** /v2/batches/external_batch_id/{external_batch_id} | Get batch by external id|
|[**getBatchById**](#getbatchbyid) | **GET** /v2/batches/{batch_id} | Get batch by id|
|[**listBatchErrors**](#listbatcherrors) | **GET** /v2/batches/{batch_id}/errors | Get batch errors|
|[**listBatches**](#listbatches) | **GET** /v2/batches | List batches|
|[**processBatch**](#processbatch) | **POST** /v2/batches/{batch_id}/process/labels | Process batch id labels|
|[**removeFromBatch**](#removefrombatch) | **POST** /v2/batches/{batch_id}/remove | Remove from batch|
|[**updateBatch**](#updatebatch) | **PUT** /v2/batches/{batch_id} | Update batch status to \&#39;archived\&#39; by id|

# **addToBatch**
> string addToBatch(createAndProcessBatchRequestBody)

Add a shipment or rate to a batch.

### Example

```typescript
import {
    BatchesApi,
    Configuration,
    CreateAndProcessBatchRequestBody
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new BatchesApi(configuration);

let batchId: string; //Batch ID (default to undefined)
let createAndProcessBatchRequestBody: CreateAndProcessBatchRequestBody; //

const { status, data } = await apiInstance.addToBatch(
    batchId,
    createAndProcessBatchRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAndProcessBatchRequestBody** | **CreateAndProcessBatchRequestBody**|  | |
| **batchId** | [**string**] | Batch ID | defaults to undefined|


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
|**404** | The API returns a 404 response when no &#x60;batch&#x60; corresponds to the &#x60;batch_id&#x60; provided. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createBatch**
> CreateBatchResponseBody createBatch(createBatchRequest)

Create a batch containing multiple labels.

### Example

```typescript
import {
    BatchesApi,
    Configuration,
    CreateBatchRequest
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new BatchesApi(configuration);

let createBatchRequest: CreateBatchRequest; //

const { status, data } = await apiInstance.createBatch(
    createBatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBatchRequest** | **CreateBatchRequest**|  | |


### Return type

**CreateBatchResponseBody**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested object creation was a success. |  -  |
|**207** | The request was a partial success. It contains results, as well as processing errors. |  -  |
|**400** | The request contained errors. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteBatch**
> string deleteBatch()

Delete a batch based on its batch id. Sets its status to \'archived\'.

### Example

```typescript
import {
    BatchesApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new BatchesApi(configuration);

let batchId: string; //Batch ID (default to undefined)

const { status, data } = await apiInstance.deleteBatch(
    batchId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchId** | [**string**] | Batch ID | defaults to undefined|


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
|**400** | The request contained errors. |  -  |
|**404** | The specified resource does not exist. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBatchByExternalId**
> GetBatchByExternalIdResponseBody getBatchByExternalId()

Retreive a batch using an external batch ID

### Example

```typescript
import {
    BatchesApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new BatchesApi(configuration);

let externalBatchId: string; // (default to undefined)

const { status, data } = await apiInstance.getBatchByExternalId(
    externalBatchId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalBatchId** | [**string**] |  | defaults to undefined|


### Return type

**GetBatchByExternalIdResponseBody**

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
|**404** | The API returns a 404 response when no &#x60;batch&#x60; corresponds to the &#x60;external_batch_id&#x60; provided. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBatchById**
> GetBatchByIdResponseBody getBatchById()

Get batch details for a specific batch id.

### Example

```typescript
import {
    BatchesApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new BatchesApi(configuration);

let batchId: string; //Batch ID (default to undefined)

const { status, data } = await apiInstance.getBatchById(
    batchId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchId** | [**string**] | Batch ID | defaults to undefined|


### Return type

**GetBatchByIdResponseBody**

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
|**404** | The API returns a 404 response when no &#x60;batch&#x60; corresponds to the &#x60;batch_id&#x60; provided. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listBatchErrors**
> ListBatchErrorsResponseBody listBatchErrors()

Errors in batches must be handled differently from synchronous requests. You must retrieve the status of your batch by getting a batch and getting an overview of the statuses or by listing the batch errors. 

### Example

```typescript
import {
    BatchesApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new BatchesApi(configuration);

let batchId: string; //Batch ID (default to undefined)
let page: number; //Return a specific page of results. Defaults to the first page. If set to a number that\'s greater than the number of pages of results, an empty page is returned.  (optional) (default to 1)
let pagesize: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.listBatchErrors(
    batchId,
    page,
    pagesize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchId** | [**string**] | Batch ID | defaults to undefined|
| **page** | [**number**] | Return a specific page of results. Defaults to the first page. If set to a number that\&#39;s greater than the number of pages of results, an empty page is returned.  | (optional) defaults to 1|
| **pagesize** | [**number**] |  | (optional) defaults to undefined|


### Return type

**ListBatchErrorsResponseBody**

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

# **listBatches**
> ListBatchesResponseBody listBatches()

List the batches associated with your ShipStation account.

### Example

```typescript
import {
    BatchesApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new BatchesApi(configuration);

let status: BatchStatus; // (optional) (default to undefined)
let page: number; //Return a specific page of results. Defaults to the first page. If set to a number that\'s greater than the number of pages of results, an empty page is returned.  (optional) (default to 1)
let pageSize: number; //The number of results to return per response. (optional) (default to 25)
let sortDir: SortDir; //Controls the sort order of the query. (optional) (default to undefined)
let batchNumber: string; //Batch Number (optional) (default to undefined)
let sortBy: BatchesSortBy; // (optional) (default to undefined)

const { status, data } = await apiInstance.listBatches(
    status,
    page,
    pageSize,
    sortDir,
    batchNumber,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **status** | **BatchStatus** |  | (optional) defaults to undefined|
| **page** | [**number**] | Return a specific page of results. Defaults to the first page. If set to a number that\&#39;s greater than the number of pages of results, an empty page is returned.  | (optional) defaults to 1|
| **pageSize** | [**number**] | The number of results to return per response. | (optional) defaults to 25|
| **sortDir** | **SortDir** | Controls the sort order of the query. | (optional) defaults to undefined|
| **batchNumber** | [**string**] | Batch Number | (optional) defaults to undefined|
| **sortBy** | **BatchesSortBy** |  | (optional) defaults to undefined|


### Return type

**ListBatchesResponseBody**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The request was a success. |  -  |
|**404** | The specified resource does not exist. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **processBatch**
> string processBatch(processBatchRequestBody)

Create and purchase the labels for the shipments included in the batch.

### Example

```typescript
import {
    BatchesApi,
    Configuration,
    ProcessBatchRequestBody
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new BatchesApi(configuration);

let batchId: string; //Batch ID (default to undefined)
let processBatchRequestBody: ProcessBatchRequestBody; //

const { status, data } = await apiInstance.processBatch(
    batchId,
    processBatchRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **processBatchRequestBody** | **ProcessBatchRequestBody**|  | |
| **batchId** | [**string**] | Batch ID | defaults to undefined|


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

# **removeFromBatch**
> string removeFromBatch(removeFromBatchRequestBody)

Remove specific shipment ids or rate ids from a batch.

### Example

```typescript
import {
    BatchesApi,
    Configuration,
    RemoveFromBatchRequestBody
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new BatchesApi(configuration);

let batchId: string; //Batch ID (default to undefined)
let removeFromBatchRequestBody: RemoveFromBatchRequestBody; //

const { status, data } = await apiInstance.removeFromBatch(
    batchId,
    removeFromBatchRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **removeFromBatchRequestBody** | **RemoveFromBatchRequestBody**|  | |
| **batchId** | [**string**] | Batch ID | defaults to undefined|


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

# **updateBatch**
> string updateBatch()

Update a batch by id setting its status to \'archived\'.

### Example

```typescript
import {
    BatchesApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new BatchesApi(configuration);

let batchId: string; //Batch ID (default to undefined)

const { status, data } = await apiInstance.updateBatch(
    batchId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchId** | [**string**] | Batch ID | defaults to undefined|


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
|**400** | The request contained errors. |  -  |
|**404** | The specified resource does not exist. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

