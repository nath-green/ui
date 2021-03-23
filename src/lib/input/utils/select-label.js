export const selectLabel = ({ label, ariaLabel, errorText, helperText }) => {
  const selectedLabel = ariaLabel || label;

  let selectedAriaLabel = ariaLabel;

  if (selectedLabel && helperText) {
    selectedAriaLabel = `${selectedLabel} ${helperText}`;
  }

  if (selectedLabel && errorText) {
    selectedAriaLabel = `${selectedLabel} ${errorText}`;
  }

  return {
    selectedLabel,
    selectedAriaLabel,
  };
};
