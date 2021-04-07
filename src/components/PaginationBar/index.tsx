import React from 'react';
import { useDispatch } from 'react-redux';
import { PageInfo } from '../../types';
import { setPage } from '../../actions';

type PaginationBarProps = {
  pageInfo: PageInfo;
  totalLength: number;
};

const LINE_BY_PAGE = [5, 10, 20, 30, 50];

const PaginationBar = React.memo(({ pageInfo, totalLength }: PaginationBarProps) => {
  const { page, length } = pageInfo;
  const lastPage = Math.ceil(totalLength / length);
  const dispatch = useDispatch();
  const renderSelect = () => (
    <select value={length} onChange={e => changeListLength(Number(e.target.value))}>
      {LINE_BY_PAGE.map(line => (
        <option key={`length_${line}`} value={line}>
          {line}
        </option>
      ))}
    </select>
  );

  const changeListLength = (length: number) => {
    dispatch(setPage({ page: 1, length }));
  };

  const changePage = (nextPage: number) => {
    if (nextPage < 0 || nextPage > lastPage) return;
    dispatch(setPage({ ...pageInfo, page: nextPage }));
  };
  return (
    <div className="wrap_pagenationBar">
      <button type="button" onClick={() => changePage(1)}>
        <img src="/images/first_page.svg" alt="move to first page" />
      </button>
      <button type="button" onClick={() => changePage(page - 1)}>
        <img src="/images/before_page.svg" alt="move to before page" />
      </button>
      <span>
        {page} / {lastPage}
      </span>
      <button type="button" onClick={() => changePage(page + 1)}>
        <img src="/images/next_page.svg" alt="move to next page" />
      </button>
      <button type="button" onClick={() => changePage(lastPage)}>
        <img src="/images/last_page.svg" alt="move to last page" />
      </button>
      <span>row 개수</span>
      {renderSelect()}
    </div>
  );
});

export { PaginationBar };
