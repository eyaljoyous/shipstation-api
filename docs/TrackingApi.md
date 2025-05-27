# TrackingApi

All URIs are relative to *https://api.shipstation.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**stopTracking**](#stoptracking) | **POST** /v2/tracking/stop | Stop tracking a package|

# **stopTracking**
> string stopTracking()

Unsubscribe from tracking updates for a package.

### Example

```typescript
import {
    TrackingApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new TrackingApi(configuration);

let carrierCode: string; //A [shipping carrier] , such as `fedex`, `dhl_express`, `stamps_com`, etc.  (optional) (default to undefined)
let trackingNumber: string; //The tracking number associated with a shipment (optional) (default to undefined)

const { status, data } = await apiInstance.stopTracking(
    carrierCode,
    trackingNumber
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **carrierCode** | [**string**] | A [shipping carrier] , such as &#x60;fedex&#x60;, &#x60;dhl_express&#x60;, &#x60;stamps_com&#x60;, etc.  | (optional) defaults to undefined|
| **trackingNumber** | [**string**] | The tracking number associated with a shipment | (optional) defaults to undefined|


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

