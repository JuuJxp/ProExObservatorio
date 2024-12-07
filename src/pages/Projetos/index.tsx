import React from 'react';
import Header from '../../components/Header/Header';
import { Title } from '../LinhasDePesquisa/style';
import Carousel from '../../components/Carousel/Carousel';
import { NuvemTitle, Subtitle } from './style';
import WordCloudComponent from '../../components/WordCloud/WordCloud';
import f1 from '../../assets/figuras/1/1_F3.png'
import { researchData, ResearchItem } from '../../utils/ResearchData';

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
      date: 'Cali',
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
        <Title> Mapas gerados </Title>
        <Carousel items={mapssData} showModal={true}/>
        <Title> Gráficos e figuras geradas </Title>
        <Carousel items={graphicssData} showModal={true}/>
        <Title> Cidades pesquisadas </Title>
        <Carousel items={citysData}/>
        <NuvemTitle>
          <Title> Nuvem de palavras-chave</Title>
          <Subtitle> Gerada através de coleta de teses e dissertações</Subtitle>
        </NuvemTitle>
        <WordCloudComponent/>
        </>
    );
  };

export default Projects;
