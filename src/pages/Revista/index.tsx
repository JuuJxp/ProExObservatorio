import React from 'react';
import Header from '../../components/Header/Header';
import { Title } from '../LinhasDePesquisa/style';
import cinza from '../../assets/corBase.jpeg'
import revista from '../../assets/revista.png'
import Carousel from '../../components/Carousel/Carousel';
import { NuvemTitle, Subtitle } from '../Projetos/style';
import { Buttons, ButtonsWrapper, ImageExtra, RevistaWrapper, Span } from './style';

const articlesData = [
    {
      date: '01/01/2024',
      title: 'Título muito longo de um artigo interessante',
      author: 'Autor: nome do autor que realizou a pesquisa',
    },
    {
      date: '01/01/2024',
      title: 'Título muito longo de um artigo interessante',
      author: 'Autor: nome do autor que realizou a pesquisa',
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
const Extras: React.FC = () => {
    return (
        <>
            <Header />
            <Title> Artigos e Livros </Title>
            <Carousel items={articlesData}/>
            <NuvemTitle>
                <Title> Revista</Title>
                <Subtitle> Engenharia urbana em debate </Subtitle>
            </NuvemTitle>
            <RevistaWrapper>
                <ImageExtra src={revista}/>
                <Span>A Engenharia Urbana em Debate é um periódico online de caráter acadêmico e científico vinculado ao PPGEU, e tem como objetivo publicar pesquisas voltadas ao conhecimento e práticas sobre a gestão e atuação técnico-profissional no território.</Span>
                <ButtonsWrapper>
                    <Buttons> Edição Atual </Buttons>
                    <Buttons> Edição Completa </Buttons>
                </ButtonsWrapper>
            </RevistaWrapper>

        </>
    );
};

export default Extras;
