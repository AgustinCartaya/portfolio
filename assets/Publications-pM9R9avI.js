import{s as i,j as s,u as t,L as c}from"./index-okW6vBvv.js";import{u as l,_ as e,f as d}from"./fetchDataFromGithubUrls-KniocN3c.js";import"./index-aRrg5YRi.js";const p="https://raw.githubusercontent.com/AgustinCartaya/portfolio/main/src/data/projects",u=({title:o,path:r,images:a,description:n})=>s.jsxs(x,{children:[s.jsx("img",{className:"img",src:`${p}/${r}/images/${a.at(-1)}`,alt:a.at(-1)}),s.jsx("h4",{className:"title",children:o}),s.jsx("p",{className:"content",children:n}),s.jsx(g,{children:s.jsx(b,{children:"Download"})})]},t()),x=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 25px;
  transition: 0.5s all ease;

  .title {
    margin: 20px 0 0 0;
    font-size: 22px;
  }

  .content {
    text-align: justify;
    font-size: 14px;
    height: 150px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: lightgray;
      border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #000000;
    }
  }

  .img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`,g=i.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`,b=i.a`
  text-decoration: none;
  border-radius: 5px;
  border: none;
  padding: 10px 15px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 25px;
  background-color: ${({theme:o})=>{var r;return(r=o==null?void 0:o.colors)==null?void 0:r.secondary}};
  font-family: inherit;
  font-size: 14px;
  cursor: pointer;
  transition: 0.5s all ease;
  color: ${({theme:o})=>{var r;return(r=o==null?void 0:o.colors)==null?void 0:r.primary}};

  &:hover {
    background-color: ${({theme:o})=>{var r;return(r=o==null?void 0:o.colors)==null?void 0:r.primary}};
    color: ${({theme:o})=>{var r;return(r=o==null?void 0:o.colors)==null?void 0:r.secondary}};
  }
`,h=()=>{const{data:o,isLoading:r}=l({queryKey:["publications"],queryFn:()=>d("projects"),config:{staleTime:864e5}});return s.jsx(e,{height:50,children:r?s.jsx(c,{message:"Loading Publications..."}):s.jsx(f,{children:Array(3).fill(o).flat().map(a=>s.jsx(u,{...a},t()))})})},f=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;export{h as default};
