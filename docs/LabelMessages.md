# LabelMessages

Custom messages to print on the shipping label for the package.  These are typically used to print invoice numbers, product numbers, or other internal reference numbers.  Not all carriers support label messages. The number of lines and the maximum length of each line also varies by carrier.  |Carrier            |Max lines |Max line length |-------------------|----------|-------------------- |USPS (Stamps.com)  |3         |60 |FedEx              |3         |35 for the first line. 30 for additional lines. |UPS                |2         |35 |OnTrac             |2         |25 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference1** | **string** | The first line of the custom label message.  Some carriers may prefix this line with something like \&quot;REF\&quot;, \&quot;Reference\&quot;, \&quot;Trx Ref No.\&quot;, etc.  | [default to undefined]
**reference2** | **string** | The second line of the custom label message.  Some carriers may prefix this line with something like \&quot;INV\&quot;, \&quot;Reference 2\&quot;, \&quot;Trx Ref No.\&quot;, etc.  | [default to undefined]
**reference3** | **string** | The third line of the custom label message.  Some carriers may prefix this line with something like \&quot;PO\&quot;, \&quot;Reference 3\&quot;, etc.  | [default to undefined]

## Example

```typescript
import { LabelMessages } from 'shipstation-client';

const instance: LabelMessages = {
    reference1,
    reference2,
    reference3,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
