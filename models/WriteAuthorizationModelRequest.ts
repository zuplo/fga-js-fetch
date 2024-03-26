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
import type { Condition } from './Condition';
import {
    ConditionFromJSON,
    ConditionFromJSONTyped,
    ConditionToJSON,
} from './Condition';
import type { TypeDefinition } from './TypeDefinition';
import {
    TypeDefinitionFromJSON,
    TypeDefinitionFromJSONTyped,
    TypeDefinitionToJSON,
} from './TypeDefinition';

/**
 * 
 * @export
 * @interface WriteAuthorizationModelRequest
 */
export interface WriteAuthorizationModelRequest {
    /**
     * 
     * @type {Array<TypeDefinition>}
     * @memberof WriteAuthorizationModelRequest
     */
    typeDefinitions: Array<TypeDefinition>;
    /**
     * 
     * @type {string}
     * @memberof WriteAuthorizationModelRequest
     */
    schemaVersion: string;
    /**
     * 
     * @type {{ [key: string]: Condition; }}
     * @memberof WriteAuthorizationModelRequest
     */
    conditions?: { [key: string]: Condition; };
}

/**
 * Check if a given object implements the WriteAuthorizationModelRequest interface.
 */
export function instanceOfWriteAuthorizationModelRequest(value: object): boolean {
    if (!('typeDefinitions' in value)) return false;
    if (!('schemaVersion' in value)) return false;
    return true;
}

export function WriteAuthorizationModelRequestFromJSON(json: any): WriteAuthorizationModelRequest {
    return WriteAuthorizationModelRequestFromJSONTyped(json, false);
}

export function WriteAuthorizationModelRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WriteAuthorizationModelRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'typeDefinitions': ((json['type_definitions'] as Array<any>).map(TypeDefinitionFromJSON)),
        'schemaVersion': json['schema_version'],
        'conditions': json['conditions'] == null ? undefined : (mapValues(json['conditions'], ConditionFromJSON)),
    };
}

export function WriteAuthorizationModelRequestToJSON(value?: WriteAuthorizationModelRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type_definitions': ((value['typeDefinitions'] as Array<any>).map(TypeDefinitionToJSON)),
        'schema_version': value['schemaVersion'],
        'conditions': value['conditions'] == null ? undefined : (mapValues(value['conditions'], ConditionToJSON)),
    };
}

