import styled from "styled-components";

export const HeroSection = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #242423;
    padding-top: 15%;
    @media (max-width: 576px){
        padding-top: 150px;
    }

`

export const TitleContainer = styled.h2`
    color: white;
    font-size: 50px;
    text-align: center;
    font-weight: 800;
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
`

export const ImageHero = styled.img`
    width: 500px;
    border-radius: 10px;

    @media (max-width: 576px){
        width: 300px;
    }

`
