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
import type { ContextualTupleKeys } from './ContextualTupleKeys';
import {
    ContextualTupleKeysFromJSON,
    ContextualTupleKeysFromJSONTyped,
    ContextualTupleKeysToJSON,
} from './ContextualTupleKeys';

/**
 * 
 * @export
 * @interface ListObjectsRequest
 */
export interface ListObjectsRequest {
    /**
     * 
     * @type {string}
     * @memberof ListObjectsRequest
     */
    authorizationModelId?: string;
    /**
     * 
     * @type {string}
     * @memberof ListObjectsRequest
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof ListObjectsRequest
     */
    relation: string;
    /**
     * 
     * @type {string}
     * @memberof ListObjectsRequest
     */
    user: string;
    /**
     * 
     * @type {ContextualTupleKeys}
     * @memberof ListObjectsRequest
     */
    contextualTuples?: ContextualTupleKeys;
    /**
     * Additional request context that will be used to evaluate any ABAC conditions encountered
     * in the query evaluation.
     * @type {object}
     * @memberof ListObjectsRequest
     */
    context?: object;
}

/**
 * Check if a given object implements the ListObjectsRequest interface.
 */
export function instanceOfListObjectsRequest(value: object): boolean {
    if (!('type' in value)) return false;
    if (!('relation' in value)) return false;
    if (!('user' in value)) return false;
    return true;
}

export function ListObjectsRequestFromJSON(json: any): ListObjectsRequest {
    return ListObjectsRequestFromJSONTyped(json, false);
}

export function ListObjectsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListObjectsRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'authorizationModelId': json['authorization_model_id'] == null ? undefined : json['authorization_model_id'],
        'type': json['type'],
        'relation': json['relation'],
        'user': json['user'],
        'contextualTuples': json['contextual_tuples'] == null ? undefined : ContextualTupleKeysFromJSON(json['contextual_tuples']),
        'context': json['context'] == null ? undefined : json['context'],
    };
}

export function ListObjectsRequestToJSON(value?: ListObjectsRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'authorization_model_id': value['authorizationModelId'],
        'type': value['type'],
        'relation': value['relation'],
        'user': value['user'],
        'contextual_tuples': ContextualTupleKeysToJSON(value['contextualTuples']),
        'context': value['context'],
    };
}

