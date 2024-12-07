import React from 'react';
import Header from '../../components/Header/Header';
import { Container, Group, Linha, Linhas, Title } from '../LinhasDePesquisa/style';
import { SecondaryColor } from '../../components/Header/style';
import cinza from '../../assets/corBase.jpeg'
import { Img, Label } from './style';
import pri from '../../assets/pri.jpeg'

interface Team {
  src: string;
  label: string;
  cargo: string;
}

interface TeamSection {
  title: string;
  members: Team[];
}

const teamData: TeamSection[] = [
  {
    title: 'Professores',
    members: [
      { src: 'https://www.ppgeu.ufscar.br/pt-br/assets/imagens/docentes/luciana.jpg/@@images/6672d9a5-658a-4270-a9b9-c4d37f9ea6fd.jpeg', label: 'Luciana Márcia Gonçalves', cargo: 'Professora' },
      { src: 'https://www.ppgeu.ufscar.br/pt-br/assets/imagens/docentes/elza-miyasaka.jpg/@@images/b6c065f7-ab91-44b2-aecf-6413fdfbee65.jpeg', label: 'Elza Luli Miyaska', cargo: 'Professora' },
    ]
  },
  {
    title: 'Atuantes no projeto',
    members: [
      { src: 'https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4584076E4', label: 'Cláudio Robert Pierini', cargo: 'Pós-doutorando' },
      { src: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=o6k5BgQAAAAJ&citpid=3', label: 'Tatiane Ferreira Olivatto', cargo: 'Doutoranda' },
      { src: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=L_3ciLAAAAAJ&citpid=2', label: 'Natasha Nême Gonçalves de Almeida', cargo: 'Mestranda' },
      { src: pri, label: 'Priscila Kauana Barelli Forcel', cargo: 'Mestranda' },
      { src: 'https://0.academia-photos.com/291307058/138241928/127709522/s200_sandra.batista_medeiros.jpeg', label: 'Sandra Batista Medeiros', cargo: 'Doutoranda' },
      { src: 'cinza', label: 'Gabriella Barreiros da Silva', cargo: 'Mestranda' },
      { src: cinza, label: 'Julia Neves de Andrade', cargo: 'Doutoranda' },
      { src: cinza, label: 'Julia Tavares dos Santos', cargo: 'Graduanda' },
    ]
  },
  {
    title: 'Ex-membros',
    members: [
      { src: "https://www5.pucsp.br/eitt/img/membros/avatar-neutro-barroco.png", label: 'EXEMPLO', cargo: 'EXEMPLO' },
      // Adicione mais itens conforme necessário
    ]
  }
];

const TeamMates: React.FC = () => {
  // Quando o array de times passa de 5 em uma linha, faz uma divisão para descer para a próxima
  const divideArray = (array: Team[], size: number): Team[][] => {
    const result: Team[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  return (
    <>
      <Header />
      <Title> Conheça nossos colaboradores </Title>
      <Container>
        {/* TeamData dividido por sections professor, atuantes, etc */}
        {teamData.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <span>{section.title}: </span>
            {/* As linhas possuem as bolinhas com informações, de 5 em 5 o array é dividido */}
            <Linhas>
              {divideArray(section.members, 5).map((group, groupIndex) => (
                <Group key={groupIndex}>
                  {group.map((member, memberIndex) => (
                    // No group temos a src da imagem, o nome e o título do colaborador
                    <Linha key={memberIndex}>
                      <Img src={member.src} alt={`member-${sectionIndex}-${memberIndex}`} />
                      <Label>{member.label}</Label>
                      <SecondaryColor>{member.cargo}</SecondaryColor>
                    </Linha>
                  ))}
                </Group>
              ))}
            </Linhas>
          </div>
        ))}
      </Container>
    </>
  );
};

export default TeamMates;