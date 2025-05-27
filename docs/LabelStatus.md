# LabelStatus

The possible statuses that a [shipping label] can be in.  |Status       |Description |:------------|:----------------------------------------------------- |`processing` |When labels are created in a [batch], it may take a few minutes for all of the labels in the batch to be created.  During this period, they will be in `processing` status. |`completed`  |The label was successfully created |`error`      |The label could not be created due to an error, such as an invalid delivery address |`voided`     |The label has been [voided] 

## Enum

* `Processing` (value: `'processing'`)

* `Completed` (value: `'completed'`)

* `Error` (value: `'error'`)

* `Voided` (value: `'voided'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
