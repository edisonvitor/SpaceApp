import Titulo from "../../Titulo";
import fotos from "./FotosPopulares.json"
import styled from "styled-components";

const ColunaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
const Imagem = styled.img`
    max-width: 200px;
    border-radius: 20px;
`

const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;



function Populares() {
    return (
        <section>
            <Titulo $alinhamento={"center"}>
                Populares
            </Titulo>
            <section>
                {fotos.map(foto => <Imagem key={foto.id} src={foto.path} alt={foto.alt}/>)}
            </section>
            <Botao>Ver Mais</Botao>
        </section>
    )
}

export default Populares;