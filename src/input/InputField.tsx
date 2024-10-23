import { useEffect, useState } from "react";
import { InputFieldProps } from "../interface/input-props";

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  className,
  containerClassName,
  placeholder,
  floatingLabel = false,
  id,
  "data-id": dataId,
  required,
  requiredColor,
  requiredPosition = "",
  fontColor,
  backgroundColor,
  hoverBackgroundColor,
   font,
   fontSize,
   borderRadius,
   margin,
   padding,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event); // Kalla på onChange om den skickats in som prop
    setHasValue(!!event.target.value); // Kontrollera om det finns ett värde i fältet
  };

  useEffect(() => {
    setHasValue(!!value); // Kolla om det redan finns ett värde
  }, [value]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false); // Ta bort fokusstatus när användaren lämnar fältet
    setHasValue(!!event.target.value); // Kolla om fältet har ett värde efter blur
  };

  const inputContainerStyle = {

    font: font,
    fontSize: fontSize,
    borderRadius: borderRadius,
    margin: margin,
    padding: padding,
  };

  const requiredAsteriskStyle = {
    color: requiredColor,
  };
  const inputStyle = {
    color: fontColor,
    backgroundColor: backgroundColor,
    hoverBackgroundColor: hoverBackgroundColor,

  };

  const requiredPositionCheck = (position: string, floatingLabel: boolean) => {
    const validPositions =
      /^(top|bottom|center|inside)-(left|right)$|^label-end$/;
    if (validPositions.test(position)) {
      return floatingLabel && position !== "label-end"
        ? `${position}-floating`
        : position;
    }
    return floatingLabel ? "top-right-floating" : "top-right";
  };

  const validateInputType = (type: string) => {
    const validTypes = ["text", "tel", "email", "password"];
    return validTypes.includes(type) ? type : "text";
  };

  return (
    <div
      className={`input-container${
        containerClassName ? ` ${containerClassName}` : ""
      }${isFocused || hasValue ? " focused" : ""}`} style={inputContainerStyle}
    >
      <label
        htmlFor={id}
        className={`${floatingLabel ? "floating-label" : "static-label"}`}
        style={{ color: fontColor }}
      >
        {label}
      </label>
      {required && (
        <span
          className={`required-asterisk ${requiredPositionCheck(
            requiredPosition,
            floatingLabel
          )}`}
          style={requiredAsteriskStyle}
        >
          *
        </span>
      )}
      <input
        id={id}
        className={`input-field${className ? ` ${className}` : ""}`}
        placeholder={floatingLabel ? "" : placeholder}
        type={validateInputType(type)}
        name={name}
        value={value}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        data-id={dataId}
        required={required}
        style={inputStyle}
      />
    </div>
  );
};

export default InputField;
