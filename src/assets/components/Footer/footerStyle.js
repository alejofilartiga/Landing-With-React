import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;
    width: 100%;
    background-color: #FFEBA8;
`

export const ImgFooter = styled.img`
    width: 100%;
    @media (max-width: 992px){
        width: 100%;
    }
    @media (max-width: 576px){
        width: 100%;
    }

`

export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 96%;
    
    @media (max-width: 992px){
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
    }
    @media (max-width: 576px){
        justify-content: center;
        padding-top: 40px;
        gap: 30px;
        flex-wrap: wrap;
    }

`

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    @media (max-width: 576px){
        gap: 10px;
    }

`
export const TitleSocial = styled.h2`
    font-size: 30px;
    text-align: center;

`

export const SocialImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
`

export const SocialImg = styled.img`
    width: 40px;
`

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const TitleData = styled.p`
    font-size: 15px;
`


