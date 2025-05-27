# TrackEvent

A track event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occurred_at** | **string** | Timestamp for carrier event | [default to undefined]
**carrier_occurred_at** | **string** | Carrier timestamp for the event, it is assumed to be the local time of where the event occurred. | [optional] [default to undefined]
**description** | **string** | Event description | [optional] [readonly] [default to undefined]
**city_locality** | **string** | City locality | [readonly] [default to undefined]
**state_province** | **string** | State province | [readonly] [default to undefined]
**postal_code** | **string** | Postal code | [readonly] [default to undefined]
**country_code** | **string** | A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)  | [optional] [default to undefined]
**company_name** | **string** | Company Name | [optional] [readonly] [default to undefined]
**signer** | **string** | Signer information | [optional] [readonly] [default to undefined]
**event_code** | **string** | Event Code | [optional] [default to undefined]
**carrier_detail_code** | **string** | Carrier detail code | [readonly] [default to undefined]
**status_code** | [**TrackingStatusDetailCode**](TrackingStatusDetailCode.md) |  | [readonly] [default to undefined]
**status_detail_code** | [**TrackingStatusDetailCode**](TrackingStatusDetailCode.md) |  | [optional] [readonly] [default to undefined]
**status_description** | **string** | Event Status Description | [readonly] [default to undefined]
**status_detail_description** | **string** | Event Status Detail Description | [optional] [readonly] [default to undefined]
**carrier_status_code** | **string** | Carrier status code | [readonly] [default to undefined]
**carrier_status_description** | **string** | carrier status description | [readonly] [default to undefined]
**latitude** | **number** | Latitude coordinate of tracking event. | [optional] [default to undefined]
**longitude** | **number** | Longitude coordinate of tracking event. | [optional] [default to undefined]

## Example

```typescript
import { TrackEvent } from 'shipstation-client';

const instance: TrackEvent = {
    occurred_at,
    carrier_occurred_at,
    description,
    city_locality,
    state_province,
    postal_code,
    country_code,
    company_name,
    signer,
    event_code,
    carrier_detail_code,
    status_code,
    status_detail_code,
    status_description,
    status_detail_description,
    carrier_status_code,
    carrier_status_description,
    latitude,
    longitude,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
