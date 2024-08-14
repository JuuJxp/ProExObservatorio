import React from 'react';
import Header from '../../components/Header/Header';
import { Title } from '../LinhasDePesquisa/style';
import Carousel from '../../components/Carousel/Carousel';
import { NuvemTitle, Subtitle } from './style';
import WordCloudComponent from '../../components/WordCloud/WordCloud';
import f1 from '../../assets/figuras/1/1_F3.png'
import { researchData, ResearchItem } from '../../utils/ResearchData';
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
      image: f1,
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
      image: "https://www.passeios.org/wp-content/uploads/2021/02/sao-carlos.jpg",
      date: 'São Carlos',
      showOnlyTitle: true,
    },
    {
      image: "https://rciararaquara.com.br/wp-content/uploads/2020/03/Cidade-01.jpg",
      date: 'Araraquara',
      showOnlyTitle: true,
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Santiago_de_Cali.jpg",
      date: 'Cali, São Paulo',
      showOnlyTitle: true,
    },
    {
      image: "https://www.passeios.org/wp-content/uploads/2019/08/Sao-Jose-do-Rio-Preto.jpg",
      date: 'São José do Rio Preto',
      showOnlyTitle: true,
    },
    {
      image: "https://www.guiadoturismobrasil.com/up/img/1441303768.jpg",
      date: 'Jarinu',
      showOnlyTitle: true,
    },
    {
      image: "https://t1.uc.ltmcdn.com/es/posts/0/5/4/por_que_se_llama_america_latina_43450_600.webp",
      date: 'América latina (diversos países) ',
      showOnlyTitle: true,
    },
    // Adicione mais itens conforme necessário
  ];

  const getAllMapsData = (researchData: ResearchItem[]): {
    image?: string;
    date: string;
    title?: string;
    author?: string;
    link?: string;
  }[] => {
    return researchData.flatMap((research) =>
      (research.mapImages || []).map((image) => ({
        image,
        date: research.date,
        title: research.title,
        author: research.author,
        link: research.link
      }))
    );
  };

  const getAllGraphicsData = (researchData: ResearchItem[]): {
    image?: string;
    date: string;
    title?: string;
    author?: string;
    link?: string;
  }[] => {
    return researchData.flatMap((research) =>
      (research.graphImages || []).map((image) => ({
        image,
        date: research.date,
        title: research.title,
        author: research.author,
        link: research.link
      }))
    );
  };
  const mapssData = getAllMapsData(researchData);
  const graphicssData = getAllGraphicsData(researchData);
  const Projects: React.FC = () => {
    return (
      <>
        <Header />
        <Title> Mapas Gerados </Title>
        <Carousel items={mapssData} showModal={true}/>
        <Title> Figuras Geradas </Title>
        <Carousel items={graphicssData} showModal={true}/>
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
