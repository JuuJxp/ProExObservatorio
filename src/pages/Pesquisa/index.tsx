import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { Title } from '../LinhasDePesquisa/style';
import Carousel from '../../components/Carousel/Carousel';
import { InputWrapper, Label } from '../Contato/style';
import { InputResearch, SELECT, Container, SearchIcon, FilterTag, ClearButton, Flexend } from './style';
import { BsSearch, BsX } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import { researchData } from '../../utils/ResearchData';

interface ResearchItem {
    date: string;
    title: string;
    author: string;
    resume: string;
    keywords: string;
    category: string;
    link: string;
}

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
            <Carousel items={filteredData} showOnlyTitle={true}/>
        </>
    );
};

export default Research;
