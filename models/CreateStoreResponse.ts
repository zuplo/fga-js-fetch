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
/**
 * 
 * @export
 * @interface CreateStoreResponse
 */
export interface CreateStoreResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateStoreResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CreateStoreResponse
     */
    name: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateStoreResponse
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof CreateStoreResponse
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the CreateStoreResponse interface.
 */
export function instanceOfCreateStoreResponse(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('createdAt' in value)) return false;
    if (!('updatedAt' in value)) return false;
    return true;
}

export function CreateStoreResponseFromJSON(json: any): CreateStoreResponse {
    return CreateStoreResponseFromJSONTyped(json, false);
}

export function CreateStoreResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateStoreResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function CreateStoreResponseToJSON(value?: CreateStoreResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'created_at': ((value['createdAt']).toISOString()),
        'updated_at': ((value['updatedAt']).toISOString()),
    };
}

