// tslint:disable
/**
 * Open Hospital API Documentation
 * Open Hospital API Documentation
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Class representing a price list
 * @export
 * @interface PriceListDTO
 */
export interface PriceListDTO {
    /**
     * @type {number}
     * @memberof PriceListDTO
     */
    id?: number;
    /**
     * The price list code
     * @type {string}
     * @memberof PriceListDTO
     */
    code?: string;
    /**
     * The name of the price list
     * @type {string}
     * @memberof PriceListDTO
     */
    name?: string;
    /**
     * The price list description
     * @type {string}
     * @memberof PriceListDTO
     */
    description?: string;
    /**
     * The currency
     * @type {string}
     * @memberof PriceListDTO
     */
    currency?: string;
    /**
     * Lock
     * @type {number}
     * @memberof PriceListDTO
     */
    lock?: number;
    /**
     * @type {number}
     * @memberof PriceListDTO
     */
    readonly hashCode?: number;
}
