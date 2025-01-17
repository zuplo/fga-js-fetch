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
import type { Tuple } from './Tuple';
import {
    TupleFromJSON,
    TupleFromJSONTyped,
    TupleToJSON,
} from './Tuple';

/**
 * 
 * @export
 * @interface ReadResponse
 */
export interface ReadResponse {
    /**
     * 
     * @type {Array<Tuple>}
     * @memberof ReadResponse
     */
    tuples: Array<Tuple>;
    /**
     * The continuation token will be empty if there are no more tuples.
     * @type {string}
     * @memberof ReadResponse
     */
    continuationToken: string;
}

/**
 * Check if a given object implements the ReadResponse interface.
 */
export function instanceOfReadResponse(value: object): boolean {
    if (!('tuples' in value)) return false;
    if (!('continuationToken' in value)) return false;
    return true;
}

export function ReadResponseFromJSON(json: any): ReadResponse {
    return ReadResponseFromJSONTyped(json, false);
}

export function ReadResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'tuples': ((json['tuples'] as Array<any>).map(TupleFromJSON)),
        'continuationToken': json['continuation_token'],
    };
}

export function ReadResponseToJSON(value?: ReadResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tuples': ((value['tuples'] as Array<any>).map(TupleToJSON)),
        'continuation_token': value['continuationToken'],
    };
}

