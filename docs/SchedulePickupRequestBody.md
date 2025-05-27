# SchedulePickupRequestBody

A schedule pickup request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pickup_id** | **string** | Pickup Resource ID | [optional] [readonly] [default to undefined]
**label_ids** | **Array&lt;string&gt;** | Label IDs that will be included in the pickup request | [default to undefined]
**created_at** | **string** | The date and time that the pickup was created in ShipStation . | [optional] [readonly] [default to undefined]
**cancelled_at** | **string** | The date and time that the pickup was cancelled in ShipStation . | [optional] [readonly] [default to undefined]
**carrier_id** | **string** | The carrier_id associated with the pickup | [optional] [readonly] [default to undefined]
**confirmation_number** | **string** | The carrier confirmation number for the scheduled pickup. | [optional] [readonly] [default to undefined]
**warehouse_id** | **string** | The warehouse_id associated with the pickup | [optional] [readonly] [default to undefined]
**pickup_address** | [**Address**](Address.md) |  | [optional] [readonly] [default to undefined]
**contact_details** | [**ContactDetails**](ContactDetails.md) |  | [default to undefined]
**pickup_notes** | **string** | Used by some carriers to give special instructions for a package pickup | [optional] [default to undefined]
**pickup_window** | [**PickupWindow**](PickupWindow.md) |  | [default to undefined]
**pickup_windows** | [**Array&lt;PickupPickupWindowsInner&gt;**](PickupPickupWindowsInner.md) | An array of available pickup windows. Carriers can return multiple times that they will pickup packages.  | [optional] [default to undefined]

## Example

```typescript
import { SchedulePickupRequestBody } from 'shipstation-client';

const instance: SchedulePickupRequestBody = {
    pickup_id,
    label_ids,
    created_at,
    cancelled_at,
    carrier_id,
    confirmation_number,
    warehouse_id,
    pickup_address,
    contact_details,
    pickup_notes,
    pickup_window,
    pickup_windows,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
