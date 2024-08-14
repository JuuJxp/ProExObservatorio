// src/components/Header.tsx

import React, { useState } from "react";
import { Container, Item, Logo, Menu, MenuItem, Modal, SecondaryColor, Title, WhiteColor, SubMenu, SubMenuItem } from "./style";
import logo from '../../assets/OBSERVATORIO1.png';
import { useNavigate } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';

const Header: React.FC = () => {
  const [submenuVisible, setSubmenuVisible] = useState<string | null>(null);

  const menuData = [
    {
      title: 'SOBRE',
      items: ['Linhas de pesquisa', 'Colaboradores']
    },
    {
      title: 'BIBLIOTECA',
      items: [
        { name: 'Pesquisas concluídas', submenu: ['Mapas', 'Gráficos', 'Cidades', 'Palavras-chave'] },
        { name: 'Outras publicações', submenu: ['Artigos', 'Livros', 'Revista'] },
      ]
    },
    {
      title: 'PESQUISA',
      items: [],
      hasIcon: true,
    },
    {
      title: 'CONTATO',
      items: []
    }
  ];

  const navigate = useNavigate();

  const handleSubmit = (link: string) => {
    switch (link) {
      case "Linhas de pesquisa":
        navigate('/researchLines');
        break;
      case "Colaboradores":
        navigate('/team');
        break;
      case "Pesquisas concluídas":
        navigate('/projects');
        break;
      case "Outras publicações":
        navigate('/extras');
        break;
      case "PESQUISA":
        navigate('/research');
        break;
      case "CONTATO":
        navigate('/contact');
        break;
      case "HOME":
        navigate('/');
        break;
    }
  };

  const handleMouseEnter = (name: string) => {
    setSubmenuVisible(name);
  };

  const handleMouseLeave = () => {
    setSubmenuVisible(null);
  };

  return (
    <>
      <Container>
        <Logo src={logo} alt="Logo" onClick={() => handleSubmit('HOME')} />
        <Title>
          <div>
            <WhiteColor> OBSERVATÓRIO </WhiteColor> <SecondaryColor> CONSTELAÇÕES </SecondaryColor>
          </div>
          <div>
            <SecondaryColor> URBANAS E CIDADANIA</SecondaryColor>
          </div>
        </Title>
      </Container>
      <Menu>
        {menuData.map((menuItem, index) => (
          <MenuItem key={index}>
            <WhiteColor onClick={() => handleSubmit(menuItem.title)}>
              {/* Títulos do menu como biblioteca (hasIcon), sobre, etc */}
              {menuItem.title}
              {menuItem.hasIcon && (
                <BsSearch style={{ marginLeft: '8px' }} />
              )}
            </WhiteColor>
            {menuItem.items.length > 0 && ( // Caso for contato, não tem modal
              <Modal className="modal">
                {menuItem.items.map((subItem: any, subIndex) => ( // Itens no modal como projetos, etc
                  <div key={subIndex} onMouseEnter={() => typeof subItem === 'object' ? handleMouseEnter(subItem.name) : handleMouseEnter(subItem)}
                  onMouseLeave={handleMouseLeave}> {/* se subItem = objeto, temos o segundo modal */}
                    <Item onClick={() => typeof subItem === 'string' ? handleSubmit(subItem) : handleSubmit(subItem.name)}> {/* para subItem objeto, precisamos passar mais especificamente para a função de navegar */}
                      {typeof subItem === 'string' ? (
                        // Se for uma string, não precisa acessar o name do objeto só exibir.
                        <>
                          {/* O subItem de pesquisa possui um ícone de pesquisa */}
                          {subItem}
                          {subItem === 'Pesquisa' && <BsSearch style={{ marginLeft: '8px' }} />}
                        </>
                      ) : (
                        subItem.name
                      )}
                    </Item>
                    {/* abrindo o modal secundário */}
                    {typeof subItem === 'object' && subItem.submenu && submenuVisible === subItem.name && (
                      <SubMenu>
                        {subItem.submenu.map((subSubItem: string, subSubIndex: number) => (
                          // Realizando a busca de subItems para a exibição no modal
                          <SubMenuItem key={subSubIndex}>
                            {subSubItem}
                          </SubMenuItem>
                        ))}
                      </SubMenu>
                    )}
                  </div>
                ))}
              </Modal>
            )}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Header;
