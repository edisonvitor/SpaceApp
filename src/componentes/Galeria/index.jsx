import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./imagem";

const GaleriaContainer = styled.div`
    display: flex;
    justify-content: space-between;

`

const SecaoFluida = styled.section`
     flex-grow: 1;

`
const SesaoFluidaFotos = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1em;

    

`
function Galeria({ fotos = [], aoFotoSelecionada, aoResolverFavorito, setTag }) {
    return (
        <>
            <Tags setTag={setTag}/>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <SesaoFluidaFotos>
                        {fotos.map(foto =>
                            <Imagem
                                aoZoonSolicitado={aoFotoSelecionada}
                                key={foto.id}
                                foto={foto}
                                aoResolverFavorito={aoResolverFavorito}                             
                            />)}
                    </SesaoFluidaFotos>
                </SecaoFluida>
                <Populares 
                    fotos={fotos}
                />
            </GaleriaContainer>

        </>
    )
}

export default Galeria;

