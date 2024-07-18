import {
        ContactSection,
        ContactContainer,
        FormContainer,
        FormTitle,
        FormInput,
        TextArea,
        SubmitButton,
        ContactImg
} from './contactSyle'

import Img from './img/contact.webp'

function Contact() {
  return (
    <ContactSection> 
      <ContactContainer>
        <FormTitle>¡Contactanos!</FormTitle>
        <FormContainer>
          <FormInput placeholder='Nombre' type='text' />
          <FormInput placeholder='Apellido'  type='text'/>
          <FormInput placeholder='Email'  type='email'/>
          <TextArea placeholder='Mensaje'/>
        </FormContainer>
        <SubmitButton>ENVIAR</SubmitButton>
      </ContactContainer>
      <ContactImg src={Img}/>
    </ContactSection>
  )
}

export default Contact