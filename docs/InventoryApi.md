# InventoryApi

All URIs are relative to *https://api.shipstation.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addNewInventoryWarehouse**](#addnewinventorywarehouse) | **POST** /v2/inventory_warehouses | Create a new inventory warehouse|
|[**createInventoryLocation**](#createinventorylocation) | **POST** /v2/inventory_locations | Create a new inventory location|
|[**deleteInventoryLocationById**](#deleteinventorylocationbyid) | **DELETE** /v2/inventory_locations/{inventory_location_id} | Delete an inventory location|
|[**deleteInventoryWarehouse**](#deleteinventorywarehouse) | **DELETE** /v2/inventory_warehouses/{inventory_warehouse_id} | Delete an inventory warehouse|
|[**getInventoryLevels**](#getinventorylevels) | **GET** /v2/inventory | List SKU inventory levels|
|[**getInventoryLocationById**](#getinventorylocationbyid) | **GET** /v2/inventory_locations/{inventory_location_id} | Get inventory location by ID|
|[**getInventoryWarehouseById**](#getinventorywarehousebyid) | **GET** /v2/inventory_warehouses/{inventory_warehouse_id} | Get a specific inventory warehouse and related properties using its warehouse ID|
|[**getInventoryWarehouses**](#getinventorywarehouses) | **GET** /v2/inventory_warehouses | List all inventory warehouses|
|[**listInventoryLocations**](#listinventorylocations) | **GET** /v2/inventory_locations | List all inventory locations|
|[**updateInventoryLocation**](#updateinventorylocation) | **PUT** /v2/inventory_locations/{inventory_location_id} | Update an inventory location name|
|[**updateInventoryWarehouse**](#updateinventorywarehouse) | **PUT** /v2/inventory_warehouses/{inventory_warehouse_id} | Update an inventory warehouse name|
|[**updateSKUStockLevels**](#updateskustocklevels) | **POST** /v2/inventory | Update SKU stock levels and related properties|

# **addNewInventoryWarehouse**
> GetInventoryWarehouses200ResponseInventoryWarehousesInner addNewInventoryWarehouse(addNewInventoryWarehouseRequest)


### Example

```typescript
import {
    InventoryApi,
    Configuration,
    AddNewInventoryWarehouseRequest
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let addNewInventoryWarehouseRequest: AddNewInventoryWarehouseRequest; //

const { status, data } = await apiInstance.addNewInventoryWarehouse(
    addNewInventoryWarehouseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addNewInventoryWarehouseRequest** | **AddNewInventoryWarehouseRequest**|  | |


### Return type

**GetInventoryWarehouses200ResponseInventoryWarehousesInner**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Inventory warehouse successfully created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createInventoryLocation**
> ListInventoryLocations200ResponseInventoryLocationsInner createInventoryLocation(createInventoryLocationRequest)


### Example

```typescript
import {
    InventoryApi,
    Configuration,
    CreateInventoryLocationRequest
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let createInventoryLocationRequest: CreateInventoryLocationRequest; //

const { status, data } = await apiInstance.createInventoryLocation(
    createInventoryLocationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createInventoryLocationRequest** | **CreateInventoryLocationRequest**|  | |


### Return type

**ListInventoryLocations200ResponseInventoryLocationsInner**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Inventory location successfully created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteInventoryLocationById**
> deleteInventoryLocationById()


### Example

```typescript
import {
    InventoryApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let inventoryLocationId: string; // (default to undefined)
let removeInventory: '0' | '1'; //If 1, remove all inventory from the location before deleting it. If 0 or missing and the location has On Hand inventory, the request will fail.  (optional) (default to undefined)

const { status, data } = await apiInstance.deleteInventoryLocationById(
    inventoryLocationId,
    removeInventory
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inventoryLocationId** | [**string**] |  | defaults to undefined|
| **removeInventory** | [**&#39;0&#39; | &#39;1&#39;**]**Array<&#39;0&#39; &#124; &#39;1&#39;>** | If 1, remove all inventory from the location before deleting it. If 0 or missing and the location has On Hand inventory, the request will fail.  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Inventory location successfully deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteInventoryWarehouse**
> deleteInventoryWarehouse()


### Example

```typescript
import {
    InventoryApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let inventoryWarehouseId: string; // (default to undefined)
let removeInventory: '0' | '1'; //If 1, remove all inventory from the warehouse before deleting it. If 0 or missing and the warehouse has On Hand inventory, the request will fail.  (optional) (default to undefined)

const { status, data } = await apiInstance.deleteInventoryWarehouse(
    inventoryWarehouseId,
    removeInventory
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inventoryWarehouseId** | [**string**] |  | defaults to undefined|
| **removeInventory** | [**&#39;0&#39; | &#39;1&#39;**]**Array<&#39;0&#39; &#124; &#39;1&#39;>** | If 1, remove all inventory from the warehouse before deleting it. If 0 or missing and the warehouse has On Hand inventory, the request will fail.  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Inventory warehouse successfully deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInventoryLevels**
> GetInventoryLevels200Response getInventoryLevels()


### Example

```typescript
import {
    InventoryApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let sku: string; //Optional list of SKUs to filter down to (optional) (default to undefined)
let inventoryWarehouseId: string; // (optional) (default to undefined)
let inventoryLocationId: string; // (optional) (default to undefined)
let groupBy: 'warehouse' | 'location'; //Get counts for SKUs across locations or warehouses (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getInventoryLevels(
    sku,
    inventoryWarehouseId,
    inventoryLocationId,
    groupBy,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sku** | [**string**] | Optional list of SKUs to filter down to | (optional) defaults to undefined|
| **inventoryWarehouseId** | [**string**] |  | (optional) defaults to undefined|
| **inventoryLocationId** | [**string**] |  | (optional) defaults to undefined|
| **groupBy** | [**&#39;warehouse&#39; | &#39;location&#39;**]**Array<&#39;warehouse&#39; &#124; &#39;location&#39;>** | Get counts for SKUs across locations or warehouses | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|


### Return type

**GetInventoryLevels200Response**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Inventory levels for SKUs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInventoryLocationById**
> ListInventoryLocations200ResponseInventoryLocationsInner getInventoryLocationById()


### Example

```typescript
import {
    InventoryApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let inventoryLocationId: string; // (default to undefined)

const { status, data } = await apiInstance.getInventoryLocationById(
    inventoryLocationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inventoryLocationId** | [**string**] |  | defaults to undefined|


### Return type

**ListInventoryLocations200ResponseInventoryLocationsInner**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Inventory location details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInventoryWarehouseById**
> GetInventoryWarehouses200ResponseInventoryWarehousesInner getInventoryWarehouseById()


### Example

```typescript
import {
    InventoryApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let inventoryWarehouseId: string; // (default to undefined)

const { status, data } = await apiInstance.getInventoryWarehouseById(
    inventoryWarehouseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inventoryWarehouseId** | [**string**] |  | defaults to undefined|


### Return type

**GetInventoryWarehouses200ResponseInventoryWarehousesInner**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Inventory warehouse details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInventoryWarehouses**
> GetInventoryWarehouses200Response getInventoryWarehouses()


### Example

```typescript
import {
    InventoryApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let limit: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getInventoryWarehouses(
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] |  | (optional) defaults to undefined|


### Return type

**GetInventoryWarehouses200Response**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of inventory warehouses |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listInventoryLocations**
> ListInventoryLocations200Response listInventoryLocations()


### Example

```typescript
import {
    InventoryApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let limit: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.listInventoryLocations(
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] |  | (optional) defaults to undefined|


### Return type

**ListInventoryLocations200Response**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of inventory locations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateInventoryLocation**
> updateInventoryLocation(updateInventoryWarehouseRequest)


### Example

```typescript
import {
    InventoryApi,
    Configuration,
    UpdateInventoryWarehouseRequest
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let inventoryLocationId: string; // (default to undefined)
let updateInventoryWarehouseRequest: UpdateInventoryWarehouseRequest; //

const { status, data } = await apiInstance.updateInventoryLocation(
    inventoryLocationId,
    updateInventoryWarehouseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateInventoryWarehouseRequest** | **UpdateInventoryWarehouseRequest**|  | |
| **inventoryLocationId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Inventory location successfully updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateInventoryWarehouse**
> updateInventoryWarehouse(updateInventoryWarehouseRequest)


### Example

```typescript
import {
    InventoryApi,
    Configuration,
    UpdateInventoryWarehouseRequest
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let inventoryWarehouseId: string; // (default to undefined)
let updateInventoryWarehouseRequest: UpdateInventoryWarehouseRequest; //

const { status, data } = await apiInstance.updateInventoryWarehouse(
    inventoryWarehouseId,
    updateInventoryWarehouseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateInventoryWarehouseRequest** | **UpdateInventoryWarehouseRequest**|  | |
| **inventoryWarehouseId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Inventory warehouse successfully updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateSKUStockLevels**
> updateSKUStockLevels(updateSKUStockLevelsRequest)


### Example

```typescript
import {
    InventoryApi,
    Configuration,
    UpdateSKUStockLevelsRequest
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let updateSKUStockLevelsRequest: UpdateSKUStockLevelsRequest; //

const { status, data } = await apiInstance.updateSKUStockLevels(
    updateSKUStockLevelsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSKUStockLevelsRequest** | **UpdateSKUStockLevelsRequest**|  | |


### Return type

void (empty response body)

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Inventory successfully updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

