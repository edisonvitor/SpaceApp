import styled from "styled-components"


const Container = styled.footer`
    display: flex;
    background-color: #04244F;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    color: #fff;
    font-size: 1rem;
    gap: 2rem;
    margin-top: 5em ;
    padding: 0 2em;

    & div {
        display: flex;
        gap: 2em;
    }
`

function Rodape () {
    return (
        <Container>
            <div>
                <a href=""><img src="/public/imagens//sociais/facebook.svg" alt="" /></a>
                <a href=""><img src="/public/imagens//sociais/instagram.svg" alt="" /></a>
                <a href=""><img src="/public/imagens//sociais/twitter.svg" alt="" /></a>                
            </div>
            <h4>Desenvolvido por Alura</h4>
        
        </Container>
    )

}

export default Rodape