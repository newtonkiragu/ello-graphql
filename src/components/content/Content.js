import {React, useMemo, useState} from "react";
import Pagination from '../pagination/Pagination'
import Modal from '../modals/Modal'

import './Content.css'
let PageSize = 2;
const Content = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    let [show, setShow] = useState( false);
    // const [value, setValue] = React.useState('');

    const toggleModal = () => {
        setShow(!show);

    }


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
                            {item.tokens.map((tokens, i) => {
                                console.log(tokens.position);
                                return(
                                    <div key={i}
                                    >
                                        <h1 onClick={() => setShow(true)}>{`${tokens.value}`}</h1>

                                        <Modal
                                            show={show}
                                            closeCallback={toggleModal}
                                            customClass="custom_modal_class"
                                        >
                                           <h2><strong>{`${tokens.position}`}</strong></h2>
                                        </Modal>
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
