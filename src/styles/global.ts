import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    width:100%;
   height: 100%;
   padding: 0;
   margin: 0;
   box-sizing: border-box;
}

input{
    outline: none;
    border: none;
}

button{
    outline: none;
    border: none;
}

ul{
    list-style-type: none;
}


`;
