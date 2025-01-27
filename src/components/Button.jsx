import React from 'react';

const Button = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={`custom-button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
