/* tslint:disable */
/* eslint-disable */
/**
 * ShipStation API v2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { CreateManifestRequestBody } from '../models';
// @ts-ignore
import type { CreateManifestResponseBody } from '../models';
// @ts-ignore
import type { ErrorResponseBody } from '../models';
// @ts-ignore
import type { GetManifestByIdResponseBody } from '../models';
// @ts-ignore
import type { ListManifestsResponseBody } from '../models';
/**
 * ManifestsApi - axios parameter creator
 * @export
 */
export const ManifestsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Each ShipStation manifest is created for a specific warehouse, so you\'ll need to provide the warehouse_id rather than the ship_from address. You can create a warehouse for each location that you want to create manifests for. 
         * @summary Create manifest
         * @param {CreateManifestRequestBody} createManifestRequestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createManifest: async (createManifestRequestBody: CreateManifestRequestBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createManifestRequestBody' is not null or undefined
            assertParamExists('createManifest', 'createManifestRequestBody', createManifestRequestBody)
            const localVarPath = `/v2/manifests`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_keys required
            await setApiKeyToObject(localVarHeaderParameter, "api-key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createManifestRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get Manifest By Id
         * @summary Get manifest by id
         * @param {string} manifestId The Manifest Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getManifestById: async (manifestId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'manifestId' is not null or undefined
            assertParamExists('getManifestById', 'manifestId', manifestId)
            const localVarPath = `/v2/manifests/{manifest_id}`
                .replace(`{${"manifest_id"}}`, encodeURIComponent(String(manifestId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_keys required
            await setApiKeyToObject(localVarHeaderParameter, "api-key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Similar to querying shipments, we allow you to query manifests since there will likely be a large number over a long period of time.
         * @summary List manifests
         * @param {string} [warehouseId] Warehouse ID
         * @param {string} [shipDateStart] ship date start range
         * @param {string} [shipDateEnd] ship date end range
         * @param {string} [createdAtStart] Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
         * @param {string} [createdAtEnd] Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)
         * @param {string} [carrierId] Carrier ID
         * @param {number} [page] Return a specific page of results. Defaults to the first page. If set to a number that\&#39;s greater than the number of pages of results, an empty page is returned. 
         * @param {number} [pageSize] The number of results to return per response.
         * @param {Array<string>} [labelIds] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listManifests: async (warehouseId?: string, shipDateStart?: string, shipDateEnd?: string, createdAtStart?: string, createdAtEnd?: string, carrierId?: string, page?: number, pageSize?: number, labelIds?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/manifests`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_keys required
            await setApiKeyToObject(localVarHeaderParameter, "api-key", configuration)

            if (warehouseId !== undefined) {
                localVarQueryParameter['warehouse_id'] = warehouseId;
            }

            if (shipDateStart !== undefined) {
                localVarQueryParameter['ship_date_start'] = (shipDateStart as any instanceof Date) ?
                    (shipDateStart as any).toISOString() :
                    shipDateStart;
            }

            if (shipDateEnd !== undefined) {
                localVarQueryParameter['ship_date_end'] = (shipDateEnd as any instanceof Date) ?
                    (shipDateEnd as any).toISOString() :
                    shipDateEnd;
            }

            if (createdAtStart !== undefined) {
                localVarQueryParameter['created_at_start'] = (createdAtStart as any instanceof Date) ?
                    (createdAtStart as any).toISOString() :
                    createdAtStart;
            }

            if (createdAtEnd !== undefined) {
                localVarQueryParameter['created_at_end'] = (createdAtEnd as any instanceof Date) ?
                    (createdAtEnd as any).toISOString() :
                    createdAtEnd;
            }

            if (carrierId !== undefined) {
                localVarQueryParameter['carrier_id'] = carrierId;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            if (labelIds) {
                localVarQueryParameter['label_ids'] = labelIds;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ManifestsApi - functional programming interface
 * @export
 */
export const ManifestsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ManifestsApiAxiosParamCreator(configuration)
    return {
        /**
         * Each ShipStation manifest is created for a specific warehouse, so you\'ll need to provide the warehouse_id rather than the ship_from address. You can create a warehouse for each location that you want to create manifests for. 
         * @summary Create manifest
         * @param {CreateManifestRequestBody} createManifestRequestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createManifest(createManifestRequestBody: CreateManifestRequestBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateManifestResponseBody>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createManifest(createManifestRequestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ManifestsApi.createManifest']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get Manifest By Id
         * @summary Get manifest by id
         * @param {string} manifestId The Manifest Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getManifestById(manifestId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetManifestByIdResponseBody>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getManifestById(manifestId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ManifestsApi.getManifestById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Similar to querying shipments, we allow you to query manifests since there will likely be a large number over a long period of time.
         * @summary List manifests
         * @param {string} [warehouseId] Warehouse ID
         * @param {string} [shipDateStart] ship date start range
         * @param {string} [shipDateEnd] ship date end range
         * @param {string} [createdAtStart] Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
         * @param {string} [createdAtEnd] Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)
         * @param {string} [carrierId] Carrier ID
         * @param {number} [page] Return a specific page of results. Defaults to the first page. If set to a number that\&#39;s greater than the number of pages of results, an empty page is returned. 
         * @param {number} [pageSize] The number of results to return per response.
         * @param {Array<string>} [labelIds] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listManifests(warehouseId?: string, shipDateStart?: string, shipDateEnd?: string, createdAtStart?: string, createdAtEnd?: string, carrierId?: string, page?: number, pageSize?: number, labelIds?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListManifestsResponseBody>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listManifests(warehouseId, shipDateStart, shipDateEnd, createdAtStart, createdAtEnd, carrierId, page, pageSize, labelIds, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ManifestsApi.listManifests']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ManifestsApi - factory interface
 * @export
 */
export const ManifestsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ManifestsApiFp(configuration)
    return {
        /**
         * Each ShipStation manifest is created for a specific warehouse, so you\'ll need to provide the warehouse_id rather than the ship_from address. You can create a warehouse for each location that you want to create manifests for. 
         * @summary Create manifest
         * @param {CreateManifestRequestBody} createManifestRequestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createManifest(createManifestRequestBody: CreateManifestRequestBody, options?: RawAxiosRequestConfig): AxiosPromise<CreateManifestResponseBody> {
            return localVarFp.createManifest(createManifestRequestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Get Manifest By Id
         * @summary Get manifest by id
         * @param {string} manifestId The Manifest Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getManifestById(manifestId: string, options?: RawAxiosRequestConfig): AxiosPromise<GetManifestByIdResponseBody> {
            return localVarFp.getManifestById(manifestId, options).then((request) => request(axios, basePath));
        },
        /**
         * Similar to querying shipments, we allow you to query manifests since there will likely be a large number over a long period of time.
         * @summary List manifests
         * @param {string} [warehouseId] Warehouse ID
         * @param {string} [shipDateStart] ship date start range
         * @param {string} [shipDateEnd] ship date end range
         * @param {string} [createdAtStart] Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
         * @param {string} [createdAtEnd] Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)
         * @param {string} [carrierId] Carrier ID
         * @param {number} [page] Return a specific page of results. Defaults to the first page. If set to a number that\&#39;s greater than the number of pages of results, an empty page is returned. 
         * @param {number} [pageSize] The number of results to return per response.
         * @param {Array<string>} [labelIds] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listManifests(warehouseId?: string, shipDateStart?: string, shipDateEnd?: string, createdAtStart?: string, createdAtEnd?: string, carrierId?: string, page?: number, pageSize?: number, labelIds?: Array<string>, options?: RawAxiosRequestConfig): AxiosPromise<ListManifestsResponseBody> {
            return localVarFp.listManifests(warehouseId, shipDateStart, shipDateEnd, createdAtStart, createdAtEnd, carrierId, page, pageSize, labelIds, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ManifestsApi - object-oriented interface
 * @export
 * @class ManifestsApi
 * @extends {BaseAPI}
 */
export class ManifestsApi extends BaseAPI {
    /**
     * Each ShipStation manifest is created for a specific warehouse, so you\'ll need to provide the warehouse_id rather than the ship_from address. You can create a warehouse for each location that you want to create manifests for. 
     * @summary Create manifest
     * @param {CreateManifestRequestBody} createManifestRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManifestsApi
     */
    public createManifest(createManifestRequestBody: CreateManifestRequestBody, options?: RawAxiosRequestConfig) {
        return ManifestsApiFp(this.configuration).createManifest(createManifestRequestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get Manifest By Id
     * @summary Get manifest by id
     * @param {string} manifestId The Manifest Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManifestsApi
     */
    public getManifestById(manifestId: string, options?: RawAxiosRequestConfig) {
        return ManifestsApiFp(this.configuration).getManifestById(manifestId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Similar to querying shipments, we allow you to query manifests since there will likely be a large number over a long period of time.
     * @summary List manifests
     * @param {string} [warehouseId] Warehouse ID
     * @param {string} [shipDateStart] ship date start range
     * @param {string} [shipDateEnd] ship date end range
     * @param {string} [createdAtStart] Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
     * @param {string} [createdAtEnd] Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)
     * @param {string} [carrierId] Carrier ID
     * @param {number} [page] Return a specific page of results. Defaults to the first page. If set to a number that\&#39;s greater than the number of pages of results, an empty page is returned. 
     * @param {number} [pageSize] The number of results to return per response.
     * @param {Array<string>} [labelIds] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManifestsApi
     */
    public listManifests(warehouseId?: string, shipDateStart?: string, shipDateEnd?: string, createdAtStart?: string, createdAtEnd?: string, carrierId?: string, page?: number, pageSize?: number, labelIds?: Array<string>, options?: RawAxiosRequestConfig) {
        return ManifestsApiFp(this.configuration).listManifests(warehouseId, shipDateStart, shipDateEnd, createdAtStart, createdAtEnd, carrierId, page, pageSize, labelIds, options).then((request) => request(this.axios, this.basePath));
    }
}

