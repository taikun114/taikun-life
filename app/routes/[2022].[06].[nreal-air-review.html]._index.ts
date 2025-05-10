import { redirect } from "react-router";
import { url, status } from "../__generated__/[2022].[06].[nreal-air-review.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
