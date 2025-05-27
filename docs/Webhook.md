# Webhook

A webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhook_id** | **string** | A string that uniquely identifies the webhook | [optional] [readonly] [default to undefined]
**url** | **string** | The url that the webhook sends the request to | [optional] [default to undefined]
**event** | [**WebhookEvent**](WebhookEvent.md) |  | [optional] [default to undefined]
**headers** | [**Array&lt;WebhookHeader&gt;**](WebhookHeader.md) | Array of custom webhook headers | [optional] [default to undefined]

## Example

```typescript
import { Webhook } from 'shipstation-client';

const instance: Webhook = {
    webhook_id,
    url,
    event,
    headers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
