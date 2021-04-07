import React from 'react';
import styles from './Line.module.scss';
import { Patient } from '../../types';

type LineProps = {
  patient: Patient;
};

const Line = ({ patient }: LineProps) => {
  const { age, birthDatetime, ethnicity, gender, isDeath, personID, race } = patient;
  return (
    <div className={styles.line}>
      <div className={styles.small}>{personID}</div>
      <div className={styles.small}>{gender}</div>
      <div className={styles.medium}>{birthDatetime}</div>
      <div className={styles.small}>{age}살</div>
      <div className={styles.small}>{race}</div>
      <div className={styles.small}>{ethnicity}</div>
      <div className={styles.small}>{isDeath ? 'O' : 'X'}</div>
    </div>
  );
};

export { Line };
