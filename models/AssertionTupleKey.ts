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
 * @interface AssertionTupleKey
 */
export interface AssertionTupleKey {
    /**
     * 
     * @type {string}
     * @memberof AssertionTupleKey
     */
    object: string;
    /**
     * 
     * @type {string}
     * @memberof AssertionTupleKey
     */
    relation: string;
    /**
     * 
     * @type {string}
     * @memberof AssertionTupleKey
     */
    user: string;
}

/**
 * Check if a given object implements the AssertionTupleKey interface.
 */
export function instanceOfAssertionTupleKey(value: object): boolean {
    if (!('object' in value)) return false;
    if (!('relation' in value)) return false;
    if (!('user' in value)) return false;
    return true;
}

export function AssertionTupleKeyFromJSON(json: any): AssertionTupleKey {
    return AssertionTupleKeyFromJSONTyped(json, false);
}

export function AssertionTupleKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssertionTupleKey {
    if (json == null) {
        return json;
    }
    return {
        
        'object': json['object'],
        'relation': json['relation'],
        'user': json['user'],
    };
}

export function AssertionTupleKeyToJSON(value?: AssertionTupleKey | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'object': value['object'],
        'relation': value['relation'],
        'user': value['user'],
    };
}
