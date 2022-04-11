import {React, useMemo, useState} from "react";
import Pagination from '../pagination/Pagination'
import Modal from '../modals/Modal'

import './Content.css'
let PageSize = 2;
const Content = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    let [showModal, setShowModal] = useState({showModal: false});
    console.log(showModal);

    const toggleModal = () => {
        // showModal = !showModal[0]
        setShowModal(!showModal);
        // console.log(this.setState())
        // this.setState({showModal: })
    }

    // this.toggleModal = this.toggleModal.bind(this);

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
                                console.log(tokens.position);
                                return(
                                    <div>
                                        <h1 onClick={toggleModal}>{`${tokens.value}`}</h1>

                                        <Modal
                                            show={showModal}
                                            closeCallback={toggleModal}
                                            customClass="custom_modal_class"
                                        >
                                           <h1>{`${tokens.position}`}</h1>
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
