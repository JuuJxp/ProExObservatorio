import React from 'react';
import Header from '../../components/Header/Header';
import { Title } from '../LinhasDePesquisa/style';
import cinza from '../../assets/corBase.jpeg'
import revista from '../../assets/revista.png'
import Carousel from '../../components/Carousel/Carousel';
import { NuvemTitle, Subtitle } from '../Projetos/style';
import { Buttons, ButtonsWrapper, ImageExtra, RevistaWrapper, Span } from './style';
import artigo1 from '../../assets/artigo1.png'
const articlesData = [
    {
      image: artigo1,
      date: '2023-12-23',
      title: 'Instrumentos Urbanísticos de Acesso à Terra em Ribeirão Preto – SP: O processo para sua implementação',
      author: 'Miyasaka, E. L., Brianezi, B., Silva, G. B. da, Forcel, P. K. B., & Melo, R. E. B. de. (2023).',
      link: 'https://publicacoes.amigosdanatureza.org.br/index.php/anap_brasil/article/view/4592'
    },
    {
      image: 'https://publicacoes.amigosdanatureza.org.br/public/journals/5/cover_issue_227_pt_BR.jpg',
      date: '05-12-2020',
      title: 'O desenvolvimento urbano de Araraquara – SP: a relação entre a produção do espaço urbano e a segregação socioespacial.',
      author: 'Carvalho, C. D. G. de, & Gonçalves, L. M. (2020).',
      link: 'https://publicacoes.amigosdanatureza.org.br/index.php/gerenciamento_de_cidades/article/view/2575'
    },
    {
      date: '01/01/2024',
      title: 'Título muito longo de um livro interessante',
      author: 'Autor: nome do autor que realizou a pesquisa',
    },
    {
      date: '01/01/2024',
      title: 'Título muito longo de um artigo interessante',
      author: 'Autor: nome do autor que realizou a pesquisa',
    },
    // Adicione mais itens conforme necessário
];
const booksData = [
  {
    date: '01/01/2024',
    title: 'Título muito longo de um livro interessante',
    author: 'Autor: nome do autor que realizou a pesquisa',
  },
  {
    date: '01/01/2024',
    title: 'Título muito longo de um livro interessante',
    author: 'Autor: nome do autor que realizou a pesquisa',
  },
  {
    date: '01/01/2024',
    title: 'Título muito longo de um livro interessante',
    author: 'Autor: nome do autor que realizou a pesquisa',
  },
  // Adicione mais itens conforme necessário
];

const handleSubmit = (key:string) => {
  if(key == 'submissao')
    window.location.href = 'https://www.engurbdebate.ufscar.br/index.php/engurbdebate/about/submissions';
  else if(key == 'atual')
    window.location.href = 'https://www.engurbdebate.ufscar.br/index.php/engurbdebate/issue/view/11';
}
const Extras: React.FC = () => {
    return (
        <>
            <Header />
            <Title> Livros </Title>
            <Carousel items={booksData}/>
            <Title> Artigos </Title>
            <Carousel items={articlesData}/>
            <NuvemTitle>
                <Title> Revista</Title>
                <Subtitle> Engenharia urbana em debate </Subtitle>
            </NuvemTitle>
            <RevistaWrapper>
                <ImageExtra src={revista}/>
                <Span>A Engenharia Urbana em Debate é um periódico online de caráter acadêmico e científico vinculado ao PPGEU, e tem como objetivo publicar pesquisas voltadas ao conhecimento e práticas sobre a gestão e atuação técnico-profissional no território.</Span>
                <ButtonsWrapper>
                    <Buttons onClick={() => handleSubmit('atual')}> Edição Atual </Buttons>
                    <Buttons onClick={() => handleSubmit('submissao')}> Submissão </Buttons>
                </ButtonsWrapper>
            </RevistaWrapper>

        </>
    );
};

export default Extras;
