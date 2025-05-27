# CreateWebhookResponseBody

A webhook response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhook_id** | **string** | A string that uniquely identifies the webhook | [readonly] [default to undefined]
**url** | **string** | The url that the webhook sends the request to | [default to undefined]
**event** | [**WebhookEvent**](WebhookEvent.md) |  | [default to undefined]
**headers** | [**Array&lt;WebhookHeader&gt;**](WebhookHeader.md) | Array of custom webhook headers | [optional] [default to undefined]

## Example

```typescript
import { CreateWebhookResponseBody } from 'shipstation-client';

const instance: CreateWebhookResponseBody = {
    webhook_id,
    url,
    event,
    headers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
