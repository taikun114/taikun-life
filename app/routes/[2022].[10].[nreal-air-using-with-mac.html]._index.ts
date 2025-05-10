import { redirect } from "react-router";
import { url, status } from "../__generated__/[2022].[10].[nreal-air-using-with-mac.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
