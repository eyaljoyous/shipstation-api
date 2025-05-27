# UpdateWebhookRequestBody

An update webhook request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | The url that the wehbook sends the request | [optional] [default to undefined]
**headers** | [**Array&lt;WebhookHeader&gt;**](WebhookHeader.md) | Array of custom webhook headers | [optional] [default to undefined]

## Example

```typescript
import { UpdateWebhookRequestBody } from 'shipstation-client';

const instance: UpdateWebhookRequestBody = {
    url,
    headers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
