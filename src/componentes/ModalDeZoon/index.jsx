import styled from 'styled-components';
import Imagem from '../Galeria/imagem/index';
import { IoClose } from "react-icons/io5";
import BotaoIcone from './../BotaoIcone/index';



const Overlay = styled.div`
    background-color: rgba(0, 0 , 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const DialogStyled = styled.dialog`
    position: fixed;
    top: 5%;
    background-color: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    & form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
            color: white;
            background-color: transparent;
        }
    }

`

function ModalZoom({ foto, aoFechar, aoResolverFavorito }) {
    return (
        <>
            {foto && <>
                <Overlay />
                <DialogStyled open={!!foto} onClose={aoFechar}>
                    <Imagem foto={foto} expandida={true} aoResolverFavorito={aoResolverFavorito} />
                    <form method="dialog">
                        <BotaoIcone formMethod='dialog'><IoClose size={30}/></BotaoIcone>
                    </form>
                </DialogStyled>
            </>}
        </>
    )
}

export default ModalZoom;