// tslint:disable
/**
 * OH 2.0 Api Documentation
 * OH 2.0 Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, HttpQuery, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    PatientVaccineDTO,
} from '../models';

export interface DeletePatientVaccineRequest {
    code: number;
}

export interface GetPatientVaccinesRequest {
    oneWeek?: boolean;
}

export interface GetPatientVaccinesByDatesRangesRequest {
    vaccineTypeCode: string;
    vaccineCode: string;
    dateFrom: string;
    dateTo: string;
    sex: string;
    ageFrom: number;
    ageTo: number;
}

export interface GetProgYearRequest {
    year: number;
}

export interface NewPatientVaccineRequest {
    patientVaccineDTO: PatientVaccineDTO;
}

export interface UpdatePatientVaccinetRequest {
    code: number;
    patientVaccineDTO: PatientVaccineDTO;
}

/**
 * no description
 */
export class PatientVaccinesApi extends BaseAPI {

    /**
     */
    deletePatientVaccine({ code }: DeletePatientVaccineRequest): Observable<boolean>
    deletePatientVaccine({ code }: DeletePatientVaccineRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deletePatientVaccine({ code }: DeletePatientVaccineRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(code, 'code', 'deletePatientVaccine');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/patientvaccines/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getPatientVaccines({ oneWeek }: GetPatientVaccinesRequest): Observable<Array<PatientVaccineDTO>>
    getPatientVaccines({ oneWeek }: GetPatientVaccinesRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<PatientVaccineDTO>>>
    getPatientVaccines({ oneWeek }: GetPatientVaccinesRequest, opts?: OperationOpts): Observable<Array<PatientVaccineDTO> | RawAjaxResponse<Array<PatientVaccineDTO>>> {

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = {};

        if (oneWeek != null) { query['oneWeek'] = oneWeek; }

        return this.request<Array<PatientVaccineDTO>>({
            url: '/patientvaccines/week',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     */
    getPatientVaccinesByDatesRanges({ vaccineTypeCode, vaccineCode, dateFrom, dateTo, sex, ageFrom, ageTo }: GetPatientVaccinesByDatesRangesRequest): Observable<Array<PatientVaccineDTO>>
    getPatientVaccinesByDatesRanges({ vaccineTypeCode, vaccineCode, dateFrom, dateTo, sex, ageFrom, ageTo }: GetPatientVaccinesByDatesRangesRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<PatientVaccineDTO>>>
    getPatientVaccinesByDatesRanges({ vaccineTypeCode, vaccineCode, dateFrom, dateTo, sex, ageFrom, ageTo }: GetPatientVaccinesByDatesRangesRequest, opts?: OperationOpts): Observable<Array<PatientVaccineDTO> | RawAjaxResponse<Array<PatientVaccineDTO>>> {
        throwIfNullOrUndefined(vaccineTypeCode, 'vaccineTypeCode', 'getPatientVaccinesByDatesRanges');
        throwIfNullOrUndefined(vaccineCode, 'vaccineCode', 'getPatientVaccinesByDatesRanges');
        throwIfNullOrUndefined(dateFrom, 'dateFrom', 'getPatientVaccinesByDatesRanges');
        throwIfNullOrUndefined(dateTo, 'dateTo', 'getPatientVaccinesByDatesRanges');
        throwIfNullOrUndefined(sex, 'sex', 'getPatientVaccinesByDatesRanges');
        throwIfNullOrUndefined(ageFrom, 'ageFrom', 'getPatientVaccinesByDatesRanges');
        throwIfNullOrUndefined(ageTo, 'ageTo', 'getPatientVaccinesByDatesRanges');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'vaccineTypeCode': vaccineTypeCode,
            'vaccineCode': vaccineCode,
            'dateFrom': (dateFrom as any).toISOString().split('T')[0],
            'dateTo': (dateTo as any).toISOString().split('T')[0],
            'sex': sex,
            'ageFrom': ageFrom,
            'ageTo': ageTo,
        };

        return this.request<Array<PatientVaccineDTO>>({
            url: '/patientvaccines/filter',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     */
    getProgYear({ year }: GetProgYearRequest): Observable<number>
    getProgYear({ year }: GetProgYearRequest, opts?: OperationOpts): Observable<RawAjaxResponse<number>>
    getProgYear({ year }: GetProgYearRequest, opts?: OperationOpts): Observable<number | RawAjaxResponse<number>> {
        throwIfNullOrUndefined(year, 'year', 'getProgYear');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<number>({
            url: '/patientvaccines/progyear/{year}'.replace('{year}', encodeURI(year)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    newPatientVaccine({ patientVaccineDTO }: NewPatientVaccineRequest): Observable<PatientVaccineDTO>
    newPatientVaccine({ patientVaccineDTO }: NewPatientVaccineRequest, opts?: OperationOpts): Observable<RawAjaxResponse<PatientVaccineDTO>>
    newPatientVaccine({ patientVaccineDTO }: NewPatientVaccineRequest, opts?: OperationOpts): Observable<PatientVaccineDTO | RawAjaxResponse<PatientVaccineDTO>> {
        throwIfNullOrUndefined(patientVaccineDTO, 'patientVaccineDTO', 'newPatientVaccine');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<PatientVaccineDTO>({
            url: '/patientvaccines',
            method: 'POST',
            headers,
            body: patientVaccineDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    updatePatientVaccinet({ code, patientVaccineDTO }: UpdatePatientVaccinetRequest): Observable<PatientVaccineDTO>
    updatePatientVaccinet({ code, patientVaccineDTO }: UpdatePatientVaccinetRequest, opts?: OperationOpts): Observable<RawAjaxResponse<PatientVaccineDTO>>
    updatePatientVaccinet({ code, patientVaccineDTO }: UpdatePatientVaccinetRequest, opts?: OperationOpts): Observable<PatientVaccineDTO | RawAjaxResponse<PatientVaccineDTO>> {
        throwIfNullOrUndefined(code, 'code', 'updatePatientVaccinet');
        throwIfNullOrUndefined(patientVaccineDTO, 'patientVaccineDTO', 'updatePatientVaccinet');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<PatientVaccineDTO>({
            url: '/patientvaccines/{code}'.replace('{code}', encodeURI(code)),
            method: 'PUT',
            headers,
            body: patientVaccineDTO,
        }, opts?.responseOpts);
    };

}