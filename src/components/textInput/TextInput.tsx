import React, { FunctionComponent, useState } from "react";
import "./textInput.css";

export type SelectOption = {
  value: string;
  label: string;
};

type Props = {
  type?: string;
  label: string;
  isTextArea?: boolean;
  maxLength?: number;
  name: string;
  /** When provided, renders a select with the same floating-label behavior */
  options?: SelectOption[];
};

const TextInput: FunctionComponent<Props> = ({
  type,
  label,
  isTextArea,
  maxLength,
  name,
  options,
}) => {
  const [selectValue, setSelectValue] = useState("");

  if (isTextArea) {
    return (
      <div className={"form"}>
        <textarea
          name={"message"}
          rows={7}
          placeholder={"Your Message"}
          required
        />
      </div>
    );
  }

  if (options) {
    const isFilled = selectValue.length > 0;

    return (
      <div className={"form form--select"}>
        <select
          id={name}
          name={name}
          className={`form__input form__select${
            isFilled ? " form__select--filled" : ""
          }`}
          required
          value={selectValue}
          onChange={(event) => setSelectValue(event.target.value)}
        >
          <option value={""} disabled>
            {label}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label htmlFor={name} className={"form__label"}>
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className={"form"}>
      <input
        id={name}
        type={type || "text"}
        name={name}
        maxLength={maxLength}
        className={"form__input"}
        autoComplete={"off"}
        placeholder={" "}
        required
      />
      <label htmlFor={name} className={"form__label"}>
        {label}
      </label>
    </div>
  );
};

export default TextInput;
