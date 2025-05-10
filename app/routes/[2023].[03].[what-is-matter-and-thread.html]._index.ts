import { redirect } from "react-router";
import { url, status } from "../__generated__/[2023].[03].[what-is-matter-and-thread.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
