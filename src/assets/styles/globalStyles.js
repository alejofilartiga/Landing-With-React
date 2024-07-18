import {createGlobalStyle} from 'styled-components';

export const GlobalStyles=createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    html {
        scroll-behavior: smooth;
        font-family: "Roboto", sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: "Montserrat",sans-serif;
        overflow-x:hidden;
    }

    li {
        list-style: none;
    }
    
    section{
        padding-top: 10%;
        padding-bottom: 10%;
        width: 100%;

        @media (max-width: 576px){
        padding-top: 150px;
        }
        @media (max-width: 992px){
        padding-top: 150px;
        }

    }

    
`;