import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';
// Types
import { PaginationProps } from './types';
// Styles
import './styles.scss';

const Pagination: FC<PaginationProps> = (props) => {
    const { totalPages, pageNumber, handlePageClick } = props;
    return (
        <div className="pagination-container">
            <ReactPaginate
                previousLabel="previous"
                nextLabel="next"
                pageCount={totalPages}
                forcePage={pageNumber}
                marginPagesDisplayed={1}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName="pagination"
                activeClassName="active"
            />
        </div>
    );
};

export default Pagination;
