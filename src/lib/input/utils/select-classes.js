export const selectClasses = ({
  styles,
  classNames,
  additionalClassNames,
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
  if (additionalClassNames?.container) {
    containerClasses += " ";

    if (!hasError && additionalClassNames?.container?.default) {
      containerClasses += additionalClassNames?.container?.default;
    }

    if (hasError && additionalClassNames?.container?.error) {
      containerClasses += additionalClassNames?.container?.error;
    }
  }

  if (additionalClassNames?.input) {
    inputClasses += " ";

    if (!hasError && additionalClassNames?.input?.default) {
      inputClasses += additionalClassNames?.input?.default;
    }

    if (hasError && additionalClassNames?.input?.error) {
      inputClasses += additionalClassNames?.input?.error;
    }
  }

  if (additionalClassNames?.label) {
    labelClasses += " ";

    if (!hasError && additionalClassNames?.label?.default) {
      labelClasses += additionalClassNames?.label?.default;
    }

    if (hasError && additionalClassNames?.label?.error) {
      labelClasses += additionalClassNames?.label?.error;
    }
  }

  if (additionalClassNames?.helperText) {
    helperTextClasses += " ";

    if (!hasError && additionalClassNames?.helperText?.default) {
      helperTextClasses += additionalClassNames?.helperText?.default;
    }

    if (hasError && additionalClassNames?.helperText?.error) {
      helperTextClasses += additionalClassNames?.helperText?.error;
    }
  }

  // doesn't need error state as only shown when errorText
  if (additionalClassNames?.errorText) {
    errorTextClasses += " ";
    errorTextClasses += errorTextClasses?.default;
  }

  // OVERRIDES
  if (classNames?.container) {
    containerClasses = classNames?.container?.default;

    if (hasError && classNames?.container?.error) {
      containerClasses = classNames?.container?.error;
    }
  }

  if (classNames?.input) {
    inputClasses = classNames?.input?.default;

    if (hasError && classNames?.input?.error) {
      inputClasses = classNames?.input?.error;
    }
  }

  if (classNames?.label) {
    labelClasses = classNames?.label?.default;

    if (hasError && classNames?.label?.error) {
      labelClasses = classNames?.label?.error;
    }
  }

  if (classNames?.helperText) {
    helperTextClasses = classNames?.helperText?.default;

    if (hasError && classNames?.helperText?.error) {
      helperTextClasses = classNames?.helperText?.error;
    }
  }

  // doesn't need error state as only shown when errorText
  if (classNames?.errorText) {
    errorTextClasses = classNames?.errorText?.default;
  }

  return {
    containerClasses,
    inputClasses,
    labelClasses,
    helperTextClasses,
    errorTextClasses,
  };
};
