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
export const TypeName = {
    Unspecified: 'TYPE_NAME_UNSPECIFIED',
    Any: 'TYPE_NAME_ANY',
    Bool: 'TYPE_NAME_BOOL',
    String: 'TYPE_NAME_STRING',
    Int: 'TYPE_NAME_INT',
    Uint: 'TYPE_NAME_UINT',
    Double: 'TYPE_NAME_DOUBLE',
    Duration: 'TYPE_NAME_DURATION',
    Timestamp: 'TYPE_NAME_TIMESTAMP',
    Map: 'TYPE_NAME_MAP',
    List: 'TYPE_NAME_LIST',
    Ipaddress: 'TYPE_NAME_IPADDRESS'
} as const;
export type TypeName = typeof TypeName[keyof typeof TypeName];


export function instanceOfTypeName(value: any): boolean {
    return Object.values(TypeName).includes(value);
}

export function TypeNameFromJSON(json: any): TypeName {
    return TypeNameFromJSONTyped(json, false);
}

export function TypeNameFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypeName {
    return json as TypeName;
}

export function TypeNameToJSON(value?: TypeName | null): any {
    return value as any;
}

