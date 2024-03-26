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
 * @interface Tuple
 */
export interface Tuple {
    /**
     * 
     * @type {TupleKey}
     * @memberof Tuple
     */
    key: TupleKey;
    /**
     * 
     * @type {Date}
     * @memberof Tuple
     */
    timestamp: Date;
}

/**
 * Check if a given object implements the Tuple interface.
 */
export function instanceOfTuple(value: object): boolean {
    if (!('key' in value)) return false;
    if (!('timestamp' in value)) return false;
    return true;
}

export function TupleFromJSON(json: any): Tuple {
    return TupleFromJSONTyped(json, false);
}

export function TupleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tuple {
    if (json == null) {
        return json;
    }
    return {
        
        'key': TupleKeyFromJSON(json['key']),
        'timestamp': (new Date(json['timestamp'])),
    };
}

export function TupleToJSON(value?: Tuple | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'key': TupleKeyToJSON(value['key']),
        'timestamp': ((value['timestamp']).toISOString()),
    };
}
