import axios from "axios";
import { constants } from "@/constants";
import { NextRouter } from "next/router";
import { TUserData, TUser } from "@/types/user.type";
import { Dispatch, SetStateAction } from "react";
import { TErrorObj } from "@/types/error.type";

enum MyKeys {
  Логин = "login",
  Почта = "email",
  Пароль = "password",
}

export const register = async (
  data: TUserData,
  router: NextRouter,
  setErrors: Dispatch<SetStateAction<TErrorObj | undefined>>,
): Promise<void> => {
  const errorsObject: TErrorObj = {};
  try {
    const res = await axios.post(`${constants.API_URL}/users/register`, data);
    const user: TUser = res.data;
    await router.push(`/users/${user.id}`);
  } catch (e: any) {
    const errorsMessages = e.response.data.message;
    errorsMessages.map((error: string) => {
      const key = error.split(" ")[0] as keyof typeof MyKeys;
      errorsObject[MyKeys[key]] = error;
    });
  }
  return setErrors(errorsObject);
};
