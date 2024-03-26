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
import type { Assertion } from './Assertion';
import {
    AssertionFromJSON,
    AssertionFromJSONTyped,
    AssertionToJSON,
} from './Assertion';

/**
 * 
 * @export
 * @interface WriteAssertionsRequest
 */
export interface WriteAssertionsRequest {
    /**
     * 
     * @type {Array<Assertion>}
     * @memberof WriteAssertionsRequest
     */
    assertions: Array<Assertion>;
}

/**
 * Check if a given object implements the WriteAssertionsRequest interface.
 */
export function instanceOfWriteAssertionsRequest(value: object): boolean {
    if (!('assertions' in value)) return false;
    return true;
}

export function WriteAssertionsRequestFromJSON(json: any): WriteAssertionsRequest {
    return WriteAssertionsRequestFromJSONTyped(json, false);
}

export function WriteAssertionsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WriteAssertionsRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'assertions': ((json['assertions'] as Array<any>).map(AssertionFromJSON)),
    };
}

export function WriteAssertionsRequestToJSON(value?: WriteAssertionsRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'assertions': ((value['assertions'] as Array<any>).map(AssertionToJSON)),
    };
}
