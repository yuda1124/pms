import React, { useState } from 'react';
import { FILTER_COLUMN } from '../../types';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../actions';

type FilterProps = {
  genderList: string[];
  raceList: string[];
  ethnicityList: string[];
};

const SearchBar = React.memo(({ genderList, raceList, ethnicityList }: FilterProps) => {
  const dispatch = useDispatch();
  const [filter, editFilter] = useState<{ [key: string]: any }>({});
  const validate = () => {
    if (
      filter[FILTER_COLUMN.AGE_MIN] &&
      filter[FILTER_COLUMN.AGE_MAX] &&
      filter[FILTER_COLUMN.AGE_MAX] < filter[FILTER_COLUMN.AGE_MIN]
    ) {
      alert('최대 나이보다 최소 나이가 많을 수 없습니다.');
      return false;
    }
    return true;
  };
  const onSearch = () => {
    if (!validate()) return;
    const newFilter = { ...filter };
    if (newFilter[FILTER_COLUMN.DEATH]) {
      newFilter[FILTER_COLUMN.DEATH] = newFilter[FILTER_COLUMN.DEATH] === 'o';
    }
    dispatch(setFilter({ ...newFilter }));
  };

  const onChange = (key: FILTER_COLUMN, val: any) => {
    if (val) {
      editFilter({ ...filter, [key]: val });
    } else {
      const newFilter = { ...filter };
      delete newFilter[key];
      editFilter(newFilter);
    }
  };
  const renderSelect = (list: any[], key: FILTER_COLUMN) => (
    <select value={filter[key]} onChange={e => onChange(key, e.target.value)}>
      <option key="empty" value="">
        -
      </option>
      {list.map(value => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
  return (
    <div>
      <div>
        <span>성별</span>
        {renderSelect(genderList, FILTER_COLUMN.GENDER)}
      </div>
      <div>
        <span>민족</span>
        {renderSelect(ethnicityList, FILTER_COLUMN.ETHNICITY)}
      </div>
      <div>
        <span>인종</span>
        {renderSelect(raceList, FILTER_COLUMN.RACE)}
      </div>
      <div>
        <span>나이</span>
        <input type="number" onChange={e => onChange(FILTER_COLUMN.AGE_MIN, Number(e.target.value))} min={0} />
        ~
        <input type="number" onChange={e => onChange(FILTER_COLUMN.AGE_MAX, Number(e.target.value))} min={0} />
      </div>
      <div>
        <span>사망</span>
        {renderSelect(['o', 'x'], FILTER_COLUMN.DEATH)}
      </div>
      <button type="button" onClick={onSearch}>
        검색
      </button>
    </div>
  );
});

export { SearchBar };
