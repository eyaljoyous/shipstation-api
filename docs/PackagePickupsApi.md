# PackagePickupsApi

All URIs are relative to *https://api.shipstation.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteScheduledPickup**](#deletescheduledpickup) | **DELETE** /v2/pickups/{pickup_id} | Delete a scheduled pickup|
|[**getPickupById**](#getpickupbyid) | **GET** /v2/pickups/{pickup_id} | Get pickup by id|
|[**listScheduledPickups**](#listscheduledpickups) | **GET** /v2/pickups | List scheduled pickups|
|[**schedulePickup**](#schedulepickup) | **POST** /v2/pickups | Schedule a pickup|

# **deleteScheduledPickup**
> DeletePickupByIdResponseBody deleteScheduledPickup()

Delete a previously-scheduled pickup by ID

### Example

```typescript
import {
    PackagePickupsApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new PackagePickupsApi(configuration);

let pickupId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteScheduledPickup(
    pickupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pickupId** | [**string**] |  | defaults to undefined|


### Return type

**DeletePickupByIdResponseBody**

### Authorization

[api_keys](../README.md#api_keys)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Return the &#x60;pickup_id&#x60; of the scheduled pickup that was successfully deleted  |  -  |
|**400** | The request contained errors. |  -  |
|**404** | The specified resource does not exist. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPickupById**
> GetPickupByIdResponseBody getPickupById()

Get Pickup By ID

### Example

```typescript
import {
    PackagePickupsApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new PackagePickupsApi(configuration);

let pickupId: string; // (default to undefined)

const { status, data } = await apiInstance.getPickupById(
    pickupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pickupId** | [**string**] |  | defaults to undefined|


### Return type

**GetPickupByIdResponseBody**

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

# **listScheduledPickups**
> GetPickupsResponseBody listScheduledPickups()

List all pickups that have been scheduled for this carrier

### Example

```typescript
import {
    PackagePickupsApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new PackagePickupsApi(configuration);

let carrierId: string; //Carrier ID (optional) (default to undefined)
let warehouseId: string; //Warehouse ID (optional) (default to undefined)
let createdAtStart: string; //Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time) (optional) (default to undefined)
let createdAtEnd: string; //Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time) (optional) (default to undefined)
let page: number; //Return a specific page of results. Defaults to the first page. If set to a number that\'s greater than the number of pages of results, an empty page is returned.  (optional) (default to 1)
let pageSize: number; //The number of results to return per response. (optional) (default to 25)

const { status, data } = await apiInstance.listScheduledPickups(
    carrierId,
    warehouseId,
    createdAtStart,
    createdAtEnd,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **carrierId** | [**string**] | Carrier ID | (optional) defaults to undefined|
| **warehouseId** | [**string**] | Warehouse ID | (optional) defaults to undefined|
| **createdAtStart** | [**string**] | Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time) | (optional) defaults to undefined|
| **createdAtEnd** | [**string**] | Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time) | (optional) defaults to undefined|
| **page** | [**number**] | Return a specific page of results. Defaults to the first page. If set to a number that\&#39;s greater than the number of pages of results, an empty page is returned.  | (optional) defaults to 1|
| **pageSize** | [**number**] | The number of results to return per response. | (optional) defaults to 25|


### Return type

**GetPickupsResponseBody**

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

# **schedulePickup**
> SchedulePickupResponseBody1 schedulePickup(schedulePickupRequestBody)

Schedule a package pickup with a carrier

### Example

```typescript
import {
    PackagePickupsApi,
    Configuration,
    SchedulePickupRequestBody
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new PackagePickupsApi(configuration);

let schedulePickupRequestBody: SchedulePickupRequestBody; //

const { status, data } = await apiInstance.schedulePickup(
    schedulePickupRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **schedulePickupRequestBody** | **SchedulePickupRequestBody**|  | |


### Return type

**SchedulePickupResponseBody1**

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
|**404** | The specified resource does not exist. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

