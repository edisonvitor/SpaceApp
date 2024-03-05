import {styled} from "styled-components"
import { useEffect, useState } from "react";
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from './componentes/Cabecalho/index';
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";
import fotos from "./fotos.json"
import ModalZoom from "./componentes/ModalDeZoon";
import Rodape from './componentes/Rodape/index';


const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  height: 100vh;
  `

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;

`

const MainContainerStyled = styled.main`
  display: flex;
  gap: 1em;
`

const ConteudoStyled = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

`

function App() {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [filtro, setFiltro] = useState('');
  const [tag, setTag] = useState(0)
  const [fotoComZoon, setFotoComZoon] = useState(null)

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo =!filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase());
      return filtroPorTag && filtroPorTitulo;
    })
    setFotosDaGaleria(fotosFiltradas);
  }, [filtro,tag])


  function aoResolverFavorito (foto) {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({...fotoSelecionada, favorita: !fotoSelecionada.favorita})
    }

    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria, favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho 
          filtro={filtro}
          setFiltro={setFiltro}
        />
        <MainContainerStyled>
          <BarraLateral />
          <ConteudoStyled>
            <Banner
              texto='A galeria mais completa de fotos do espaço!'
              backgroundImage={'/src/assets/banner.png'}
            />
            <Galeria 
              fotos={fotosDaGaleria}
              aoResolverFavorito={aoResolverFavorito}
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              setTag={setTag}
            />
          </ConteudoStyled>
        </MainContainerStyled>
      </AppContainer>
      <ModalZoom 
        aoFechar={() => setFotoSelecionada(null)}
        foto={fotoSelecionada}
        aoResolverFavorito={aoResolverFavorito}
      />
      <Rodape />
    </FundoGradiente>


  )
}

export default App
