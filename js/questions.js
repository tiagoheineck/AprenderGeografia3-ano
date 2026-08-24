/**
 * GeoAventura Kids - Banco de Questões e Desafios (3º Ano do Ensino Fundamental)
 * Alinhado integralmente aos Capítulos 4, 5 e 6 da Apostila de Geografia:
 * Cap 4: Manifestações Culturais no Município
 * Cap 5: Povos e Comunidades Tradicionais
 * Cap 6: Influências Culturais de Diferentes Povos
 */

const ISLANDS_DATA = [
  {
    id: "folclore",
    chapter: "Capítulo 4",
    title: "Reino do Folclore e das Festas",
    subtitle: "Lendas, Festas Populares e Origem das Brincadeiras",
    icon: "🎭",
    badge: "Mestre do Folclore",
    badgeIcon: "🎭",
    color: "#ff8400",
    description: "Conheça a lenda do Boto, o Bumba Meu Boi de Parintins, o Carnaval e as brincadeiras tradicionais!",
    hasMinigame: "brincadeiras",
    questions: [
      {
        id: "f1",
        question: "O que é o FOLCLORE de um povo?",
        options: [
          "O conjunto de lendas, tradições, sabedoria popular, brincadeiras, ritmos e festas transmitidos de geração em geração 📜🎉",
          "Um tipo de computador muito antigo 💻",
          "Um livro de matemática com contas difíceis 📐",
          "Uma regra de trânsito para carros 🚗"
        ],
        correct: 0,
        hint: "Pense nas histórias que seus avós contam, nas cantigas de roda e nas festas populares da nossa gente!",
        explanation: "O folclore reúne a cultura e a sabedoria popular: lendas, danças, cantigas, comidas e festas que fazem parte da nossa identidade!",
        icon: "📜"
      },
      {
        id: "f2",
        question: "Na lenda amazônica do Boto-cor-de-rosa, como o boto é descrito?",
        options: [
          "Um mamífero aquático dos rios que, segundo a lenda, se transforma em um homem elegante de chapéu para encantar as festas 🐬🎩",
          "Um pássaro gigante que voa no céu à noite 🦅",
          "Um peixe dourado que concede três desejos 🐠",
          "Um jacaré mágico com asas 🐊"
        ],
        correct: 0,
        hint: "Ele vive nos rios da Amazônia e usa um chapéu branco para esconder o furinho de respirar na cabeça!",
        explanation: "O boto-cor-de-rosa é um mamífero aquático real da Região Norte. Na narrativa mítica, ele vira um belo rapaz que dança nas noites de festa junina!",
        icon: "🐬"
      },
      {
        id: "f3",
        question: "Na história do Bumba Meu Boi, por que Pai Francisco cortou a língua do boi mais bonito do patrão?",
        options: [
          "Porque sua esposa Catirina estava grávida e teve o forte desejo de comer a língua do boi 🤰🐮",
          "Porque ele queria vender a língua no mercado 🏪",
          "Porque o boi não sabia cantar 🎵",
          "Porque foi uma ordem do fazendeiro 👨‍🌾"
        ],
        correct: 0,
        hint: "A esposa grávida teve um desejo bem diferente e o pajé ajudou a ressuscitar o boizinho!",
        explanation: "No auto do Bumba Meu Boi, Catirina deseja a língua do boi. Com a ajuda do pajé/curandeiro, o boi ressuscita e todos celebram com uma grande festa!",
        icon: "🐮"
      },
      {
        id: "f4",
        question: "No famoso Festival Folclórico de Parintins, no Amazonas, quais são os dois bois que disputam a festa?",
        options: [
          "Boi Caprichoso (Azul 💙) e Boi Garantido (Vermelho ❤️)",
          "Boi Amarelo e Boi Verde 💛💚",
          "Boi Valente e Boi Veloz 🐎",
          "Boi Estrela e Boi Lua 🌟🌙"
        ],
        correct: 0,
        hint: "Uma torcida veste azul com a estrela na testa e a outra veste vermelho com o coração na testa!",
        explanation: "O Festival de Parintins é um dos maiores espetáculos culturais do Brasil, com a disputa emocionante entre o Boi Caprichoso (azul) e o Boi Garantido (vermelho)!",
        icon: "🎪"
      },
      {
        id: "f5",
        question: "No período colonial do Brasil, o Carnaval era comemorado com o 'Entrudo'. Como era essa brincadeira?",
        options: [
          "As pessoas jogavam água, farinha e 'limões-de-cheiro' umas nas outras nas ruas 💦🍋",
          "As pessoas assistiam a filmes no cinema 🍿",
          "Era proibido sair de casa e fazer qualquer barulho 🤫",
          "Havia corridas de carros de fórmula 1 🏎️"
        ],
        correct: 0,
        hint: "Era uma grande farra molhada nas ruas antes de existirem os desfiles de samba e blocos atuais!",
        explanation: "O Entrudo foi a primeira forma de Carnaval popular no Brasil colonial, onde amigos e vizinhos jogavam água perfumada e pós coloridos uns nos outros!",
        icon: "🎭"
      },
      {
        id: "f6",
        question: "O esporte mais popular do Brasil, o FUTEBOL, foi criado originalmente em qual país?",
        options: [
          "Na Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿⚽",
          "No Japão 🇯🇵",
          "No Egito Antigo 🇪🇬",
          "Na Austrália 🇦🇺"
        ],
        correct: 0,
        hint: "Fica na Europa! O esporte com 11 jogadores e bola nos pés foi trazido ao Brasil por Charles Miller.",
        explanation: "O futebol moderno nasceu na Inglaterra no século XIX. No Brasil, virou paixão nacional, originando também o futsal e o futebol de areia!",
        icon: "⚽"
      }
    ]
  },
  {
    id: "povos",
    chapter: "Capítulo 5",
    title: "Santuário dos Povos Tradicionais",
    subtitle: "Indígenas, Quilombolas, Caiçaras, Ribeirinhos e Seringueiros",
    icon: "🏹",
    badge: "Guardião dos Povos Tradicionais",
    badgeIcon: "🌿",
    color: "#2b9348",
    description: "Aprenda sobre os modos de vida, territórios coletivos e a importância de proteger as comunidades tradicionais!",
    hasMinigame: "povos",
    questions: [
      {
        id: "po1",
        question: "No Brasil existem muitos povos indígenas diferentes. O que demonstra essa grande diversidade?",
        options: [
          "Existem mais de 305 etnias indígenas e mais de 270 línguas diferentes faladas no país 🗣️🏹",
          "Todos os indígenas falam a mesma língua e têm as mesmas roupas 👕",
          "Só existe uma única tribo em todo o território nacional ⛺",
          "Os indígenas só vivem em outros continentes 🌍"
        ],
        correct: 0,
        hint: "O Brasil tem uma enorme riqueza de línguas e culturas nativas, como os povos Guarani e Catuquina!",
        explanation: "O Brasil possui mais de 305 etnias indígenas e mais de 270 línguas indígenas vivas, cada uma com seus costumes, mitos e saberes!",
        icon: "🏹"
      },
      {
        id: "po2",
        question: "Quem são as comunidades CAIÇARAS?",
        options: [
          "Populações tradicionais do litoral brasileiro que vivem da pesca artesanal e do respeito ao mar 🛶🌊",
          "Pessoas que vivem no topo de montanhas congeladas 🏔️",
          "Operários que constroem fábricas no centro das cidades 🏭",
          "Astronautas que viajam no espaço 🚀"
        ],
        correct: 0,
        hint: "Eles moram pertinho das praias e usam canoas para pescar peixes e frutos do mar!",
        explanation: "Os caiçaras são povos tradicionais que habitam o litoral dos estados de SP, RJ e PR, com rica sabedoria sobre marés, barcos e pesca artesanal.",
        icon: "🛶"
      },
      {
        id: "po3",
        question: "Como vivem os povos RIBEIRINHOS, muito comuns na Amazônia?",
        options: [
          "Moram em casas de palafita às margens dos rios e usam barcos como principal meio de transporte e pesca 🛖⛵",
          "Moram em prédios de 50 andares com elevador 🏢",
          "Não gostam de água e evitam rios 🏜️",
          "Andam apenas de metrô subterrâneo 🚇"
        ],
        correct: 0,
        hint: "As casas de madeira são erguidas em estacas altas (palafitas) para a água do rio não entrar na época das cheias!",
        explanation: "Os ribeirinhos vivem integrados à dinâmica das águas: quando o rio sobe ou desce, suas vidas e viagens de barco acompanham a natureza.",
        icon: "🛖"
      },
      {
        id: "po4",
        question: "O que eram os QUILOMBOS, como o famoso Quilombo dos Palmares de Zumbi e Dandara?",
        options: [
          "Comunidades de refúgio, união e resistência formadas por africanos e descendentes que lutavam contra a escravidão ✊🏿🛖",
          "Grandes feiras para vender tecidos importados 🛍️",
          "Navios de turismo que viajavam pelo mundo 🚢",
          "Escolas de música clássica europeia 🎻"
        ],
        correct: 0,
        hint: "Eram espaços livres na floresta onde as pessoas escravizadas podiam viver em comunidade com dignidade.",
        explanation: "Os quilombos foram fundamentais na resistência à escravidão. Hoje, as comunidades remanescentes de quilombos mantêm a posse e o uso coletivo da terra!",
        icon: "✊🏿"
      },
      {
        id: "po5",
        question: "Qual é o trabalho tradicional dos SERINGUEIROS na Floresta Amazônica?",
        options: [
          "Fazer pequenos cortes na casca da árvore seringueira para colher o látex e produzir borracha natural sem derrubar a mata 🌳🍶",
          "Cortar todas as árvores com tratores para fazer estacionamentos 🚜",
          "Plantar trigo no gelo da Antártida ❄️",
          "Construir navios de aço ⛴️"
        ],
        correct: 0,
        hint: "Eles extraem um líquido branco chamado látex sem machucar ou matar a árvore!",
        explanation: "Os seringueiros praticam o extrativismo sustentável: protegem a floresta em pé porque precisam das seringueiras vivas para tirar o látex!",
        icon: "🌳"
      },
      {
        id: "po6",
        question: "Quais são as principais ameaças enfrentadas hoje pelos povos e comunidades tradicionais?",
        options: [
          "Desmatamento, garimpo/mineração ilegal, expansão pecuária desordenada e hidrelétricas 🚜🪓",
          "Excesso de chuva de confete 🎊",
          "Muitas pessoas lendo livros de histórias infantis 📚",
          "Brincadeiras de pular corda no parque 🪢"
        ],
        correct: 0,
        hint: "A destruição da natureza e a invasão de suas terras ameaçam a sobrevivência desses povos.",
        explanation: "A preservação das florestas, a demarcação das terras e o respeito aos direitos (escola diferenciada e saúde) são urgentes para proteger os povos tradicionais.",
        icon: "🛡️"
      }
    ]
  },
  {
    id: "influencias",
    chapter: "Capítulo 6",
    title: "Mosaico das Heranças Culturais",
    subtitle: "Miscigenação, Heranças Indígenas, Africanas e Europeias",
    icon: "🏛️",
    badge: "Mestre das Heranças",
    badgeIcon: "🎨",
    color: "#7209b7",
    description: "Descubra a arquitetura Enxaimel, o hábito de dormir em rede, o sincretismo e os imigrantes de ontem e de hoje!",
    questions: [
      {
        id: "i1",
        question: "O que significa a palavra MISCIGENAÇÃO na história do povo brasileiro?",
        options: [
          "A mistura e o encontro de povos de diferentes origens culturais, étnicas e tradições 🤝🏽🇧🇷",
          "A separação completa de todas as pessoas em ilhas isoladas 🏝️",
          "O ato de pintar um quadro com apenas uma cor ⬛",
          "Um tipo de remédio para dor de dente 💊"
        ],
        correct: 0,
        hint: "O Brasil é um país multicultural porque nasceu do encontro de indígenas, africanos, europeus e imigrantes!",
        explanation: "A miscigenação é a união e integração de diferentes matrizes culturais (indígena, africana, portuguesa, italiana, alemã, japonesa, etc.), formando nosso povo!",
        icon: "🤝"
      },
      {
        id: "i2",
        question: "Qual costume muito comum no cotidiano brasileiro foi herdado diretamente dos POVOS INDÍGENAS?",
        options: [
          "O costume de descansar em REDES de dormir e o hábito do banho diário 🛏️🚿",
          "Usar casacos pesados de pele de urso no calor 🧥",
          "Comer pizza com garfo de ouro todos os dias 🍕",
          "Dormir em cima de mesas de escritório 🏢"
        ],
        correct: 0,
        hint: "É aquela rede gostosa de tecido amarrada na varanda para descansar e o cuidado de tomar banho todos os dias!",
        explanation: "Os indígenas nos ensinaram a dormir em redes de palha e algodão, o apreço pelo banho diário e o artesanato com cestos trançados de fibras vegetais.",
        icon: "🌴"
      },
      {
        id: "i3",
        question: "Qual é a característica marcante da arquitetura ENXAIMEL, trazida pelos imigrantes ALEMÃES para o Sul e Sudeste?",
        options: [
          "Casas com vigas de madeira aparentes encaixadas e telhados bem inclinados para a chuva e o frio 🏡🪵",
          "Pirâmides gigantes feitas de pedra dourada 🔺",
          "Prédios redondos feitos inteiramente de vidro espelhado 🏙️",
          "Tendas de tecido no deserto ⛺"
        ],
        correct: 0,
        hint: "Você vê essas construções charmosas em cidades como Blumenau, Joinville, Gramado e Campos do Jordão!",
        explanation: "A técnica do Enxaimel usa troncos de madeira cruzados preenchidos com tijolos ou pedras e telhados pontudos típicos da tradição alemã!",
        icon: "🏡"
      },
      {
        id: "i4",
        question: "O que é o SINCRETISMO RELIGIOSO, muito presente na herança afro-brasileira?",
        options: [
          "A união e associação de tradições e divindades de diferentes religiões (como a ligação entre Iemanjá e Nossa Senhora dos Navegantes) 🕊️🌊",
          "Uma competição de quem corre mais rápido 🏃",
          "Um tipo de instrumento de corda 🎸",
          "O estudo dos vulcões no fundo do oceano 🌋"
        ],
        correct: 0,
        hint: "Para poder manter sua fé no período colonial, os escravizados associavam os orixás aos santos católicos.",
        explanation: "O sincretismo religioso permitiu que a cultura africana preservasse suas raízes e homenageasse divindades como Iemanjá em conjunto com celebrações como N. Sra. dos Navegantes.",
        icon: "🕊️"
      },
      {
        id: "i5",
        question: "Nos dias de hoje (imigrações contemporâneas), por que muitas pessoas de outros países vêm morar no Brasil como refugiadas?",
        options: [
          "Buscando segurança e melhores condições de vida, fugindo de guerras, perseguições e graves crises em seus países de origem 🕊️🧳",
          "Apenas para passar um final de semana na praia e voltar 🏖️",
          "Porque foram sorteadas em um jogo de videogame 🎮",
          "Para comprar refrigerante no supermercado 🥤"
        ],
        correct: 0,
        hint: "Pessoas da Venezuela, Haiti, Síria e países africanos buscam acolhimento, paz e recomeço no Brasil.",
        explanation: "O refúgio é um direito humano fundamental: acolher quem precisa fugir de conflitos, guerras e perseguições para recomeçar com dignidade!",
        icon: "🧳"
      }
    ]
  },
  {
    id: "palavras_sabores",
    chapter: "Capítulo 6",
    title: "Tesouro das Palavras, Pratos e Ritmos",
    subtitle: "Vocabulário Tupi e Africano, Culinária Regional e Danças",
    icon: "🍲",
    badge: "Mestre dos Sabores e Ritmos",
    badgeIcon: "🥁",
    color: "#2ec4b6",
    description: "Desvende as palavras de origem tupi e africana, os pratos típicos dos estados e danças como Carimbó e Frevo!",
    hasMinigame: "palavras",
    questions: [
      {
        id: "ps1",
        question: "De onde vêm as palavras do nosso dia a dia como PIPOCA, ABACAXI, CATUPIRY e MINGAU?",
        options: [
          "Das línguas INDÍGENAS (principalmente do tronco Tupi) 🌽🍍",
          "Do idioma inglês da América do Norte 🗽",
          "Do idioma japonês 🍣",
          "Da língua russa do polo norte 🇷🇺"
        ],
        correct: 0,
        hint: "São nomes de frutas nativas, comidas de milho e mandioca que os primeiros habitantes do Brasil já conheciam!",
        explanation: "O português falado no Brasil tem milhares de palavras indígenas: abacaxi, pipoca, jacaré, maracujá, tamanduá, caju e mingau!",
        icon: "🍍"
      },
      {
        id: "ps2",
        question: "E as palavras muito usadas como CAÇULA (o irmão mais novo), BANGUELA, CAMUNDONGO e FOFOCA, têm qual origem?",
        options: [
          "Origem em línguas AFRICANAS (como o Quimbundo e Iorubá) 🗣️🌍",
          "Origem na Roma Antiga em latim puro 🏛️",
          "Origem na língua alemã 🥨",
          "Origem na China 🐉"
        ],
        correct: 0,
        hint: "Foram trazidas pelos africanos que vieram para o Brasil e enriqueceram nosso jeito carinhoso de falar!",
        explanation: "Palavras como caçula, banguela, camundongo, fofoca, moleque, quitanda e caçamba são heranças africanas no nosso vocabulário!",
        icon: "🗣️"
      },
      {
        id: "ps3",
        question: "Relacione o prato típico à sua região/origem: O delicioso ACARAJÉ feito com azeite de dendê é símbolo de qual estado?",
        options: [
          "Bahia (culinária de forte herança africana) 🧆🇧🇷",
          "Rio Grande do Sul (clima frio dos pampas) 🥩",
          "Acre (fronteira com o Peru) 🌴",
          "Santa Catarina (colonização alemã) 🥨"
        ],
        correct: 0,
        hint: "As baianas de acarajé com seus vestidos brancos preparam esse bolinho de feijão-fradinho frito no dendê!",
        explanation: "O acarajé baiano, a moqueca com azeite de dendê e o vatapá são testemunhos vivos e saborosos da herança africana no Brasil.",
        icon: "🧆"
      },
      {
        id: "ps4",
        question: "Em qual estado brasileiro o CARIMBÓ, dança de saias rodadas ao som de tambores feitos de troncos, é tradição popular?",
        options: [
          "No Pará (Região Norte) 💃🏽🥁",
          "No Rio Grande do Sul (Região Sul) ❄️",
          "No Japão 🇯🇵",
          "Em Portugal 🏰"
        ],
        correct: 0,
        hint: "É uma dança paraense contagiante inspirada nos movimentos dos animais e no som do curimbó (tambor)!",
        explanation: "O Carimbó nasceu no Pará da mistura de passos indígenas, tambores africanos e influências portuguesas!",
        icon: "💃"
      },
      {
        id: "ps5",
        question: "O FREVO, famoso pelos passinhos ágeis e guarda-chuvinhas coloridos, e o MARACATU são ritmos tradicionais de qual estado?",
        options: [
          "Pernambuco (Região Nordeste) ☂️🎺",
          "Goiás (Região Centro-Oeste) 🌾",
          "Paraná (Região Sul) 🌲",
          "Roraima (Região Norte) 🏔️"
        ],
        correct: 0,
        hint: "Nas ladeiras históricas de Olinda e nas ruas de Recife, todo mundo pula no ritmo do frevo!",
        explanation: "O Frevo e o Maracatu são patrimônios culturais de Pernambuco, com muita energia, roupas coloridas e som de trompetes e tambores!",
        icon: "☂️"
      }
    ]
  }
];

// Minijogo 1: Origem das Brincadeiras Tradicionais (Capítulo 4)
const GAMES_ORIGIN_CHALLENGES = [
  {
    toy: "Pipa (ou Papagaio de papel) 🪁",
    options: [
      { name: "China Antiga 🇨🇳", correct: true },
      { name: "Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿", correct: false },
      { name: "Austrália 🇦🇺", correct: false }
    ],
    hint: "Foi inventada no Oriente há mais de 2.000 anos para sinalizações e depois virou brincadeira no céu!",
    explanation: "A pipa nasceu na China Antiga, feita de seda e bambu, e hoje voa nos céus do mundo todo!"
  },
  {
    toy: "Peteca 🪶",
    options: [
      { name: "Indígenas Brasileiros (Tupi) 🏹🇧🇷", correct: true },
      { name: "França 🇫🇷", correct: false },
      { name: "Alemanha 🇩🇪", correct: false }
    ],
    hint: "A palavra 'pe'teka' em tupi significa bater com a palma da mão!",
    explanation: "A peteca foi criada pelos povos originários indígenas do Brasil usando palha de milho e penas coloridas!"
  },
  {
    toy: "Pular Corda 🪢",
    options: [
      { name: "Grécia e Roma Antiga 🏛️🇬🇷", correct: true },
      { name: "China Antiga 🇨🇳", correct: false },
      { name: "Brasil Colonial 🇧🇷", correct: false }
    ],
    hint: "Os antigos atletas gregos usavam cordas para treinar saltos e ritmo!",
    explanation: "Pular corda remonta à Grécia e Roma Antiga e virou uma das brincadeiras mais queridas da infância!"
  },
  {
    toy: "Amarelinha 🔢",
    options: [
      { name: "França 🇫🇷", correct: true },
      { name: "Japão 🇯🇵", correct: false },
      { name: "Estados Unidos 🇺🇸", correct: false }
    ],
    hint: "Vem da palavra francesa 'marelle', que desenhava um percurso no chão até o 'Céu'!",
    explanation: "A amarelinha popularizou-se na França e chegou ao Brasil através da Europa, ensinando equilíbrio e números!"
  },
  {
    toy: "Ciranda / Cantigas de Roda ⭕",
    options: [
      { name: "Portugal 🇵🇹", correct: true },
      { name: "Rússia 🇷🇺", correct: false },
      { name: "Egito 🇪🇬", correct: false }
    ],
    hint: "Vieram com os colonizadores portugueses nas caravelas e se misturaram com nossos ritmos!",
    explanation: "As cantigas de roda como 'Ciranda, Cirandinha' têm fortes raízes nas tradições musicais de Portugal!"
  },
  {
    toy: "Futebol ⚽",
    options: [
      { name: "Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿", correct: true },
      { name: "Grécia 🇬🇷", correct: false },
      { name: "China 🇨🇳", correct: false }
    ],
    hint: "Criado nas escolas inglesas no século XIX e trazido ao Brasil por Charles Miller!",
    explanation: "O futebol moderno foi regulamentado na Inglaterra e virou paixão nacional e multicultural no Brasil!"
  }
];

// Minijogo 2: Identificador de Povos e Comunidades Tradicionais (Capítulo 5)
const PEOPLES_CHALLENGES = [
  {
    description: "Povo tradicional que vive no litoral, constrói canoas de madeira e vive da pesca artesanal no mar:",
    correctTarget: "caiçara",
    targetName: "Comunidades Caiçaras 🛶🌊",
    explanation: "Os caiçaras são os guardiões do litoral brasileiro!"
  },
  {
    description: "Povo que mora em casas de palafita à beira dos rios amazônicos e usa barcos para ir à escola e pescar:",
    correctTarget: "ribeirinho",
    targetName: "Povos Ribeirinhos 🛖⛵",
    explanation: "Os ribeirinhos vivem no ritmo das águas e cheias dos rios!"
  },
  {
    description: "Comunidade de resistência e liberdade com posse e uso comunitário da terra (como o Quilombo dos Palmares):",
    correctTarget: "quilombola",
    targetName: "Comunidades Quilombolas ✊🏿🛖",
    explanation: "Os quilombos preservam a memória, a agricultura coletiva e a força afro-brasileira!"
  },
  {
    description: "Trabalhadores da floresta amazônica que colhem o látex da seringueira sem derrubar as árvores:",
    correctTarget: "seringueiro",
    targetName: "Seringueiros da Amazônia 🌳🍶",
    explanation: "Os seringueiros protegem a floresta em pé enquanto extraem a borracha natural!"
  },
  {
    description: "Mais de 305 etnias e 270 línguas no Brasil (como os Guarani e Catuquina), com rica sabedoria da natureza:",
    correctTarget: "indigena",
    targetName: "Povos Indígenas 🏹🌿",
    explanation: "Os povos indígenas são os habitantes originários deste continente!"
  }
];

// Minijogo 3: Detetive das Palavras (Tupi vs Africana) - Capítulo 6
const WORDS_CHALLENGES = [
  { word: "Pipoca 🌽", origin: "indigena", originName: "Indígena (Tupi)", hint: "Vem de 'pira-poca', que significa pele que estoura!" },
  { word: "Caçula 👶", origin: "africana", originName: "Africana (Quimbundo)", hint: "Significa o filho mais jovem ou o irmãozinho menor!" },
  { word: "Abacaxi 🍍", origin: "indigena", originName: "Indígena (Tupi)", hint: "Fruta saborosa e cheirosa ('ibá' = fruto, 'cati' = que cheira bem)!" },
  { word: "Banguela 🦷", origin: "africana", originName: "Africana", hint: "Palavra de raiz africana para quem perdeu um dentinho de leite!" },
  { word: "Jacaré 🐊", origin: "indigena", originName: "Indígena (Tupi)", hint: "Animal aquático com nome tupi ('aquele que olha de lado')!" },
  { word: "Fofoca 🗣️", origin: "africana", originName: "Africana", hint: "Conversa cochichada de matriz cultural africana!" },
  { word: "Mingau 🥣", origin: "indigena", originName: "Indígena (Tupi)", hint: "Comida cremosa e quentinha de farinha feita pelos indígenas!" },
  { word: "Camundongo 🐭", origin: "africana", originName: "Africana (Quimbundo)", hint: "Ratinho pequeno batizado por palavras de matriz africana!" }
];
