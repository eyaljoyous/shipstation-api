# CarriersApi

All URIs are relative to *https://api.shipstation.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCarrierById**](#getcarrierbyid) | **GET** /v2/carriers/{carrier_id} | Get carrier by id|
|[**getCarrierOptions**](#getcarrieroptions) | **GET** /v2/carriers/{carrier_id}/options | Get carrier options|
|[**listCarrierPackageTypes**](#listcarrierpackagetypes) | **GET** /v2/carriers/{carrier_id}/packages | List carrier package types|
|[**listCarrierServices**](#listcarrierservices) | **GET** /v2/carriers/{carrier_id}/services | List carrier services|
|[**listCarriers**](#listcarriers) | **GET** /v2/carriers | List carriers|

# **getCarrierById**
> GetCarrierByIdResponseBody getCarrierById()

Retrive details about a specific carrier by its carrier id.

### Example

```typescript
import {
    CarriersApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new CarriersApi(configuration);

let carrierId: string; //Carrier ID (default to undefined)

const { status, data } = await apiInstance.getCarrierById(
    carrierId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **carrierId** | [**string**] | Carrier ID | defaults to undefined|


### Return type

**GetCarrierByIdResponseBody**

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

# **getCarrierOptions**
> GetCarrierOptionsResponseBody getCarrierOptions()

Get a list of the options available for a specific carriers.

### Example

```typescript
import {
    CarriersApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new CarriersApi(configuration);

let carrierId: string; //Carrier ID (default to undefined)

const { status, data } = await apiInstance.getCarrierOptions(
    carrierId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **carrierId** | [**string**] | Carrier ID | defaults to undefined|


### Return type

**GetCarrierOptionsResponseBody**

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

# **listCarrierPackageTypes**
> ListCarrierPackageTypesResponseBody listCarrierPackageTypes()

List the package types associated with a specific carrier.

### Example

```typescript
import {
    CarriersApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new CarriersApi(configuration);

let carrierId: string; //Carrier ID (default to undefined)

const { status, data } = await apiInstance.listCarrierPackageTypes(
    carrierId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **carrierId** | [**string**] | Carrier ID | defaults to undefined|


### Return type

**ListCarrierPackageTypesResponseBody**

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

# **listCarrierServices**
> ListCarrierServicesResponseBody listCarrierServices()

List the services associated with a specific carrier id.

### Example

```typescript
import {
    CarriersApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new CarriersApi(configuration);

let carrierId: string; //Carrier ID (default to undefined)

const { status, data } = await apiInstance.listCarrierServices(
    carrierId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **carrierId** | [**string**] | Carrier ID | defaults to undefined|


### Return type

**ListCarrierServicesResponseBody**

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

# **listCarriers**
> GetCarriersResponseBody listCarriers()

List all carriers that have been added to this account.

### Example

```typescript
import {
    CarriersApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new CarriersApi(configuration);

const { status, data } = await apiInstance.listCarriers();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetCarriersResponseBody**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The request was a success. |  -  |
|**207** | The request was a partial success. It contains results, as well as errors. |  -  |
|**400** | The request contained errors. |  -  |
|**404** | The specified resource does not exist. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

