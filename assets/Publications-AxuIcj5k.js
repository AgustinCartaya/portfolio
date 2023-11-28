import{j as a,r as l,L as c,u as p,s}from"./index-kDJ3vL86.js";import{u as d,_ as x,f as u}from"./fetchDataFromGithubUrls-woa_MW6U.js";import"./index-YJBwLIFB.js";const f="https://raw.githubusercontent.com/AgustinCartaya/portfolio/main/src/my_projects",h=()=>{const{data:o,isLoading:i}=d({queryKey:["publications"],queryFn:()=>u("src/my_projects"),config:{staleTime:864e5}});return a.jsx(x,{height:50,children:a.jsx(l.Suspense,{fallback:null,children:i?a.jsx(c,{message:"Loading Publications..."}):a.jsx(g,{children:Array(3).fill(o).flat().map(({title:r,path:n,images:t,description:e})=>a.jsxs(m,{children:[a.jsx("img",{className:"img",src:`${f}/${n}/images/${t.at(-1)}`,alt:t.at(-1)}),a.jsx("div",{className:"overlay",children:a.jsx("h4",{className:"title",children:r})}),a.jsx("p",{className:"content",children:e}),a.jsx(b,{children:a.jsx(y,{children:"Download"})})]},p()))})})})},g=s.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`,m=s.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 25px;
  transition: 0.5s all ease;

  .title,
  .content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .title {
    margin: 0;
    font-size: 18px;
    color: #fff;
    -webkit-line-clamp: 3;
  }

  .content {
    font-size: 14px;
    -webkit-line-clamp: 6;
  }

  .img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .overlay {
    width: -webkit-fill-available;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    background-color: rgba(34, 34, 34, 0.5);
    padding: 30px;
    height: 100px;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.3s ease;
  }

  &:hover .overlay {
    transform: scaleY(1);
  }
`,b=s.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`,y=s.a`
  text-decoration: none;
  border-radius: 5px;
  border: none;
  padding: 10px 15px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 25px;
  background-color: ${({theme:o})=>{var i;return(i=o==null?void 0:o.colors)==null?void 0:i.secondary}};
  font-family: inherit;
  font-size: 14px;
  cursor: pointer;
  transition: 0.5s all ease;
  color: ${({theme:o})=>{var i;return(i=o==null?void 0:o.colors)==null?void 0:i.primary}};

  &:hover {
    background-color: ${({theme:o})=>{var i;return(i=o==null?void 0:o.colors)==null?void 0:i.primary}};
    color: ${({theme:o})=>{var i;return(i=o==null?void 0:o.colors)==null?void 0:i.secondary}};
  }
`;export{h as default};
