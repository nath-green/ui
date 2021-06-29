export const selectClasses = ({
  styles,
  className,
  overrideClassName,
  loading,
  disabled,
}) => {
  let buttonClasses = styles?.button?.default;
  let spinnerClasses = styles?.spinner?.default;

  if (loading) {
    if (styles?.button?.loading) {
      buttonClasses = styles?.button?.loading;
    }
    if (styles?.spinner?.loading) {
      spinnerClasses = styles?.spinner?.loading;
    }
  }

  if (disabled) {
    if (styles?.button?.disabled) {
      buttonClasses = styles?.button?.disabled;
    }
    if (styles?.spinner?.disabled) {
      spinnerClasses = styles?.spinner?.disabled;
    }
  }

  // ADDITIONAL CLASS NAMES
  if (typeof className === "object") {
    if (className?.button) {
      buttonClasses += " ";

      if (!loading && !disabled && className?.button?.default) {
        buttonClasses += className?.button?.default;
      }

      if (loading && className?.button?.loading) {
        buttonClasses += className?.button?.loading;
      }

      if (disabled && className?.button?.disabled) {
        buttonClasses += className?.button?.disabled;
      }
    }

    if (className?.spinner) {
      spinnerClasses += " ";

      if (!loading && !disabled && className?.spinner?.default) {
        spinnerClasses += spinner?.default;
      }

      if (loading && className?.spinner?.loading) {
        spinnerClasses += className?.spinner?.loading;
      }

      if (disabled && className?.spinner?.disabled) {
        spinnerClasses += spinner?.disabled;
      }
    }
  } else {
    buttonClasses += ` ${className}`;
  }

  // OVERRIDES
  if (typeof overrideClassName === "object") {
    if (overrideClassName?.button) {
      buttonClasses = overrideClassName?.button?.default;

      if (loading && overrideClassName?.button?.loading) {
        buttonClasses = overrideClassName?.button?.loading;
      }

      if (disabled && overrideClassName?.button?.disabled) {
        buttonClasses = overrideClassName?.button?.disabled;
      }
    }

    if (overrideClassName?.spinner) {
      spinnerClasses = overrideClassName?.spinner?.default;

      if (loading && overrideClassName?.label?.loading) {
        spinnerClasses = overrideClassName?.spinner?.loading;
      }

      if (disabled && overrideClassName?.spinner?.disabled) {
        spinnerClasses = overrideClassName?.spinner?.disabled;
      }
    }
  } else {
    buttonClasses = overrideClassName;
  }

  return {
    buttonClasses,
    spinnerClasses,
  };
};
