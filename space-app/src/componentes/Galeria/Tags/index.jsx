import styled from 'styled-components';
import tags from './tags.json';

const TagsContainer = styled.section`
    display: flex;
    align-items: center;
`;
const TituloTag = styled.h3`
    color: #D9D9D9;
`;

const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 12px;
`;

const ButtonTags = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`;


const Tags = () => {
    return <>
        <TagsContainer>
            <TituloTag>Busque por tags:</TituloTag>
            <ContainerButtons
            >
                {tags.map(tag => <ButtonTags key={tag.id}>{tag.titulo}</ButtonTags>)}
            </ContainerButtons>
        </TagsContainer>
    </>
}

export default Tags;