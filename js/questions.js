/**
 * GeoAventura Kids - Banco Pedagógico de Questões (3º Ano do Ensino Fundamental)
 * Alinhado à BNCC de Geografia: Pontos Cardeais, Paisagens, Brasil, Natureza e Globo Terrestre.
 */

const ISLANDS_DATA = [
  {
    id: "cardeais",
    title: "A Ilha da Bússola Encantada",
    subtitle: "Pontos Cardeais e Orientação no Espaço",
    icon: "🧭",
    badge: "Mestre da Bússola",
    badgeIcon: "🌟",
    color: "#ff8400",
    description: "Aprenda a se orientar com o Sol, a bússola e a rosa dos ventos!",
    questions: [
      {
        id: "c1",
        question: "Em qual direção o Sol nasce todos os dias pela manhã?",
        options: [
          "No Leste (Nascente) 🌅",
          "No Oeste (Poente) 🌇",
          "No Norte ❄️",
          "No Sul 🐧"
        ],
        correct: 0,
        hint: "Pense na palavra 'Nascente'! É o lado onde o Sol aparece cedinho para iluminar nosso dia.",
        explanation: "O Sol sempre aparece no Leste (também chamado de Nascente) e se põe no Oeste (Poente)!",
        icon: "☀️"
      },
      {
        id: "c2",
        question: "No fim da tarde, o Sol 'se esconde' e vai embora. Em qual direção ele se põe?",
        options: [
          "No Leste 🌅",
          "No Oeste (Poente) 🌇",
          "No Sul 🐧",
          "No Norte ❄️"
        ],
        correct: 1,
        hint: "Lembra da palavra 'Poente'? É onde o Sol se põe para a noite chegar!",
        explanation: "O lado em que o Sol se põe no entardecer é chamado de Oeste ou Poente.",
        icon: "🌇"
      },
      {
        id: "c3",
        question: "Se você abrir os braços e apontar o braço DIREITO para o Sol que nasce (Leste), para onde seu rosto estará olhando?",
        options: [
          "Para o Norte 🧭",
          "Para o Sul 🌲",
          "Para o Oeste 🌄",
          "Para o chão 🌱"
        ],
        correct: 0,
        hint: "Com a mão direita no Leste e a esquerda no Oeste, a sua frente aponta sempre para o Norte!",
        explanation: "Essa é a regra mágica dos navegadores: braço direito no Leste, braço esquerdo no Oeste, à sua frente fica o Norte e atrás fica o Sul!",
        icon: "🧍"
      },
      {
        id: "c4",
        question: "Qual é o nome do desenho em formato de estrela que mostra os pontos cardeais nos mapas?",
        options: [
          "Rosa dos Ventos 🧭",
          "Estrela Cadente 🌠",
          "Flor do Campo 🌻",
          "Círculo Mágico 🔮"
        ],
        correct: 0,
        hint: "Tem nome de uma flor linda e sopra as direções do vento!",
        explanation: "A Rosa dos Ventos é uma figura essencial nos mapas para indicar Norte (N), Sul (S), Leste (L) e Oeste (O).",
        icon: "🧭"
      },
      {
        id: "c5",
        question: "Qual instrumento antigo usa uma agulha imantada que sempre aponta para o Norte da Terra?",
        options: [
          "Bússola 🧭",
          "Termômetro 🌡️",
          "Relógio de Pulso ⌚",
          "Lupa 🔍"
        ],
        correct: 0,
        hint: "É um aparelho redondo com uma agulhinha magnética que gira livremente.",
        explanation: "A bússola foi inventada há muitos séculos e sua agulha magnética é atraída pelo polo norte magnético da Terra!",
        icon: "🧭"
      }
    ]
  },
  {
    id: "paisagens",
    title: "O Vale das Paisagens",
    subtitle: "Campo, Cidade, Praia e Natureza",
    icon: "🏞️",
    badge: "Guardião das Paisagens",
    badgeIcon: "🌾",
    color: "#2ec4b6",
    description: "Descubra as diferenças entre a zona rural (campo) e a zona urbana (cidade)!",
    questions: [
      {
        id: "p1",
        question: "Qual desses elementos faz parte de uma paisagem NATURAL (que não foi construída pelo ser humano)?",
        options: [
          "Um rio com cachoeira e árvores nativas 🌊",
          "Um prédio de 20 andares 🏢",
          "Uma ponte de concreto 🌉",
          "Um semáforo de trânsito 🚦"
        ],
        correct: 0,
        hint: "Elemento natural é aquilo que a própria natureza criou sem a mão do ser humano.",
        explanation: "Rios, montanhas, florestas e cachoeiras são elementos naturais. Prédios e pontes são elementos culturais ou construídos.",
        icon: "🌊"
      },
      {
        id: "p2",
        question: "Na Zona Rural (o campo), o que é mais comum de encontrar no dia a dia?",
        options: [
          "Plantações, criação de animais e ar puro 🚜🐄",
          "Muitos prédios altos e congestionamento de carros 🚗🏢",
          "Estações de metrô lotadas 🚇",
          "Shoppings gigantes e avenidas largas 🏬"
        ],
        correct: 0,
        hint: "Pense na vida na fazenda ou sítio, onde os alimentos são plantados!",
        explanation: "No campo ou zona rural há muito espaço verde, plantações de alimentos (agricultura) e criação de gado e aves (pecuária).",
        icon: "🚜"
      },
      {
        id: "p3",
        question: "Como o campo (zona rural) ajuda as pessoas que vivem na cidade (zona urbana)?",
        options: [
          "Produzindo alimentos frescos como frutas, leite e verduras 🍎🥛🥬",
          "Fabricando celulares e computadores 📱💻",
          "Construindo arranha-céus 🏙️",
          "Criando avenidas asfaltadas 🛣️"
        ],
        correct: 0,
        hint: "De onde vêm a maçã, o feijão, o arroz e o leite que compramos no supermercado?",
        explanation: "O campo e a cidade são grandes parceiros: o campo produz o nosso alimento e a cidade produz roupas, remédios e tecnologias!",
        icon: "🍎"
      },
      {
        id: "p4",
        question: "Uma paisagem com muitos prédios, ruas asfaltadas, lojas e muito trânsito pertence a qual ambiente?",
        options: [
          "Zona Urbana (Cidade) 🏙️",
          "Floresta Virgem 🌴",
          "Fundo do Mar 🐠",
          "Zona Rural (Fazenda) 🚜"
        ],
        correct: 0,
        hint: "É o lugar onde há muitas pessoas morando juntas em bairros com comércio e serviços.",
        explanation: "A Zona Urbana é caracterizada por cidades, com muitas construções feitas pelo ser humano, ruas, escolas e comércios.",
        icon: "🏙️"
      },
      {
        id: "p5",
        question: "O que acontece quando os seres humanos constroem casas, ruas e fábricas em uma floresta?",
        options: [
          "A paisagem é modificada (transformada em paisagem cultural/humanizada) 🏗️",
          "A floresta continua exatamente igual 🌳",
          "Aumenta a quantidade de macacos e onças nativas 🐒",
          "A água dos rios fica congelada ❄️"
        ],
        correct: 0,
        hint: "A paisagem deixa de ser puramente natural e passa a ter a marca do trabalho humano.",
        explanation: "Quando o ser humano constrói e transforma a natureza, dizemos que a paisagem foi modificada ou humanizada.",
        icon: "🏗️"
      }
    ]
  },
  {
    id: "brasil",
    title: "Brasil, Nossa Terra Querida",
    subtitle: "Estados, Capitais e Regiões do Brasil",
    icon: "🇧🇷",
    badge: "Explorador do Brasil",
    badgeIcon: "🇧🇷",
    color: "#2b9348",
    description: "Viaje pelo nosso país e conheça capitais, estados e paisagens brasileiras!",
    questions: [
      {
        id: "b1",
        question: "Qual é a capital do Brasil, onde fica a sede do governo do nosso país?",
        options: [
          "Brasília (no Distrito Federal) 🏛️",
          "Rio de Janeiro 🏖️",
          "São Paulo 🏙️",
          "Salvador 🎭"
        ],
        correct: 0,
        hint: "Ela foi planejada em formato que lembra um avião e fica no centro do país!",
        explanation: "Brasília foi inaugurada em 1960 e é a capital federal de todo o Brasil!",
        icon: "🏛️"
      },
      {
        id: "b2",
        question: "Qual é o nome do imenso oceano que banha todas as praias do litoral do Brasil?",
        options: [
          "Oceano Atlântico 🌊",
          "Oceano Pacífico ⛵",
          "Oceano Índico 🏝️",
          "Oceano Glacial Ártico ❄️"
        ],
        correct: 0,
        hint: "Começa com a letra 'A' e banha toda a costa brasileira do Norte ao Sul!",
        explanation: "O Brasil tem milhares de quilômetros de praias banhadas pelas águas do Oceano Atlântico.",
        icon: "🌊"
      },
      {
        id: "b3",
        question: "Em qual região do Brasil fica a gigantesca Floresta Amazônica e o imenso Rio Amazonas?",
        options: [
          "Região Norte 🦜🌳",
          "Região Sul ❄️",
          "Região Sudeste 🏙️",
          "Região Central do Deserto 🏜️"
        ],
        correct: 0,
        hint: "Fica na parte de cima do mapa do Brasil, onde moram muitas espécies de animais e plantas!",
        explanation: "A Região Norte abriga a maior floresta tropical do planeta: a Floresta Amazônica, cheia de biodiversidade!",
        icon: "🦜"
      },
      {
        id: "b4",
        question: "Em qual continente do planeta Terra o Brasil está localizado?",
        options: [
          "América (mais especificamente, América do Sul) 🌎",
          "Europa 🏰",
          "África 🦒",
          "Ásia 🐼"
        ],
        correct: 0,
        hint: "Nosso continente é o americano, e nós ficamos na parte sul dele!",
        explanation: "O Brasil é o maior país da América do Sul e faz fronteira com quase todos os países vizinhos!",
        icon: "🌎"
      },
      {
        id: "b5",
        question: "O território do Brasil é dividido em várias partes menores para organizar o país. Como essas partes são chamadas?",
        options: [
          "Estados (e o Distrito Federal) 🗺️",
          "Planetas 🪐",
          "Ilhas desertas 🏝️",
          "Castelos reais 🏰"
        ],
        correct: 0,
        hint: "O Brasil tem 26 deles, mais o Distrito Federal!",
        explanation: "O Brasil é formado por 26 Estados (como Bahia, Minas Gerais, Amazonas, Paraná...) e 1 Distrito Federal!",
        icon: "🗺️"
      }
    ]
  },
  {
    id: "natureza",
    title: "O Santuário da Natureza",
    subtitle: "Rios, Relevo, Clima e Meio Ambiente",
    icon: "🌊",
    badge: "Defensor das Águas",
    badgeIcon: "💧",
    color: "#3a86ff",
    description: "Entenda como funcionam os rios, as montanhas, o clima e como proteger a Terra!",
    questions: [
      {
        id: "n1",
        question: "Como se chama o lugar onde um rio 'nasce', ou seja, onde a água brota da terra?",
        options: [
          "Nascente (ou cabeceira) 💧🌱",
          "Foz 🌊",
          "Cachoeira artificial 🚿",
          "Piscina olímpica 🏊"
        ],
        correct: 0,
        hint: "A palavra vem do verbo 'nascer'. É o comecinho da vida do rio!",
        explanation: "A nascente é o local onde a água subterrânea aflora para formar um córrego e, depois, um rio!",
        icon: "💧"
      },
      {
        id: "n2",
        question: "E como se chama o lugar onde o rio termina sua viagem e deságua no mar ou em outro rio?",
        options: [
          "Foz (ou desembocadura) 🌊",
          "Nascente 💧",
          "Pico da montanha ⛰️",
          "Nuvem de chuva ☁️"
        ],
        correct: 0,
        hint: "É uma palavra curtinha de três letras que começa com a letra 'F'!",
        explanation: "A foz é o ponto final do rio, onde ele entrega suas águas para o oceano ou para um rio maior.",
        icon: "🌊"
      },
      {
        id: "n3",
        question: "Qual atitude é FUNDAMENTAL para proteger os rios e o meio ambiente?",
        options: [
          "Não jogar lixo nos rios e economizar água 🚯💧",
          "Jogar garrafas plásticas na água 🍾",
          "Cortar todas as árvores que ficam perto das margens 🪓",
          "Deixar a torneira aberta o dia todo 🚿"
        ],
        correct: 0,
        hint: "Cuidar da água limpa e da natureza ajuda todos os seres vivos!",
        explanation: "Preservar a vegetação das margens (mata ciliar) e nunca poluir com lixo garante água limpa para todos nós!",
        icon: "🚯"
      },
      {
        id: "n4",
        question: "Qual é a estação do ano conhecida pelos dias mais quentes e pelas férias de praia?",
        options: [
          "Verão ☀️🏖️",
          "Inverno ❄️🧤",
          "Outono 🍂",
          "Primavera 🌸"
        ],
        correct: 0,
        hint: "É a época de muito Sol, calor, sorvete e piscina!",
        explanation: "No Verão os dias são mais longos e as temperaturas são mais altas. No Inverno acontece o contrário: faz mais frio!",
        icon: "☀️"
      },
      {
        id: "n5",
        question: "Como chamamos as grandes elevações naturais do terreno, que são muito altas?",
        options: [
          "Montanhas e Serras ⛰️",
          "Planícies 🌾",
          "Túneis 🕳️",
          "Praias de areia 🏖️"
        ],
        correct: 0,
        hint: "São terrenos altos, com picos pontudos ou arredondados que sobem até o céu!",
        explanation: "Montanhas, morros e serras são formas do relevo que se elevam bem acima do nível do terreno ao redor.",
        icon: "⛰️"
      }
    ]
  },
  {
    id: "globo",
    title: "A Rota do Globo Terrestre",
    subtitle: "Planeta Terra, Continentes e Mapas",
    icon: "🗺️",
    badge: "Mestre dos Continentes",
    badgeIcon: "🌍",
    color: "#7209b7",
    description: "Explore o planeta azul, seus oceanos e as grandes porções de terra!",
    questions: [
      {
        id: "g1",
        question: "Qual é o formato do nosso planeta Terra?",
        options: [
          "Esférico (arredondado como uma bola) 🌍",
          "Quadrado como uma caixa 📦",
          "Plano como uma folha de papel 📄",
          "Triangular como uma pirâmide 🔺"
        ],
        correct: 0,
        hint: "Olhe para a imagem do globo terrestre! Ele é redondinho no espaço.",
        explanation: "A Terra tem formato geóide/esférico (arredondado, ligeiramente achatado nos polos).",
        icon: "🌍"
      },
      {
        id: "g2",
        question: "Por que a Terra é carinhosamente chamada de 'Planeta Azul' quando vista do espaço?",
        options: [
          "Porque a maior parte da sua superfície é coberta por água (oceanos e mares) 🌊",
          "Porque ela é pintada de tinta azul com pincel 🎨",
          "Porque só existem pássaros azuis no planeta 🐦",
          "Porque não existem nuvens no céu ☁️"
        ],
        correct: 0,
        hint: "Cerca de 70% do nosso planeta é composto de água líquida nos oceanos!",
        explanation: "Visto do espaço sideral, o nosso planeta brilha em tons de azul por causa da enorme quantidade de água nos oceanos.",
        icon: "🌊"
      },
      {
        id: "g3",
        question: "Como chamamos as gigantescas porções de terra do planeta onde ficam os países?",
        options: [
          "Continentes 🗺️",
          "Lagoas 🦆",
          "Nuvens ☁️",
          "Asteroide ☄️"
        ],
        correct: 0,
        hint: "Exemplos: América, África, Europa, Ásia, Oceania e Antártida.",
        explanation: "Os continentes são as grandes massas de terra da Terra cercadas pelos oceanos!",
        icon: "🗺️"
      },
      {
        id: "g4",
        question: "Qual instrumento é um modelo tridimensional redondo que representa fielmente a Terra?",
        options: [
          "Globo Terrestre 🌐",
          "Régua escolar 📏",
          "Calculadora 🔢",
          "Quadro negro ⬛"
        ],
        correct: 0,
        hint: "É aquela esfera giratória que costuma ter na sala de aula de geografia!",
        explanation: "O Globo Terrestre é a melhor representação da forma da Terra porque ele também é esférico e pode girar!",
        icon: "🌐"
      },
      {
        id: "g5",
        question: "Quando representamos toda a superfície redonda da Terra desenhada em uma folha plana, temos um:",
        options: [
          "Planisfério (ou Mapa-Múndi) 🗺️",
          "Quebra-cabeça 🧩",
          "Álbum de figurinhas 📖",
          "Relógio de areia ⏳"
        ],
        correct: 0,
        hint: "Tem 'plano' no nome! Mostra todos os países do mundo abertos na folha.",
        explanation: "O Planisfério (ou Mapa-Múndi) é o mapa que mostra todo o planeta de forma plana em uma única imagem.",
        icon: "🗺️"
      }
    ]
  }
];

// Desafio da Bússola Interativa
const COMPASS_CHALLENGES = [
  {
    instruction: "O galo cantou e o Sol vai nascer! Aponte a bússola para o LESTE (onde o Sol nasce):",
    target: "L",
    targetName: "Leste (Nascente)",
    hint: "O Leste fica do lado direito da Rosa dos Ventos! ☀️"
  },
  {
    instruction: "O dia terminou e o Sol vai se pôr no horizonte! Aponte para o OESTE (onde o Sol se põe):",
    target: "O",
    targetName: "Oeste (Poente)",
    hint: "O Oeste fica do lado esquerdo da Rosa dos Ventos! 🌇"
  },
  {
    instruction: "A agulha mágica quer olhar para o topo do mapa! Aponte para o NORTE:",
    target: "N",
    targetName: "Norte",
    hint: "O Norte fica para cima, no topo da Rosa dos Ventos! ❄️"
  },
  {
    instruction: "Para completar a jornada, aponte a bússola para a direção oposta ao Norte: para o SUL:",
    target: "S",
    targetName: "Sul",
    hint: "O Sul fica para baixo, oposto ao Norte! 🐧"
  }
];

// Minijogo: Separador de Paisagens (Campo vs Cidade)
const SORTING_CHALLENGES = [
  { item: "Trator arando a terra 🚜", category: "campo", explanation: "Tratores trabalham nas plantações do campo!" },
  { item: "Prédio espelhado de 30 andares 🏢", category: "cidade", explanation: "Grandes prédios e escritórios ficam na cidade." },
  { item: "Criação de vaquinhas no pasto 🐄", category: "campo", explanation: "A pecuária (criar animais) é típica da zona rural." },
  { item: "Metrô subterrâneo e muitos carros 🚇", category: "cidade", explanation: "Transporte em massa como metrô é típico de cidades grandes." },
  { item: "Horta comunitária com alfaces e cenouras 🥕🥬", category: "campo", explanation: "O plantio de hortaliças acontece na terra do campo!" },
  { item: "Semáforo e faixas de pedestres movimentadas 🚦", category: "cidade", explanation: "Ruas com muito trânsito e semáforos são da cidade." }
];
