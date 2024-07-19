import styled from "styled-components";

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    z-index: 1;
    background-color: #F5CB5C;
    top: 99px;
    left: 0%;
    width: 200px;
    padding: 40px;
    border-radius: 0px 0px 40px 40px;

    @media (max-width: 576px){
        left: 12%;

    }

`

export const ToggleMenu = styled.img`
    width: 40px;
    cursor: pointer;
`