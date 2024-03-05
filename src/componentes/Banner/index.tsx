import styled from "styled-components";


const FigureStyled = styled.figure`
   background-image: ${props => `url(${props.$backgroundImage})`};
   display: flex;
   align-items: center;
   flex-grow: 1;
   background-repeat: no-repeat;
   min-height: 328px;
   margin: 0;
   border-radius: 22px;
   max-width: 100%;
   background-size: cover;

`

const TituloStyled = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
    
`


function Banner ({texto, backgroundImage}) {
    return (
        <FigureStyled $backgroundImage={backgroundImage}>
            <TituloStyled>
                {texto}
            </TituloStyled>
        </FigureStyled>
        
    )
}

export default Banner;