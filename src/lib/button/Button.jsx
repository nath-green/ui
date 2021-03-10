import React from "react";

export const Button = ({ children, onClick, className, disabled, loading }) => {
  return (
    <button type="button" onClick={onClick} className={className} disabled={disabled || loading}>
      {children}
    </button>
  );
};
