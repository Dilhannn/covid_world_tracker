import React from 'react';

const Alert = ({ message, onClose }) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      {message}
      <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
    </div>
  );
};

export default Alert;
