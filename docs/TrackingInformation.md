# TrackingInformation

A tracking information resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tracking_number** | **string** | A tracking number for a package. The format depends on the carrier. | [optional] [default to undefined]
**tracking_url** | **string** | Carrier Tracking Url, if available | [optional] [readonly] [default to undefined]
**status_code** | [**TrackingStatusDetailCode**](TrackingStatusDetailCode.md) |  | [optional] [readonly] [default to undefined]
**status_detail_code** | [**TrackingStatusDetailCode**](TrackingStatusDetailCode.md) |  | [optional] [readonly] [default to undefined]
**carrier_code** | **string** | A [shipping carrier] , such as &#x60;fedex&#x60;, &#x60;dhl_express&#x60;, &#x60;stamps_com&#x60;, etc.  | [optional] [default to undefined]
**carrier_id** | **number** | The unique ID of the [carrier account] that was used to create this label  | [optional] [readonly] [default to undefined]
**status_description** | **string** | Status description | [optional] [readonly] [default to undefined]
**status_detail_description** | **string** | Status detail description | [optional] [readonly] [default to undefined]
**carrier_status_code** | **string** | Carrier status code | [optional] [readonly] [default to undefined]
**carrier_detail_code** | **string** | Carrier detail code | [optional] [readonly] [default to undefined]
**carrier_status_description** | **string** | carrier status description | [optional] [readonly] [default to undefined]
**ship_date** | **string** | An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time.  | [optional] [default to undefined]
**estimated_delivery_date** | **string** | An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time.  | [optional] [default to undefined]
**actual_delivery_date** | **string** | An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time.  | [optional] [default to undefined]
**exception_description** | **string** | Exception description | [optional] [readonly] [default to undefined]
**events** | [**Array&lt;TrackEvent&gt;**](TrackEvent.md) | The events that have occured during the lifetime of this tracking number. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { TrackingInformation } from 'shipstation-client';

const instance: TrackingInformation = {
    tracking_number,
    tracking_url,
    status_code,
    status_detail_code,
    carrier_code,
    carrier_id,
    status_description,
    status_detail_description,
    carrier_status_code,
    carrier_detail_code,
    carrier_status_description,
    ship_date,
    estimated_delivery_date,
    actual_delivery_date,
    exception_description,
    events,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
