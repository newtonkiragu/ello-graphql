import {useMemo, useState} from "react";
import Pagination from '../pagination/Pagination'

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
        <div className="container">
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={props.data.pages.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />

            <div className="wrapper">
                {currentTokensData.map(item => {
                    return(
                        <div className="post">
                            {item.tokens.map((tokens) => {
                                console.log(tokens.value);
                                return(
                                    <div>
                                        <h1>{`${tokens.value}`}</h1>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>

        </div>

    )

};
export default Content;
