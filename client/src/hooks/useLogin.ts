import { useRouter } from "next/router";
import { useState } from "react";
import { TLoginProps } from "@/types/props.types";
import { login } from "@/services/login";

export const useLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const handleLogin = async ({ username, password }: TLoginProps) => {
    try {
      setIsLoading(true);
      await login({ username, password }, router);
    } catch (error: any) {
      const errorMessage = error.response?.data?.message;
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, handleLogin, error };
};
