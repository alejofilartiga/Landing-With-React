import {
        AboutSection,
        MainContainer,
        MainTitle,
        MainImage,
        MainParagraph,
        InfoContainer,
        InfoTitle,
        ImgContainer,
        InfoImage,
        SubContainer,
        SubInfoImg
} from './aboutStyle'


import Main from './img/abt-main.jpg'
import Materias from './img/abt-materia-prima.jpg'
import Prima1 from './img/abt-1.jpg'
import Prima2 from './img/abt-2.webp'
import Prima3 from './img/abt-3.jpg' 

function About() {
  return (
    <AboutSection>
      <MainContainer>
        <MainTitle>¡CONOCENOS!</MainTitle>
        <MainImage src={Main}/>
        <MainParagraph>Tau es una marca dedicada a ofrecer aderezos de calidad excepcional, diseñados para realzar el sabor de tus platillos favoritos. Desde su fundación, nuestra misión ha sido crear opciones deliciosas y saludables que inspiren a las personas a disfrutar de la cocina. Utilizamos ingredientes frescos y naturales, sin conservantes ni aditivos artificiales, para garantizar una experiencia gastronómica auténtica.

        Nuestra variedad de aderezos abarca sabores que se adaptan a todos los gustos y estilos de vida. Desde opciones veganas y sin gluten hasta aderezos cremosos y ligeros, cada producto está pensado para satisfacer las necesidades de nuestros clientes. Ya sea que estés preparando una ensalada fresca, marinando carnes o simplemente buscando un dip sabroso, Tau tiene la opción perfecta para ti.

        En Tau, también estamos comprometidos con la sostenibilidad y el bienestar del planeta. Utilizamos envases reciclables y promovemos prácticas responsables en toda nuestra cadena de producción. Creemos que disfrutar de una buena comida no debe comprometer el futuro de nuestro entorno, y trabajamos cada día para hacer de nuestra marca un referente en calidad y responsabilidad.</MainParagraph>
      </MainContainer>
      <InfoContainer>
        <InfoTitle>Nuestras Materias Primas</InfoTitle>
        <ImgContainer>
          <InfoImage src={Materias} />
          <SubContainer>
            <SubInfoImg src={Prima1} />
            <SubInfoImg src={Prima2} />
            <SubInfoImg src={Prima3}/>
          </SubContainer>
        </ImgContainer>
      </InfoContainer>
    </AboutSection>
  )
}

export default About