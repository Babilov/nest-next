import React, { useState } from "react";
import styles from "@/styles/register.module.scss";
import FormField from "@/components/UI/FormField";
import Button from "@/components/UI/Button";
import { useLogin } from "@/hooks/useLogin";
import Loader from "@/components/UI/Loader";
import ErrorMessage from "@/components/UI/ErrorMessage";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, isLoading, error } = useLogin();

  return (
    <div className={styles.mainDiv}>
      {!isLoading ? (
        <div className={styles.form}>
          <p className={styles.titleForm}>Авторизация</p>
          <FormField name="Логин" value={username} setValue={setUsername} />
          <FormField
            name="Пароль"
            type="password"
            value={password}
            setValue={setPassword}
          />
          <ErrorMessage error={error && "Неверный логин или пароль"} />
          <Button onClick={() => handleLogin({ username, password })}>
            Войти
          </Button>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Login;
