import { redirect } from "react-router";
import { url, status } from "../__generated__/[2022].[05].[how-to-use-idevice-with-xac.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
