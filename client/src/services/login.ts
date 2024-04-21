import { NextRouter } from "next/router";
import jwt from "jsonwebtoken";
import axios from "axios";
import { constants } from "@/constants";
import { TLoginProps } from "@/types/props.types";

export const login = async (
  { username, password }: TLoginProps,
  router: NextRouter,
): Promise<void> => {
  const res = await axios.post(`${constants.API_URL}/auth/login`, {
    username,
    password,
  });
  const token = res.data.access_token;
  const decodedToken = handleAuthentication(token);
  await router.push(`/users/${decodedToken.sub}`);
};

const handleAuthentication = (token: string) => {
  localStorage.setItem("token", token);
  const decodedToken = jwt.decode(token);
  if (!decodedToken) {
    throw new Error("Unauthorized");
  }
  return decodedToken;
};
