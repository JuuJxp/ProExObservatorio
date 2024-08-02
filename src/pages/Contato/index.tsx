import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { Title } from '../LinhasDePesquisa/style';
import { Button, Input, Label, Container, InputWrapper, ButtonWrapper, Row, InputMessage } from './style';

interface FormData {
    nome: string;
    telefone: string;
    email: string;
    cidade: string;
    mensagem: string;
}

const Contact: React.FC = () => {
    // Informações a serem passadas adiante
    const [formData, setFormData] = useState<FormData>({
        nome: '',
        telefone: '',
        email: '',
        cidade: '',
        mensagem: ''
    });

    // Ativado quando o input é alterado, para guardar as informações dentro do nosso estado
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };

    // Ao clicar no botão de enviar mensagem
    const handleSubmit = () => {
        // Define os inputs como obrigatórios para o botão realizar sua função
        const requiredFields: (keyof FormData)[] = [
            'nome',
            'telefone',
            'email',
            'cidade',
            'mensagem'
        ];
        // Para os inputs obrigatórios não preenchidos, envia um alert para preenchê-los
        for (const field of requiredFields) {
            if (!formData[field]) {
                alert(`Por favor, preencha o campo ${field}`);
                return;
            }
        }
        console.log(formData);
        // Aqui será adicionada a lógica para enviar os dados
    };
    
    const inputs = [
        { label: 'Nome', name: 'nome', placeholder: 'Insira seu nome completo', type: 'text' },
        { label: 'Telefone', name: 'telefone', placeholder: '(00) 00000-0000', type: 'text' },
        { label: 'E-mail', name: 'email', placeholder: 'Insira seu e-mail', type: 'text' },
        { label: 'Cidade', name: 'cidade', placeholder: 'Insira a sua cidade', type: 'text' },
        { label: 'Mensagem', name: 'mensagem', placeholder: 'Insira a mensagem desejada', type: 'text', isMessage: true }
    ];

    // Funciona da mesma forma que Colaboradores, dividindo nosso array a cada n elementos
    const divideArray = (array: any[], size: number): any[][] => {
        const result: any[][] = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };
    // definindo que a cada 2 elementos o array será dividido
    const groupedInputs = divideArray(inputs, 2);

    return (
        <>
            <Header />
            <Title> Entre em Contato </Title>
            <Container>
                {/* Aqui estão os inputs utilizados */}
                {groupedInputs.map((group, groupIndex) => (
                    <Row key={groupIndex}>
                        {/* Aqui é realizada a divisão de 2 por linha */}
                        {group.map((input, inputIndex) => (
                            <InputWrapper key={inputIndex}>
                                <Label>{input.label}</Label>
                                {/* O input de mensagem tem um campo maior, por isso essa verificaçao */}
                                {input.isMessage ? (
                                    <InputMessage type={input.type} placeholder={input.placeholder} value={formData.mensagem} onChange={handleChange} name={input.name}/>
                                ) : (
                                    <Input type={input.type} placeholder={input.placeholder} value={formData[input.name as keyof FormData]} onChange={handleChange} name={input.name}/>
                                )}
                            </InputWrapper>
                        ))}
                    </Row>
                ))}
            </Container>
            <ButtonWrapper>
                <Button onClick={handleSubmit}> Enviar Mensagem</Button>
            </ButtonWrapper>
        </>
    );
};

export default Contact;
