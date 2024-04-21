import React, { FC } from "react";
import InputField from "@/components/UI/InputField";
import { IFormFieldProps } from "@/interfaces/props.interface";
import styles from "@/styles/register.module.scss";
import ErrorMessage from "@/components/UI/ErrorMessage";

const FormField: FC<IFormFieldProps> = ({
  name,
  type = "text",
  value,
  setValue,
  error,
}) => {
  return (
    <div className={styles.divForm}>
      <span className={styles.text}>{name}</span>
      <InputField type={type} value={value} setValue={setValue} />
      <ErrorMessage error={error} />
    </div>
  );
};

export default FormField;
