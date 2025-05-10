import { redirect } from "react-router";
import { url, status } from "../__generated__/[2022].[07].[apple-accessibility-settings.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
