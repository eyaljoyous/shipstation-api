# Service

A service offered by the carrier

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_id** | **string** | A string that uniquely identifies the carrier | [optional] [readonly] [default to undefined]
**carrier_code** | **string** | A string that uniquely identifies a ShipStation resource, such as a carrier, label, shipment, etc. | [optional] [default to undefined]
**service_code** | **string** | service code | [optional] [readonly] [default to undefined]
**name** | **string** | User friendly service name | [optional] [readonly] [default to undefined]
**domestic** | **boolean** | Supports domestic shipping | [optional] [readonly] [default to undefined]
**international** | **boolean** | Supports international shipping. | [optional] [readonly] [default to undefined]
**is_multi_package_supported** | **boolean** | Carrier supports multiple packages per shipment | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Service } from 'shipstation-client';

const instance: Service = {
    carrier_id,
    carrier_code,
    service_code,
    name,
    domestic,
    international,
    is_multi_package_supported,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
