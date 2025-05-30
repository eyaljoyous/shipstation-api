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
import type { ErrorResponseBody } from '../models';
// @ts-ignore
import type { GetWarehouseByIdResponseBody } from '../models';
// @ts-ignore
import type { ListWarehousesResponseBody } from '../models';
/**
 * WarehousesApi - axios parameter creator
 * @export
 */
export const WarehousesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve warehouse data based on the warehouse ID
         * @summary Get warehouse by id
         * @param {string} warehouseId Warehouse ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWarehouseById: async (warehouseId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'warehouseId' is not null or undefined
            assertParamExists('getWarehouseById', 'warehouseId', warehouseId)
            const localVarPath = `/v2/warehouses/{warehouse_id}`
                .replace(`{${"warehouse_id"}}`, encodeURIComponent(String(warehouseId)));
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
         * Retrieve a list of warehouses associated with this account.
         * @summary List warehouses
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listWarehouses: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/warehouses`;
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
    }
};

/**
 * WarehousesApi - functional programming interface
 * @export
 */
export const WarehousesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WarehousesApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieve warehouse data based on the warehouse ID
         * @summary Get warehouse by id
         * @param {string} warehouseId Warehouse ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWarehouseById(warehouseId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetWarehouseByIdResponseBody>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWarehouseById(warehouseId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WarehousesApi.getWarehouseById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieve a list of warehouses associated with this account.
         * @summary List warehouses
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listWarehouses(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListWarehousesResponseBody>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listWarehouses(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WarehousesApi.listWarehouses']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * WarehousesApi - factory interface
 * @export
 */
export const WarehousesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WarehousesApiFp(configuration)
    return {
        /**
         * Retrieve warehouse data based on the warehouse ID
         * @summary Get warehouse by id
         * @param {string} warehouseId Warehouse ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWarehouseById(warehouseId: string, options?: RawAxiosRequestConfig): AxiosPromise<GetWarehouseByIdResponseBody> {
            return localVarFp.getWarehouseById(warehouseId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a list of warehouses associated with this account.
         * @summary List warehouses
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listWarehouses(options?: RawAxiosRequestConfig): AxiosPromise<ListWarehousesResponseBody> {
            return localVarFp.listWarehouses(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WarehousesApi - object-oriented interface
 * @export
 * @class WarehousesApi
 * @extends {BaseAPI}
 */
export class WarehousesApi extends BaseAPI {
    /**
     * Retrieve warehouse data based on the warehouse ID
     * @summary Get warehouse by id
     * @param {string} warehouseId Warehouse ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WarehousesApi
     */
    public getWarehouseById(warehouseId: string, options?: RawAxiosRequestConfig) {
        return WarehousesApiFp(this.configuration).getWarehouseById(warehouseId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve a list of warehouses associated with this account.
     * @summary List warehouses
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WarehousesApi
     */
    public listWarehouses(options?: RawAxiosRequestConfig) {
        return WarehousesApiFp(this.configuration).listWarehouses(options).then((request) => request(this.axios, this.basePath));
    }
}

