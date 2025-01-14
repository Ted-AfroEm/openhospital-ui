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

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    DischargeTypeDTO,
} from '../models';

export interface DeleteDischargeTypeRequest {
    code: string;
}

export interface NewDischargeTypeRequest {
    dischargeTypeDTO: DischargeTypeDTO;
}

export interface UpdateDischargeTypeRequest {
    dischargeTypeDTO: DischargeTypeDTO;
}

/**
 * no description
 */
export class DischargeTypeApi extends BaseAPI {

    /**
     */
    deleteDischargeType({ code }: DeleteDischargeTypeRequest): Observable<boolean>
    deleteDischargeType({ code }: DeleteDischargeTypeRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deleteDischargeType({ code }: DeleteDischargeTypeRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(code, 'code', 'deleteDischargeType');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/dischargetypes/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getDischargeTypes(): Observable<Array<DischargeTypeDTO>>
    getDischargeTypes(opts?: OperationOpts): Observable<RawAjaxResponse<Array<DischargeTypeDTO>>>
    getDischargeTypes(opts?: OperationOpts): Observable<Array<DischargeTypeDTO> | RawAjaxResponse<Array<DischargeTypeDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<DischargeTypeDTO>>({
            url: '/dischargetypes',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    newDischargeType({ dischargeTypeDTO }: NewDischargeTypeRequest): Observable<DischargeTypeDTO>
    newDischargeType({ dischargeTypeDTO }: NewDischargeTypeRequest, opts?: OperationOpts): Observable<RawAjaxResponse<DischargeTypeDTO>>
    newDischargeType({ dischargeTypeDTO }: NewDischargeTypeRequest, opts?: OperationOpts): Observable<DischargeTypeDTO | RawAjaxResponse<DischargeTypeDTO>> {
        throwIfNullOrUndefined(dischargeTypeDTO, 'dischargeTypeDTO', 'newDischargeType');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<DischargeTypeDTO>({
            url: '/dischargetypes',
            method: 'POST',
            headers,
            body: dischargeTypeDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    updateDischargeType({ dischargeTypeDTO }: UpdateDischargeTypeRequest): Observable<DischargeTypeDTO>
    updateDischargeType({ dischargeTypeDTO }: UpdateDischargeTypeRequest, opts?: OperationOpts): Observable<RawAjaxResponse<DischargeTypeDTO>>
    updateDischargeType({ dischargeTypeDTO }: UpdateDischargeTypeRequest, opts?: OperationOpts): Observable<DischargeTypeDTO | RawAjaxResponse<DischargeTypeDTO>> {
        throwIfNullOrUndefined(dischargeTypeDTO, 'dischargeTypeDTO', 'updateDischargeType');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<DischargeTypeDTO>({
            url: '/dischargetypes',
            method: 'PUT',
            headers,
            body: dischargeTypeDTO,
        }, opts?.responseOpts);
    };

}
