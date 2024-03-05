import {styled} from "styled-components"
import ItemNavegacao from './ItemNavegacao/index';




const ListaStyled = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

function BarraLateral () {
    return (
        <aside>
            <nav>
                <ListaStyled>
                    <ItemNavegacao
                        iconeAtivo="/public/icones/home-ativo.png"
                        iconeInativo="/public/icones/home-inativo.png"
                        ativo={true}
                        texto="Inicio"
                    />
                    <ItemNavegacao
                        iconeAtivo="/public/icones/mais-vistas-ativo.png"
                        iconeInativo="/public/icones/mais-vistas-inativo.png"
                        texto="Mais Vistas"
                    />
                    <ItemNavegacao
                        iconeAtivo="/public/icones/mais-curtidas-ativo.png"
                        iconeInativo="/public/icones/mais-curtidas-inativo.png"
                        texto="Mais Curtidas"
                    />
                    <ItemNavegacao
                        iconeAtivo="/public/icones/novas-ativo.png"
                        iconeInativo="/public/icones/novas-inativo.png"
                        texto="Novas"
                    />
                    <ItemNavegacao
                        iconeAtivo="/public/icones/surpreenda-me-ativo.png"
                        iconeInativo="/public/icones/surpreenda-me-inativo.png"
                        texto="Surpreenda-me"
                    />
                        
                </ListaStyled>
            </nav>
        </aside>
    )
}

export default BarraLateral