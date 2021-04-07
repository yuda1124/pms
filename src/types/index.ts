export type StoreState = {
  patientList: Patient[];
  genderList: string[];
  raceList: string[];
  ethnicityList: string[];
  order: Order;
  pageInfo: PageInfo;
  filter: Filter;
  totalLength: number;
};

export type Patient = {
  age: number;
  birthDatetime: string;
  ethnicity: string;
  gender: string;
  isDeath: boolean;
  personID: number;
  race: string;
};

export type PatientListData = {
  patient: {
    list: Patient[];
    page: number;
    totalLength: number;
  };
};

export type EthnicityListData = {
  ethnicityList: string[];
};

export type GenderListData = {
  genderList: string[];
};

export type RaceListData = {
  raceList: string[];
};

export type PageInfo = {
  page: number;
  length: number;
};

export enum FILTER_COLUMN {
  GENDER = 'gender',
  RACE = 'race',
  AGE_MAX = 'age_max',
  AGE_MIN = 'age_min',
  ETHNICITY = 'ethnicity',
  DEATH = 'death',
}

export enum ORDER_COLUMN {
  PERSON_ID = 'person_id',
  GENDER = 'gender',
  BIRTH = 'birth',
  RACE = 'race',
  ETHNICITY = 'ethnicity',
  DEATH = 'death',
}

export type Order = {
  order_column?: ORDER_COLUMN;
  order_desc?: boolean;
};

export type Filter = {
  gender?: string;
  race?: string;
  ethnicity?: string;
  age_min?: number;
  age_max?: number;
  death?: boolean;
};

export type GetPatientListParams = {
  filter: Filter;
  pageInfo: PageInfo;
  order: Order;
};
