import React, { FC } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import userService from "@/services/user.service";
import styles from "@/styles/user.module.scss";

const Users: FC<IUsers> = ({ users }) => {
  return (
    <div className={styles.div}>
      <div className={styles.users}>
        <p className={styles.title}>Список пользователей: </p>
        <hr />
        {users.map((user: IUser) => (
          <div key={user.id} className={styles.userDiv}>
            <Link href={`/users/${user.id}`}>
              <p className={styles.userText}>username: {user.username}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const users = await userService.getAll();
  return { props: { users } };
};

export default Users;
