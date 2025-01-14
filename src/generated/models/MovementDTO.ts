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
    LotDTO,
    MedicalDTO,
    MovementTypeDTO,
    SupplierDTO,
    WardDTO,
} from './';

/**
 * @export
 * @interface MovementDTO
 */
export interface MovementDTO {
    /**
     * The movement code
     * @type {number}
     * @memberof MovementDTO
     */
    code?: number;
    /**
     * @type {MedicalDTO}
     * @memberof MovementDTO
     */
    medical: MedicalDTO;
    /**
     * @type {MovementTypeDTO}
     * @memberof MovementDTO
     */
    type: MovementTypeDTO;
    /**
     * @type {WardDTO}
     * @memberof MovementDTO
     */
    ward?: WardDTO;
    /**
     * @type {LotDTO}
     * @memberof MovementDTO
     */
    lot?: LotDTO;
    /**
     * The movement date
     * @type {string}
     * @memberof MovementDTO
     */
    date: string;
    /**
     * The movement\'s medical quantity
     * @type {number}
     * @memberof MovementDTO
     */
    quantity: number;
    /**
     * @type {SupplierDTO}
     * @memberof MovementDTO
     */
    supplier?: SupplierDTO;
    /**
     * The movement reference
     * @type {string}
     * @memberof MovementDTO
     */
    refNo: string;
}
