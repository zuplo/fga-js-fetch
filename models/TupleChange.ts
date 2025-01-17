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
import type { TupleOperation } from './TupleOperation';
import {
    TupleOperationFromJSON,
    TupleOperationFromJSONTyped,
    TupleOperationToJSON,
} from './TupleOperation';

/**
 * 
 * @export
 * @interface TupleChange
 */
export interface TupleChange {
    /**
     * 
     * @type {TupleKey}
     * @memberof TupleChange
     */
    tupleKey: TupleKey;
    /**
     * 
     * @type {TupleOperation}
     * @memberof TupleChange
     */
    operation: TupleOperation;
    /**
     * 
     * @type {Date}
     * @memberof TupleChange
     */
    timestamp: Date;
}

/**
 * Check if a given object implements the TupleChange interface.
 */
export function instanceOfTupleChange(value: object): boolean {
    if (!('tupleKey' in value)) return false;
    if (!('operation' in value)) return false;
    if (!('timestamp' in value)) return false;
    return true;
}

export function TupleChangeFromJSON(json: any): TupleChange {
    return TupleChangeFromJSONTyped(json, false);
}

export function TupleChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TupleChange {
    if (json == null) {
        return json;
    }
    return {
        
        'tupleKey': TupleKeyFromJSON(json['tuple_key']),
        'operation': TupleOperationFromJSON(json['operation']),
        'timestamp': (new Date(json['timestamp'])),
    };
}

export function TupleChangeToJSON(value?: TupleChange | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tuple_key': TupleKeyToJSON(value['tupleKey']),
        'operation': TupleOperationToJSON(value['operation']),
        'timestamp': ((value['timestamp']).toISOString()),
    };
}

