# WebhooksApi

All URIs are relative to *https://api.shipstation.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createWebhook**](#createwebhook) | **POST** /v2/environment/webhooks | Create a webhook|
|[**deleteWebhook**](#deletewebhook) | **DELETE** /v2/environment/webhooks/{webhook_id} | Delete webhook by id|
|[**getWebhookById**](#getwebhookbyid) | **GET** /v2/environment/webhooks/{webhook_id} | Get webhook by id|
|[**listWebhooks**](#listwebhooks) | **GET** /v2/environment/webhooks | List webhooks|
|[**updateWebhook**](#updatewebhook) | **PUT** /v2/environment/webhooks/{webhook_id} | Update a webhook|

# **createWebhook**
> CreateWebhookResponseBody createWebhook(createWebhookRequestBody)

Create a webook for specific events in the environment.

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    CreateWebhookRequestBody
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let createWebhookRequestBody: CreateWebhookRequestBody; //

const { status, data } = await apiInstance.createWebhook(
    createWebhookRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createWebhookRequestBody** | **CreateWebhookRequestBody**|  | |


### Return type

**CreateWebhookResponseBody**

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
|**409** | The request conflicts with an existing resource. |  -  |
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteWebhook**
> string deleteWebhook()

Delete a webhook

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: string; //Webhook ID (default to undefined)

const { status, data } = await apiInstance.deleteWebhook(
    webhookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**string**] | Webhook ID | defaults to undefined|


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

# **getWebhookById**
> GetWebhookByIdResponseBody getWebhookById()

Retrieve individual webhook by an ID

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: string; //Webhook ID (default to undefined)

const { status, data } = await apiInstance.getWebhookById(
    webhookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**string**] | Webhook ID | defaults to undefined|


### Return type

**GetWebhookByIdResponseBody**

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

# **listWebhooks**
> Array<Webhook> listWebhooks()

List all webhooks currently enabled for the account.

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

const { status, data } = await apiInstance.listWebhooks();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Webhook>**

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
|**500** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWebhook**
> string updateWebhook(updateWebhookRequestBody)

Update the webhook url property

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    UpdateWebhookRequestBody
} from 'shipstation-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: string; //Webhook ID (default to undefined)
let updateWebhookRequestBody: UpdateWebhookRequestBody; //

const { status, data } = await apiInstance.updateWebhook(
    webhookId,
    updateWebhookRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateWebhookRequestBody** | **UpdateWebhookRequestBody**|  | |
| **webhookId** | [**string**] | Webhook ID | defaults to undefined|


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

