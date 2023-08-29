import React, {
  ForwardedRef,
  OptionHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  cloneElement,
  forwardRef,
  memo,
} from "react";
import { colors, fontSize, borderRadius } from "../../theme/_index";

interface SelectBoxProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  placeholder?: string;
}

export const SelectBox = forwardRef(function SelectBox(
  { children, placeholder, ...props }: SelectBoxProps,
  ref: ForwardedRef<HTMLSelectElement>
) {
  const { value } = props;

  return (
    <>
      {cloneElement(
        <select
          ref={ref}
          css={{
            width: "100%",
            display: "flex",
            padding: "14px 10px 14px 12px",
            margin: "0px",
            border: `1px solid ${colors.grey200}`,
            backgroundColor: colors.white,
            borderRadius: borderRadius.s600,
            fontSize: fontSize.s15,
            color: value !== "" ? colors.grey800 : colors.grey300,

            font: "inherit",
            WebkitBoxSizing: "border-box",
            MozBoxSizing: "border-box",
            boxSizing: "border-box",
            WebkitAppearance: "none",
            MozAppearance: "none",

            cursor: "pointer",
            backgroundImage:
              "linear-gradient(-45deg, transparent 50%, #cccccc 50%),linear-gradient(45deg, transparent 50%, #cccccc 50%)",
            backgroundPosition: "calc(100% - 10px) 50%, calc(100% - 15px) 50%",
            backgroundSize: "5px 5px, 5px 5px",
            backgroundRepeat: "no-repeat",
            outline: "0",
            paddingRight: "30px",

            "&:disabled": {
              backgroundColor: "#f2f2f2",
              color: "#999",
              opacity: "0.9",
            },
          }}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {children}
        </select>
      )}
    </>
  );
});

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  children: ReactNode;
}

export const Option = memo(function Option({
  children,
  ...props
}: OptionProps) {
  return cloneElement(<option {...props}>{children}</option>);
});
