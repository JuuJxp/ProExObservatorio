import React, { useEffect, useState } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { responsiveHeight } from '../../utils/responsiveUtils';

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
  return (
    <div style={{ height: responsiveHeight(500), width: '100%', marginTop:responsiveHeight(30) }}>
      <ReactWordcloud
        words={words}
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
