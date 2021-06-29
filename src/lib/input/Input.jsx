import React, { useContext, forwardRef } from "react";

import { GlobalStyles } from "../context";
import { selectClasses, selectLabel } from "./utils";

export const Input = forwardRef(
  (
    {
      children,
      id,
      ariaLabel,
      label,
      required,
      helperText,
      type = "text",
      errorText,
      placeholder,
      onChange = () => {},
      context,
      className = {},
      overrideClassName = {},
      theme = "default",
    },
    ref
  ) => {
    const { Input: styles } = useContext(context || GlobalStyles);
    const {
      containerClasses,
      inputClasses,
      labelClasses,
      helperTextClasses,
      errorTextClasses,
    } = selectClasses({
      styles: styles?.[theme],
      className,
      overrideClassName,
      hasError: Boolean(errorText),
    });

    const { selectedLabel, selectedAriaLabel } = selectLabel({
      label,
      ariaLabel,
      helperText,
      errorText,
    });

    return (
      <div key={id} className={containerClasses}>
        <label
          htmlFor={id}
          className={labelClasses}
          aria-label={selectedAriaLabel}
        >
          {selectedLabel}
          {required && (
            <span aria-hidden style={tailwind("text-red-500 ml-1")}>
              *
            </span>
          )}
        </label>

        {helperText && (
          <p aria-hidden className={helperTextClasses}>
            {helperText}
          </p>
        )}

        <div style={tailwind("relative")}>
          {children}
          <input
            type={type}
            name={id}
            id={id}
            className={inputClasses}
            placeholder={placeholder}
            onChange={(e) => onChange(e)}
            required={required}
            aria-invalid={Boolean(errorText)}
            ref={ref}
          />
        </div>

        {errorText && (
          <p aria-hidden className={errorTextClasses}>
            {errorText}
          </p>
        )}
      </div>
    );
  }
);
