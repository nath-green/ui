export const selectClasses = ({
  styles,
  classNames,
  additionalClassNames,
  loading,
  disabled,
}) => {
  let containerClasses = styles?.container?.default;
  let buttonClasses = styles?.button?.default;
  let spinnerClasses = styles?.spinner?.default;

  if (loading) {
    if (styles?.container?.loading) {
      containerClasses = styles?.container?.loading;
    }
    if (styles?.button?.loading) {
      buttonClasses = styles?.button?.loading;
    }
    if (styles?.spinner?.loading) {
      spinnerClasses = styles?.spinner?.loading;
    }
  }

  if (disabled) {
    if (styles?.container?.disabled) {
      containerClasses = styles?.container?.disabled;
    }
    if (styles?.button?.disabled) {
      buttonClasses = styles?.button?.disabled;
    }
    if (styles?.spinner?.disabled) {
      spinnerClasses = styles?.spinner?.disabled;
    }
  }

  // ADDITIONAL CLASS NAMES
  if (additionalClassNames?.container) {
    containerClasses += " ";

    if (!loading && !disabled && additionalClassNames?.container?.default) {
      containerClasses += additionalClassNames?.container?.default;
    }

    if (loading && additionalClassNames?.container?.loading) {
      containerClasses += additionalClassNames?.container?.loading;
    }

    if (disabled && additionalClassNames?.container?.disabled) {
      containerClasses += additionalClassNames?.container?.disabled;
    }
  }

  if (additionalClassNames?.button) {
    buttonClasses += " ";

    if (!loading && !disabled && additionalClassNames?.button?.default) {
      buttonClasses += additionalClassNames?.button?.default;
    }

    if (loading && additionalClassNames?.button?.loading) {
      buttonClasses += additionalClassNames?.button?.loading;
    }

    if (disabled && additionalClassNames?.button?.disabled) {
      buttonClasses += additionalClassNames?.button?.disabled;
    }
  }

  if (additionalClassNames?.spinner) {
    spinnerClasses += " ";

    if (!loading && !disabled && additionalClassNames?.spinner?.default) {
      spinnerClasses += spinner?.default;
    }

    if (loading && additionalClassNames?.spinner?.loading) {
      spinnerClasses += additionalClassNames?.spinner?.loading;
    }

    if (disabled && additionalClassNames?.spinner?.disabled) {
      spinnerClasses += spinner?.disabled;
    }
  }

  // OVERRIDES
  if (classNames?.container) {
    containerClasses = classNames?.container?.default;

    if (loading && classNames?.container?.loading) {
      containerClasses = classNames?.container?.loading;
    }

    if (disabled && classNames?.container?.disabled) {
      containerClasses = classNames?.container?.disabled;
    }
  }

  if (classNames?.input) {
    inputClasses = classNames?.input?.default;

    if (loading && classNames?.input?.loading) {
      inputClasses = classNames?.input?.loading;
    }

    if (disabled && classNames?.input?.disabled) {
      inputClasses = classNames?.input?.disabled;
    }
  }

  if (classNames?.label) {
    labelClasses = classNames?.label?.default;

    if (loading && classNames?.label?.loading) {
      labelClasses = classNames?.label?.loading;
    }

    if (disabled && classNames?.label?.disabled) {
      labelClasses = classNames?.label?.disabled;
    }
  }

  return {
    containerClasses,
    buttonClasses,
    spinnerClasses,
  };
};
