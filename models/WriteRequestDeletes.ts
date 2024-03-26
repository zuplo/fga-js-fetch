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
import type { TupleKeyWithoutCondition } from './TupleKeyWithoutCondition';
import {
    TupleKeyWithoutConditionFromJSON,
    TupleKeyWithoutConditionFromJSONTyped,
    TupleKeyWithoutConditionToJSON,
} from './TupleKeyWithoutCondition';

/**
 * 
 * @export
 * @interface WriteRequestDeletes
 */
export interface WriteRequestDeletes {
    /**
     * 
     * @type {Array<TupleKeyWithoutCondition>}
     * @memberof WriteRequestDeletes
     */
    tupleKeys: Array<TupleKeyWithoutCondition>;
}

/**
 * Check if a given object implements the WriteRequestDeletes interface.
 */
export function instanceOfWriteRequestDeletes(value: object): boolean {
    if (!('tupleKeys' in value)) return false;
    return true;
}

export function WriteRequestDeletesFromJSON(json: any): WriteRequestDeletes {
    return WriteRequestDeletesFromJSONTyped(json, false);
}

export function WriteRequestDeletesFromJSONTyped(json: any, ignoreDiscriminator: boolean): WriteRequestDeletes {
    if (json == null) {
        return json;
    }
    return {
        
        'tupleKeys': ((json['tuple_keys'] as Array<any>).map(TupleKeyWithoutConditionFromJSON)),
    };
}

export function WriteRequestDeletesToJSON(value?: WriteRequestDeletes | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tuple_keys': ((value['tupleKeys'] as Array<any>).map(TupleKeyWithoutConditionToJSON)),
    };
}
