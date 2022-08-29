import React, {useState} from 'react';
import { getPageCount, getPagesArray } from "../../utils/pages";
import { Dropdown, Pagination } from 'react-bootstrap';
import './pagination.css'

const PaginationComp = ({ items, totalItems, reqPage }) => {
    const [limit, setLimit] = useState(20)
    const [page, setPage] = useState(1)
    const totalPages = getPageCount(totalItems, limit)
    let pagesArray = getPagesArray(totalPages);
    function changePage (e) {
        setPage(e.target.name)
        reqPage(e.target.name)
    }
    return (
        <div className='pagination'>
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                {pagesArray.map(p =>
                    <Pagination.Item name= {p} active={page === p} key={p} onClick={changePage}> {p} </Pagination.Item>
                )}
                {/* <Pagination.Ellipsis /> */}
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
            <Dropdown onSelect={(eventKey) => setLimit(eventKey)}>
                <Dropdown.Toggle >
                    Отображать
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey={20} active={limit==20}>20</Dropdown.Item>
                    <Dropdown.Item eventKey={50} active={limit==50}>50</Dropdown.Item>
                    <Dropdown.Item eventKey={100} active={limit==100}>100</Dropdown.Item>
                    <Dropdown.Item eventKey={200} active={limit==200}>200</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default PaginationComp;
