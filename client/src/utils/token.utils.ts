import jwt from "jsonwebtoken";

export const getDecodedToken = (): { sub: string; username: string } | null => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  return jwt.decode(token) as { sub: string; username: string };
};

export const getBearer = (): string | null => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  return `Bearer ${token}`;
};
