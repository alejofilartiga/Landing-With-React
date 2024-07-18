import styled from 'styled-components'

export const AboutSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #242423;
    color: white;

`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MainTitle = styled.h2`
    font-size: 100px;
    text-align: center;

    @media (max-width: 992px){
        font-size: 50px;

    }

`

export const MainImage = styled.img`
    width: 95%;

`

export const MainParagraph = styled.p`
    width: 90%;
    font-size: 20px;
    text-align: center;
`


export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const InfoTitle = styled.h2`
    font-size: 50px;
    text-align: center;
`

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 60px;
`

export const InfoImage = styled.img`
    width: 90%;
`

export const SubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`

export const SubInfoImg = styled.img`
    width: 200px;
    border-radius: 50%;
`
