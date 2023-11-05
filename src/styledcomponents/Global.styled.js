import { createGlobalStyle } from "styled-components";
export const GlobalStyled = createGlobalStyle`
*{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    /* width:100vw;
    min-height:100vh; */

}

ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

a {
  text-decoration: none;
  color: white;
}
`
