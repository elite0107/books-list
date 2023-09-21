"use strict";(self.webpackChunksonra_book=self.webpackChunksonra_book||[]).push([[495],{5999:function(e,t,r){r.d(t,{g:function(){return n}});var a=r(184),n=function(){return(0,a.jsx)("div",{className:"bg-white dark:bg-gray-900 pt-48 h-screen mx-auto","data-testid":"loading",children:(0,a.jsxs)("svg",{"aria-hidden":"true",className:"w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})})}},8400:function(e,t,r){r.d(t,{A:function(){return o}});var a=r(5999),n=r(184),l=function(){return(0,n.jsx)("div",{className:"bg-white dark:bg-gray-900 text-black dark:text-white pt-48 h-screen mx-auto","data-testid":"page-error",children:"Something went wrong. Please try again after a few minutes"})},o=function(e){var t=e.children,r=e.loading,o=e.error;return r?(0,n.jsx)(a.g,{}):o?(0,n.jsx)(l,{}):(0,n.jsx)("div",{className:"max-w-7xl",children:t})}},9495:function(e,t,r){r.r(t),r.d(t,{default:function(){return I}});var a=r(2791),n=r(6579),l=r(1562),o=r(2499),s=r(9439),i=r(8404),u=r(4165),c=r(5861),d=function(){var e=(0,c.Z)((0,u.Z)().mark((function e(t,r){var a;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.googleapis.com/books/v1/volumes","?key=").concat("AIzaSyCycAa-u1ak8xJovbX6E0cDQs97GjCXmoI","&q=").concat(t||"google","&maxResults=").concat(12,"&startIndex=").concat(r));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Network response was not ok");case 5:return localStorage.setItem("search-query",t),localStorage.setItem("page-start-number",r.toString()),e.abrupt("return",a.json());case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),m=d,f=r(4925),x=["title","titleId"];var g=a.forwardRef((function(e,t){var r=e.title,n=e.titleId,l=(0,f.Z)(e,x);return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":n},l),r?a.createElement("title",{id:n},r):null,a.createElement("path",{fillRule:"evenodd",d:"M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z",clipRule:"evenodd"}))})),b=r(184),h=function(e){var t=e.value,r=e.setValue;return(0,b.jsxs)("div",{className:"relative w-full sm:w-[36rem]",children:[(0,b.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:(0,b.jsx)(g,{className:"w-4 h-4 text-gray-500 dark:text-gray-400"})}),(0,b.jsx)("input",{type:"search",value:t,onChange:function(e){return r(e.target.value)},className:"block w-full p-4 pl-10 outline-none text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search Books...","data-testid":"search"})]})},v=["title","titleId"];var k=a.forwardRef((function(e,t){var r=e.title,n=e.titleId,l=(0,f.Z)(e,v);return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":n},l),r?a.createElement("title",{id:n},r):null,a.createElement("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z",clipRule:"evenodd"}))})),w=r(1087),p=function(e){var t=e.book,r=(0,n.T)(),l=(0,a.useCallback)((function(){r((0,o.s4)(t))}),[r,t]);return(0,b.jsxs)("div",{className:"w-64 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-2",children:[(0,b.jsxs)("div",{className:"flex items-center justify-center h-48 mb-4",children:[t.volumeInfo.imageLinks&&(0,b.jsx)("img",{src:t.volumeInfo.imageLinks.smallThumbnail,alt:"thumbnail",className:"h-full rounded-lg","data-testid":"thumbnail"}),!t.volumeInfo.imageLinks&&(0,b.jsx)("div",{className:"text-black dark:text-gray-200","data-testid":"no-thumbnail",children:"No Thumbnail"})]}),(0,b.jsx)("h5",{className:"font-bold tracking-tight text-gray-900 dark:text-white","data-testid":"book-title",children:t.volumeInfo.title}),(0,b.jsx)("p",{className:"font-normal text-gray-700 dark:text-gray-400 mb-2","data-testid":"book-author",children:t.volumeInfo.authors&&t.volumeInfo.authors.length>0?t.volumeInfo.authors[0]:""}),(0,b.jsxs)(w.rU,{to:"books/".concat(t.id),onClick:l,className:"inline-flex items-center cursor-pointer mx-auto mt-auto px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:["Read more",(0,b.jsx)(k,{className:"w-3.5 h-3.5 ml-2"})]})]})},j=["title","titleId"];var y=a.forwardRef((function(e,t){var r=e.title,n=e.titleId,l=(0,f.Z)(e,j);return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":n},l),r?a.createElement("title",{id:n},r):null,a.createElement("path",{fillRule:"evenodd",d:"M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z",clipRule:"evenodd"}))})),C=function(e){var t=e.startIndex,r=e.count,a=e.totalNumber,n=e.onPaginate;return(0,b.jsxs)("div",{className:"flex flex-col items-center",children:[(0,b.jsxs)("span",{className:"text-sm text-gray-700 dark:text-gray-400","data-testid":"pagination-numbers",children:[!!a&&(0,b.jsxs)(b.Fragment,{children:["Showing"," ",(0,b.jsx)("span",{className:"font-semibold text-gray-900 dark:text-white",children:t+1})," to"," ",(0,b.jsx)("span",{className:"font-semibold text-gray-900 dark:text-white",children:Math.min(t+r,a)})," ","of ",(0,b.jsx)("span",{className:"font-semibold text-gray-900 dark:text-white",children:a})," ","Books"]}),!a&&(0,b.jsx)(b.Fragment,{children:"Loading ..."})]}),(0,b.jsxs)("div",{className:"inline-flex mt-2 xs:mt-0",children:[(0,b.jsxs)("button",{disabled:0==t,className:"flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-blue-700 rounded-l hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 disabled:opacity-50",onClick:function(){return n&&n(t-r)},"data-testid":"prev",children:[(0,b.jsx)(y,{className:"w-3.5 h-3.5 mr-2"}),"Prev"]}),(0,b.jsxs)("button",{disabled:t+r>=a,className:"flex items-center justify-center px-4 h-10 text-base border-l border-blue-300 font-medium text-white bg-blue-700 rounded-r hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 disabled:opacity-50",onClick:function(){return n&&n(t+r)},"data-testid":"next",children:["Next",(0,b.jsx)(k,{className:"w-3.5 h-3.5 ml-2"})]})]})]})},N=r(8400),I=function(){var e,t=(0,n.C)((function(e){return e.searchQuery})),r=t.query,u=t.pageStartNum,c=(0,n.T)(),d=function(e,t){var r=(0,a.useState)("".concat(e,":").concat(t)),n=(0,s.Z)(r,2),l=n[0],o=n[1];return(0,a.useEffect)((function(){var r=setTimeout((function(){o("".concat(e,":").concat(t))}),300);return function(){return clearTimeout(r)}}),[e,t]),(0,i.a)(["books",l],(function(){return m(e,t)}),{select:function(e){return e},retry:!1,refetchOnWindowFocus:!1,refetchOnMount:!1,keepPreviousData:!0})}(r,u),f=d.data,x=d.isLoading,g=d.isError,v=d.isPreviousData;(0,a.useEffect)((function(){f&&f.items&&!v&&!g&&c((0,o.pT)(null===f||void 0===f?void 0:f.items))}),[c,f,g,v]);var k=(0,a.useCallback)((function(e){c((0,l.ql)(e)),c((0,l.nq)(0))}),[c]),w=(0,a.useCallback)((function(e){c((0,l.nq)(e))}),[c]),j=(0,a.useMemo)((function(){var e;return(0,b.jsx)("div",{className:"flex flex-wrap justify-center gap-4","data-testid":"book-list",children:null===f||void 0===f||null===(e=f.items)||void 0===e?void 0:e.map((function(e){return(0,b.jsx)(p,{book:e},e.id)}))})}),[f]);return(0,b.jsxs)("div",{className:"flex flex-col p-4 items-center gap-8",children:[(0,b.jsx)(h,{value:r,setValue:k}),(0,b.jsx)(C,{startIndex:u,count:12,totalNumber:null!==(e=null===f||void 0===f?void 0:f.totalItems)&&void 0!==e?e:0,onPaginate:w}),(0,b.jsx)(N.A,{loading:x||v,error:g,children:j})]})}},6579:function(e,t,r){r.d(t,{C:function(){return l},T:function(){return n}});var a=r(9434),n=a.I0,l=a.v9}}]);
//# sourceMappingURL=495.85cae8c9.chunk.js.map