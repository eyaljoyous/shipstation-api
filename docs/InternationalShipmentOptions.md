# InternationalShipmentOptions

Options for international shipments, such as customs declarations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | [**PackageContents**](PackageContents.md) | The type of contents in this shipment.  This may impact import duties or customs treatment. | [default to undefined]
**contents_explanation** | **string** | Explanation for contents (required if the &#x60;contents&#x60; is provided as &#x60;other&#x60;) | [optional] [default to undefined]
**non_delivery** | [**NonDelivery**](NonDelivery.md) | Indicates what to do if a package is unable to be delivered. | [default to undefined]
**terms_of_trade_code** | [**TermsOfTradeCode**](TermsOfTradeCode.md) | Specifies the supported terms of trade code (incoterms) | [optional] [default to undefined]
**declaration** | **string** | Declaration statement to be placed on the commercial invoice | [optional] [default to undefined]
**invoice_additional_details** | [**InvoiceAdditionalDetails**](InvoiceAdditionalDetails.md) |  | [optional] [default to undefined]
**importer_of_record** | [**ImporterOfRecords**](ImporterOfRecords.md) |  | [optional] [default to undefined]
**customs_items** | [**Array&lt;CustomsItem&gt;**](CustomsItem.md) | Customs declarations for each item in the shipment. (Please provide this information under &#x60;products&#x60; inside &#x60;packages&#x60;) | [optional] [default to undefined]

## Example

```typescript
import { InternationalShipmentOptions } from 'shipstation-client';

const instance: InternationalShipmentOptions = {
    contents,
    contents_explanation,
    non_delivery,
    terms_of_trade_code,
    declaration,
    invoice_additional_details,
    importer_of_record,
    customs_items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
