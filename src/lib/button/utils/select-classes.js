export const selectClasses = ({
  styles,
  classNames,
  additionalClassNames,
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
  if (additionalClassNames?.button) {
    buttonClasses += " ";

    if (typeof additionalClassNames?.button === 'object' && additionalClassNames?.button !== null) {
      if (!loading && !disabled && additionalClassNames?.button?.default) {
        buttonClasses += additionalClassNames?.button?.default;
      }
  
      if (loading && additionalClassNames?.button?.loading) {
        buttonClasses += additionalClassNames?.button?.loading;
      }
  
      if (disabled && additionalClassNames?.button?.disabled) {
        buttonClasses += additionalClassNames?.button?.disabled;
      }
    } else {
      buttonClasses += additionalClassNames?.button
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
  if (classNames?.button) {
    buttonClasses = classNames?.button?.default;

    if (loading && classNames?.button?.loading) {
      buttonClasses = classNames?.button?.loading;
    }

    if (disabled && classNames?.button?.disabled) {
      buttonClasses = classNames?.button?.disabled;
    }
  }

  if (classNames?.spinner) {
    spinnerClasses = classNames?.spinner?.default;

    if (loading && classNames?.label?.loading) {
      spinnerClasses = classNames?.spinner?.loading;
    }

    if (disabled && classNames?.spinner?.disabled) {
      spinnerClasses = classNames?.spinner?.disabled;
    }
  }

  return {
    buttonClasses,
    spinnerClasses,
  };
};
