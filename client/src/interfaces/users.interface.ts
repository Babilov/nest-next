interface IUser {
  id: number;
  username: string;
  email: string;
  roles: [];
}

interface IUsers {
  users: IUser[];
}
