import React from 'react';
import Header from '../../components/Header/Header';
import { Title } from '../LinhasDePesquisa/style';
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
      image: "https://www.researchgate.net/publication/354139397/figure/fig1/AS:1060902182846465@1629950199683/Figura-01-Mapa-das-cidades-nas-regioes-hidrograficas-do-estado-de-Santa-Catarina-Fonte.png",
      date: '01/01/2024',
      title: 'Título da pesquisa que gerou esse mapa',
      author: 'Autor: nome do autor que realizou a pesquisa',
    },
    {
      image: "https://aracajumagazine.com.br/uploads/paragraphs/image/52d5183094785c9f.png",
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
      image: "https://adrianopataro.com.br/wp-content/uploads/2021/09/tipos-de-graficos-do-excel-colunas.png",
      date: '01/01/2024',
      title: 'Título da pesquisa que gerou esse gráfico',
      author: 'Autor: nome do autor que realizou a pesquisa',
    },
    {
      image: "https://www.guiadoexcel.com.br/wp-content/uploads/2021/09/imagem09.png",
      date: '01/01/2024',
      title: 'Título da pesquisa que gerou esse gráfico',
      author: 'Autor: nome do autor que realizou a pesquisa',
    },
    {
      image: "https://adrianopataro.com.br/wp-content/uploads/2021/09/tipos-de-graficos-do-excel-barras.png",
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
      image: "https://rciararaquara.com.br/wp-content/uploads/2020/03/Cidade-01.jpg",
      date: 'Araraquara',
      showOnlyTitle: true,
    },
    {
      image: "https://s2-g1.glbimg.com/8vBqj4-_AZHYix1lGNgZLsZW2M8=/0x0:1280x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/r/k/AQCTZPT4e75rZ9vstPGA/jau.jpg",
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
