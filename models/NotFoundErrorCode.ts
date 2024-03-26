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
export const NotFoundErrorCode = {
    NoNotFoundError: 'no_not_found_error',
    UndefinedEndpoint: 'undefined_endpoint',
    StoreIdNotFound: 'store_id_not_found',
    Unimplemented: 'unimplemented'
} as const;
export type NotFoundErrorCode = typeof NotFoundErrorCode[keyof typeof NotFoundErrorCode];


export function instanceOfNotFoundErrorCode(value: any): boolean {
    return Object.values(NotFoundErrorCode).includes(value);
}

export function NotFoundErrorCodeFromJSON(json: any): NotFoundErrorCode {
    return NotFoundErrorCodeFromJSONTyped(json, false);
}

export function NotFoundErrorCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotFoundErrorCode {
    return json as NotFoundErrorCode;
}

export function NotFoundErrorCodeToJSON(value?: NotFoundErrorCode | null): any {
    return value as any;
}
