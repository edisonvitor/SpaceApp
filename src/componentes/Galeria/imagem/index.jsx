import styled from "styled-components"
import { MdFavoriteBorder, MdFavorite  } from "react-icons/md";
import { CgArrowsExpandLeft } from "react-icons/cg";



const ImagemStyled = styled.figure`
    width: ${(props) => (props.$expandida ? '70%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;

    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h4 {
            margin: 0;
            font-size: 16px;
        }
    }
    footer {
        display: flex;
        button {
            background-color: transparent;
            border: none;
            outline: #fff;
            cursor: pointer;
            color: #fff;
        }
        }
`;



function Imagem({foto, expandida = false, aoZoonSolicitado, aoResolverFavorito}) {
    const iconeFavorito = foto.favorita ? <MdFavorite/> : <MdFavoriteBorder/>

    return (
        <ImagemStyled $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} alt={foto.alt} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <footer>
                    <h4>{foto.fonte}</h4>
                    <div>
                        <button onClick={() => aoResolverFavorito(foto)}>{iconeFavorito}</button>
                        {!expandida && <button aria-hidden={expandida} onClick={() => aoZoonSolicitado(foto)}><CgArrowsExpandLeft /></button>}
                    </div>
                </footer>
            </figcaption>
        </ImagemStyled>
    )
}

export default Imagem