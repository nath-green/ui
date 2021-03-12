import React from "react";
import { Spinner } from "../spinner";

export const Button = ({
  type = "button",
  children,
  onClick = () => {},
  className = "",
  disabled = false,
  loading = false,
  ariaLabel = "",
  enableLoading = true,
  spinnerClassName = "",
  loadingAlertText = "Loading",
  loadingAriaLabel = "Loading",
  containerClassName = "",
}) => {
  const onClickHandler = (e) => {
    if (!loading && !disabled) {
      onClick(e);
    }
  };

  const loadingActive = loading && enableLoading;

  return (
    <div className={containerClassName}>
      {loadingActive && (
        <span role="alert" className="sr-only">
          {loadingAlertText}
        </span>
      )}

      <button
        type={type}
        onClick={(e) => onClickHandler(e)}
        className={className}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-busy={loadingActive}
        aria-disabled={disabled}
        aria-live="polite"
      >
        <>
          {loadingActive && <Spinner className={spinnerClassName} />}
          {!loadingActive && children}
        </>
      </button>
    </div>
  );
};
