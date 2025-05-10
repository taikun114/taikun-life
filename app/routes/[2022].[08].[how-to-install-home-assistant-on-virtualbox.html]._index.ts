import { redirect } from "react-router";
import { url, status } from "../__generated__/[2022].[08].[how-to-install-home-assistant-on-virtualbox.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
