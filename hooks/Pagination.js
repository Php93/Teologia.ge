import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className='flex items-center justify-center gap-4 mt-5'>
      <button disabled={currentPage === 1} onClick={onPrevious} >
        <ChevronLeftIcon className='w-4 h-4'/>
      </button>

      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <button className={`p-2 rounded-2xl ${pageNumber === currentPage && 'bg-[#eee]'} hover:bg-gray-100 transition-all duration-200 ease-in-out`} onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </button>
        );
      })}

      <button disabled={currentPage === lastPage} onClick={onNext} >
        <ChevronRightIcon className='w-4 h-4'/>
      </button>
    </ul>
  );
};

export default Pagination;
