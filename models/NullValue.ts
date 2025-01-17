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
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 * 
 * The JSON representation for `NullValue` is JSON `null`.
 * 
 *  - NULL_VALUE: Null value.
 * @export
 */
export const NullValue = {
    NullValue: 'NULL_VALUE'
} as const;
export type NullValue = typeof NullValue[keyof typeof NullValue];


export function instanceOfNullValue(value: any): boolean {
    return Object.values(NullValue).includes(value);
}

export function NullValueFromJSON(json: any): NullValue {
    return NullValueFromJSONTyped(json, false);
}

export function NullValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): NullValue {
    return json as NullValue;
}

export function NullValueToJSON(value?: NullValue | null): any {
    return value as any;
}

