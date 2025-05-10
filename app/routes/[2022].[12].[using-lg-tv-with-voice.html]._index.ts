import { redirect } from "react-router";
import { url, status } from "../__generated__/[2022].[12].[using-lg-tv-with-voice.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
