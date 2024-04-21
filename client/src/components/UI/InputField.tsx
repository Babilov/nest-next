import React, { FC } from "react";
import styles from "@/styles/register.module.scss";
import { IInputProps } from "@/interfaces/props.interface";

const InputField: FC<IInputProps> = ({ type, value, setValue }) => {
  return (
    <input
      type={type}
      className={styles.inputItem}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default InputField;
