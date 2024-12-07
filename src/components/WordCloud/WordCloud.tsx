import React, { useEffect, useState } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { responsiveHeight } from '../../utils/responsiveUtils';
import { researchData, ResearchItem } from '../../utils/ResearchData';

// Extraindo palavras-chave das teses e dissertações
export const extractKeywords = (researchData: ResearchItem[]) => {
  const keywordMap: { [key: string]: number } = {};

  researchData.forEach((item) => {
    // Normalize the keywords by converting to lowercase and removing accents
    const keywordsArray = item.keywords.split(';').map(keyword => {
      // Convert to lowercase and trim spaces
      let normalizedKeyword = keyword.trim().toLowerCase();
      // Remove accents
      normalizedKeyword = normalizedKeyword.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      return normalizedKeyword;
    });
    keywordsArray.forEach((keyword) => {
      if (keywordMap[keyword]) {
        keywordMap[keyword] += 1;
      } else {
        keywordMap[keyword] = 1;
      }
    });
  });

  return Object.keys(keywordMap).map((keyword) => ({
    text: keyword,
    value: keywordMap[keyword] * 10,
  }));
};


// Dados de exemplo para a nuvem de palavras
export const words = [
  { text: 'Habitação', value: 1000 },
  { text: 'Colaboração', value: 900 },
  { text: 'Mapeamento', value: 800 },
  { text: 'Erosão Linear', value: 700 },
  { text: 'Saneamento', value: 600 },
  { text: 'Municípios', value: 500 },
  { text: 'Conservação', value: 400 },
  { text: 'Acessibilidade', value: 300 },
  { text: 'Função Social', value: 600 },
  { text: 'São Carlos', value: 400 },
  { text: 'Tratamento', value: 500 },
  // Adicione mais palavras conforme necessário
];
const colors = ['#3ba6d7', '#02000a', '#02203a', '#24a4c4', '#1c3166'];

const WordCloudComponent: React.FC = () => {
  const [wordss, setWords] = useState<{ text: string; value: number }[]>([]);

  useEffect(() => {
    // Extract keywords and set them as words for the word cloud
    const extractedWords = extractKeywords(researchData);
    setWords(extractedWords);
  }, []);
  return (
    <div style={{ height: responsiveHeight(500), width: '100%', marginTop:responsiveHeight(30) }}>
      <ReactWordcloud
        words={wordss}
        options={{ 
          rotations: 1,
          rotationAngles: [0, 0],
          fontSizes: [20, 100],
          padding: 15,
          colors: colors,
        }}
      />
    </div>
  );
};

export default WordCloudComponent;
