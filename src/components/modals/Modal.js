import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';

const Modal = ({ modalData, customClass, show, closeCallback }) => {
  if (!show) {
    return null;
  }
  return (
    <div className={`modal ${customClass}`}>
      <div className="overlay" onClick={closeCallback}></div>
      <div className="modal_content">
        <h2>
          <strong>{`${modalData.position}`}</strong>
        </h2>
        <button title="Close" className="close_modal" onClick={closeCallback}>
          close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalData: PropTypes.element,
  customClass: PropTypes.string,
  show: PropTypes.bool,
  closeCallback: PropTypes.func
};

Modal.defaultProps = {
  modalData: <div>Empty Modal</div>,
  customClass: '',
  show: false,
  closeCallback: () => false
};

export default Modal;
