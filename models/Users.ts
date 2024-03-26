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
 * @interface Users
 */
export interface Users {
    /**
     * 
     * @type {Array<string>}
     * @memberof Users
     */
    users: Array<string>;
}

/**
 * Check if a given object implements the Users interface.
 */
export function instanceOfUsers(value: object): boolean {
    if (!('users' in value)) return false;
    return true;
}

export function UsersFromJSON(json: any): Users {
    return UsersFromJSONTyped(json, false);
}

export function UsersFromJSONTyped(json: any, ignoreDiscriminator: boolean): Users {
    if (json == null) {
        return json;
    }
    return {
        
        'users': json['users'],
    };
}

export function UsersToJSON(value?: Users | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'users': value['users'],
    };
}

