# ShipmentsApi

All URIs are relative to *https://api.shipstation.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelShipments**](#cancelshipments) | **PUT** /v2/shipments/{shipment_id}/cancel | Cancel a shipment|
|[**getShipmentByExternalId**](#getshipmentbyexternalid) | **GET** /v2/shipments/external_shipment_id/{external_shipment_id} | Get shipment by external id|
|[**getShipmentById**](#getshipmentbyid) | **GET** /v2/shipments/{shipment_id} | Get shipment by id|
|[**listShipmentRates**](#listshipmentrates) | **GET** /v2/shipments/{shipment_id}/rates | Get shipment rates|
|[**listShipments**](#listshipments) | **GET** /v2/shipments | List shipments|
|[**tagShipment**](#tagshipment) | **POST** /v2/shipments/{shipment_id}/tags/{tag_name} | Add tag to shipment|
|[**untagShipment**](#untagshipment) | **DELETE** /v2/shipments/{shipment_id}/tags/{tag_name} | Remove tag from shipment|

# **cancelShipments**
> string cancelShipments()

Mark a shipment cancelled, if it is no longer needed or being used by your organized. Any label associated with the shipment needs to be voided first An example use case would be if a batch label creation job is going to run at a set time and only queries `pending` shipments. Marking a shipment as cancelled would remove it from this process 

### Example

```typescript
import {
    ShipmentsApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new ShipmentsApi(configuration);

let shipmentId: string; //Shipment ID (default to undefined)

const { status, data } = await apiInstance.cancelShipments(
    shipmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipmentId** | [**string**] | Shipment ID | defaults to undefined|


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

# **getShipmentByExternalId**
> GetShipmentByExternalIdResponseBody getShipmentByExternalId()

Query Shipments created using your own custom ID convention using this endpoint

### Example

```typescript
import {
    ShipmentsApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new ShipmentsApi(configuration);

let externalShipmentId: string; // (default to undefined)

const { status, data } = await apiInstance.getShipmentByExternalId(
    externalShipmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalShipmentId** | [**string**] |  | defaults to undefined|


### Return type

**GetShipmentByExternalIdResponseBody**

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

# **getShipmentById**
> GetShipmentByIdResponseBody getShipmentById()

Get an individual shipment based on its ID

### Example

```typescript
import {
    ShipmentsApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new ShipmentsApi(configuration);

let shipmentId: string; //Shipment ID (default to undefined)

const { status, data } = await apiInstance.getShipmentById(
    shipmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipmentId** | [**string**] | Shipment ID | defaults to undefined|


### Return type

**GetShipmentByIdResponseBody**

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

# **listShipmentRates**
> ListShipmentRatesResponseBody listShipmentRates()

Get Rates for the shipment information associated with the shipment ID

### Example

```typescript
import {
    ShipmentsApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new ShipmentsApi(configuration);

let shipmentId: string; //Shipment ID (default to undefined)
let createdAtStart: string; //Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time) (optional) (default to undefined)

const { status, data } = await apiInstance.listShipmentRates(
    shipmentId,
    createdAtStart
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipmentId** | [**string**] | Shipment ID | defaults to undefined|
| **createdAtStart** | [**string**] | Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time) | (optional) defaults to undefined|


### Return type

**ListShipmentRatesResponseBody**

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

# **listShipments**
> ListShipmentsResponseBody listShipments()

Get list of Shipments

### Example

```typescript
import {
    ShipmentsApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new ShipmentsApi(configuration);

let pickupId: string; // (default to undefined)
let shipmentStatus: ShipmentStatus; // (optional) (default to undefined)
let batchId: string; //Batch ID (optional) (default to undefined)
let createdAtStart: string; //Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time) (optional) (default to undefined)
let createdAtEnd: string; //Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time) (optional) (default to undefined)
let modifiedAtStart: string; //Used to create a filter for when a resource was modified (ex. A shipment that was modified after a certain time) (optional) (default to undefined)
let modifiedAtEnd: string; //Used to create a filter for when a resource was modified (ex. A shipment that was modified before a certain time) (optional) (default to undefined)
let page: number; //Return a specific page of results. Defaults to the first page. If set to a number that\'s greater than the number of pages of results, an empty page is returned.  (optional) (default to 1)
let pageSize: number; //The number of results to return per response. (optional) (default to 25)
let salesOrderId: string; //Sales Order ID (optional) (default to undefined)
let sortDir: SortDir; //Controls the sort order of the query. (optional) (default to undefined)
let shipmentNumber: string; //The user or order source defined shipment number (optional) (default to undefined)
let shipToName: string; //The name associated with the ship_to (optional) (default to undefined)
let itemKeyword: string; //Returns shipments that contain items that match the specified keyword. Fields searched are Sku, Description, and Options. (optional) (default to undefined)
let paymentDateStart: string; //Used to create a filter for resources based on the payment_date parameter after a certain time. (optional) (default to undefined)
let paymentDateEnd: string; //Used to create a filter for resources based on the payment_date parameter before a certain time. (optional) (default to undefined)
let storeId: string; //Store ID (optional) (default to undefined)
let externalShipmentId: string; // (optional) (default to undefined)
let sortBy: ShipmentsSortBy; // (optional) (default to undefined)

const { status, data } = await apiInstance.listShipments(
    pickupId,
    shipmentStatus,
    batchId,
    createdAtStart,
    createdAtEnd,
    modifiedAtStart,
    modifiedAtEnd,
    page,
    pageSize,
    salesOrderId,
    sortDir,
    shipmentNumber,
    shipToName,
    itemKeyword,
    paymentDateStart,
    paymentDateEnd,
    storeId,
    externalShipmentId,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pickupId** | [**string**] |  | defaults to undefined|
| **shipmentStatus** | **ShipmentStatus** |  | (optional) defaults to undefined|
| **batchId** | [**string**] | Batch ID | (optional) defaults to undefined|
| **createdAtStart** | [**string**] | Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time) | (optional) defaults to undefined|
| **createdAtEnd** | [**string**] | Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time) | (optional) defaults to undefined|
| **modifiedAtStart** | [**string**] | Used to create a filter for when a resource was modified (ex. A shipment that was modified after a certain time) | (optional) defaults to undefined|
| **modifiedAtEnd** | [**string**] | Used to create a filter for when a resource was modified (ex. A shipment that was modified before a certain time) | (optional) defaults to undefined|
| **page** | [**number**] | Return a specific page of results. Defaults to the first page. If set to a number that\&#39;s greater than the number of pages of results, an empty page is returned.  | (optional) defaults to 1|
| **pageSize** | [**number**] | The number of results to return per response. | (optional) defaults to 25|
| **salesOrderId** | [**string**] | Sales Order ID | (optional) defaults to undefined|
| **sortDir** | **SortDir** | Controls the sort order of the query. | (optional) defaults to undefined|
| **shipmentNumber** | [**string**] | The user or order source defined shipment number | (optional) defaults to undefined|
| **shipToName** | [**string**] | The name associated with the ship_to | (optional) defaults to undefined|
| **itemKeyword** | [**string**] | Returns shipments that contain items that match the specified keyword. Fields searched are Sku, Description, and Options. | (optional) defaults to undefined|
| **paymentDateStart** | [**string**] | Used to create a filter for resources based on the payment_date parameter after a certain time. | (optional) defaults to undefined|
| **paymentDateEnd** | [**string**] | Used to create a filter for resources based on the payment_date parameter before a certain time. | (optional) defaults to undefined|
| **storeId** | [**string**] | Store ID | (optional) defaults to undefined|
| **externalShipmentId** | [**string**] |  | (optional) defaults to undefined|
| **sortBy** | **ShipmentsSortBy** |  | (optional) defaults to undefined|


### Return type

**ListShipmentsResponseBody**

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

# **tagShipment**
> TagShipmentResponseBody tagShipment()

Add a tag to the shipment object

### Example

```typescript
import {
    ShipmentsApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new ShipmentsApi(configuration);

let shipmentId: string; //Shipment ID (default to undefined)
let tagName: string; // (default to undefined)

const { status, data } = await apiInstance.tagShipment(
    shipmentId,
    tagName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipmentId** | [**string**] | Shipment ID | defaults to undefined|
| **tagName** | [**string**] |  | defaults to undefined|


### Return type

**TagShipmentResponseBody**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested object creation was a success. |  -  |
|**400** | The request contained errors. |  -  |
|**404** | The specified resource does not exist. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **untagShipment**
> string untagShipment()

Remove an existing tag from the Shipment object

### Example

```typescript
import {
    ShipmentsApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new ShipmentsApi(configuration);

let shipmentId: string; //Shipment ID (default to undefined)
let tagName: string; // (default to undefined)

const { status, data } = await apiInstance.untagShipment(
    shipmentId,
    tagName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipmentId** | [**string**] | Shipment ID | defaults to undefined|
| **tagName** | [**string**] |  | defaults to undefined|


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

