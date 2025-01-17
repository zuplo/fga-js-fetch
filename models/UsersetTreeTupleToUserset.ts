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
import type { Computed } from './Computed';
import {
    ComputedFromJSON,
    ComputedFromJSONTyped,
    ComputedToJSON,
} from './Computed';

/**
 * 
 * @export
 * @interface UsersetTreeTupleToUserset
 */
export interface UsersetTreeTupleToUserset {
    /**
     * 
     * @type {string}
     * @memberof UsersetTreeTupleToUserset
     */
    tupleset: string;
    /**
     * 
     * @type {Array<Computed>}
     * @memberof UsersetTreeTupleToUserset
     */
    computed: Array<Computed>;
}

/**
 * Check if a given object implements the UsersetTreeTupleToUserset interface.
 */
export function instanceOfUsersetTreeTupleToUserset(value: object): boolean {
    if (!('tupleset' in value)) return false;
    if (!('computed' in value)) return false;
    return true;
}

export function UsersetTreeTupleToUsersetFromJSON(json: any): UsersetTreeTupleToUserset {
    return UsersetTreeTupleToUsersetFromJSONTyped(json, false);
}

export function UsersetTreeTupleToUsersetFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersetTreeTupleToUserset {
    if (json == null) {
        return json;
    }
    return {
        
        'tupleset': json['tupleset'],
        'computed': ((json['computed'] as Array<any>).map(ComputedFromJSON)),
    };
}

export function UsersetTreeTupleToUsersetToJSON(value?: UsersetTreeTupleToUserset | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tupleset': value['tupleset'],
        'computed': ((value['computed'] as Array<any>).map(ComputedToJSON)),
    };
}

