import React, { FC } from "react";

import styles from "@/styles/register.module.scss";

interface IButtonProps {
  children: string;
  onClick?: (...args: any[]) => void;
}

const Button: FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
