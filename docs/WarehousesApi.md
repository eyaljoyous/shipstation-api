# WarehousesApi

All URIs are relative to *https://api.shipstation.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getWarehouseById**](#getwarehousebyid) | **GET** /v2/warehouses/{warehouse_id} | Get warehouse by id|
|[**listWarehouses**](#listwarehouses) | **GET** /v2/warehouses | List warehouses|

# **getWarehouseById**
> GetWarehouseByIdResponseBody getWarehouseById()

Retrieve warehouse data based on the warehouse ID

### Example

```typescript
import {
    WarehousesApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new WarehousesApi(configuration);

let warehouseId: string; //Warehouse ID (default to undefined)

const { status, data } = await apiInstance.getWarehouseById(
    warehouseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **warehouseId** | [**string**] | Warehouse ID | defaults to undefined|


### Return type

**GetWarehouseByIdResponseBody**

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

# **listWarehouses**
> ListWarehousesResponseBody listWarehouses()

Retrieve a list of warehouses associated with this account.

### Example

```typescript
import {
    WarehousesApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new WarehousesApi(configuration);

const { status, data } = await apiInstance.listWarehouses();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ListWarehousesResponseBody**

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

