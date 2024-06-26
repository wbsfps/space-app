import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display: flex;
`;

const SecaoFluida = styled.section`
    flex-grow: 1;
`;

const ImagensContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
`;

const Galeria = ({ fotos = [] }) => {
    return (
        <>
            <Tags></Tags>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => <Imagem
                            titulo={foto.titulo}
                            fonte={foto.fonte}
                            key={foto.id}
                            foto={foto.path}
                            ativo={false}
                            imagemExpandir={"/icones/expandir.png"}
                        />)
                        }
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    );
}

export default Galeria;