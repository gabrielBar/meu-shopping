import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin:0px;
        padding:0px;
        box-sizing:border-box;
    }

    body{
        background-color:#f7f7f7;
    }
    button{
        cursor:pointer;
        &:hover{
            filter:brightness(1.2);
            transition: filter 0.3s;
        }
    }
`;
