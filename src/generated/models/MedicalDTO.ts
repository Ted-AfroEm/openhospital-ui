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

import {
    MedicalTypeDTO,
} from './';

/**
 * @export
 * @interface MedicalDTO
 */
export interface MedicalDTO {
    /**
     * The id of the medical
     * @type {number}
     * @memberof MedicalDTO
     */
    code?: number;
    /**
     * The product code
     * @type {string}
     * @memberof MedicalDTO
     */
    prod_code?: string;
    /**
     * @type {MedicalTypeDTO}
     * @memberof MedicalDTO
     */
    type?: MedicalTypeDTO;
    /**
     * The description of the medical
     * @type {string}
     * @memberof MedicalDTO
     */
    description?: string;
    /**
     * The initial quantity of the medical
     * @type {number}
     * @memberof MedicalDTO
     */
    initialqty?: number;
    /**
     * The number of pieces per packet
     * @type {number}
     * @memberof MedicalDTO
     */
    pcsperpck?: number;
    /**
     * The input quantity of the medical
     * @type {number}
     * @memberof MedicalDTO
     */
    inqty?: number;
    /**
     * The out quantity of the medical
     * @type {number}
     * @memberof MedicalDTO
     */
    outqty?: number;
    /**
     * The min quantity of the medical
     * @type {number}
     * @memberof MedicalDTO
     */
    minqty?: number;
    /**
     * Lock
     * @type {number}
     * @memberof MedicalDTO
     */
    lock?: number;
}
