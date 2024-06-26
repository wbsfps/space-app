import styled from "styled-components";


const Figure = styled.figure`
    width: ${(props) => (props.$expandida ? '90%' : '460px')};
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
        h3,
        h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`;

const FooterContainer = styled.footer`
    display: flex;    
    justify-content: space-between;
    gap: 22px;
`;

const ContainerButton = styled.div`
    display: flex;
`;

const Button = styled.button`
    background: none;
    border: none;
`;
const Imagem = ({ foto, titulo, ativo = false, fonte, coracaoNaoPreenchido, imagemExpandir, expandida }) => {
    return <>
        <Figure $expandida={expandida}>
            <img src={foto} alt="" />
            <figcaption>
                <h3>{titulo}</h3>
                <FooterContainer>
                    <p>{fonte}</p>
                    <ContainerButton>
                        <Button><img src={ativo ? coracaoNaoPreenchido : "/icones/favorito-ativo.png"} alt="" /></Button>
                        <Button><img src={imagemExpandir} alt="" /></Button>
                    </ContainerButton>
                </FooterContainer>
            </figcaption>
        </Figure>
    </>
}

export default Imagem;