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
 * @interface ReadAssertionsResponse
 */
export interface ReadAssertionsResponse {
    /**
     * 
     * @type {string}
     * @memberof ReadAssertionsResponse
     */
    authorizationModelId: string;
    /**
     * 
     * @type {Array<Assertion>}
     * @memberof ReadAssertionsResponse
     */
    assertions?: Array<Assertion>;
}

/**
 * Check if a given object implements the ReadAssertionsResponse interface.
 */
export function instanceOfReadAssertionsResponse(value: object): boolean {
    if (!('authorizationModelId' in value)) return false;
    return true;
}

export function ReadAssertionsResponseFromJSON(json: any): ReadAssertionsResponse {
    return ReadAssertionsResponseFromJSONTyped(json, false);
}

export function ReadAssertionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadAssertionsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'authorizationModelId': json['authorization_model_id'],
        'assertions': json['assertions'] == null ? undefined : ((json['assertions'] as Array<any>).map(AssertionFromJSON)),
    };
}

export function ReadAssertionsResponseToJSON(value?: ReadAssertionsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'authorization_model_id': value['authorizationModelId'],
        'assertions': value['assertions'] == null ? undefined : ((value['assertions'] as Array<any>).map(AssertionToJSON)),
    };
}
