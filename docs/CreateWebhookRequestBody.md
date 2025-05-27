# CreateWebhookRequestBody

A create webhook request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**WebhookEvent**](WebhookEvent.md) |  | [default to undefined]
**url** | **string** | The url that the webhook sends the request to | [default to undefined]
**headers** | [**Array&lt;WebhookHeader&gt;**](WebhookHeader.md) | Array of custom webhook headers | [optional] [default to undefined]

## Example

```typescript
import { CreateWebhookRequestBody } from 'shipstation-client';

const instance: CreateWebhookRequestBody = {
    event,
    url,
    headers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
