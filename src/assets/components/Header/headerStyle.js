import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    background-color: #242423;
    z-index: 2;
`

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    padding: 13px;
    margin-top: 20px;
    border-radius: 20px;
    background-color: #F5CB5C;
    position: fixed;
    top: 0;

    @media (max-width: 992px){
        width: 90%;
    }

`



export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    gap: 20px;
    /* gap: 100px; */
`

export const LinkStyle = styled.link`
    font-size: 15px;
    background-color: #242423;
    padding: 5px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    width: 100px;
    text-align: center;
    text-decoration: none;

    @media (max-width: 992px) {
        display: none;
    }

`

export const TauImg = styled.img`
    width: 200px;
`

export const CartIcon = styled.img`
    width: 45px;
    cursor: pointer;
`