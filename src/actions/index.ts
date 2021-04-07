import { createAction } from 'typesafe-actions';
import { Patient, Order, Filter, PageInfo } from '../types';

export const responsePatientList = createAction('RESPONSE_PATIENT_LIST')<{ list: Patient[]; totalLength: number }>();
export const responseRaceList = createAction('RESPONSE_RACE_LIST')<string[]>();
export const responseEthnicityList = createAction('RESPONSE_ETHNICITY_LIST')<string[]>();
export const responseGenderList = createAction('RESPONSE_GENDER_LIST')<string[]>();
export const setOrder = createAction('SET_ORDER')<Order>();
export const setFilter = createAction('SET_FILTER')<Filter>();
export const setPage = createAction('SET_PAGE')<PageInfo>();
