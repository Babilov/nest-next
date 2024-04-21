import React, { FC, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/nav.module.scss";

const MyNavLink: FC<{ children: ReactNode; href: string }> = ({
  children,
  href,
}) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link
      href={href}
      className={
        isActive ? `${styles.active} ${styles.navLink}` : styles.navLink
      }
    >
      {children}
    </Link>
  );
};

export default MyNavLink;
