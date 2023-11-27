import{j as t,u as l,s as a}from"./index-602ZtZvM.js";import{u as e}from"./useFetchDataFromGithubApi-NyILAO1R.js";const c="https://raw.githubusercontent.com/AgustinCartaya/portfolio/main/src/my_projects",g=()=>{const{jsonData:o}=e("src/my_projects");return t.jsx(t.Fragment,{children:o.length>0?t.jsx(p,{children:[...o,...o,...o].map(({title:i,path:r,images:s,description:n})=>t.jsxs(d,{children:[t.jsx("img",{loading:"lazy",className:"img",src:`${c}/${r}/images/${s.at(-1)}`}),t.jsx("div",{className:"overlay",children:t.jsx("h4",{className:"title",children:i})}),t.jsx("p",{className:"content",children:n}),t.jsx(x,{children:t.jsx(u,{children:"Download"})})]},l()))}):null})},p=a.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`,d=a.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 25px;
  transition: .5s all ease;
  
  .title, .content {
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
`,x=a.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`,u=a.a`
  text-decoration: none;
  border-radius: 5px;
  border: none;
  padding: 10px 15px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 25px;
  background-color: ${({theme:o})=>{var i;return(i=o==null?void 0:o.colors)==null?void 0:i.secondary}};
  font-family: inherit;
  font-size: 14px;
  cursor: pointer;
  transition: .5s all ease;
  color: ${({theme:o})=>{var i;return(i=o==null?void 0:o.colors)==null?void 0:i.primary}};

  &:hover {
    background-color: ${({theme:o})=>{var i;return(i=o==null?void 0:o.colors)==null?void 0:i.primary}};
    color: ${({theme:o})=>{var i;return(i=o==null?void 0:o.colors)==null?void 0:i.secondary}};
  }
`;export{g as default};
