import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { Container, Group, Imagem, Linha, Linhas, Title } from './style';
import cinza from '../../assets/corBase.jpeg'
import { useNavigate } from 'react-router-dom';
import { words } from '../../components/WordCloud/WordCloud';

interface ResearchLine {
  src: string;
  label: string;
}

const ResearchLines: React.FC = () => {
  const [researchLines, setResearchLines] = useState<ResearchLine[]>([]);
  const navigate = useNavigate();

  // Mesma ideia de divisão de elementos por linha, quebra a cada n elementos
  const divideArray = (array: ResearchLine[], size: number): ResearchLine[][] => {
    const result: ResearchLine[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const handleLineClick = (category: string) => {
    navigate(`/research?category=${encodeURIComponent(category)}`);
  };

  // definindo a divisão do array a cada 5 elementos
  const groupedLines = divideArray(researchLines, 5);

  // Definindo as palavras-chaves mais constantes (topN : número de categorias a serem exibidas)
  const getTopWords = (words: { text: string; value: number }[], topN: number) => {
    const frequencia: Record<string, number> = {};

    // definindo a frequencia de cada palavra
    words.forEach(word => {
      frequencia[word.text] = (frequencia[word.text] || 0) + word.value;
    });

    // Ordena as palavras pela frequência
    const sortedWords = Object.entries(frequencia) // converte o objeto passado em um array com o primeiro elemento chave e segundo elemento valor

      // ordena o array pela frequência
      .sort(([, a], [, b]) => b - a)
      // seleciona os primeiros "topN" elementos
      .slice(0, topN)
      // extrai as palavras do array
      .map(([text]) => text);

    return sortedWords;
  };
  useEffect(() => {
    const topWords = getTopWords(words, 10);
    
    const linhasDePesquisa = topWords.map(palavra => ({
      src: cinza, // terá que ser gerado ou então mudarmos a forma de colocar
      label: palavra,
    }));

    setResearchLines(linhasDePesquisa);
  }, []);

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
                <Linha key={lineIndex} onClick={() => handleLineClick(line.label)}>
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
