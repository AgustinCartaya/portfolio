import{h as n,j as o,X as t,H as i,N as l,O as f,s as c,k as u}from"./index-VsBuxk_P.js";const e={accent:"#FFA500",success:"#00C853",error:"#FF3B30"},x={colors:{primary:"#000",secondary:"#fff",alternative:"#fcfcfc",backgroundPrimary:"#fff",backgroundSecondary:"#000",backgroundDefault:"#fff",...e}},g={colors:{primary:"#fff",secondary:"#000",alternative:"#232323",backgroundPrimary:"#000",backgroundSecondary:"#fff",backgroundDefault:"rgb(57, 57, 57)",...e}},k=({children:r})=>{const{isDarkMode:a}=n(),s=a?g:x;return o.jsx(t,{theme:s,children:r})},j=()=>{const{isDarkMode:r,setIsDarkMode:a}=n(),s=()=>{a(d=>!d),localStorage.setItem("darkmode",JSON.stringify(!r))};return o.jsx(p,{children:o.jsxs(k,{children:[o.jsx(b,{}),o.jsxs(m,{children:[o.jsx(i,{handleTheme:s}),o.jsx(l,{}),o.jsx(f,{})]})]})})},p=c.main`
  border-radius: 5px;
  max-width: 1200px;
`,m=c.div`
  padding: 30px;

  @media (max-width: 800px) {
    padding: 20px;
  }
`,b=u`
  body {
    background-color: ${({theme:r})=>{var a;return(a=r==null?void 0:r.colors)==null?void 0:a.backgroundDefault}};
    color: ${({theme:r})=>{var a;return(a=r==null?void 0:r.colors)==null?void 0:a.primary}};
  }
`;export{j as default};