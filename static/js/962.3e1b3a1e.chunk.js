"use strict";(self.webpackChunkreact_movie=self.webpackChunkreact_movie||[]).push([[962],{2920:(e,s,a)=>{a.d(s,{V:()=>d});var t=a(4650),l=a(4275),i=a(6631),r=a(7892),n=a.n(r),c=a(7689),o=a(184);const d=e=>{var s,a;let{item:r,posterUrl:d,endpoint:m,fullInfo:x=!0,className:v="",mediaType:_}=e;const j=(0,c.s0)();return(0,o.jsxs)("div",{className:"CarouselCard ".concat(v),onClick:()=>j("/".concat(r.media_type||m||_,"/").concat(r.id)),children:[(0,o.jsxs)("div",{className:"posterBlock",children:[(0,o.jsx)(t.Z,{src:d}),x&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{rating:Number(null===(s=r.vote_average)||void 0===s?void 0:s.toFixed(1))}),(0,o.jsx)(i.Z,{genresProps:null===(a=r.genre_ids)||void 0===a?void 0:a.slice(0,2)})]})]}),(0,o.jsxs)("div",{className:"descriptionCard",children:[(0,o.jsx)("span",{className:"title",children:r.title||r.name}),(0,o.jsx)("span",{className:"date",children:n()(r.release_date||r.first_air_date).format("MMM D, YYYY")})]})]})}},1035:(e,s,a)=>{a.d(s,{l:()=>k});var t=a(2791),l=a(874),i=a(5246),r=a(2920),n=a(5804),c=a(184);const o=e=>{let{changeContentCarousel:s}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.aEb,{className:"carouselLeftNav arrow",onClick:()=>s("left")}),(0,c.jsx)(n.Igg,{className:"carouselRightNav arrow",onClick:()=>s("right")})]})},d="Carousel_Carousel__Ew+Xe",m="Carousel_carouselTitle__1vOmB",x="Carousel_carouselItems__KyFDI";var v=a(4620);const _="CarouselSkeleton_carouselSkeleton__R7W5G",j="CarouselSkeleton_SkeletonCard__PXNSf",h="CarouselSkeleton_posterBlock__sro65",u="CarouselSkeleton_textBlock__gd-Y4",p="CarouselSkeleton_title__29TDl",N="CarouselSkeleton_date__-xi-n",g=()=>{const e=()=>(0,c.jsxs)("div",{className:j,children:[(0,c.jsx)("div",{className:"".concat(h," skeleton")}),(0,c.jsxs)("div",{className:u,children:[(0,c.jsx)("div",{className:"".concat(p," skeleton")}),(0,c.jsx)("div",{className:"".concat(N," skeleton")})]})]});return(0,c.jsxs)("div",{className:_,children:[e(),e(),e(),e(),e()]})},k=e=>{let{results:s,isLoading:a,endpoint:n,title:_}=e;const j=(0,t.useRef)(null),h=(0,i.C)((e=>e.config.url_images));return(0,c.jsxs)("div",{className:d,children:[_&&(0,c.jsx)(v.Z,{className:"ContentWrapperCarousel",children:(0,c.jsx)("div",{className:m,children:_})}),(0,c.jsxs)(v.Z,{className:"ContentWrapperCarousel",children:[Boolean(s)&&(0,c.jsx)(o,{changeContentCarousel:e=>{const s=j.current;if(s){const a="left"===e?s.scrollLeft-(s.offsetWidth+20):s.scrollLeft+(s.offsetWidth+20);s.scrollTo({left:a,behavior:"smooth"})}}}),a?(0,c.jsx)(g,{}):(0,c.jsx)("div",{className:x,ref:j,children:null===s||void 0===s?void 0:s.map((e=>{const s=e.poster_path?h+e.poster_path:l;return(0,c.jsx)(r.V,{item:e,posterUrl:s,endpoint:n},e.id+e.poster_path)}))})]})]})}},5345:(e,s,a)=>{a.r(s),a.d(s,{default:()=>ke});var t=a(2791),l=a(7689),i=a(5246),r=a(1574);const n="Videos_Videos__ElQzg",c="Videos_title__uQQ0v",o="Videos_videosRow__UNe8Z";var d=a(4620);const m="VideosSkeleton_VideosSkeleton__DOOVz",x="VideosSkeleton_skItem__ol3sg",v="VideosSkeleton_thumb__Z8XdP",_="VideosSkeleton_row__gleeJ",j="VideosSkeleton_row2__M3fBg";var h=a(184);const u=()=>{const e=()=>(0,h.jsxs)("div",{className:x,children:[(0,h.jsx)("div",{className:"".concat(v," skeleton")}),(0,h.jsx)("div",{className:"".concat(_," skeleton")}),(0,h.jsx)("div",{className:"".concat(j," skeleton")})]});return(0,h.jsxs)("div",{className:m,children:[e(),e(),e(),e()]})};var p=a(6710),N=a.n(p);const g=e=>{let{show:s,setShow:a,trailerId:t,setTrailerId:l}=e;const i=()=>{a(!1),l("")};return(0,h.jsxs)("div",{className:"videoPopup ".concat(s?"visible":""),children:[(0,h.jsx)("div",{className:"opacityLayer",onClick:i}),(0,h.jsxs)("div",{className:"videoPlayer",children:[(0,h.jsx)("span",{className:"closeBtn",onClick:i,children:"Close"}),(0,h.jsx)(N(),{url:"https://www.youtube.com/watch?v=".concat(t),controls:!0,width:"100%",height:"100%"})]})]})},k="CartSkeleton_CartSkeleton__A7w8P",C="CartSkeleton_skItem__FxqOh",f="CartSkeleton_circle__hCOU3",w="CartSkeleton_row__0CyLL",S="CartSkeleton_row2__SGTgl",b=()=>{const e=()=>(0,h.jsxs)("div",{className:C,children:[(0,h.jsx)("div",{className:"".concat(f," skeleton")}),(0,h.jsx)("div",{className:"".concat(w," skeleton")}),(0,h.jsx)("div",{className:"".concat(S," skeleton")})]});return(0,h.jsxs)("div",{className:k,children:[e(),e(),e(),e(),e(),e()]})},y="CastCard_CastCard__FcC7s",T="CastCard_profileImg__+aNfG",V="CastCard_name__aJXrf",D="CastCard_character__93b4v";var I=a(4650);const B=a.p+"static/media/avatar.0affc1eeb2b145c80bd1.png",Z=e=>{let{actor:s}=e;const{url_images:a}=(0,i.C)((e=>e.config));let t=s.profile_path?a+s.profile_path:B;return(0,h.jsxs)("div",{className:y,children:[(0,h.jsx)("div",{className:T,children:(0,h.jsx)(I.Z,{src:t})}),(0,h.jsx)("div",{className:V,children:s.name}),(0,h.jsx)("div",{className:D,children:s.character})]},s.id)},L=e=>{let{writers:s}=e;return(0,h.jsxs)("div",{className:"info",children:[(0,h.jsxs)("span",{className:"text bold",children:["Writer:"," "]}),(0,h.jsx)("span",{className:"text",children:null===s||void 0===s?void 0:s.map(((e,a)=>(0,h.jsxs)("span",{children:[e.name,s.length-1!==a&&", "]},a)))})]})},Y=e=>{let{director:s}=e;return(0,h.jsxs)("div",{className:"info",children:[(0,h.jsxs)("span",{className:"text bold",children:["Director:"," "]}),(0,h.jsx)("span",{className:"text",children:null===s||void 0===s?void 0:s.map(((e,a)=>(0,h.jsxs)("span",{children:[e.name,s.length-1!==a&&", "]},a)))})]})};var O=a(7892),F=a.n(O);const W=e=>{const s=Math.floor(e/60),a=e%60;return"".concat(s,"h").concat(a>0?" ".concat(a,"m"):"")},M=e=>{let{release_date:s,status:a,runtime:t}=e;return(0,h.jsxs)("div",{className:"info",children:[(0,h.jsxs)("div",{className:"infoItem",children:[(0,h.jsxs)("span",{className:"text bold",children:["Status:"," "]}),(0,h.jsx)("span",{className:"text",children:a})]}),(0,h.jsxs)("div",{className:"infoItem",children:[(0,h.jsxs)("span",{className:"text bold",children:["Release Date:"," "]}),(0,h.jsx)("span",{className:"text",children:F()(s).format("MMM D, YYYY")})]}),(0,h.jsxs)("div",{className:"infoItem",children:[(0,h.jsxs)("span",{className:"text bold",children:["Runtime:"," "]}),(0,h.jsx)("span",{className:"text",children:W(t)})]})]})},P="OverView_overview__sQ7sL",E="OverView_heading__HqYnU",U="OverView_description__kb+lS",R=e=>{let{overview:s}=e;return(0,h.jsxs)("div",{className:P,children:[(0,h.jsx)("div",{className:E,children:"Overview"}),(0,h.jsx)("div",{className:U,children:s})]})},G=()=>(0,h.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"80px",height:"80px",viewBox:"0 0 213.7 213.7",enableBackground:"new 0 0 213.7 213.7",xmlSpace:"preserve",children:[(0,h.jsx)("polygon",{className:"triangle",fill:"none",strokeWidth:"7",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",points:"73.5,62.5 148.5,105.8 73.5,149.1 "}),(0,h.jsx)("circle",{className:"circle",fill:"none",strokeWidth:"7",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",cx:"106.8",cy:"106.8",r:"103.3"})]}),X=e=>{let{openTrailer:s}=e;return(0,h.jsxs)("div",{className:"playbtn",onClick:s,children:[(0,h.jsx)(G,{}),(0,h.jsx)("span",{className:"text",children:"Watch Trailer"})]})},q="Titles_title__1f30B",z="Titles_subtitle__hwhSn",Q=e=>{let{title:s,release_date:a,tagline:t}=e;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:q,children:"".concat(s," (").concat(F()(a).format("YYYY"),")")}),(0,h.jsx)("div",{className:z,children:t})]})};var J=a(874);const H=e=>{let{poster_path:s}=e;const{url_images:a}=(0,i.C)((e=>e.config));return s?(0,h.jsx)(I.Z,{className:"posterImg",src:a+s}):(0,h.jsx)(I.Z,{className:"posterImg",src:J})},A="DetailsBannerSkeleton_DetailsBannerSkeleton__saD5v",K="DetailsBannerSkeleton_left__Ikrwf",$="DetailsBannerSkeleton_right__Ww3Es",ee="DetailsBannerSkeleton_row__dYOBo",se=()=>(0,h.jsx)("div",{className:A,children:(0,h.jsxs)(d.Z,{className:"ContentWrapperDetailsBanner",children:[(0,h.jsx)("div",{className:"".concat(K," skeleton")}),(0,h.jsxs)("div",{className:$,children:[(0,h.jsx)("div",{className:"".concat(ee," skeleton")}),(0,h.jsx)("div",{className:"".concat(ee," skeleton")}),(0,h.jsx)("div",{className:"".concat(ee," skeleton")}),(0,h.jsx)("div",{className:"".concat(ee," skeleton")}),(0,h.jsx)("div",{className:"".concat(ee," skeleton")}),(0,h.jsx)("div",{className:"".concat(ee," skeleton")}),(0,h.jsx)("div",{className:"".concat(ee," skeleton")})]})]})}),ae=e=>{let{backdrop_path:s}=e;const{url_images:a}=(0,i.C)((e=>e.config));return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"backdrop-img",children:(0,h.jsx)(I.Z,{src:a+s})}),(0,h.jsx)("div",{className:"opacity-layer"})]})},te=e=>{let{video:s,setVideoId:a,setShowVideo:t}=e;return(0,h.jsxs)("div",{className:"VideoCard",onClick:()=>{a(s.key),t(!0)},children:[(0,h.jsxs)("div",{className:"videoThumbnail",children:[(0,h.jsx)(I.Z,{src:"https://img.youtube.com/vi/".concat(s.key,"/mqdefault.jpg")}),(0,h.jsx)(G,{})]}),(0,h.jsx)("div",{className:"videoTitle",children:s.name})]})},le=e=>{let{videos:s}=e;const{isLoading:a}=(0,i.C)((e=>e.content)),[l,r]=(0,t.useState)(!1),[m,x]=(0,t.useState)("");return null!==s&&void 0!==s&&s.length||!a?null!==s&&void 0!==s&&s.length?(0,h.jsxs)("div",{className:n,children:[(0,h.jsxs)(d.Z,{children:[(0,h.jsx)("div",{className:c,children:"Official Videos"}),!!s&&(0,h.jsx)("div",{className:o,children:null===s||void 0===s?void 0:s.map((e=>(0,h.jsx)(te,{video:e,setShowVideo:r,setVideoId:x},e.id)))})]}),(0,h.jsx)(g,{show:l,setShow:r,trailerId:m,setTrailerId:x})]}):(0,h.jsx)(h.Fragment,{}):(0,h.jsx)(d.Z,{children:(0,h.jsx)(u,{})})};var ie=a(1035);const re=()=>{const e=(0,i.T)(),{id:s,mediaType:a}=(0,l.UO)(),[n,c]=(0,t.useState)(),{media:o,isLoadingSimilar:d}=(0,i.C)((e=>e.content)),m="tv"===a?"Similar TV Shows":"Similar Movies";return(0,t.useEffect)((()=>{var t,l;!s||!a||null!==(t=o[s])&&void 0!==t&&t.similar||d||e((0,r.fn)({id:s,mediaType:a})),s&&a&&null!==(l=o[s])&&void 0!==l&&l.similar&&c(o[s].similar.results)}),[o]),(0,h.jsx)(h.Fragment,{children:!!n&&(0,h.jsx)(ie.l,{results:n,isLoading:d,title:m,endpoint:a})})},ne="DetailsBanner_DetailsBanner__8iN7v",ce="DetailsBanner_content__PGYuq",oe="DetailsBanner_left__gyw8c",de="DetailsBanner_right__r-fhp",me="DetailsBanner_genres__pnHVp",xe="DetailsBanner_row__IzV7e",ve="DetailsBanner_rating__P0S0M";var _e=a(6631),je=a(4275);const he=e=>{let{trailer:s,crew:a}=e;const n=(0,i.T)(),{mediaType:c,id:o}=(0,l.UO)(),[m,x]=(0,t.useState)(),[v,_]=(0,t.useState)(!1),[j,u]=(0,t.useState)(""),p=null===a||void 0===a?void 0:a.filter((e=>e.job.includes("Director"))),N=null===a||void 0===a?void 0:a.filter((e=>e.job.includes("Screenplay")||e.job.includes("Story")||e.job.includes("Writer"))),{media:k,isLoadingDetails:C}=(0,i.C)((e=>e.content));(0,t.useEffect)((()=>{var e,s;!o||!c||null!==(e=k[o])&&void 0!==e&&e.details||C||n((0,r.DD)({id:o,mediaType:c})),o&&c&&null!==(s=k[o])&&void 0!==s&&s.details&&x(k[o].details)}),[n,o,k,c]);return m?(0,h.jsxs)("div",{className:ne,children:[!!m&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(ae,{backdrop_path:m.backdrop_path}),(0,h.jsxs)(d.Z,{children:[(0,h.jsxs)("div",{className:ce,children:[(0,h.jsx)("div",{className:oe,children:(0,h.jsx)(H,{poster_path:m.poster_path})}),(0,h.jsxs)("div",{className:de,children:[(0,h.jsx)(Q,{title:m.title||m.name,release_date:m.release_date,tagline:m.tagline}),(0,h.jsx)(_e.Z,{className:me,genresProps:(f=m.genres,f.reduce(((e,s)=>e.concat(s.id)),[]))}),(0,h.jsxs)("div",{className:xe,children:[(0,h.jsx)(je.Z,{className:ve,textColor:"white",rating:Number(m.vote_average.toFixed(1))}),(0,h.jsx)(X,{openTrailer:()=>{_(!0),u(s.key)}})]}),(0,h.jsx)(R,{overview:m.overview}),(0,h.jsx)(M,{status:m.status,release_date:m.release_date,runtime:m.runtime}),!!p&&(0,h.jsx)(Y,{director:p}),!!N&&(0,h.jsx)(L,{writers:N})]})]}),(0,h.jsx)(g,{show:v,setShow:_,trailerId:j,setTrailerId:u})]})]}),")"]}):(0,h.jsx)(se,{});var f},ue="Cast_Cast__uwFiJ",pe="Cast_title__Vyy03",Ne="Cast_listItems__Ev4ia",ge=e=>{let{cast:s}=e;return null!==s&&void 0!==s&&s.length?(0,h.jsx)("div",{className:ue,children:(0,h.jsxs)(d.Z,{children:[(0,h.jsx)("div",{className:pe,children:"Top Cast"}),!!s&&(0,h.jsx)("div",{className:Ne,children:null===s||void 0===s?void 0:s.map((e=>(0,h.jsx)(Z,{actor:e},e.id)))})]})}):(0,h.jsx)(d.Z,{children:(0,h.jsx)(b,{})})},ke=()=>{const e=(0,i.T)(),{id:s,mediaType:a}=(0,l.UO)(),[n,c]=(0,t.useState)([]),[o,d]=(0,t.useState)([]),[m,x]=(0,t.useState)([]),{media:v}=(0,i.C)((e=>e.content));return(0,t.useEffect)((()=>{s&&a&&!v[s]&&(e((0,r.WI)({mediaType:a,id:s})),e((0,r.d5)({mediaType:a,id:s})))}),[e,s,v,a]),(0,t.useEffect)((()=>{var e,a,t,l,i;s&&null!==(e=v[s])&&void 0!==e&&e.videos&&x(v[s].videos.results),s&&null!==(a=v[s])&&void 0!==a&&null!==(t=a.credits)&&void 0!==t&&t.cast&&d(v[s].credits.cast),s&&null!==(l=v[s])&&void 0!==l&&null!==(i=l.credits)&&void 0!==i&&i.crew&&c(v[s].credits.crew)}),[o,n,s,v,m]),(0,h.jsxs)("div",{children:[(0,h.jsx)(he,{trailer:null===m||void 0===m?void 0:m[0],crew:n}),(0,h.jsx)(ge,{cast:o}),(0,h.jsx)(le,{videos:m}),(0,h.jsx)(re,{})]})}},4650:(e,s,a)=>{a.d(s,{Z:()=>r});a(9713);var t=a(7087),l=a(874),i=a(184);const r=e=>{let{src:s,className:a=""}=e;return(0,i.jsx)(t.LazyLoadImage,{className:a,alt:"",effect:"blur",placeholderSrc:l,src:s})}},4275:(e,s,a)=>{a.d(s,{Z:()=>i});var t=a(9391),l=a(184);const i=e=>{let{rating:s,className:a="",textColor:i=""}=e;return(0,l.jsx)("div",{className:"".concat(a," CircleRating"),children:(0,l.jsx)(t.Ip,{value:s,maxValue:10,text:String(s),styles:(0,t.y3)({pathColor:s<5?"red":s<7?"orange":"green",textColor:i||""})})})}},6631:(e,s,a)=>{a.d(s,{Z:()=>i});var t=a(5246),l=a(184);const i=e=>{let{genresProps:s,className:a=""}=e;const{genres:i}=(0,t.C)((e=>e.config));return(0,l.jsx)("div",{className:"".concat(a," Genres"),children:null===s||void 0===s?void 0:s.map((e=>{if(i[e])return(0,l.jsx)("div",{className:"genre",children:i[e]},e)}))})}},874:(e,s,a)=>{e.exports=a.p+"static/media/no-poster.de8cb0a7786e6bf2b2de.png"}}]);
//# sourceMappingURL=962.3e1b3a1e.chunk.js.map