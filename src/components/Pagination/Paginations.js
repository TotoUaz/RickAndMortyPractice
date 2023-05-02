import { useState } from 'react';
import './Pagination.css';

export default function Pagination({ page, nextPage, prevPage }) {

    const [pagina, setPagina] = useState({});



    return (
        <div>
            <ul className="pagination">
                <li><a onClick={prevPage} >&lt;</a></li>
                <li><a>{page}</a></li>
                <li><a onClick={nextPage}>&gt;</a></li>
            </ul>
        </div>
    );
}
