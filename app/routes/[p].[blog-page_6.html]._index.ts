import { redirect } from "react-router";
import { url, status } from "../__generated__/[p].[blog-page_6.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
