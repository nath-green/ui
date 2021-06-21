export const selectClasses = ({
  styles,
  className,
  additionalClassName,
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
  if (typeof additionalClassName === "object") {
    if (additionalClassName?.button) {
      buttonClasses += " ";

      if (!loading && !disabled && additionalClassName?.button?.default) {
        buttonClasses += additionalClassName?.button?.default;
      }

      if (loading && additionalClassName?.button?.loading) {
        buttonClasses += additionalClassName?.button?.loading;
      }

      if (disabled && additionalClassName?.button?.disabled) {
        buttonClasses += additionalClassName?.button?.disabled;
      }
    }

    if (additionalClassName?.spinner) {
      spinnerClasses += " ";

      if (!loading && !disabled && additionalClassName?.spinner?.default) {
        spinnerClasses += spinner?.default;
      }

      if (loading && additionalClassName?.spinner?.loading) {
        spinnerClasses += additionalClassName?.spinner?.loading;
      }

      if (disabled && additionalClassName?.spinner?.disabled) {
        spinnerClasses += spinner?.disabled;
      }
    }
  } else {
    buttonClasses += ` ${additionalClassName}`;
  }

  // OVERRIDES
  if (typeof className === "object") {
    if (className?.button) {
      buttonClasses = className?.button?.default;

      if (loading && className?.button?.loading) {
        buttonClasses = className?.button?.loading;
      }

      if (disabled && className?.button?.disabled) {
        buttonClasses = className?.button?.disabled;
      }
    }

    if (className?.spinner) {
      spinnerClasses = className?.spinner?.default;

      if (loading && className?.label?.loading) {
        spinnerClasses = className?.spinner?.loading;
      }

      if (disabled && className?.spinner?.disabled) {
        spinnerClasses = className?.spinner?.disabled;
      }
    }
  } else {
    buttonClasses = className;
  }

  return {
    buttonClasses,
    spinnerClasses,
  };
};
