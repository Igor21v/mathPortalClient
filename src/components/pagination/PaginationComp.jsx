import React, {useState} from 'react';
import { getPageCount, getPagesArray } from "../../utils/pages";
import { Dropdown, Pagination } from 'react-bootstrap';
import './pagination.css'

const PaginationComp = ({ totalItems, reqPage }) => {
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const totalPages = getPageCount(totalItems, limit)
    let pagesArray = getPagesArray(totalPages);
    function changePage (p) {
        setPage(p)
        reqPage(p)
    }
    return (
        <div className='pagination'>
            <Pagination className='pagination__pages'>
                <Pagination.First />
                <Pagination.Prev />
                {pagesArray.map(p =>
                    <Pagination.Item active={page == p} key={p} onClick={()=>changePage(p)}> {p} </Pagination.Item>
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
                    <Dropdown.Item eventKey={10} active={limit==10}>10 сообщений</Dropdown.Item>
                    <Dropdown.Item eventKey={20} active={limit==20}>20 сообщений</Dropdown.Item>
                    <Dropdown.Item eventKey={50} active={limit==50}>50 сообщений</Dropdown.Item>
                    <Dropdown.Item eventKey={100} active={limit==100}>100 сообщений</Dropdown.Item>
                    <Dropdown.Item eventKey={200} active={limit==200}>200 сообщений</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default PaginationComp;
