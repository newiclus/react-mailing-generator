import React, { HTMLAttributes } from "react";

type IconProps = HTMLAttributes<HTMLSpanElement> & {
  name: string;
  className?: string;
  ref?: any;
  rest?: any;
};

export const FontIcon: React.FC<IconProps> = ({
  name,
  className,
  ref,
  ...rest
}) => {
  return (
    <span
      className={`material-symbols-outlined align-middle leading-3 ${className}`}
      ref={ref}
      {...rest}
    >
      {name}
    </span>
  );
};
