import React from 'react';
import F1_1 from '../assets/figuras/1/1_F3.png'
import F2_1 from '../assets/figuras/1/1_F35.png'
import F3_1 from '../assets/figuras/1/1_F42.png'
import M1_1 from '../assets/figuras/1/1_F36_M.png'
import M2_1 from '../assets/figuras/1/1_F39_M.png'
import M3_1 from '../assets/figuras/1/1_F128_M.png'
import M4_1 from '../assets/figuras/1/1_F129_M.png'
import M5_1 from '../assets/figuras/1/1_F130_M.png'
import M6_1 from '../assets/figuras/1/1_F131_M.png'
import M7_1 from '../assets/figuras/1/1_F132_M.png'
import M8_1 from '../assets/figuras/1/1_F133_M.png'
import M9_1 from '../assets/figuras/1/1_F134_M.png'
import M10_1 from '../assets/figuras/1/1_F135_M.png'
import T1_1 from '../assets/figuras/1/1_T3.png'


export interface ResearchItem {
    date: string;
    title: string;
    author: string;
    resume: string;
    keywords: string;
    category: string;
    link: string;
    mapImages?: string[]; // Array de URLs de imagens de mapas
    graphImages?: string[]; // Array de URLs de imagens de tabelas
  }
  
  export const researchData: ResearchItem[] = [
    {
        date: '01/02/2024',
        title: 'Índice de aptidão de áreas para projetos de renovação urbana: estudos de caso das cidades de Cali na Colômbia e São Paulo no Brasil',
        author: 'Randy Perea Álvarez',
        resume: 'A maioria dos centros tradicionais das grandes cidades da América Latina passa por processos de deterioração física e esvaziamento populacional, demandando alternativas de planejamento urbano para tentar reverter esse problema. Uma das possibilidades para potencializar, valorizar, melhorar e integrar áreas consolidadas da cidade é a renovação urbana a partir de uma mudança de padrão que busca estimular usos mistos e evitar a expansão urbana. Esta pesquisa propõe um método de relação de variáveis urbanas qualitativas e quantitativas em categorias de análise de renovação urbana, como gestão do solo, edificabilidade e condições urbanísticas, com a finalidade de desenvolver um índice de aptidão de áreas para projetos de renovação urbana (IAPRU) nos centros das cidades de Cali, na Colômbia, e São Paulo, no Brasil, durante o ano de 2022. Os resultados das áreas priorizadas pelo IAPRU são representados por meio de tabelas e cartografia temática produzida com ferramentas de sistemas de informação geográfica (SIG).',
        keywords: 'Renovação urbana; Índice; Gestão do solo; Edificabilidade; Condições urbanísticas; SIG.',
        category: 'habitação',
        link: 'https://repositorio.ufscar.br/handle/ufscar/18595',
        mapImages: [M1_1, M2_1, M3_1, M4_1, M5_1, M6_1, M7_1, M8_1, M9_1, M10_1],
        graphImages: [F1_1, F2_1, F3_1, T1_1],
    },
    {
        date: '01/01/2024',
        title: 'Avaliação qualiquantitativa da sustentabilidade urbana em HIS pelo Selo Casa Azul e Sbtool Urban',
        author: 'Djanny Klismara de Oliveira Gonçalves',
        resume: 'O perfil insustentável dos atuais empreendimentos de habitação de interesse social (HIS) tem expressado grandes impactos à qualidade de vida da população, ao meio ambiente natural e aos sistemas que compõem as cidades brasileiras. Nesse sentido, a avaliação do potencial de sustentabilidade destes empreendimentos habitacionais se faz necessária como forma de identificar as principais fragilidades dos sistemas de avaliação, contribuindo para o processo de aprimoramento das ferramentas de avaliação, sobretudo, em relação aos processos produtivos e de inserção na malha urbana. A partir da análise de pós-ocupação de um empreendimento de HIS implantado na cidade de Araraquara, SP, foi posto como objetivo desenvolver uma avaliação sobre a sustentabilidade urbana a fim de aprimorar a ferramenta Selo Casa Azul, tendo como base uma abordagem multimétodo baseada na ferramenta de certificação SBTool Urban. Foi proposta a aplicação dos cálculos estabelecidos no SBTool Urban conforme atendimento dos requisitos do Selo Casa Azul, juntamente com a inserção de um benchmark nacional para estabelecimento da análise. Dessa forma, foram analisadas quatro categorias do Selo Casa Azul conforme os levantamentos das informações do estudo de caso realizadas por análise documental, visitas técnicas e análise das diretrizes exigidas pela administração pública. Como resultados, foi possível atestar o perfil de insustentabilidade do empreendimento com os valores baixos verificados pelos cálculos, assim como foi possível compreender as vantagens e limitações da análise referencial. Como vantagem, a adoção do benchmark permitiu um embasamento para o quadro de melhorias, assim como a possibilidade da frequente renovação da avaliação conforme são estabelecidas novas exigências que configurem maior sustentabilidade ao empreendimento. Por outro lado, foi identificada a necessidade de investigação científica de empreendimentos de HIS que apresentem um potencial de maior sustentabilidade para que avaliações referenciadas possam ser realizadas com embasamento técnico.',
        keywords: 'Selo casa azul; Certificações ambientais; Habitação de interesse social; Casa azul seal; Environmental certifications; Social housing; SBTool urban',
        category: 'habitacao de interesse social',
        link: 'https://repositorio.ufscar.br/handle/ufscar/13068',
        mapImages: ['url-do-mapa-1.jpg', 'url-do-mapa-2.jpg'],
        graphImages: ['url-da-tabela-1.jpg'],
    },
    {
        date: '01/03/2020',
        title: 'Ferramentas para licenciamento paramétrico de projetos de empreendimentos habitacionais de interesse social',
        author: 'Luccas Zambon Maselli',
        resume: 'Normas técnicas e legislações constituem e regulam parte do processo de licenciamento de empreendimentos habitacionais. A verificação de conformidade de novos projetos imobiliários, frente aos valores legais de referência, é uma tarefa complexa. Neste sentido, a automação deste processo, utilizando recursos computacionais, possui potencial de torná-lo mais eficiente. A verificação automatizada de requisitos, implementada digitalmente, mostra-se um possível meio para auxiliar na agilidade do licenciamento de empreendimentos, assegurando eficiência, objetividade e transparência. Ainda, procedimentos públicos que englobam a participação popular mostram-se ineficazes e com baixa taxa de adesão da sociedade. Desta forma, a presente dissertação tem por objetivo o desenvolvimento de ferramentas computacionais que auxiliem na verificação dos parâmetros legais envolvidos nos procedimentos de licenciamento de empreendimentos habitacionais. As propostas são divididas em duas frentes, voltadas para a participação popular e para a verificação de requisitos em modelos geoespaciais. Para isto, foi desenvolvida uma ferramenta consultiva para a população, por meio da linguagem Python, além de um plugin para plataforma de Sistemas de Informações Geográficas (SIG), onde ambas são responsáveis pela verificação paramétrica de empreendimentos habitacionais. Para fins de aplicação, a cidade de São Carlos (SP), e os parâmetros urbanísticos presentes em seu Plano Diretor, foram utilizados. A ferramenta desenvolvida para a consulta pública opera a partir da inserção de dados básicos de projeto, frequentemente encontrados em Estudos de Impacto de Vizinhança (EIV), permitindo o cálculo dos coeficientes aplicáveis ao licenciamento, e gerando um relatório estruturado de conformidades e não conformidades. A ferramenta geoespacial, por sua vez, opera a partir de dados vetoriais de projeto e de zoneamento, e calcula automaticamente os coeficientes urbanísticos aplicáveis, comparando-os com os valores de referência, onde, ao fim, também gera um relatório estruturado. A aplicação de tais ferramentas representa um avanço em campos ainda pouco eficientes e pouco explorados, como a participação popular nas tomadas de decisão, o próprio processo de licenciamento habitacional e a verificação paramétrica em plataformas SIG. A aplicação das ferramentas pode representar novos paradigmas nos modelos de planejamento urbano, uma vez que muitas operações realizadas de forma manual podem ser repensadas a partir dos conceitos computacionais. Além disso, as ferramentas podem integrar a sociedade civil aos processos de decisão sobre a cidade e permitir novas análises geoespaciais sobre o ambiente urbano.',
        keywords: 'Verificação Automatizada de Requisitos; Empreendimentos Habitacionais; Licenciamento Habitacional; Participação Popular; Sistemas de Informações Geográficas;',
        category: 'habitação',
        link: 'https://repositorio.ufscar.br/handle/ufscar/14326',
        mapImages: ['url-do-mapa-1.jpg', 'url-do-mapa-2.jpg'],
        graphImages: ['url-da-tabela-1.jpg'],
    },
    {
        date: '01/04/2022',
        title: 'A “habitação social de mercado” como ativo no mercado de locação e revenda residencial: o caso dos imóveis do PMCMV - Faixa 2 em São José Do Rio Preto-SP',
        author: 'Thais Borges Martins Rodrigues',
        resume: 'O modelo de acesso à moradia condicionado ao financiamento bancário foi a estratégia adotada pelo governo brasileiro nos anos 2000, com o Programa “Minha Casa Minha Vida” (PMCMV), em consonância com a promoção de capital imobiliário, o que implicou na inexistência de uma política pública capaz de possibilitar amplo acesso ao crédito imobiliário por parte das famílias com menores rendas e, como consequência, limitou o exercício do direito á moradia. Essa estratégia contribuiu para a consolidação do ideário da casa própria e para a transformação da casa em mais do que um local de moradia, essencial à manutenção da vida humana e à reprodução da sua força de trabalho, passando a ser vista como bem de dimensão patrimonial e expectativas de segurança social e econômica futura, em uma dimensão rentista em constante transformação com a securitização. Nesta pesquisa problematiza-se o uso dos imóveis oriundos do PMCMV, sobretudo aqueles destinados ás famílias com renda entre três e seis salários mínimos, principal foco de atuação do programa, como fonte de geração de renda extra aos seus proprietários no mercado de locação residencial ao mesmo tempo em que políticas públicas de aluguel social são inexistentes ou pouco exploradas, tendo como estudo de caso imóveis produzidos por empresas de capital aberto em São José do Rio Preto, entre os anos 2009 e 2015. Com base em questionários aplicados pelo método survey, e análise dos dados referentes ao perfil dos moradores e as condicionantes territoriais e sociais para a forma de apropriação de tais imóveis, verificou-se a criação de um parque imobiliário destinado á locação residencial, composto por imóveis de diferentes tipos, sobretudo na região norte do município, onde a valorização imobiliária é inferior ao restante da cidade, implicando em menor preço da moradia. Além do preço, fatores como oferta que equipamentos de lazer e segurança privada se revelaram como importantes aspectos para a escolha dos locais por parte dos locatários, ainda que signifique maior distanciamento das áreas centrais e menor infraestrutura urbana disponibilizada. Ao longo deste trabalho foi constatado também o papel decisivo dos agentes privados de promoção imobiliária para a oferta de moradia e do poder público em contribuir para a livre comercialização desses imóveis no mercado formal de locação.',
        keywords: 'provisão da habitação; locação residencial; ativo imobiliário; Programa Minha Casa Minha Vida; cidades médias',
        category: 'habitação',
        link: 'https://repositorio.ufscar.br/handle/ufscar/13733',
        mapImages: ['url-do-mapa-1.jpg', 'url-do-mapa-2.jpg'],
        graphImages: ['url-da-tabela-1.jpg'],
    },
    {
        date: '01/04/2022',
        title: 'Entraves e etapas do processo de regularização fundiária urbana no interior de São Paulo, o uso dos RPAS no mapeamento dos núcleos irregulares',
        author: 'Marcos Kolland Junior',
        resume: 'Esta dissertação integra uma série de estudos desenvolvidos no Programa de Pós-Graduação em Engenharia Urbana (PPGEU). O objeto de estudo aqui apresentado é focado na prática e desenvolvimento da regularização fundiária urbana no âmbito brasileiro. De acordo com diversos relatos e evidências, nas antigas civilizações já era presente o uso da Cartografia como forma de representar e organizar a superfície física da Terra, bem como os objetos e fenômenos importantes nela contidos, geralmente com a finalidade de realizar e organizar o desenvolvimento da sociedade como um todo. Aproximadamente, metade dos imóveis brasileiros se encontram em situação de irregularidade, e a tecnologia atual, juntamente com a popularização das Aeronaves Remotamente Pilotadas, tem sido empregada de forma muito presente na organização do uso e ocupação do solo pelas diferentes esferas do poder público e privado. A regularização fundiária é o conjunto de medidas jurídicas, técnicas, urbanísticas, ambientais e sociais que visam a regularização de imóveis, loteamentos, assentamentos e à titulação de seus ocupantes. Este trabalho apresenta um breve histórico e síntese das normativas específicas por meio da utilização e desenvolvimento de uma metodologia em que as etapas do processo de regularização fundiária são divididas em dez tópicos. O processo foi realizado em um loteamento parcialmente irregular com aproximadamente 4500 lotes, onde foram utilizados técnicas, equipamentos e softwares aerofotogramétricos em conjunto com receptores GNSS para obtenção dos produtos cartográficos, que foram material de subsídio, para estudo e aplicação da REURB-E. Os resultados do presente estudo condicionaram o entendimento da situação atual do loteamento, da classificação e quantificação das propriedades, atrelado à realização do projeto de REURB que, por fim, busca entregar, de uma forma didática, um guia, para a realização de semelhantes atividades de engenharia',
        keywords: 'RPAS; Regularização Fundiária; GNSS; Aerofotogrametria; Mapeamento',
        category: 'habitação',
        link: 'https://repositorio.ufscar.br/handle/ufscar/17122',
        mapImages: ['url-do-mapa-1.jpg', 'url-do-mapa-2.jpg'],
        graphImages: ['url-da-tabela-1.jpg'],
    },
    {
        date: '01/04/2022',
        title: 'O direito à moradia como cumprimento da função social da propriedade pública: um estudo de caso do Programa Minha Morada de Araraquara-SP',
        author: 'Camila Marques Paes da Cunha',
        resume: 'O direito à moradia vem sido discutido de forma mais ampla no Brasil desde os anos 80, quando surgem os movimentos populares pelo direito de habitar de forma digna. Com isso, os debates sobre a propriedade urbana e sua função social também ganham espaço no cenário das políticas urbanas. Ao se observar o déficit habitacional do país, percebe-se que esta discussão ainda é atual. Com a aprovação do Estatuto da Cidade em 2001, surgem novas ferramentas para a organização do território urbano e possibilitar a produção de habitações de interesse social. Neste sentido, este trabalho aborda temas do direito a cidade, principalmente no contexto da Constituição Federal de 1988, discute acerca da função social da cidade e da propriedade, em especial a da propriedade urbana pública, e argumenta que o poder público pode prover a habitação de interesse social como modo de cumprir a função social dos vazios urbanos de propriedade pública. A partir do estudo de caso do Programa Minha Morada, iniciativa local do município de Araraquara-SP, faz uma análise do programa, que destina áreas urbanas vazias de propriedade pública para um programa de lotes urbanizados, tendo em vista a insuficiência das políticas habitacionais de nível federal e a inadequação do perfil social da população que compõe a maior parte do déficit. Os resultados demonstram que ao destinar áreas bem servidas de infraestrutura e equipamentos públicos para uma política de habitação que atende a população socioeconomicamente mais vulnerável, o programa busca cumprir a função social da propriedade urbana pública, promovendo moradia digna dentro do contexto local, atendendo as especificidades do déficit habitacional da cidade.',
        keywords: 'Habitação de Interesse Social; Propriedade Urbana Pública; Áreas Especiais de Interesse Social; Função Social;',
        category: 'habitacao de interesse social',
        link:'https://repositorio.ufscar.br/handle/ufscar/17180',
        mapImages: ['url-do-mapa-1.jpg', 'url-do-mapa-2.jpg'],
        graphImages: ['url-da-tabela-1.jpg'],
    },
    {
        date: '01/04/2022',
        title: 'Instrumentos urbanísticos em Araraquara no Pós-Estatuto da Cidade',
        author: 'Sandra Batista Medeiros',
        resume: 'Este trabalho tem por objetivo sistematizar e analisar a aplicação dos instrumentos urbanísticos previstos nos Planos Diretores da cidade de Araraquara de 2005 e 2014, utilizados pela gestão municipal após as instruções disponibilizadas pelo Estatuto da Cidade. Foram selecionados os instrumentos PEUC, CIECO, EIV, TDC, OUC, OODC e ZEIS. Realizou-se revisão bibliográfica sobre planejamento urbano e sobre a cidade objeto de estudo, com a leitura dos Planos Diretores Pós-Estatuto da Cidade, e a implantação dos instrumentos urbanísticos. Para sintetizar as informações coletadas sobre os instrumentos urbanísticos selecionados, adaptou-se a análise de matriz SWOT, incluindo as condições exógenas, referente ao instrumento, e endógenas referente a aplicação do instrumento em Araraquara. Os resultados mostram que Araraquara ainda não conseguiu explorar todo o potencial dos instrumentos urbanísticos estabelecidos pelo Estatuto da Cidade, seja na sua definição ou implantação e também amadureceu a partir das experiências do PDPUA (2005). Nesse sentido, diversas ferramentas não foram implantadas, aplicadas de forma inadequada, ou sofreram descaracterizações em virtude das alterações por leis complementares, após a revisão do plano realizada em 2014.',
        keywords: 'Estatuto da Cidade; Plano Diretor; Instrumentos Urbanísticos; Análise SWOT; Araraquara',
        category: 'habitação',
        link: 'https://repositorio.ufscar.br/handle/ufscar/15378',
        mapImages: ['url-do-mapa-1.jpg', 'url-do-mapa-2.jpg'],
        graphImages: ['url-da-tabela-1.jpg'],
    },
    {
        date: '01/04/2022',
        title: 'América Latina: urbanização e luta pelo direito à cidade',
        author: 'Millton Balestrini',
        resume: 'Vários esforços e iniciativas se ocuparam em indicar caminhos e oportunidades para o desenvolvimento da América Latina, dentre eles o advento da CEPAL nos anos 1950 e o Mercosul em 1991. No entanto, o continente em seu conjunto nunca foi capaz de enfrentar seus problemas estruturais. O necessário rompimento com a hegemonia do modelo primário exportador, o salto para uma industrialização coordenada e apoiada por políticas públicas de economia, investimentos em educação e formação de mão de obra, por exemplo, são fatos que nunca ocorreram dentro de uma escala suficiente para configurar um salto de desenvolvimento. As questões limitadoras do crescimento econômico como a pobreza crônica e as profundas desigualdades regionais, não foram vencidas pelas tentativas de industrialização. As deficiências estruturais do modelo de desenvolvimento, baseado ainda hoje na produção e exportação de commodities, produzidas em latifúndios, perpetuam os grandes desequilíbrios no continente, tornando a questão da terra, um fator transversal no desenvolvimento histórico do campo e das cidades latino-americanas. O êxodo do campo e o rápido processo de urbanização no continente, ao contrário do que se pensa, pouco se relaciona com os anos dos nossos processos de industrialização. As altas taxas de urbanização são compreendidas a partir dos conflitos e disputas pela terra, primeiro enquanto meio de produção, e depois como instrumento de especulação, mas sempre como sinal de riqueza e de poder. As consequências urbanas e sociais dessa luta desigual são mais bem compreendidas e explicitadas na precariedade das periferias de nossas cidades, onde os pobres são escondidos dos olhares do mundo e das elites locais. Contudo, esse contexto de segregação pode propiciar o surgimento de expressões culturais, de vozes relevantes, como também de poderosos movimentos populares organizados, na luta pelo direito a ter direitos.',
        keywords: 'Pobreza; terras; América Latina; urbanização; direito à cidade',
        category: 'habitação',
        link: 'https://repositorio.ufscar.br/handle/ufscar/17528',
        mapImages: ['url-do-mapa-1.jpg', 'url-do-mapa-2.jpg'],
        graphImages: ['url-da-tabela-1.jpg'],
    },
    {
        date: '01/04/2022',
        title: 'O papel da produção da habitação social em São José do Rio Preto na consolidação do dispositivo Zona Norte',
        author: 'Poliana Risso Silva Ueda',
        resume: 'O presente trabalho visa contribuir com o conhecimento a respeito da produção socioespacial do urbano em cidades não metropolitanas, através do estudo do processo de formação do território Zona Norte da cidade paulista de São José do Rio Preto. A tese procura investigar a partir da leitura da trajetória histórica da produção de habitação social no município, os processos através dos quais a região norte se forma como espaço de segregação socioespacial, destacando as transformações por ela sofrida em função da atuação do capital. Mais do que isso, tem como objetivo identificar no tempo e no espaço, os elementos desta história que contribuíram para a consolidação da Zona Norte como território de uma nova centralidade, a partir de uma leitura externa, da produção da habitação inserida num sistema capitalista de acumulação, e uma interna, qualitativa. Para a investigação foram adotadas três estratégias metodológicas que envolvem: pesquisa em fontes primárias, a partir de dados e documentos fornecidos por órgãos do governo, de bases estatísticas e jornais de notícia; em fontes secundárias, na vasta literatura existente sobre o urbano para formação do embasamento teórico da pesquisa e a realização de entrevistas semiestruturadas com beneficiários de programas habitacionais residentes da Zona Norte. O arcabouço teórico construído permitiu analisar a organização socioespacial do território resultante do processo de produção da habitação social na cidade, o papel do Estado e dos agentes imobiliários na conformação da Zona Norte e o cenário socioeconômico e das relações sociais que tecem o espaço vivido. Como resultado teve-se o entendimento de que estes elementos fizeram desta nova centralidade, um dispositivo de governo de grande potência. A saída carece de uma construção de novas subjetivações que permitam que os diferentes sujeitos coproduzam o espaço urbano como um caminho para alcançar o processo de revalorização do agir político, promovendo uma ruptura com a ordem existente.',
        keywords: 'São José do Rio Preto; Habitação; MCMV; Dispositivo; Zona Norte;',
        category: 'habitação',
        link: 'https://repositorio.ufscar.br/handle/ufscar/16608',
        mapImages: ['url-do-mapa-1.jpg', 'url-do-mapa-2.jpg'],
        graphImages: ['url-da-tabela-1.jpg'],
    },
  ];
  