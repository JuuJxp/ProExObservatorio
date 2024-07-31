import React from 'react';
import Header from '../../components/Header/Header';
import { Container, Group, Imagem, Linha, Linhas, Title } from './style';
import cinza from '../../assets/corBase.jpeg'
import exemplo from '../../assets/exemploHabit.jpeg'

interface ResearchLine {
  src: string;
  label: string;
}

const researchLines: ResearchLine[] = [
  { src: exemplo, label: 'Habitação' },
  { src: cinza, label: 'Habitação' },
  { src: cinza, label: 'Habitação' },
  { src: cinza, label: 'Habitação' },
  { src: cinza, label: 'Habitação' },
  { src: cinza, label: 'Habitação' },
  { src: cinza, label: 'Habitação' },
  { src: cinza, label: 'Habitação' },
  { src: cinza, label: 'Habitação' },
  { src: cinza, label: 'Habitação' },
  // Adicione mais itens conforme necessário
];

const ResearchLines: React.FC = () => {
  // Mesma ideia de divisão de elementos por linha, quebra a cada n elementos
  const divideArray = (array: ResearchLine[], size: number): ResearchLine[][] => {
    const result: ResearchLine[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
  // definindo a divisão do array a cada 5 elementos
  const groupedLines = divideArray(researchLines, 5);
  return (
    <>
      <Header />
      <Title> Conheça nossa área de atuação </Title>
      <Container>
        <span> Linhas de pesquisa: </span>
        <Linhas>
          {groupedLines.map((group, index) => (
            // Grupo com todos os elementos do array de linhas
            <Group key={index}>
              {/* Diferenciação de grupo composto por n elementos */}
              {group.map((line, lineIndex) => (
                <Linha key={lineIndex}>
                  <Imagem src={line.src} alt={`linha${lineIndex}`} />
                  <span>{line.label}</span>
                </Linha>
              ))}
            </Group>
          ))}
        </Linhas>
      </Container>
    </>
  );
};

export default ResearchLines;
