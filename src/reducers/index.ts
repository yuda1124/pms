import { ActionType, getType } from 'typesafe-actions';
import { StoreState } from '../types';
import * as Actions from '../actions';

const INIT_LENGTH = 20;

const initialState = {
  patientList: [],
  genderList: [],
  raceList: [],
  totalLength: 0,
  ethnicityList: [],
  order: {},
  pageInfo: { page: 1, length: INIT_LENGTH },
  filter: {},
};

export default (state: StoreState = initialState, action: ActionType<typeof Actions>) => {
  switch (action.type) {
    case getType(Actions.responsePatientList):
      return { ...state, patientList: action.payload.list, totalLength: action.payload.totalLength };
    case getType(Actions.responseGenderList):
      return { ...state, genderList: action.payload };
    case getType(Actions.responseEthnicityList):
      return { ...state, ethnicityList: action.payload };
    case getType(Actions.responseRaceList):
      return { ...state, raceList: action.payload };
    case getType(Actions.setOrder):
      return { ...state, order: action.payload };
    case getType(Actions.setFilter):
      return { ...state, filter: action.payload, pageInfo: { ...state.pageInfo, page: 1 } };
    case getType(Actions.setPage):
      return { ...state, pageInfo: action.payload };
    default:
      return { ...state };
  }
};
