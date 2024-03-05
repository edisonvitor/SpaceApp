import styled from "styled-components"
import CampoTexto from "../CampoTexto"



const CabecalhoStyled = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 211.42px;
    }
    


` 

function Cabecalho ({filtro, setFiltro}) {
    return (
        <CabecalhoStyled>
            <img src="/public/imagens/logo.png" alt="Logo SpaceApp" />
            <CampoTexto 
                filtro={filtro}
                setFiltro={setFiltro}
            />
        </CabecalhoStyled>
    )
}

export default Cabecalho