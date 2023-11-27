import{j as a,u as e,s as r}from"./index-VsBuxk_P.js";import{u as c,f as p}from"./fetchDataFromGithubUrls-NcCFv9xr.js";const d="https://raw.githubusercontent.com/AgustinCartaya/portfolio/main/src/my_projects",y=()=>{const{data:o,isLoading:i}=c({queryKey:["publications"],queryFn:()=>p("src/my_projects"),config:{staleTime:864e5}});return a.jsx(a.Fragment,{children:i?null:a.jsx(x,{children:Array(3).fill(o).flat().map(({title:t,path:s,images:n,description:l})=>a.jsxs(u,{children:[a.jsx("img",{loading:"lazy",className:"img",src:`${d}/${s}/images/${n.at(-1)}`}),a.jsx("div",{className:"overlay",children:a.jsx("h4",{className:"title",children:t})}),a.jsx("p",{className:"content",children:l}),a.jsx(f,{children:a.jsx(m,{children:"Download"})})]},e()))})})},x=r.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`,u=r.div`
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
`,f=r.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`,m=r.a`
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
`;export{y as default};
