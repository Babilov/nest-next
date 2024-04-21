import React, { FC } from "react";
import userService from "@/services/user.service";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const User: FC<IUser> = (user) => {
  const router = useRouter();
  return (
    <div className={"h-screen"}>
      <Layout>
        <div>
          <p>id: {user.id}</p>
          <p>username: {user.username}</p>
          <p>email: {user.email}</p>
        </div>
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.id) {
    return {
      notFound: true,
    };
  }

  const user = await userService.getUser(params.id as string);
  return { props: user };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const users = await userService.getAll();
  const ids = users.map((user: IUser) => user.id);
  const paths = ids.map((id) => `/users/${id}`);
  return { paths, fallback: false };
};

export default User;
