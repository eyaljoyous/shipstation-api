# RatesApi

All URIs are relative to *https://api.shipstation.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**calculateRates**](#calculaterates) | **POST** /v2/rates | Get shipping rates|
|[**estimateRates**](#estimaterates) | **POST** /v2/rates/estimate | Estimate rates|
|[**getRateById**](#getratebyid) | **GET** /v2/rates/{rate_id} | Get rate by id|

# **calculateRates**
> CalculateRatesResponseBody calculateRates(calculateRatesRequestBody)

It\'s not uncommon that you want to give your customer the choice between whether they want to ship the fastest, cheapest, or the most trusted route. Most companies don\'t solely ship things using a single shipping option; so we provide functionality to show you all your options! 

### Example

```typescript
import {
    RatesApi,
    Configuration,
    CalculateRatesRequestBody
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new RatesApi(configuration);

let calculateRatesRequestBody: CalculateRatesRequestBody; //

const { status, data } = await apiInstance.calculateRates(
    calculateRatesRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **calculateRatesRequestBody** | **CalculateRatesRequestBody**|  | |


### Return type

**CalculateRatesResponseBody**

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

# **estimateRates**
> Array<RateEstimate> estimateRates(estimateRatesRequestBody)

Get Rate Estimates

### Example

```typescript
import {
    RatesApi,
    Configuration,
    EstimateRatesRequestBody
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new RatesApi(configuration);

let estimateRatesRequestBody: EstimateRatesRequestBody; //

const { status, data } = await apiInstance.estimateRates(
    estimateRatesRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **estimateRatesRequestBody** | **EstimateRatesRequestBody**|  | |


### Return type

**Array<RateEstimate>**

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

# **getRateById**
> GetRateByIdResponseBody getRateById()

Retrieve a previously queried rate by its ID

### Example

```typescript
import {
    RatesApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new RatesApi(configuration);

let rateId: string; //Rate ID (default to undefined)

const { status, data } = await apiInstance.getRateById(
    rateId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rateId** | [**string**] | Rate ID | defaults to undefined|


### Return type

**GetRateByIdResponseBody**

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
|**404** | The API returns a 404 response when no &#x60;rate&#x60; corresponds to the &#x60;rate_id&#x60; provided. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

