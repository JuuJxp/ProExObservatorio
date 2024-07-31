import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { Title } from '../LinhasDePesquisa/style';
import cinza from '../../assets/corBase.jpeg'
import Carousel from '../../components/Carousel/Carousel';
import { NuvemTitle, Subtitle } from './style';
import WordCloudComponent from '../../components/WordCloud/WordCloud';

const mapsData = [
    {
      image: "https://s3.static.brasilescola.uol.com.br/be/2021/08/1-mapa-fisico-brasil.jpg",
      date: '01/01/2024',
      title: 'Título da pesquisa que gerou esse mapa',
      author: 'Autor: nome do autor que realizou a pesquisa',
    },
    {
        image: cinza,
        date: '01/01/2024',
        title: 'Título da pesquisa que gerou esse mapa',
        author: 'Autor: nome do autor que realizou a pesquisa',
      },
      {
        image: cinza,
        date: '01/01/2024',
        title: 'Título da pesquisa que gerou esse mapa',
        author: 'Autor: nome do autor que realizou a pesquisa',
      },
      {
        image: "https://escolaeducacao.com.br/wp-content/uploads/2020/04/tipos-de-mapas-mapa-demogr%C3%A1fico.png",
        date: '01/01/2024',
        title: 'Título da pesquisa que gerou esse mapa',
        author: 'Autor: nome do autor que realizou a pesquisa',
      },
    // Adicione mais itens conforme necessário
  ];

  const graphicsData = [
    {
      image: "https://s2.static.brasilescola.uol.com.br/img/2018/06/exemplo-de-grafico-de-barras.jpg",
      date: '01/01/2024',
      title: 'Título da pesquisa que gerou esse gráfico',
      author: 'Autor: nome do autor que realizou a pesquisa',
    },
    {
        image: cinza,
        date: '01/01/2024',
        title: 'Título da pesquisa que gerou esse gráfico',
        author: 'Autor: nome do autor que realizou a pesquisa',
    },
    {
    image: cinza,
    date: '01/01/2024',
    title: 'Título da pesquisa que gerou esse gráfico',
    author: 'Autor: nome do autor que realizou a pesquisa',
    },
    // Adicione mais itens conforme necessário
  ];
  const citysData = [
    {
      image: "https://www.blog.cardinali.com.br/wp-content/uploads/2020/10/sao-carlos-sp-984x480.jpg",
      date: 'São Carlos',
      showOnlyTitle: true,
    },
    {
        image: cinza,
        date: 'Araraquara',
        showOnlyTitle: true,
    },
    {
        image: cinza,
        date: 'Jaú',
        showOnlyTitle: true,
    },
    // Adicione mais itens conforme necessário
  ];
const Projects: React.FC = () => {
    return (
        <>
            <Header />
            <Title> Mapas Gerados </Title>
            <Carousel items={mapsData}/>
            <Title> Gráficos Gerados </Title>
            <Carousel items={graphicsData}/>
            <Title> Cidades pesquisadas </Title>
            <Carousel items={citysData}/>
            <NuvemTitle>
                <Title> Nuvem de Palavras-chave</Title>
                <Subtitle> Gerada através de coleta de teses e dissertações</Subtitle>
            </NuvemTitle>
            <WordCloudComponent/>

        </>
    );
};

export default Projects;
