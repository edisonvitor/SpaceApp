import styled from 'styled-components';
import tags from './tags.json'

const ContainerStyled = styled.div`
    display: flex;
    flex-grow: 1;
    padding: 1em;

`

const TagTitulo = styled.h3`
    font-size: 24px;
    color: #D9D9D9;
    margin-right: 35px;
`

const BotaoStyled = styled.button`
    background-color: rgba(217, 217, 217, 0.3);
    padding: 10px 8px;
    border: 2px solid transparent;
    transition: background-color 0.3s ease;
    border-radius: 10px;
    color: #FFFFFF;
    margin: 1em;
    cursor: pointer;
    box-sizing: border-box;
    &:hover {
        border-color: #C98CF1;
    }
`





function Tags ({setTag}) {
    return (
        <ContainerStyled>
            <TagTitulo>Busque por tags:</TagTitulo>
            {tags.map(tag => <BotaoStyled key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</BotaoStyled>)}
        </ContainerStyled>
    )

}

export default Tags;