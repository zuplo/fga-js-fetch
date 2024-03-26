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
import type { Metadata } from './Metadata';
import {
    MetadataFromJSON,
    MetadataFromJSONTyped,
    MetadataToJSON,
} from './Metadata';
import type { Userset } from './Userset';
import {
    UsersetFromJSON,
    UsersetFromJSONTyped,
    UsersetToJSON,
} from './Userset';

/**
 * 
 * @export
 * @interface TypeDefinition
 */
export interface TypeDefinition {
    /**
     * 
     * @type {string}
     * @memberof TypeDefinition
     */
    type: string;
    /**
     * 
     * @type {{ [key: string]: Userset; }}
     * @memberof TypeDefinition
     */
    relations?: { [key: string]: Userset; };
    /**
     * 
     * @type {Metadata}
     * @memberof TypeDefinition
     */
    metadata?: Metadata;
}

/**
 * Check if a given object implements the TypeDefinition interface.
 */
export function instanceOfTypeDefinition(value: object): boolean {
    if (!('type' in value)) return false;
    return true;
}

export function TypeDefinitionFromJSON(json: any): TypeDefinition {
    return TypeDefinitionFromJSONTyped(json, false);
}

export function TypeDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypeDefinition {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relations': json['relations'] == null ? undefined : (mapValues(json['relations'], UsersetFromJSON)),
        'metadata': json['metadata'] == null ? undefined : MetadataFromJSON(json['metadata']),
    };
}

export function TypeDefinitionToJSON(value?: TypeDefinition | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
        'relations': value['relations'] == null ? undefined : (mapValues(value['relations'], UsersetToJSON)),
        'metadata': MetadataToJSON(value['metadata']),
    };
}
