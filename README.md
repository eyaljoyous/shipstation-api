## shipstation-client@0.1.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install shipstation-client@0.1.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://api.shipstation.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BatchesApi* | [**addToBatch**](docs/BatchesApi.md#addtobatch) | **POST** /v2/batches/{batch_id}/add | Add to a batch
*BatchesApi* | [**createBatch**](docs/BatchesApi.md#createbatch) | **POST** /v2/batches | Create a batch
*BatchesApi* | [**deleteBatch**](docs/BatchesApi.md#deletebatch) | **DELETE** /v2/batches/{batch_id} | Delete batch by id
*BatchesApi* | [**getBatchByExternalId**](docs/BatchesApi.md#getbatchbyexternalid) | **GET** /v2/batches/external_batch_id/{external_batch_id} | Get batch by external id
*BatchesApi* | [**getBatchById**](docs/BatchesApi.md#getbatchbyid) | **GET** /v2/batches/{batch_id} | Get batch by id
*BatchesApi* | [**listBatchErrors**](docs/BatchesApi.md#listbatcherrors) | **GET** /v2/batches/{batch_id}/errors | Get batch errors
*BatchesApi* | [**listBatches**](docs/BatchesApi.md#listbatches) | **GET** /v2/batches | List batches
*BatchesApi* | [**processBatch**](docs/BatchesApi.md#processbatch) | **POST** /v2/batches/{batch_id}/process/labels | Process batch id labels
*BatchesApi* | [**removeFromBatch**](docs/BatchesApi.md#removefrombatch) | **POST** /v2/batches/{batch_id}/remove | Remove from batch
*BatchesApi* | [**updateBatch**](docs/BatchesApi.md#updatebatch) | **PUT** /v2/batches/{batch_id} | Update batch status to \&#39;archived\&#39; by id
*CarriersApi* | [**getCarrierById**](docs/CarriersApi.md#getcarrierbyid) | **GET** /v2/carriers/{carrier_id} | Get carrier by id
*CarriersApi* | [**getCarrierOptions**](docs/CarriersApi.md#getcarrieroptions) | **GET** /v2/carriers/{carrier_id}/options | Get carrier options
*CarriersApi* | [**listCarrierPackageTypes**](docs/CarriersApi.md#listcarrierpackagetypes) | **GET** /v2/carriers/{carrier_id}/packages | List carrier package types
*CarriersApi* | [**listCarrierServices**](docs/CarriersApi.md#listcarrierservices) | **GET** /v2/carriers/{carrier_id}/services | List carrier services
*CarriersApi* | [**listCarriers**](docs/CarriersApi.md#listcarriers) | **GET** /v2/carriers | List carriers
*DownloadsApi* | [**downloadFile**](docs/DownloadsApi.md#downloadfile) | **GET** /v2/downloads/{dir}/{subdir}/{filename} | Download file
*InventoryApi* | [**addNewInventoryWarehouse**](docs/InventoryApi.md#addnewinventorywarehouse) | **POST** /v2/inventory_warehouses | Create a new inventory warehouse
*InventoryApi* | [**createInventoryLocation**](docs/InventoryApi.md#createinventorylocation) | **POST** /v2/inventory_locations | Create a new inventory location
*InventoryApi* | [**deleteInventoryLocationById**](docs/InventoryApi.md#deleteinventorylocationbyid) | **DELETE** /v2/inventory_locations/{inventory_location_id} | Delete an inventory location
*InventoryApi* | [**deleteInventoryWarehouse**](docs/InventoryApi.md#deleteinventorywarehouse) | **DELETE** /v2/inventory_warehouses/{inventory_warehouse_id} | Delete an inventory warehouse
*InventoryApi* | [**getInventoryLevels**](docs/InventoryApi.md#getinventorylevels) | **GET** /v2/inventory | List SKU inventory levels
*InventoryApi* | [**getInventoryLocationById**](docs/InventoryApi.md#getinventorylocationbyid) | **GET** /v2/inventory_locations/{inventory_location_id} | Get inventory location by ID
*InventoryApi* | [**getInventoryWarehouseById**](docs/InventoryApi.md#getinventorywarehousebyid) | **GET** /v2/inventory_warehouses/{inventory_warehouse_id} | Get a specific inventory warehouse and related properties using its warehouse ID
*InventoryApi* | [**getInventoryWarehouses**](docs/InventoryApi.md#getinventorywarehouses) | **GET** /v2/inventory_warehouses | List all inventory warehouses
*InventoryApi* | [**listInventoryLocations**](docs/InventoryApi.md#listinventorylocations) | **GET** /v2/inventory_locations | List all inventory locations
*InventoryApi* | [**updateInventoryLocation**](docs/InventoryApi.md#updateinventorylocation) | **PUT** /v2/inventory_locations/{inventory_location_id} | Update an inventory location name
*InventoryApi* | [**updateInventoryWarehouse**](docs/InventoryApi.md#updateinventorywarehouse) | **PUT** /v2/inventory_warehouses/{inventory_warehouse_id} | Update an inventory warehouse name
*InventoryApi* | [**updateSKUStockLevels**](docs/InventoryApi.md#updateskustocklevels) | **POST** /v2/inventory | Update SKU stock levels and related properties
*LabelsApi* | [**createLabel**](docs/LabelsApi.md#createlabel) | **POST** /v2/labels | Purchase label
*LabelsApi* | [**createLabelFromRate**](docs/LabelsApi.md#createlabelfromrate) | **POST** /v2/labels/rates/{rate_id} | Purchase label with rate id
*LabelsApi* | [**createLabelFromShipment**](docs/LabelsApi.md#createlabelfromshipment) | **POST** /v2/labels/shipment/{shipment_id} | Purchase label with shipment id
*LabelsApi* | [**createReturnLabel**](docs/LabelsApi.md#createreturnlabel) | **POST** /v2/labels/{label_id}/return | Create a return label
*LabelsApi* | [**getLabelById**](docs/LabelsApi.md#getlabelbyid) | **GET** /v2/labels/{label_id} | Get label by id
*LabelsApi* | [**getTrackingLogFromLabel**](docs/LabelsApi.md#gettrackinglogfromlabel) | **GET** /v2/labels/{label_id}/track | Get label tracking information
*LabelsApi* | [**listLabels**](docs/LabelsApi.md#listlabels) | **GET** /v2/labels | List labels
*LabelsApi* | [**voidLabel**](docs/LabelsApi.md#voidlabel) | **PUT** /v2/labels/{label_id}/void | Void a label by id
*ManifestsApi* | [**createManifest**](docs/ManifestsApi.md#createmanifest) | **POST** /v2/manifests | Create manifest
*ManifestsApi* | [**getManifestById**](docs/ManifestsApi.md#getmanifestbyid) | **GET** /v2/manifests/{manifest_id} | Get manifest by id
*ManifestsApi* | [**listManifests**](docs/ManifestsApi.md#listmanifests) | **GET** /v2/manifests | List manifests
*PackagePickupsApi* | [**deleteScheduledPickup**](docs/PackagePickupsApi.md#deletescheduledpickup) | **DELETE** /v2/pickups/{pickup_id} | Delete a scheduled pickup
*PackagePickupsApi* | [**getPickupById**](docs/PackagePickupsApi.md#getpickupbyid) | **GET** /v2/pickups/{pickup_id} | Get pickup by id
*PackagePickupsApi* | [**listScheduledPickups**](docs/PackagePickupsApi.md#listscheduledpickups) | **GET** /v2/pickups | List scheduled pickups
*PackagePickupsApi* | [**schedulePickup**](docs/PackagePickupsApi.md#schedulepickup) | **POST** /v2/pickups | Schedule a pickup
*PackageTypesApi* | [**createPackageType**](docs/PackageTypesApi.md#createpackagetype) | **POST** /v2/packages | Create custom package type
*PackageTypesApi* | [**deletePackageTyp**](docs/PackageTypesApi.md#deletepackagetyp) | **DELETE** /v2/packages/{package_id} | Delete a custom package by id
*PackageTypesApi* | [**getPackageTypeById**](docs/PackageTypesApi.md#getpackagetypebyid) | **GET** /v2/packages/{package_id} | Get custom package type by id
*PackageTypesApi* | [**listPackageTypes**](docs/PackageTypesApi.md#listpackagetypes) | **GET** /v2/packages | List custom package types
*PackageTypesApi* | [**updatePackageType**](docs/PackageTypesApi.md#updatepackagetype) | **PUT** /v2/packages/{package_id} | Update custom package type by id
*RatesApi* | [**calculateRates**](docs/RatesApi.md#calculaterates) | **POST** /v2/rates | Get shipping rates
*RatesApi* | [**estimateRates**](docs/RatesApi.md#estimaterates) | **POST** /v2/rates/estimate | Estimate rates
*RatesApi* | [**getRateById**](docs/RatesApi.md#getratebyid) | **GET** /v2/rates/{rate_id} | Get rate by id
*ShipmentsApi* | [**cancelShipments**](docs/ShipmentsApi.md#cancelshipments) | **PUT** /v2/shipments/{shipment_id}/cancel | Cancel a shipment
*ShipmentsApi* | [**getShipmentByExternalId**](docs/ShipmentsApi.md#getshipmentbyexternalid) | **GET** /v2/shipments/external_shipment_id/{external_shipment_id} | Get shipment by external id
*ShipmentsApi* | [**getShipmentById**](docs/ShipmentsApi.md#getshipmentbyid) | **GET** /v2/shipments/{shipment_id} | Get shipment by id
*ShipmentsApi* | [**listShipmentRates**](docs/ShipmentsApi.md#listshipmentrates) | **GET** /v2/shipments/{shipment_id}/rates | Get shipment rates
*ShipmentsApi* | [**listShipments**](docs/ShipmentsApi.md#listshipments) | **GET** /v2/shipments | List shipments
*ShipmentsApi* | [**tagShipment**](docs/ShipmentsApi.md#tagshipment) | **POST** /v2/shipments/{shipment_id}/tags/{tag_name} | Add tag to shipment
*ShipmentsApi* | [**untagShipment**](docs/ShipmentsApi.md#untagshipment) | **DELETE** /v2/shipments/{shipment_id}/tags/{tag_name} | Remove tag from shipment
*TagsApi* | [**createTag**](docs/TagsApi.md#createtag) | **POST** /v2/tags/{tag_name} | Create a new tag
*TagsApi* | [**listTags**](docs/TagsApi.md#listtags) | **GET** /v2/tags | Get tags
*TrackingApi* | [**stopTracking**](docs/TrackingApi.md#stoptracking) | **POST** /v2/tracking/stop | Stop tracking a package
*WarehousesApi* | [**getWarehouseById**](docs/WarehousesApi.md#getwarehousebyid) | **GET** /v2/warehouses/{warehouse_id} | Get warehouse by id
*WarehousesApi* | [**listWarehouses**](docs/WarehousesApi.md#listwarehouses) | **GET** /v2/warehouses | List warehouses
*WebhooksApi* | [**createWebhook**](docs/WebhooksApi.md#createwebhook) | **POST** /v2/environment/webhooks | Create a webhook
*WebhooksApi* | [**deleteWebhook**](docs/WebhooksApi.md#deletewebhook) | **DELETE** /v2/environment/webhooks/{webhook_id} | Delete webhook by id
*WebhooksApi* | [**getWebhookById**](docs/WebhooksApi.md#getwebhookbyid) | **GET** /v2/environment/webhooks/{webhook_id} | Get webhook by id
*WebhooksApi* | [**listWebhooks**](docs/WebhooksApi.md#listwebhooks) | **GET** /v2/environment/webhooks | List webhooks
*WebhooksApi* | [**updateWebhook**](docs/WebhooksApi.md#updatewebhook) | **PUT** /v2/environment/webhooks/{webhook_id} | Update a webhook


### Documentation For Models

 - [AddNewInventoryWarehouseRequest](docs/AddNewInventoryWarehouseRequest.md)
 - [AddToBatchRequestBody](docs/AddToBatchRequestBody.md)
 - [Address](docs/Address.md)
 - [AddressResidentialIndicator](docs/AddressResidentialIndicator.md)
 - [AddressValidatingShipment](docs/AddressValidatingShipment.md)
 - [AddressValidationCode](docs/AddressValidationCode.md)
 - [AddressValidationDetailCode](docs/AddressValidationDetailCode.md)
 - [AddressValidationMessageType](docs/AddressValidationMessageType.md)
 - [AddressValidationResult](docs/AddressValidationResult.md)
 - [AddressValidationStatus](docs/AddressValidationStatus.md)
 - [AdvancedShipmentOptions](docs/AdvancedShipmentOptions.md)
 - [AdvancedShipmentOptionsDangerousGoodsContact](docs/AdvancedShipmentOptionsDangerousGoodsContact.md)
 - [AdvancedShipmentOptionsFedexFreight](docs/AdvancedShipmentOptionsFedexFreight.md)
 - [AdvancedShipmentOptionsWindsorFrameworkDetails](docs/AdvancedShipmentOptionsWindsorFrameworkDetails.md)
 - [AlternativeIdentifier](docs/AlternativeIdentifier.md)
 - [Batch](docs/Batch.md)
 - [BatchResponseError](docs/BatchResponseError.md)
 - [BatchStatus](docs/BatchStatus.md)
 - [BatchesSortBy](docs/BatchesSortBy.md)
 - [BillToParty](docs/BillToParty.md)
 - [CalculateRatesRequestBody](docs/CalculateRatesRequestBody.md)
 - [CalculateRatesResponseBody](docs/CalculateRatesResponseBody.md)
 - [Carrier](docs/Carrier.md)
 - [CarrierAdvancedOption](docs/CarrierAdvancedOption.md)
 - [CollectOnDelivery](docs/CollectOnDelivery.md)
 - [CollectOnDeliveryPaymentType](docs/CollectOnDeliveryPaymentType.md)
 - [ContactDetails](docs/ContactDetails.md)
 - [CreateAndProcessBatchRequestBody](docs/CreateAndProcessBatchRequestBody.md)
 - [CreateAndProcessBatchRequestBodyProcessLabels](docs/CreateAndProcessBatchRequestBodyProcessLabels.md)
 - [CreateAndValidateShipment](docs/CreateAndValidateShipment.md)
 - [CreateBatchRequest](docs/CreateBatchRequest.md)
 - [CreateBatchRequestBody](docs/CreateBatchRequestBody.md)
 - [CreateBatchResponseBody](docs/CreateBatchResponseBody.md)
 - [CreateInventoryLocationRequest](docs/CreateInventoryLocationRequest.md)
 - [CreateLabelFromRateRequestBody](docs/CreateLabelFromRateRequestBody.md)
 - [CreateLabelFromRateResponseBody](docs/CreateLabelFromRateResponseBody.md)
 - [CreateLabelFromShipmentRequestBody](docs/CreateLabelFromShipmentRequestBody.md)
 - [CreateLabelFromShipmentResponseBody](docs/CreateLabelFromShipmentResponseBody.md)
 - [CreateLabelRequestBody](docs/CreateLabelRequestBody.md)
 - [CreateLabelResponseBody](docs/CreateLabelResponseBody.md)
 - [CreateManifestByObjectRequestBody](docs/CreateManifestByObjectRequestBody.md)
 - [CreateManifestLabelIdsRequestBody](docs/CreateManifestLabelIdsRequestBody.md)
 - [CreateManifestRequestBody](docs/CreateManifestRequestBody.md)
 - [CreateManifestResponseBody](docs/CreateManifestResponseBody.md)
 - [CreatePackageTypeRequestBody](docs/CreatePackageTypeRequestBody.md)
 - [CreatePackageTypeResponseBody](docs/CreatePackageTypeResponseBody.md)
 - [CreateReturnLabelRequestBody](docs/CreateReturnLabelRequestBody.md)
 - [CreateReturnLabelResponseBody](docs/CreateReturnLabelResponseBody.md)
 - [CreateTagResponseBody](docs/CreateTagResponseBody.md)
 - [CreateWebhookRequestBody](docs/CreateWebhookRequestBody.md)
 - [CreateWebhookResponseBody](docs/CreateWebhookResponseBody.md)
 - [CustomsItem](docs/CustomsItem.md)
 - [DangerousAmount](docs/DangerousAmount.md)
 - [DangerousGoods](docs/DangerousGoods.md)
 - [DeletePickupByIdResponseBody](docs/DeletePickupByIdResponseBody.md)
 - [DeleteScheduledPickupResponseBody](docs/DeleteScheduledPickupResponseBody.md)
 - [DeliveryConfirmation](docs/DeliveryConfirmation.md)
 - [DeprecatedManifest](docs/DeprecatedManifest.md)
 - [DimensionUnit](docs/DimensionUnit.md)
 - [Dimensions](docs/Dimensions.md)
 - [DisplayScheme](docs/DisplayScheme.md)
 - [ErrorCode](docs/ErrorCode.md)
 - [ErrorResponseBody](docs/ErrorResponseBody.md)
 - [ErrorSource](docs/ErrorSource.md)
 - [ErrorType](docs/ErrorType.md)
 - [ErrorWithLabelId](docs/ErrorWithLabelId.md)
 - [ErrorWithLabelIdResponseBody](docs/ErrorWithLabelIdResponseBody.md)
 - [EstimateRatesRequestBody](docs/EstimateRatesRequestBody.md)
 - [EstimatedImportCharges](docs/EstimatedImportCharges.md)
 - [GetBatchByExternalIdResponseBody](docs/GetBatchByExternalIdResponseBody.md)
 - [GetBatchByIdResponseBody](docs/GetBatchByIdResponseBody.md)
 - [GetCarrierByIdResponseBody](docs/GetCarrierByIdResponseBody.md)
 - [GetCarrierOptionsResponseBody](docs/GetCarrierOptionsResponseBody.md)
 - [GetCarriersResponseBody](docs/GetCarriersResponseBody.md)
 - [GetInventoryLevels200Response](docs/GetInventoryLevels200Response.md)
 - [GetInventoryLevels200ResponseInventoryInner](docs/GetInventoryLevels200ResponseInventoryInner.md)
 - [GetInventoryLevels200ResponseInventoryInnerAverageCost](docs/GetInventoryLevels200ResponseInventoryInnerAverageCost.md)
 - [GetInventoryLevels200ResponseLinks](docs/GetInventoryLevels200ResponseLinks.md)
 - [GetInventoryLevels200ResponseLinksFirst](docs/GetInventoryLevels200ResponseLinksFirst.md)
 - [GetInventoryWarehouses200Response](docs/GetInventoryWarehouses200Response.md)
 - [GetInventoryWarehouses200ResponseInventoryWarehousesInner](docs/GetInventoryWarehouses200ResponseInventoryWarehousesInner.md)
 - [GetLabelByIdResponseBody](docs/GetLabelByIdResponseBody.md)
 - [GetManifestByIdResponseBody](docs/GetManifestByIdResponseBody.md)
 - [GetPackageTypeByIdResponseBody](docs/GetPackageTypeByIdResponseBody.md)
 - [GetPickupByIdResponseBody](docs/GetPickupByIdResponseBody.md)
 - [GetPickupsResponseBody](docs/GetPickupsResponseBody.md)
 - [GetRateByIdResponseBody](docs/GetRateByIdResponseBody.md)
 - [GetShipmentByExternalIdResponseBody](docs/GetShipmentByExternalIdResponseBody.md)
 - [GetShipmentByIdResponseBody](docs/GetShipmentByIdResponseBody.md)
 - [GetTrackingLogFromLabelResponseBody](docs/GetTrackingLogFromLabelResponseBody.md)
 - [GetWarehouseByIdResponseBody](docs/GetWarehouseByIdResponseBody.md)
 - [GetWebhookByIdResponseBody](docs/GetWebhookByIdResponseBody.md)
 - [IdentifierType](docs/IdentifierType.md)
 - [ImporterOfRecords](docs/ImporterOfRecords.md)
 - [InsuranceProvider](docs/InsuranceProvider.md)
 - [InternationalShipmentOptions](docs/InternationalShipmentOptions.md)
 - [InvoiceAdditionalDetails](docs/InvoiceAdditionalDetails.md)
 - [Label](docs/Label.md)
 - [LabelChargeEvent](docs/LabelChargeEvent.md)
 - [LabelDownload](docs/LabelDownload.md)
 - [LabelDownloadType](docs/LabelDownloadType.md)
 - [LabelFormat](docs/LabelFormat.md)
 - [LabelLayout](docs/LabelLayout.md)
 - [LabelMessages](docs/LabelMessages.md)
 - [LabelPackage](docs/LabelPackage.md)
 - [LabelPackagesInner](docs/LabelPackagesInner.md)
 - [LabelStatus](docs/LabelStatus.md)
 - [LabelVoidFailureReason](docs/LabelVoidFailureReason.md)
 - [Link](docs/Link.md)
 - [ListBatchErrorsResponseBody](docs/ListBatchErrorsResponseBody.md)
 - [ListBatchesResponseBody](docs/ListBatchesResponseBody.md)
 - [ListCarrierPackageTypesResponseBody](docs/ListCarrierPackageTypesResponseBody.md)
 - [ListCarrierServicesResponseBody](docs/ListCarrierServicesResponseBody.md)
 - [ListCarriersResponseBody](docs/ListCarriersResponseBody.md)
 - [ListInventoryLocations200Response](docs/ListInventoryLocations200Response.md)
 - [ListInventoryLocations200ResponseInventoryLocationsInner](docs/ListInventoryLocations200ResponseInventoryLocationsInner.md)
 - [ListLabelsResponseBody](docs/ListLabelsResponseBody.md)
 - [ListManifestsResponseBody](docs/ListManifestsResponseBody.md)
 - [ListPackageTypesResponseBody](docs/ListPackageTypesResponseBody.md)
 - [ListPickupResponseBody](docs/ListPickupResponseBody.md)
 - [ListShipmentRatesResponseBody](docs/ListShipmentRatesResponseBody.md)
 - [ListShipmentsResponseBody](docs/ListShipmentsResponseBody.md)
 - [ListTagsResponseBody](docs/ListTagsResponseBody.md)
 - [ListWarehousesResponseBody](docs/ListWarehousesResponseBody.md)
 - [Manifest](docs/Manifest.md)
 - [ManifestDownload](docs/ManifestDownload.md)
 - [ManifestRequestStatus](docs/ManifestRequestStatus.md)
 - [ManifestRequests](docs/ManifestRequests.md)
 - [Manifests](docs/Manifests.md)
 - [ModelError](docs/ModelError.md)
 - [ModifyBatch](docs/ModifyBatch.md)
 - [MonetaryValue](docs/MonetaryValue.md)
 - [NonDelivery](docs/NonDelivery.md)
 - [OptionalLink](docs/OptionalLink.md)
 - [OrderSourceName](docs/OrderSourceName.md)
 - [OriginType](docs/OriginType.md)
 - [Package](docs/Package.md)
 - [PackageContents](docs/PackageContents.md)
 - [PackageType](docs/PackageType.md)
 - [PagedListResponseBody](docs/PagedListResponseBody.md)
 - [PaginationLink](docs/PaginationLink.md)
 - [PaperlessDownload](docs/PaperlessDownload.md)
 - [PartialAddress](docs/PartialAddress.md)
 - [PartialShipment](docs/PartialShipment.md)
 - [PartialShippingAddress](docs/PartialShippingAddress.md)
 - [PartialShippingAddressTo](docs/PartialShippingAddressTo.md)
 - [PartialShippingAddressToGeolocationInner](docs/PartialShippingAddressToGeolocationInner.md)
 - [PaymentAmount](docs/PaymentAmount.md)
 - [Pickup](docs/Pickup.md)
 - [PickupPickupWindowsInner](docs/PickupPickupWindowsInner.md)
 - [PickupResponseBody](docs/PickupResponseBody.md)
 - [PickupWindow](docs/PickupWindow.md)
 - [ProcessBatchRequestBody](docs/ProcessBatchRequestBody.md)
 - [Products](docs/Products.md)
 - [PurchaseLabelWithoutShipment](docs/PurchaseLabelWithoutShipment.md)
 - [Rate](docs/Rate.md)
 - [RateEstimate](docs/RateEstimate.md)
 - [RateEstimateByCarrierId](docs/RateEstimateByCarrierId.md)
 - [RateEstimateByCarrierIds](docs/RateEstimateByCarrierIds.md)
 - [RateRequestBody](docs/RateRequestBody.md)
 - [RateResponseStatus](docs/RateResponseStatus.md)
 - [RateType](docs/RateType.md)
 - [RatesInformation](docs/RatesInformation.md)
 - [RemoveFromBatchRequestBody](docs/RemoveFromBatchRequestBody.md)
 - [ResponseMessage](docs/ResponseMessage.md)
 - [SchedulePickupRequestBody](docs/SchedulePickupRequestBody.md)
 - [SchedulePickupResponseBody](docs/SchedulePickupResponseBody.md)
 - [SchedulePickupResponseBody1](docs/SchedulePickupResponseBody1.md)
 - [Service](docs/Service.md)
 - [Shipment](docs/Shipment.md)
 - [ShipmentIdRequest](docs/ShipmentIdRequest.md)
 - [ShipmentItem](docs/ShipmentItem.md)
 - [ShipmentRequest](docs/ShipmentRequest.md)
 - [ShipmentStatus](docs/ShipmentStatus.md)
 - [ShipmentsSortBy](docs/ShipmentsSortBy.md)
 - [ShippingAddress](docs/ShippingAddress.md)
 - [ShippingAddressTo](docs/ShippingAddressTo.md)
 - [SortDir](docs/SortDir.md)
 - [Tag](docs/Tag.md)
 - [TagShipmentResponseBody](docs/TagShipmentResponseBody.md)
 - [TaxIdentifier](docs/TaxIdentifier.md)
 - [TaxableEntityType](docs/TaxableEntityType.md)
 - [TermsOfTradeCode](docs/TermsOfTradeCode.md)
 - [TrackEvent](docs/TrackEvent.md)
 - [TrackingInformation](docs/TrackingInformation.md)
 - [TrackingStatus](docs/TrackingStatus.md)
 - [TrackingStatusDetailCode](docs/TrackingStatusDetailCode.md)
 - [UpdateInventoryWarehouseRequest](docs/UpdateInventoryWarehouseRequest.md)
 - [UpdatePackageTypeRequestBody](docs/UpdatePackageTypeRequestBody.md)
 - [UpdateSKUStockLevelsRequest](docs/UpdateSKUStockLevelsRequest.md)
 - [UpdateSKUStockLevelsRequestNewCost](docs/UpdateSKUStockLevelsRequestNewCost.md)
 - [UpdateWebhookRequestBody](docs/UpdateWebhookRequestBody.md)
 - [ValidateAddress](docs/ValidateAddress.md)
 - [ValidationStatus](docs/ValidationStatus.md)
 - [VoidLabelResponseBody](docs/VoidLabelResponseBody.md)
 - [Warehouse](docs/Warehouse.md)
 - [Webhook](docs/Webhook.md)
 - [WebhookEvent](docs/WebhookEvent.md)
 - [WebhookHeader](docs/WebhookHeader.md)
 - [Weight](docs/Weight.md)
 - [WeightUnit](docs/WeightUnit.md)
 - [Weigth](docs/Weigth.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="api_keys"></a>
### api_keys

- **Type**: API key
- **API key parameter name**: api-key
- **Location**: HTTP header

