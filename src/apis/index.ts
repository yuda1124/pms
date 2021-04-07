import endpoint from './endpoint';
import { PatientListData, GetPatientListParams, EthnicityListData, GenderListData, RaceListData } from '../types';

const serializeParameter = (obj: { [key: string]: any }) => {
  const str: string[] = [];
  Object.keys(obj).forEach(key => {
    str.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
  });
  return str.join('&');
};

export const getPatientList = async ({ filter, pageInfo, order }: GetPatientListParams) => {
  const response = await endpoint.get(`/patient/list?${serializeParameter({ ...filter, ...pageInfo, ...order })}`);
  const { data }: { data: PatientListData } = response;
  const {
    patient: { list, totalLength },
  } = data;
  return { list, totalLength };
};

export const getEthnicityList = async () => {
  const response = await endpoint.get(`/ethnicity/list`);
  const { data }: { data: EthnicityListData } = response;
  const { ethnicityList } = data;
  return ethnicityList;
};

export const getGenderList = async () => {
  const response = await endpoint.get(`/gender/list`);
  const { data }: { data: GenderListData } = response;
  const { genderList } = data;
  return genderList;
};

export const getRaceList = async () => {
  const response = await endpoint.get(`/race/list`);
  const { data }: { data: RaceListData } = response;
  const { raceList } = data;
  return raceList;
};
