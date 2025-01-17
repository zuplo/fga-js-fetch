/* tslint:disable */
/* eslint-disable */
/**
 * OpenFGA
 * A high performance and flexible authorization/permission engine built for developers and inspired by Google Zanzibar.
 *
 * The version of the OpenAPI document: 0.1
 * Contact: community@openfga.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Store } from './Store';
import {
    StoreFromJSON,
    StoreFromJSONTyped,
    StoreToJSON,
} from './Store';

/**
 * 
 * @export
 * @interface ListStoresResponse
 */
export interface ListStoresResponse {
    /**
     * 
     * @type {Array<Store>}
     * @memberof ListStoresResponse
     */
    stores: Array<Store>;
    /**
     * The continuation token will be empty if there are no more stores.
     * @type {string}
     * @memberof ListStoresResponse
     */
    continuationToken: string;
}

/**
 * Check if a given object implements the ListStoresResponse interface.
 */
export function instanceOfListStoresResponse(value: object): boolean {
    if (!('stores' in value)) return false;
    if (!('continuationToken' in value)) return false;
    return true;
}

export function ListStoresResponseFromJSON(json: any): ListStoresResponse {
    return ListStoresResponseFromJSONTyped(json, false);
}

export function ListStoresResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListStoresResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'stores': ((json['stores'] as Array<any>).map(StoreFromJSON)),
        'continuationToken': json['continuation_token'],
    };
}

export function ListStoresResponseToJSON(value?: ListStoresResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'stores': ((value['stores'] as Array<any>).map(StoreToJSON)),
        'continuation_token': value['continuationToken'],
    };
}

