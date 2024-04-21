import React, { ReactNode, FC, useEffect, useState } from "react";
import MyNavLink from "@/components/UI/MyNavLink";
import { useRouter } from "next/router";
import styles from "@/styles/nav.module.scss";
import { getDecodedToken } from "@/utils/token.utils";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [id, setId] = useState<string>("");
  useEffect(() => {
    const decodedToken = getDecodedToken();
    if (decodedToken && decodedToken.sub) {
      setId(decodedToken.sub);
    }
  }, []);
  const router = useRouter();
  return (
    <div>
      <div className={styles.navBar}>
        <MyNavLink href={`/users/${id}`}>Моя страница</MyNavLink>
        <MyNavLink href={`/statistics/${id}`}>Статистика</MyNavLink>
        <MyNavLink href={`/motivation`}>Мотивация</MyNavLink>
      </div>
      {children}
    </div>
  );
};

export default Layout;
