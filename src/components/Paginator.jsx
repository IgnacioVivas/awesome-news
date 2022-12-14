import React from 'react';
import Classes from '../styles/paginator.module.scss';

function Paginator({ page, setPage, totalPages }) {

    return (

        <div id='paginator' className={Classes.paginatorContainer}>
            <svg onClick={() => page < 2 ? null : setPage(page - 1)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" /></svg>
            <span id='pageNumber'>{page}</span>
            <svg onClick={() => page >= totalPages ? null : setPage(page + 1)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" /></svg>
        </div>
    );
}

export default Paginator;