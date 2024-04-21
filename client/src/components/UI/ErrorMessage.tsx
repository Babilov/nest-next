import React from "react";
import styles from "@/styles/errors.module.scss";

const ErrorMessage = ({ error }: { error: string | undefined }) => {
  return error && <span className={styles.error}>{error}</span>;
};

export default ErrorMessage;
