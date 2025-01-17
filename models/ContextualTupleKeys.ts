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
import type { TupleKey } from './TupleKey';
import {
    TupleKeyFromJSON,
    TupleKeyFromJSONTyped,
    TupleKeyToJSON,
} from './TupleKey';

/**
 * 
 * @export
 * @interface ContextualTupleKeys
 */
export interface ContextualTupleKeys {
    /**
     * 
     * @type {Array<TupleKey>}
     * @memberof ContextualTupleKeys
     */
    tupleKeys: Array<TupleKey>;
}

/**
 * Check if a given object implements the ContextualTupleKeys interface.
 */
export function instanceOfContextualTupleKeys(value: object): boolean {
    if (!('tupleKeys' in value)) return false;
    return true;
}

export function ContextualTupleKeysFromJSON(json: any): ContextualTupleKeys {
    return ContextualTupleKeysFromJSONTyped(json, false);
}

export function ContextualTupleKeysFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContextualTupleKeys {
    if (json == null) {
        return json;
    }
    return {
        
        'tupleKeys': ((json['tuple_keys'] as Array<any>).map(TupleKeyFromJSON)),
    };
}

export function ContextualTupleKeysToJSON(value?: ContextualTupleKeys | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tuple_keys': ((value['tupleKeys'] as Array<any>).map(TupleKeyToJSON)),
    };
}

