import axios from "axios";
import { constants } from "@/constants";
import { getBearer } from "@/utils/token.utils";
import { IDays } from "@/interfaces/days.interface";

export const getDays = async (): Promise<IDays | undefined> => {
  const token = getBearer();
  try {
    const res = await axios.get(`${constants.API_URL}` + "/days", {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (e) {
    console.error(`Days: ${e}`);
  }
};
