import styled from "styled-components";

export const ProductSection = styled.section`
    background-color: #E8EDDF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const TitleProduct = styled.h2`
    font-size: 50px;
    text-align: center;

`

export const ProductsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 50px;
`

export const CardProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: #333533;
    padding: 20px;
    border-radius: 20px;
`

export const CardImg = styled.img`
    width: 200px;
    border-radius: 15px;
`

export const CardTitle = styled.h2`
    color: white;
    text-align: center;
    font-size: 40px;
`

export const CardStars = styled.img`
    width: 140px;
`

