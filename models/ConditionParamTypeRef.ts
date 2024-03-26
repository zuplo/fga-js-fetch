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
import type { TypeName } from './TypeName';
import {
    TypeNameFromJSON,
    TypeNameFromJSONTyped,
    TypeNameToJSON,
} from './TypeName';

/**
 * 
 * @export
 * @interface ConditionParamTypeRef
 */
export interface ConditionParamTypeRef {
    /**
     * 
     * @type {TypeName}
     * @memberof ConditionParamTypeRef
     */
    typeName: TypeName;
    /**
     * 
     * @type {Array<ConditionParamTypeRef>}
     * @memberof ConditionParamTypeRef
     */
    genericTypes?: Array<ConditionParamTypeRef>;
}

/**
 * Check if a given object implements the ConditionParamTypeRef interface.
 */
export function instanceOfConditionParamTypeRef(value: object): boolean {
    if (!('typeName' in value)) return false;
    return true;
}

export function ConditionParamTypeRefFromJSON(json: any): ConditionParamTypeRef {
    return ConditionParamTypeRefFromJSONTyped(json, false);
}

export function ConditionParamTypeRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConditionParamTypeRef {
    if (json == null) {
        return json;
    }
    return {
        
        'typeName': TypeNameFromJSON(json['type_name']),
        'genericTypes': json['generic_types'] == null ? undefined : ((json['generic_types'] as Array<any>).map(ConditionParamTypeRefFromJSON)),
    };
}

export function ConditionParamTypeRefToJSON(value?: ConditionParamTypeRef | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type_name': TypeNameToJSON(value['typeName']),
        'generic_types': value['genericTypes'] == null ? undefined : ((value['genericTypes'] as Array<any>).map(ConditionParamTypeRefToJSON)),
    };
}

