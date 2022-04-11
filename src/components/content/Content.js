import {useMemo, useState} from "react";
import Pagination from './Pagination'

import './Content.css'
let PageSize = 2;
const Content = (props) => {
    const pagesSize = props.data.pages.length
    const [currentPage, setCurrentPage] = useState(1);

    const currentTokensData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;

        return props.data.pages.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return(
        <div>
            {currentTokensData.map(item => {

                {item.tokens.map((tokens, i) => {
                    console.log(tokens.value);
                    return(
                        <div key={i}>
                            <h1>item</h1>
                            {/*<h1>{`${tokens.value}`}</h1>*/}
                        </div>
                    )
                })};

            })}
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={props.data.pages.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    )

};
export default Content;
