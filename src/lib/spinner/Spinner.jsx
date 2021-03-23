import React, { useContext } from "react";

import { GlobalStyles } from "../context";

// TODO need the spinning animation inline
export const Spinner = ({
  theme = "default",
  context,
  className,
  additionalClassName,
}) => {
  const { Spinner: styles } = useContext(context || GlobalStyles);

  let classes = styles?.[theme];

  if (additionalClassName) {
    classes = `${classes} ${additionalClassName}`;
  }

  return (
    <svg
      style={tailwind("animate-spin")}
      className={className || classes}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <circle
        style={tailwind("opacity-25")}
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        style={tailwind("opacity-75")}
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};
