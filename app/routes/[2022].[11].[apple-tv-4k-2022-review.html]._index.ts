import { redirect } from "react-router";
import { url, status } from "../__generated__/[2022].[11].[apple-tv-4k-2022-review.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
