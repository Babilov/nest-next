import axios from "axios";
import { constants } from "@/constants";

class UserService {
  async getAll(): Promise<IUser[]> {
    const res = await axios.get(`${constants.API_URL}/users`);
    return res.data;
  }

  async getUser(id: string): Promise<IUser> {
    const res = await axios.get(`${constants.API_URL}/users/${id}`);
    return res.data;
  }
}

export default new UserService();
