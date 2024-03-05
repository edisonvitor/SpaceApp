import {styled} from "styled-components"

const ItemListaStyled = styled.li`
    font-size: 1.5rem;
    line-height: 35px;
    font-family: ${props => props.ativo ? "GandhiSansBold" : "GandhiSansRegular"};
    color: ${props => props.$ativo ? "#7B78E5" : "#D9D9D9"};
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1em;
    cursor: pointer;

    
    
`

function ItemNavegacao ({texto, iconeAtivo, iconeInativo, ativo=false}) {
return (
    <ItemListaStyled $ativo={ativo}>
        <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
        {texto}

    </ItemListaStyled>
    )
}

export default ItemNavegacao