import React from 'react';
import { getPagesArray } from "../../utils/pages";
import { Pagination } from 'react-bootstrap';

const PaginationComp = ({ totalPages, page, changePage }) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className="page__wrapper">
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                {pagesArray.map(p =>
                    <Pagination.Item active={page === p} key={p} onClick={changePage}> {p} </Pagination.Item>
                )}
                {/* <Pagination.Ellipsis /> */}
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    );
};

export default PaginationComp;
