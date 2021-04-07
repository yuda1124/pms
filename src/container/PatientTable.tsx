import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header, Line, SearchBar, PaginationBar } from '../components';
import { getPatientList, getEthnicityList, getGenderList, getRaceList } from '../thunks';
import { StoreState } from '../types';

const PatientTable = () => {
  const { patientList, raceList, ethnicityList, genderList, filter, order, pageInfo, totalLength } = useSelector(
    (state: StoreState) => state,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    Promise.all([dispatch(getEthnicityList()), dispatch(getGenderList()), dispatch(getRaceList())]);
  }, [dispatch]);
  useEffect(() => {
    dispatch(getPatientList({ filter, order, pageInfo }));
  }, [dispatch, filter, pageInfo, order]);

  const renderLine = () => patientList.map(patient => <Line patient={patient} key={patient.personID} />);
  return (
    <div>
      <SearchBar {...{ raceList, ethnicityList, genderList }} />
      <Header order={order} />
      {renderLine()}
      <PaginationBar {...{ pageInfo, totalLength }} />
    </div>
  );
};

export default PatientTable;
