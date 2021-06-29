export const selectClasses = ({
  styles,
  className,
  overrideClassName,
  hasError,
}) => {
  let containerClasses = styles?.container?.default;
  let inputClasses = styles?.input?.default;
  let labelClasses = styles?.label?.default;
  let helperTextClasses = styles?.helperText?.default;
  let errorTextClasses = styles?.errorText?.default;

  if (hasError) {
    if (styles?.container?.error) {
      containerClasses = styles?.container?.error;
    }
    if (styles?.input?.error) {
      inputClasses = styles?.input?.error;
    }
    if (styles?.label?.error) {
      labelClasses = styles?.label?.error;
    }
    if (styles?.helperText?.error) {
      helperTextClasses = styles?.helperText?.error;
    }
  }

  // ADDITIONAL CLASS NAMES
  if (typeof className === "object") {
    if (className?.container) {
      containerClasses += " ";

      if (!hasError && className?.container?.default) {
        containerClasses += className?.container?.default;
      }

      if (hasError && className?.container?.error) {
        containerClasses += className?.container?.error;
      }
    }

    if (className?.input) {
      inputClasses += " ";

      if (!hasError && className?.input?.default) {
        inputClasses += className?.input?.default;
      }

      if (hasError && className?.input?.error) {
        inputClasses += className?.input?.error;
      }
    }

    if (className?.label) {
      labelClasses += " ";

      if (!hasError && className?.label?.default) {
        labelClasses += className?.label?.default;
      }

      if (hasError && className?.label?.error) {
        labelClasses += className?.label?.error;
      }
    }

    if (className?.helperText) {
      helperTextClasses += " ";

      if (!hasError && className?.helperText?.default) {
        helperTextClasses += className?.helperText?.default;
      }

      if (hasError && className?.helperText?.error) {
        helperTextClasses += className?.helperText?.error;
      }
    }
  } else {
    inputClasses += ` ${className}`;
  }

  if (typeof overrideClassName === "object") {
    // doesn't need error state as only shown when errorText
    if (className?.errorText) {
      errorTextClasses += " ";
      errorTextClasses += errorTextClasses?.default;
    }

    // OVERRIDES
    if (overrideClassName?.container) {
      containerClasses = overrideClassName?.container?.default;

      if (hasError && overrideClassName?.container?.error) {
        containerClasses = overrideClassName?.container?.error;
      }
    }

    if (overrideClassName?.input) {
      inputClasses = overrideClassName?.input?.default;

      if (hasError && overrideClassName?.input?.error) {
        inputClasses = overrideClassName?.input?.error;
      }
    }

    if (overrideClassName?.label) {
      labelClasses = overrideClassName?.label?.default;

      if (hasError && overrideClassName?.label?.error) {
        labelClasses = overrideClassName?.label?.error;
      }
    }

    if (overrideClassName?.helperText) {
      helperTextClasses = overrideClassName?.helperText?.default;

      if (hasError && overrideClassName?.helperText?.error) {
        helperTextClasses = overrideClassName?.helperText?.error;
      }
    }

    // doesn't need error state as only shown when errorText
    if (overrideClassName?.errorText) {
      errorTextClasses = overrideClassName?.errorText?.default;
    }
  } else {
    inputClasses = overrideClassName;
  }

  return {
    containerClasses,
    inputClasses,
    labelClasses,
    helperTextClasses,
    errorTextClasses,
  };
};
