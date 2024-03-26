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


/**
 * 
 * @export
 */
export const TupleOperation = {
    Write: 'TUPLE_OPERATION_WRITE',
    Delete: 'TUPLE_OPERATION_DELETE'
} as const;
export type TupleOperation = typeof TupleOperation[keyof typeof TupleOperation];


export function instanceOfTupleOperation(value: any): boolean {
    return Object.values(TupleOperation).includes(value);
}

export function TupleOperationFromJSON(json: any): TupleOperation {
    return TupleOperationFromJSONTyped(json, false);
}

export function TupleOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): TupleOperation {
    return json as TupleOperation;
}

export function TupleOperationToJSON(value?: TupleOperation | null): any {
    return value as any;
}
