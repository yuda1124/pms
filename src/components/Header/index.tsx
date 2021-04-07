/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { Order, ORDER_COLUMN } from '../../types';
import { setOrder } from '../../actions';
import styles from './Header.module.scss';
import { useDispatch } from 'react-redux';

const ARROW_UP = '▲';
const ARROW_DOWN = '▼';

type HeaderProps = {
  order: Order;
};

const Header = ({ order }: HeaderProps) => {
  const dispatch = useDispatch();
  const { order_column, order_desc } = order;
  const renderArrow = (key: ORDER_COLUMN) => (
    <>
      <button
        type="button"
        className={`${styles['btn-arrow']} ${order_column === key && !order_desc ? styles.selected : ''}`}
        onClick={() => {
          dispatch(setOrder({ order_column: key, order_desc: false }));
        }}>
        {ARROW_UP}
      </button>
      <button
        type="button"
        className={`${styles['btn-arrow']} ${order_column === key && order_desc ? styles.selected : ''}`}
        onClick={() => {
          dispatch(setOrder({ order_column: key, order_desc: true }));
        }}>
        {ARROW_DOWN}
      </button>
    </>
  );
  return (
    <div className={styles.line}>
      <div className={styles.small}>
        <span>id</span>
        {renderArrow(ORDER_COLUMN.PERSON_ID)}
      </div>
      <div className={styles.small}>
        <span>성별</span>
        {renderArrow(ORDER_COLUMN.GENDER)}
      </div>
      <div className={styles.medium}>
        <span>생년월일</span>
        {renderArrow(ORDER_COLUMN.BIRTH)}
      </div>
      <div className={styles.small}>
        <span>나이</span>
      </div>
      <div className={styles.small}>
        <span>인종</span>
        {renderArrow(ORDER_COLUMN.RACE)}
      </div>
      <div className={styles.small}>
        <span>민족</span>
        {renderArrow(ORDER_COLUMN.ETHNICITY)}
      </div>
      <div className={styles.small}>
        <span>사망 여부</span>
        {renderArrow(ORDER_COLUMN.DEATH)}
      </div>
    </div>
  );
};

export { Header };
