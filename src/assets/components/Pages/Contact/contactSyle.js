import styled from 'styled-components'

export const ContactSection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    background-color: #242423;
    gap: 20px;
`
export const ContactContainer = styled.div`
    background-color: #E8EDDF;
    width: 50%;
    height: 500px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
`

export const FormContainer = styled.form`
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 10px;
`

export const FormTitle = styled.h2`
    font-size: 25px;
`

export const FormInput = styled.input`
    width: 98%;
`

export const TextArea = styled.textarea`
    width: 98%;
    height: 200px;
    resize: none;
`

export const SubmitButton = styled.button`
    background-color: #FFC300;
    color: black;
    width: 40%;
    margin: 10px;
    padding: 10px;
    text-align: center;
`

export const ContactImg = styled.img`
    @media (max-width: 992px){
        display: none;
    }
`