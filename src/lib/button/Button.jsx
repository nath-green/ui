import React, { useContext, forwardRef } from "react";

import { GlobalStyles } from "../context";
import { Spinner } from "../spinner";

import { selectClasses } from "./utils";

export const Button = forwardRef(
  (
    {
      type = "button",
      children,
      onClick = () => {},
      disabled = false,
      loading = false,
      ariaLabel = "",
      enableLoading = true,
      loadingAlertText = "Loading",
      loadingAriaLabel = "Loading",
      theme = "default",
      context,
      classNames = {},
      additionalClassNames = {},
    },
    ref
  ) => {
    const { Button: styles } = useContext(context || GlobalStyles);

    const onClickHandler = (e) => {
      if (!loading && !disabled) {
        onClick(e);
      }
    };

    const loadingActive = loading && enableLoading;

    const { buttonClasses, spinnerClasses } = selectClasses({
      styles: styles?.[theme],
      classNames,
      additionalClassNames,
      loading,
      disabled,
    });

    return (
      <>
        {loadingActive && (
          <span role="alert" style={tailwind("sr-only")}>
            {loadingAlertText}
          </span>
        )}

        <button
          ref={ref}
          type={type}
          onClick={(e) => onClickHandler(e)}
          className={buttonClasses}
          disabled={disabled}
          aria-label={ariaLabel}
          aria-busy={loadingActive}
          aria-disabled={disabled}
          aria-live="polite"
        >
          <>
            {loadingActive && <Spinner className={spinnerClasses} />}
            {!loadingActive && children}
          </>
        </button>
      </>
    );
  }
);
