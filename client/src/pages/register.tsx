import React, { useState } from "react";
import { useRouter } from "next/router";
import { register } from "@/services/register";
import FormField from "@/components/UI/FormField";
import Button from "@/components/UI/Button";
import ErrorMessage from "@/components/UI/ErrorMessage";
import { TErrorObj } from "@/types/error.type";
import styles from "../styles/register.module.scss";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<TErrorObj | undefined>(undefined);

  const router = useRouter();
  return (
    <div className={styles.mainDiv}>
      <div className={styles.form}>
        <p className={styles.titleForm}>Регистрация</p>
        <FormField
          name="Логин"
          value={username}
          setValue={setUsername}
          error={errors?.login}
        />

        <FormField
          name="Почта"
          value={email}
          setValue={setEmail}
          error={errors?.email}
        />
        <FormField
          name="Пароль"
          type="password"
          value={password}
          setValue={setPassword}
          error={errors?.password}
        />

        <Button
          onClick={() =>
            register({ username, email, password }, router, setErrors)
          }
        >
          Зарегистрироваться
        </Button>
      </div>
    </div>
  );
};

export default Register;
