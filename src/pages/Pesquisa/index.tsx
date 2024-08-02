import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { Title } from '../LinhasDePesquisa/style';
import Carousel from '../../components/Carousel/Carousel';
import { InputWrapper, Label } from '../Contato/style';
import { InputResearch, SELECT, Container, SearchIcon, FilterTag, ClearButton, Flexend } from './style';
import { BsSearch, BsX } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';

interface ResearchItem {
    date: string;
    title: string;
    author: string;
    resume: string;
    keywords: string;
    category: string;
}

const researchData: ResearchItem[] = [
    {
        date: '01/02/2024',
        title: 'Habitação de interesse social',
        author: 'Julia Tavares',
        resume: 'Este estudo investiga a habitação de interesse social no Brasil.',
        keywords: 'habitação, interesse social, Brasil',
        category: 'habitação',
    },
    {
        date: '01/01/2024',
        title: 'Sistemas de Esgoto de São Carlos',
        author: 'Luisa Tavares',
        resume: 'Análise dos sistemas de esgoto em São Carlos.',
        keywords: 'esgoto, São Carlos, análise',
        category: 'esgoto',
    },
    {
        date: '01/03/2020',
        title: 'Habitação de populações indígenas',
        author: 'Natasha Nême',
        resume: 'Estudo sobre as condições de habitação das populações indígenas.',
        keywords: 'habitação, indígenas, estudo',
        category: 'habitação',
    },
    {
        date: '01/04/2022',
        title: 'Habitação de povos originários em terrenos irregulares',
        author: 'Sandra Santos',
        resume: 'falta de dignidade de moradia para povos originários causa grande risco',
        keywords: 'risco, dignidade habitacional, habitação, povos originários',
        category: 'habitação'
    },
];

const researchOptions = [
    { value: 'title', label: 'Título' },
    { value: 'author', label: 'Autor' },
    { value: 'resume', label: 'Resumo' },
    { value: 'date', label: 'Data' },
    { value: 'keywords', label: 'Palavras-chave' },
];
const Research: React.FC = () => {
    const [research, setResearch] = useState('');
    const [select, setSelect] = useState<string>(researchOptions[0].value);
    const [filteredData, setFilteredData] = useState<ResearchItem[]>(researchData);
    const navigate = useNavigate();
    const location = useLocation();
    
    const queryParams = new URLSearchParams(location.search);
    const categoryFilter = queryParams.get('category') || '';

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setResearch(value);
    };
    const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setSelect(value);
    };
    const clearCategoryFilter = () => {
        navigate(`/research`);
    };

    useEffect(() => {
        const filterData = () => {
            let filtered = researchData;
            if (categoryFilter) {
                filtered = filtered.filter(item => item.category.toLowerCase() === categoryFilter.toLowerCase());
            }
            if (research !== '') {
                    filtered = filtered.filter(item => {
                    const key = select as keyof ResearchItem;
                    return item[key].toLowerCase().includes(research.toLowerCase());
                });
            }
            setFilteredData(filtered);
        };
        filterData();
    }, [research, select, categoryFilter]);

    return (
        <>
            <Header />
            <Title> Busca de teses e dissertações </Title>
            <Container>
                <InputWrapper>
                    <Label> Selecione o modo de busca:</Label>
                    <SELECT onChange={handleChangeSelect}>
                        {researchOptions.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </SELECT>
                </InputWrapper>
                <InputWrapper>
                        <Label> Insira o que deseja encontrar:</Label>
                        <InputWrapper>
                            <InputResearch
                                type='text'
                                placeholder='Ex: Habitação social de mercado'
                                value={research}
                                onChange={handleChange}
                            />
                            <SearchIcon>
                                <BsSearch />
                            </SearchIcon>
                        </InputWrapper>
                    </InputWrapper>
            </Container>
            {categoryFilter && (
                <Flexend>
                    <FilterTag>
                        <span>Filtrando por: {categoryFilter}</span>
                        <ClearButton onClick={clearCategoryFilter}>
                            <BsX />
                        </ClearButton>
                    </FilterTag>
                </Flexend>
            )}
            <Title> Pesquisas encontradas </Title>
            <Carousel items={filteredData}/>
        </>
    );
};

export default Research;
