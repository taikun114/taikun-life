import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }

  interface Future {
    unstable_middleware: false
  }
}

type Params = {
  "/": {};
  "/2022/08/how-to-make-switchbot-products-compatible-with-homekit.html": {};
  "/2022/08/how-to-install-home-assistant-on-virtualbox.html": {};
  "/2021/11/used-mac-how-to-choice-guide-2022.html": {};
  "/2022/09/used-mac-how-to-choice-guide-2023.html": {};
  "/2022/07/apple-accessibility-settings.html": {};
  "/2022/05/how-to-use-idevice-with-xac.html": {};
  "/2023/03/what-is-matter-and-thread.html": {};
  "/2022/10/nreal-air-using-with-mac.html": {};
  "/2022/11/apple-tv-4k-2022-review.html": {};
  "/2022/12/using-lg-tv-with-voice.html": {};
  "/2022/06/nreal-air-review.html": {};
  "/p/blog-page_10.html": {};
  "/p/blog-page_6.html": {};
  "/p/blog-page_7.html": {};
  "/p/blog-page.html": {};
  "/sitemap.xml": {};
  "/blog/:slug": {
    "slug": string;
  };
  "/page/:slug": {
    "slug": string;
  };
  "/robots.txt": {};
  "/_image/*": {
    "*": string;
  };
  "/*": {
    "*": string;
  };
};