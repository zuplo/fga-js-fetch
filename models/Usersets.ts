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
import type { Userset } from './Userset';
import {
    UsersetFromJSON,
    UsersetFromJSONTyped,
    UsersetToJSON,
} from './Userset';

/**
 * 
 * @export
 * @interface Usersets
 */
export interface Usersets {
    /**
     * 
     * @type {Array<Userset>}
     * @memberof Usersets
     */
    child: Array<Userset>;
}

/**
 * Check if a given object implements the Usersets interface.
 */
export function instanceOfUsersets(value: object): boolean {
    if (!('child' in value)) return false;
    return true;
}

export function UsersetsFromJSON(json: any): Usersets {
    return UsersetsFromJSONTyped(json, false);
}

export function UsersetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Usersets {
    if (json == null) {
        return json;
    }
    return {
        
        'child': ((json['child'] as Array<any>).map(UsersetFromJSON)),
    };
}

export function UsersetsToJSON(value?: Usersets | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'child': ((value['child'] as Array<any>).map(UsersetToJSON)),
    };
}

