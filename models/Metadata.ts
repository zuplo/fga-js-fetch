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
import type { RelationMetadata } from './RelationMetadata';
import {
    RelationMetadataFromJSON,
    RelationMetadataFromJSONTyped,
    RelationMetadataToJSON,
} from './RelationMetadata';
import type { SourceInfo } from './SourceInfo';
import {
    SourceInfoFromJSON,
    SourceInfoFromJSONTyped,
    SourceInfoToJSON,
} from './SourceInfo';

/**
 * 
 * @export
 * @interface Metadata
 */
export interface Metadata {
    /**
     * 
     * @type {{ [key: string]: RelationMetadata; }}
     * @memberof Metadata
     */
    relations?: { [key: string]: RelationMetadata; };
    /**
     * 
     * @type {string}
     * @memberof Metadata
     */
    module?: string;
    /**
     * 
     * @type {SourceInfo}
     * @memberof Metadata
     */
    sourceInfo?: SourceInfo;
}

/**
 * Check if a given object implements the Metadata interface.
 */
export function instanceOfMetadata(value: object): boolean {
    return true;
}

export function MetadataFromJSON(json: any): Metadata {
    return MetadataFromJSONTyped(json, false);
}

export function MetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): Metadata {
    if (json == null) {
        return json;
    }
    return {
        
        'relations': json['relations'] == null ? undefined : (mapValues(json['relations'], RelationMetadataFromJSON)),
        'module': json['module'] == null ? undefined : json['module'],
        'sourceInfo': json['source_info'] == null ? undefined : SourceInfoFromJSON(json['source_info']),
    };
}

export function MetadataToJSON(value?: Metadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'relations': value['relations'] == null ? undefined : (mapValues(value['relations'], RelationMetadataToJSON)),
        'module': value['module'],
        'source_info': SourceInfoToJSON(value['sourceInfo']),
    };
}

