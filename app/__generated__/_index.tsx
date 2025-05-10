/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, Link as Link, RemixForm as RemixForm } from "@webstudio-is/sdk-components-react-router";
import { Slot as Slot, Image as Image, Fragment as Fragment_1, Box as Box, Heading as Heading, Text as Text, HtmlEmbed as HtmlEmbed, Time as Time, Input as Input, Button as Button } from "@webstudio-is/sdk-components-react";


      export const projectId = "eb288b69-93b6-4f30-87d8-8fc4471bde1e";

      export const lastPublished = "2025-05-10T14:09:23.030Z";

      export const siteName = "たいくんの生活";

      export const breakpoints = [{"id":"7hPMMapQ_YKRAmEWw_M-S"},{"id":"oIVfj9CW1VSGQ1nzAMQhV","maxWidth":991},{"id":"b-tdPHJg4N8hzh8wxGSqL","maxWidth":767},{"id":"sURTnOO_xRAsuAvyLcB6L","maxWidth":479}];

      export const favIconAsset: string | undefined =
        "favicon_w08zms8XUlOgWeHurl8y9.png";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["Inter-VariableFont_opsz_wght_HOo21NIbqKC0RKQh4mucq.ttf","SourceHanSansJP-VF.ttf_6pYUVA7f__C2UTbutLl5c.woff2"]

      export const pageBackgroundImageAssets: string[] =
        []

      
            
            const Script = ({children, ...props}: Record<string, string | boolean>) => {
              if (children == null) {
                return <script {...props} />;
              }

              return <script {...props} dangerouslySetInnerHTML={{__html: children}} />;
            };
            const Style = ({children, ...props}: Record<string, string | boolean>) => {
              if (children == null) {
                return <style {...props} />;
              }

              return <style {...props} dangerouslySetInnerHTML={{__html: children}} />;
            };
            

            export const CustomCode = () => {
              return (<><Script async src={"https://www.googletagmanager.com/gtag/js?id=G-W4MSD8641S"}></Script><Script>{"\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'G-W4MSD8641S');\n"}</Script>{"\n\n"}<Script async src={"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4148785556928544"} crossorigin={"anonymous"}></Script></>);
            }
          

      const Page = (_props: { system: any; }) => {
let _ = useResource("__1")
return <Body
className={`w-body cyr5ovu`}>
<Slot>
<Fragment_1>
<Image
src={"/assets/alex-shuper-Or-ysyrPXnU-unsplash_Zhh1K6IHHwF1Yphg-ksNT.webp"}
width={1920}
height={1080}
className={`w-image ckw650q cu39xf9 c1ysgjff cok98yc`} />
<Box
className={`w-box ckw650q cu39xf9 cok98yc c1epj6oz cgzp0rh`} />
</Fragment_1>
</Slot>
<Box
className={`w-box c16u96pk c1nrl0mm cv98wn5 ckw650q clrs9cu clb7ee7 c1ayo3bo`}>
<Box
className={`w-box ckw650q c6g550q c16u96pk c1nrl0mm cv98wn5 clb7ee7 c1y3dgs3 cvcpz3a ci80ji7 cfl86vg`}>
<Link
href={"/"}
className={`w-link ckw650q c30d1di`}>
<Image
src={"/assets/taikun-life-full_MKZdOye23ZIRoP-vjc_g4.png"}
width={1200}
height={108}
className={`w-image`} />
</Link>
<Box
data-ws-tag="header"
className={`w-box ckw650q c30d1di`}>
<Box
className={`w-box c1mo0hrg c9ztfc4 cvpjo14 c1ivbbvm c6cj56m ctiy6wq c1yz7033 c16u96pk cckrrlb c1nrl0mm ct6b9qv c1demw6w ci2ryas c1mp8u76 c1sy5cbg ctibe6j cq98dcv c1nljn1v c1bk6428 cx7dkne c1rhsvz0`}>
<Box
className={`w-box c16u96pk cxvivdm cmqkj62 ct6b9qv`}>
<Link
href={"/"}
className={`w-link c14njgcc c9ll3mf cxhsvi csiqldl cywehne c1w3kw24 ckfbvdv cnny46r c1x20bz7 c1kiu74r cu0zbn6 cgzd7q6 cqs822p c1t4den9 cwlahma c3rd0z1 c1bk6428 c1innfc3 ci10kzm clnhelo`}>
{"ホーム"}
</Link>
<Link
href={"/page/notice"}
className={`w-link c14njgcc c9ll3mf cxhsvi csiqldl cywehne c1w3kw24 ckfbvdv cnny46r c1x20bz7 c1kiu74r cu0zbn6 cgzd7q6 cqs822p c1t4den9 cwlahma c1bk6428 c1innfc3 ci10kzm clnhelo`}>
{"お知らせ"}
</Link>
<Link
href={"/page/contact"}
className={`w-link c14njgcc c9ll3mf cxhsvi csiqldl cywehne c1w3kw24 ckfbvdv cnny46r c1x20bz7 c1kiu74r cu0zbn6 cgzd7q6 cqs822p c1t4den9 cwlahma c1bk6428 c1innfc3 ci10kzm clnhelo`}>
{"お問い合わせ"}
</Link>
<Link
href={"/page/privacy-policy"}
className={`w-link c14njgcc c9ll3mf cxhsvi csiqldl cywehne c1w3kw24 ckfbvdv cnny46r c1x20bz7 c1kiu74r cu0zbn6 cgzd7q6 cqs822p c1t4den9 cwlahma c1bk6428 c1innfc3 ci10kzm clnhelo`}>
{"プライバシーポリシー"}
</Link>
<Link
href={"https://www.taikun-room.com/"}
className={`w-link c14njgcc c9ll3mf cxhsvi csiqldl cywehne c1w3kw24 ckfbvdv cnny46r c1x20bz7 c1kiu74r cu0zbn6 cgzd7q6 cqs822p c1t4den9 cwlahma c1bk6428 c1innfc3 cuklm3e clnhelo`}>
{"たいくんの部屋"}
</Link>
<Link
href={"https://shop.taikun.design/"}
className={`w-link c14njgcc c9ll3mf cxhsvi csiqldl cywehne c1w3kw24 ckfbvdv cnny46r c1x20bz7 c1kiu74r cu0zbn6 cgzd7q6 cqs822p c1t4den9 cwlahma c1bk6428 c1innfc3 ci10kzm clnhelo`}>
{"たいくんのお店"}
</Link>
</Box>
<RemixForm
className={`w-form c16u96pk ckfbvdv cnny46r c1x20bz7 c1kiu74r c88e3vu ctzx07w`}>
<Input
aria-label={"ブログを検索"}
name={"search"}
placeholder={"検索..."}
type={"search"}
className={`w-text-input c18xfrfr ccpbbov c4oa98r clun22x c14eq3al c104iyh7 c1iftn02 c17iwvim c16tp3ap ckfbvdv c1x20bz7 c9ll3mf c1dgsltx ctzx07w`} />
<Button
className={`w-button c1t8yh50 c18xfrfr ccpbbov c4oa98r clun22x coi25rp cnny46r c1kiu74r`}>
<Box
className={`w-box cpspxpc c1d3h5bc chpom5m c329hqk c1sy5cbg cxovp9q c2y4chl c1nljn1v`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"#ffffff\" d=\"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z\"/></svg>"}
className={`w-html-embed c16u96pk c2en5ep c1uczmal cu39xf9 ckw650q`} />
</Box>
</Button>
</RemixForm>
</Box>
</Box>
<Box
className={`w-box ckw650q c16u96pk ct6b9qv c1demw6w ci2ryas`}>
{_?.data?.data?.posts?.edges?.map?.((collectionItem: any, index: number) =>
<Fragment key={index}>
<Box
data-ws-tag="article"
className={`w-box c1mo0hrg c1yz7033 ctiy6wq c9ztfc4 cvpjo14 c1ivbbvm c6cj56m cfcch3v c1h2qy8m cgzd7q6 cqs822p c1t4den9 cwlahma c1mqbasd c1rhsvz0 corpmch c1f9m8pb`}>
<Link
href={"/blog/" + collectionItem?.node?.slug}
className={`w-link cu39xf9 ckw650q c14njgcc ct7i05a`}>
<Box
className={`w-box`}>
<Image
src={collectionItem?.node?.featuredImage?.node?.sourceUrl}
loading={"lazy"}
width={collectionItem?.node?.featuredImage?.node?.mediaDetails?.width}
height={collectionItem?.node?.featuredImage?.node?.mediaDetails?.height}
alt={collectionItem?.node?.featuredImage?.node?.altText}
className={`w-image c9ztfc4 cvpjo14 ckw650q cpbvj9u c1ysgjff`} />
<Box
className={`w-box clb7ee7 cckrrlb c1kwnyvg`}>
<Heading
className={`w-heading c1xyw2bj cffkjh0 c11z3i3x c9ll3mf cinzvyd cmendya c1do09oa c1ho1hsm ce9x8e9 cyr5ovu`}>
{collectionItem?.node?.title}
</Heading>
<HtmlEmbed
code={collectionItem?.node?.excerpt}
className={`w-html-embed c9ll3mf cinzvyd c1u7in6p c1do09oa c1ho1hsm ce9x8e9 c1i9877x cfjs3rk cy61qk1 c30d1di cyr5ovu`}>
</HtmlEmbed>
<Box
className={`w-box c16u96pk cxvivdm cmqkj62 ct6b9qv`}>
<Box
className={`w-box c16u96pk c1nrl0mm cv98wn5 cafs8o8 c16tp3ap c17iwvim cqs2xd4 ckhpsmk c1yh0sse c1kyowkr c1hjchh6 cgt0251 cd4zzh3 cmz7znk`}>
<Box
className={`w-box cpspxpc c1d3h5bc c19dka4a chpom5m c329hqk c1sy5cbg cxovp9q c2y4chl c1nljn1v`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"#00af00\" d=\"M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z\"/></svg>"}
className={`w-html-embed`} />
</Box>
<Time
language={"ja"}
country={"JP"}
dateStyle={"short"}
timeStyle={"none"}
datetime={collectionItem?.node?.date}
className={`w-time cb1oezn c1mjo49n cyr5ovu`} />
</Box>
<Box
className={`w-box c16u96pk c1nrl0mm cv98wn5 cafs8o8 c16tp3ap c17iwvim cqs2xd4 ckhpsmk c1yh0sse c1kyowkr c1hjchh6 cgt0251 cd4zzh3 cmz7znk`}>
<Box
className={`w-box cpspxpc c1d3h5bc c19dka4a chpom5m c329hqk c1sy5cbg cxovp9q c2y4chl c1nljn1v`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"#00af00\" d=\"M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8c-5.9 16.7-24.2 25.4-40.8 19.5s-25.4-24.2-19.5-40.8C55.6 150.7 73.2 122 97.6 97.6c87.2-87.2 228.3-87.5 315.8-1L455 55c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 128c0 13.3-10.7 24-24 24l-8.4 0c0 0 0 0 0 0L344 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l41.1-41.1c-62.6-61.5-163.1-61.2-225.3 1zM16 312c0-13.3 10.7-24 24-24l7.6 0 .7 0L168 288c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440l0-119.6 0-.7 0-7.6z\"/></svg>"}
className={`w-html-embed`} />
</Box>
<Time
datetime={collectionItem?.node?.modified}
language={"ja"}
country={"JP"}
dateStyle={"short"}
timeStyle={"none"}
className={`w-time cb1oezn c1mjo49n cyr5ovu`} />
</Box>
</Box>
</Box>
</Box>
</Link>
</Box>
</Fragment>
)}
</Box>
<Box
className={`w-box c16u96pk c1demw6w cmqkj62 c16uhwia ct6b9qv cfprw0w`}>
{(_?.data?.data?.posts?.pageInfo?.hasPreviousPage) &&
<Link
aria-current={"false"}
aria-label={"最初に戻る"}
href={""}
className={`w-link c14njgcc`}>
<Box
className={`w-box c16u96pk c1nrl0mm cv98wn5 cj7fjzz c1yk9n7d c1fexnx0 cz9jktr cxvivdm cmqkj62 c1t8yh50 ckfbvdv cnny46r c1x20bz7 c1kiu74r cjvdby0 c11v1l1o c1sy5cbg ctibe6j cq98dcv c1nljn1v c1dfh75v`}>
<Box
className={`w-box cpspxpc c1d3h5bc chpom5m c329hqk c1sy5cbg cxovp9q c2y4chl c1nljn1v`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"#ffffff\" d=\"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z\"/></svg>"}
className={`w-html-embed c16u96pk cu39xf9 c2en5ep c1uczmal`} />
</Box>
<Text
className={`w-text cpwwn14 cb1oezn`}>
{"最初に戻る"}
</Text>
</Box>
</Link>
}
{(_?.data?.data?.posts?.pageInfo?.hasNextPage) &&
<Link
aria-current={"false"}
aria-label={"さらに表示"}
href={`?after=${_?.data?.data?.posts?.pageInfo?.endCursor}`}
className={`w-link c14njgcc`}>
<Box
className={`w-box c16u96pk c1nrl0mm cv98wn5 cj7fjzz c1yk9n7d c1fexnx0 cz9jktr cxvivdm cmqkj62 c1t8yh50 ckfbvdv cnny46r c1x20bz7 c1kiu74r cjvdby0 c11v1l1o c1sy5cbg ctibe6j cq98dcv c1nljn1v c1dfh75v`}>
<Text
className={`w-text cpwwn14 cb1oezn`}>
{"さらに表示"}
</Text>
<Box
className={`w-box cpspxpc c1d3h5bc chpom5m c329hqk c1sy5cbg cxovp9q c2y4chl c1nljn1v`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"#ffffff\" d=\"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z\"/></svg>"}
className={`w-html-embed c16u96pk cu39xf9 c2en5ep c1uczmal`} />
</Box>
</Box>
</Link>
}
</Box>
</Box>
</Box>
</Body>
}


      export { Page }
    