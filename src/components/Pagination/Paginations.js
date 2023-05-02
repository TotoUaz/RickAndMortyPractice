import { useState } from 'react';
import './Pagination.css';

export default function Pagination({ page, nextPage, prevPage, pageNum }) {

    let nextPageHTML = <li><a onClick={nextPage}>&gt;</a></li>;
    let prevPageHTML = <li><a onClick={prevPage} >&lt;</a></li>;

    if (page === pageNum) {
        nextPageHTML = '';
    }

    if (page === 1) {
        prevPageHTML = '';
    }


    return (
        <div>
            <ul className="pagination">
                {prevPageHTML}
                <li><a>{page}</a></li>
                {nextPageHTML}
            </ul>
        </div>
    );
}
