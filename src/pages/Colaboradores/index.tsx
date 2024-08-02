import React from 'react';
import Header from '../../components/Header/Header';
import { Container, Group, Imagem, Linha, Linhas, Title } from '../LinhasDePesquisa/style';
import { SecondaryColor } from '../../components/Header/style';
import cinza from '../../assets/corBase.jpeg'

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
      { src: cinza, label: 'Julia Tavares', cargo: 'Aluna bolsista' },
      { src: cinza, label: 'Julia Tavares', cargo: 'Aluna bolsista' },
      { src: cinza, label: 'Julia Tavares', cargo: 'Aluna bolsista' },
      { src: cinza, label: 'Julia Tavares', cargo: 'Aluna bolsista' },
      { src: cinza, label: 'Julia Tavares', cargo: 'Aluna bolsista' },
      // Adicione mais itens conforme necessário
    ]
  },
  {
    title: 'Atuantes no projeto',
    members: [
      { src: cinza, label: 'Julia Tavares', cargo: 'Aluna bolsista' },
      { src: cinza, label: 'Julia Tavares', cargo: 'Aluna bolsista' },
      { src: cinza, label: 'Julia Tavares', cargo: 'Aluna bolsista' },
      { src: cinza, label: 'Julia Tavares', cargo: 'Aluna bolsista' },
      { src: cinza, label: 'Julia Tavares', cargo: 'Aluna bolsista' },
      // Adicione mais itens conforme necessário
    ]
  },
  {
    title: 'Ex-membros',
    members: [
      { src: cinza, label: 'Julia Tavares', cargo: 'Aluna bolsista' },
      { src: cinza, label: 'Julia Tavares', cargo: 'Aluna bolsista' },
      { src: cinza, label: 'Julia Tavares', cargo: 'Aluna bolsista' },
      { src: cinza, label: 'Julia Tavares', cargo: 'Aluna bolsista' },
      { src: cinza, label: 'Julia Tavares', cargo: 'Aluna bolsista' },
      { src: cinza, label: 'Julia Tavares', cargo: 'Aluna bolsista' },
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
                      <Imagem src={member.src} alt={`member-${sectionIndex}-${memberIndex}`} />
                      <span>{member.label}</span>
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