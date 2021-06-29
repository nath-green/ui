import React, { useContext } from "react";

import { GlobalStyles } from "../context";

export const Pill = ({
  theme = "default",
  children,
  context,
  className,
  overrideClassName,
  ariaLabel
}) => {
  const { Pill: styles } = useContext(context || GlobalStyles);

  let classes = styles?.[theme];

  if (className) {
    classes = `${classes} ${className}`;
  }

  return (
    <span className={overrideClassName || classes} aria-label={ariaLabel}>
      {children}
    </span>
  );
};
