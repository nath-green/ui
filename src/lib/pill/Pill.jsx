import React, { useContext } from "react";

import { GlobalStyles } from "../context";

export const Pill = ({
  theme = "default",
  children,
  context,
  className,
  additionalClassName,
  ariaLabel
}) => {
  const { Pill: styles } = useContext(context || GlobalStyles);

  let classes = styles?.[theme];

  if (additionalClassName) {
    classes = `${classes} ${additionalClassName}`;
  }

  return (
    <span className={className || classes} aria-label={ariaLabel}>
      {children}
    </span>
  );
};
