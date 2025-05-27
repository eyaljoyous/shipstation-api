# SchedulePickupResponseBody1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pickup_id** | **string** | Pickup Resource ID | [readonly] [default to undefined]
**label_ids** | **Array&lt;string&gt;** | Label IDs that will be included in the pickup request | [default to undefined]
**created_at** | **string** | The date and time that the pickup was created in ShipStation . | [readonly] [default to undefined]
**cancelled_at** | **string** | The date and time that the pickup was cancelled in ShipStation . | [optional] [readonly] [default to undefined]
**carrier_id** | **string** | The carrier_id associated with the pickup | [readonly] [default to undefined]
**confirmation_number** | **string** | The carrier confirmation number for the scheduled pickup. | [readonly] [default to undefined]
**warehouse_id** | **string** | The warehouse_id associated with the pickup | [readonly] [default to undefined]
**pickup_address** | [**Address**](Address.md) |  | [readonly] [default to undefined]
**contact_details** | [**ContactDetails**](ContactDetails.md) |  | [default to undefined]
**pickup_notes** | **string** | Used by some carriers to give special instructions for a package pickup | [optional] [default to undefined]
**pickup_window** | [**PickupWindow**](PickupWindow.md) |  | [default to undefined]
**pickup_windows** | [**Array&lt;PickupPickupWindowsInner&gt;**](PickupPickupWindowsInner.md) | An array of available pickup windows. Carriers can return multiple times that they will pickup packages.  | [optional] [default to undefined]
**request_id** | **string** | A UUID that uniquely identifies the request id. This can be given to the support team to help debug non-trivial issues that may occur  | [default to undefined]
**errors** | [**Array&lt;ModelError&gt;**](ModelError.md) | The errors associated with the failed API call | [default to undefined]

## Example

```typescript
import { SchedulePickupResponseBody1 } from 'shipstation-client';

const instance: SchedulePickupResponseBody1 = {
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
    request_id,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
