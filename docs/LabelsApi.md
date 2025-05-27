# LabelsApi

All URIs are relative to *https://api.shipstation.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createLabel**](#createlabel) | **POST** /v2/labels | Purchase label|
|[**createLabelFromRate**](#createlabelfromrate) | **POST** /v2/labels/rates/{rate_id} | Purchase label with rate id|
|[**createLabelFromShipment**](#createlabelfromshipment) | **POST** /v2/labels/shipment/{shipment_id} | Purchase label with shipment id|
|[**createReturnLabel**](#createreturnlabel) | **POST** /v2/labels/{label_id}/return | Create a return label|
|[**getLabelById**](#getlabelbyid) | **GET** /v2/labels/{label_id} | Get label by id|
|[**getTrackingLogFromLabel**](#gettrackinglogfromlabel) | **GET** /v2/labels/{label_id}/track | Get label tracking information|
|[**listLabels**](#listlabels) | **GET** /v2/labels | List labels|
|[**voidLabel**](#voidlabel) | **PUT** /v2/labels/{label_id}/void | Void a label by id|

# **createLabel**
> CreateLabelResponseBody createLabel(createLabelRequestBody)

Purchase and print a label for shipment.

### Example

```typescript
import {
    LabelsApi,
    Configuration,
    CreateLabelRequestBody
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new LabelsApi(configuration);

let createLabelRequestBody: CreateLabelRequestBody; //

const { status, data } = await apiInstance.createLabel(
    createLabelRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createLabelRequestBody** | **CreateLabelRequestBody**|  | |


### Return type

**CreateLabelResponseBody**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested object creation was a success. |  -  |
|**400** | The request contained errors. |  -  |
|**404** | The specified resource does not exist. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createLabelFromRate**
> CreateLabelFromRateResponseBody createLabelFromRate(createLabelFromRateRequestBody)

When retrieving rates for shipments using the `/rates` endpoint, the returned information contains a `rate_id` property that can be used to generate a label without having to refill in the shipment information repeatedly. 

### Example

```typescript
import {
    LabelsApi,
    Configuration,
    CreateLabelFromRateRequestBody
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new LabelsApi(configuration);

let rateId: string; //Rate ID (default to undefined)
let createLabelFromRateRequestBody: CreateLabelFromRateRequestBody; //

const { status, data } = await apiInstance.createLabelFromRate(
    rateId,
    createLabelFromRateRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createLabelFromRateRequestBody** | **CreateLabelFromRateRequestBody**|  | |
| **rateId** | [**string**] | Rate ID | defaults to undefined|


### Return type

**CreateLabelFromRateResponseBody**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested object creation was a success. |  -  |
|**400** | The request contained errors. |  -  |
|**404** | The specified resource does not exist. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createLabelFromShipment**
> CreateLabelFromShipmentResponseBody createLabelFromShipment(createLabelFromShipmentRequestBody)

Purchase a label using a shipment ID that has already been created with the desired address and package info. 

### Example

```typescript
import {
    LabelsApi,
    Configuration,
    CreateLabelFromShipmentRequestBody
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new LabelsApi(configuration);

let shipmentId: string; //Shipment ID (default to undefined)
let createLabelFromShipmentRequestBody: CreateLabelFromShipmentRequestBody; //

const { status, data } = await apiInstance.createLabelFromShipment(
    shipmentId,
    createLabelFromShipmentRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createLabelFromShipmentRequestBody** | **CreateLabelFromShipmentRequestBody**|  | |
| **shipmentId** | [**string**] | Shipment ID | defaults to undefined|


### Return type

**CreateLabelFromShipmentResponseBody**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested object creation was a success. |  -  |
|**400** | The request contained errors. |  -  |
|**404** | The specified resource does not exist. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createReturnLabel**
> CreateReturnLabelResponseBody createReturnLabel(createReturnLabelRequestBody)

Create a return label for a previously created outbound label. The return label will automatically swap the ship to and ship from addresses from the original label.

### Example

```typescript
import {
    LabelsApi,
    Configuration,
    CreateReturnLabelRequestBody
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new LabelsApi(configuration);

let labelId: string; //Label ID (default to undefined)
let createReturnLabelRequestBody: CreateReturnLabelRequestBody; //

const { status, data } = await apiInstance.createReturnLabel(
    labelId,
    createReturnLabelRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createReturnLabelRequestBody** | **CreateReturnLabelRequestBody**|  | |
| **labelId** | [**string**] | Label ID | defaults to undefined|


### Return type

**CreateReturnLabelResponseBody**

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
|**404** | The API returns a 404 response when no &#x60;label&#x60; corresponds to the &#x60;label_id&#x60; provided. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLabelById**
> GetLabelByIdResponseBody getLabelById()

Retrieve a specific label by its label id.

### Example

```typescript
import {
    LabelsApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new LabelsApi(configuration);

let labelId: string; //Label ID (default to undefined)
let labelDownloadType: LabelDownloadType; // (optional) (default to undefined)

const { status, data } = await apiInstance.getLabelById(
    labelId,
    labelDownloadType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **labelId** | [**string**] | Label ID | defaults to undefined|
| **labelDownloadType** | **LabelDownloadType** |  | (optional) defaults to undefined|


### Return type

**GetLabelByIdResponseBody**

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
|**404** | The API returns a 404 response when no &#x60;label&#x60; corresponds to the &#x60;label_id&#x60; provided. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTrackingLogFromLabel**
> GetTrackingLogFromLabelResponseBody getTrackingLogFromLabel()

Retrieve the label\'s tracking details.

### Example

```typescript
import {
    LabelsApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new LabelsApi(configuration);

let labelId: string; //Label ID (default to undefined)

const { status, data } = await apiInstance.getTrackingLogFromLabel(
    labelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **labelId** | [**string**] | Label ID | defaults to undefined|


### Return type

**GetTrackingLogFromLabelResponseBody**

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

# **listLabels**
> ListLabelsResponseBody listLabels()

This method returns a list of labels that you\'ve created. You can optionally filter the results as well as control their sort order and the number of results returned at a time.  By default all labels are returned 25 at a time, starting with the most recently created ones. You can combine multiple filter options to narrow-down the results.  For example, if you only want your UPS labels for your east coast warehouse you could query by both `warehouse_id` and `carrier_id`. 

### Example

```typescript
import {
    LabelsApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new LabelsApi(configuration);

let labelStatus: LabelStatus; //Only return labels that are currently in the specified status. (optional) (default to undefined)
let serviceCode: string; //Only return labels for a specific carrier service. (optional) (default to undefined)
let carrierId: string; //Carrier ID (optional) (default to undefined)
let trackingNumber: string; //The tracking number associated with a shipment (optional) (default to undefined)
let batchId: string; //Batch ID (optional) (default to undefined)
let rateId: string; //Rate ID (optional) (default to undefined)
let shipmentId: string; //Shipment ID (optional) (default to undefined)
let warehouseId: string; //Warehouse ID (optional) (default to undefined)
let createdAtStart: string; //Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time) (optional) (default to undefined)
let createdAtEnd: string; //Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time) (optional) (default to undefined)
let page: number; //Return a specific page of results. Defaults to the first page. If set to a number that\'s greater than the number of pages of results, an empty page is returned.  (optional) (default to 1)
let pageSize: number; //The number of results to return per response. (optional) (default to 25)
let sortDir: SortDir; //Controls the sort order of the query. (optional) (default to undefined)
let sortBy: 'modified_at' | 'created_at'; //Controls which field the query is sorted by. (optional) (default to 'created_at')

const { status, data } = await apiInstance.listLabels(
    labelStatus,
    serviceCode,
    carrierId,
    trackingNumber,
    batchId,
    rateId,
    shipmentId,
    warehouseId,
    createdAtStart,
    createdAtEnd,
    page,
    pageSize,
    sortDir,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **labelStatus** | **LabelStatus** | Only return labels that are currently in the specified status. | (optional) defaults to undefined|
| **serviceCode** | [**string**] | Only return labels for a specific carrier service. | (optional) defaults to undefined|
| **carrierId** | [**string**] | Carrier ID | (optional) defaults to undefined|
| **trackingNumber** | [**string**] | The tracking number associated with a shipment | (optional) defaults to undefined|
| **batchId** | [**string**] | Batch ID | (optional) defaults to undefined|
| **rateId** | [**string**] | Rate ID | (optional) defaults to undefined|
| **shipmentId** | [**string**] | Shipment ID | (optional) defaults to undefined|
| **warehouseId** | [**string**] | Warehouse ID | (optional) defaults to undefined|
| **createdAtStart** | [**string**] | Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time) | (optional) defaults to undefined|
| **createdAtEnd** | [**string**] | Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time) | (optional) defaults to undefined|
| **page** | [**number**] | Return a specific page of results. Defaults to the first page. If set to a number that\&#39;s greater than the number of pages of results, an empty page is returned.  | (optional) defaults to 1|
| **pageSize** | [**number**] | The number of results to return per response. | (optional) defaults to 25|
| **sortDir** | **SortDir** | Controls the sort order of the query. | (optional) defaults to undefined|
| **sortBy** | [**&#39;modified_at&#39; | &#39;created_at&#39;**]**Array<&#39;modified_at&#39; &#124; &#39;created_at&#39;>** | Controls which field the query is sorted by. | (optional) defaults to 'created_at'|


### Return type

**ListLabelsResponseBody**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The response includes a &#x60;labels&#x60; array containing a page of results (as determined by the &#x60;page_size&#x60; query parameter). It also includes other useful information, such as the total number of labels that match the query criteria, the number of pages of results, and the URLs of the first, last, next, and previous pages of results.  |  -  |
|**400** | The request contained errors. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **voidLabel**
> VoidLabelResponseBody voidLabel()

Void a specific label using its label id. For labels that are paid for at time of label creation, this will also request a refund from the carrier.

### Example

```typescript
import {
    LabelsApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new LabelsApi(configuration);

let labelId: string; //Label ID (default to undefined)

const { status, data } = await apiInstance.voidLabel(
    labelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **labelId** | [**string**] | Label ID | defaults to undefined|


### Return type

**VoidLabelResponseBody**

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

