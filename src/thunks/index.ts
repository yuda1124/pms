import { Dispatch } from 'redux';
import * as Api from '../apis';
import * as Actions from '../actions';
import { GetPatientListParams } from '../types';

export const getPatientList = ({ filter, pageInfo, order }: GetPatientListParams) => async (dispatch: Dispatch) => {
  const { list, totalLength } = await Api.getPatientList({ filter, pageInfo, order });
  dispatch(Actions.responsePatientList({ list, totalLength }));
};

export const getRaceList = () => async (dispatch: Dispatch) => {
  const raceList = await Api.getRaceList();
  dispatch(Actions.responseRaceList(raceList));
};

export const getGenderList = () => async (dispatch: Dispatch) => {
  const genderList = await Api.getGenderList();
  dispatch(Actions.responseGenderList(genderList));
};

export const getEthnicityList = () => async (dispatch: Dispatch) => {
  const ethnicityList = await Api.getEthnicityList();
  dispatch(Actions.responseEthnicityList(ethnicityList));
};
