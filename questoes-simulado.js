// ========================================
// BANCO DE QUESTÕES DO SIMULADO DETRAN
// ========================================
// 
// INSTRUÇÕES PARA EDITAR:
// 1. Cada questão deve ter: id, title, alternatives, correct, category
// 2. alternatives: array com 4 opções (A, B, C, D)
// 3. correct: letra da resposta correta ("A", "B", "C" ou "D")
// 4. category: categoria da questão (ex: "Legislação", "Sinalização", etc.)
//
// Para adicionar mais questões, copie o formato abaixo e incremente o ID
// ========================================

const QUESTIONS_DATABASE = [
    // ========================================
    // LEGISLAÇÃO DE TRÂNSITO
    // ========================================
    {
        id: 1,
        title: "Qual é a velocidade máxima permitida em vias urbanas quando não sinalizada?",
        alternatives: [
            "40 km/h",
            "50 km/h", 
            "60 km/h",
            "80 km/h"
        ],
        correct: "B",
        category: "Legislação"
    },
    {
        id: 2,
        title: "Em rodovias de pista dupla, qual é a velocidade máxima para automóveis?",
        alternatives: [
            "80 km/h",
            "100 km/h",
            "110 km/h",
            "120 km/h"
        ],
        correct: "C",
        category: "Legislação"
    },
    {
        id: 3,
        title: "Qual a distância mínima que deve ser mantida entre veículos em movimento?",
        alternatives: [
            "1 segundo",
            "2 segundos",
            "3 segundos",
            "4 segundos"
        ],
        correct: "B",
        category: "Legislação"
    },
    {
        id: 4,
        title: "É permitido dirigir com calçado que não se firme nos pés?",
        alternatives: [
            "Sim, desde que seja confortável",
            "Não, é proibido por lei",
            "Sim, apenas em vias urbanas",
            "Não, apenas em rodovias"
        ],
        correct: "B",
        category: "Legislação"
    },
    {
        id: 5,
        title: "Qual a idade mínima para obter a CNH categoria B?",
        alternatives: [
            "16 anos",
            "17 anos",
            "18 anos",
            "21 anos"
        ],
        correct: "C",
        category: "Legislação"
    },

    // ========================================
    // SINALIZAÇÃO
    // ========================================
    {
        id: 6,
        title: "O que significa a placa de regulamentação com fundo branco e borda vermelha?",
        alternatives: [
            "Indica perigo à frente",
            "Proíbe determinada ação",
            "Indica obrigação",
            "Informa direção obrigatória"
        ],
        correct: "B",
        category: "Sinalização"
    },
    {
        id: 7,
        title: "A placa de 'PARE' tem formato:",
        alternatives: [
            "Circular",
            "Retangular",
            "Triangular",
            "Octogonal"
        ],
        correct: "D",
        category: "Sinalização"
    },
    {
        id: 8,
        title: "O que indica uma placa de fundo azul?",
        alternatives: [
            "Perigo",
            "Obrigação",
            "Informação",
            "Proibição"
        ],
        correct: "C",
        category: "Sinalização"
    },
    {
        id: 9,
        title: "A sinalização horizontal amarela indica:",
        alternatives: [
            "Sentido único",
            "Pista reversível",
            "Contramão",
            "Proibição de ultrapassagem"
        ],
        correct: "B",
        category: "Sinalização"
    },
    {
        id: 10,
        title: "O que significa uma seta pintada no asfalto apontando para a direita?",
        alternatives: [
            "Obrigação de virar à direita",
            "Proibição de virar à direita",
            "Indicação de direção",
            "Área de estacionamento"
        ],
        correct: "A",
        category: "Sinalização"
    },

    // ========================================
    // PRIMEIROS SOCORROS
    // ========================================
    {
        id: 11,
        title: "Em caso de acidente sem vítimas, o condutor deve:",
        alternatives: [
            "Remover o veículo imediatamente",
            "Sinalizar o local e aguardar a polícia",
            "Continuar a viagem normalmente",
            "Chamar apenas o seguro"
        ],
        correct: "B",
        category: "Primeiros Socorros"
    },
    {
        id: 12,
        title: "Em caso de acidente com vítimas, a primeira ação deve ser:",
        alternatives: [
            "Remover as vítimas do local",
            "Sinalizar o local e chamar socorro",
            "Tirar fotos do acidente",
            "Contatar o seguro"
        ],
        correct: "B",
        category: "Primeiros Socorros"
    },
    {
        id: 13,
        title: "Para socorrer uma vítima inconsciente, deve-se:",
        alternatives: [
            "Mover a vítima imediatamente",
            "Verificar respiração e pulso",
            "Dar água para a vítima",
            "Deixar a vítima sozinha"
        ],
        correct: "B",
        category: "Primeiros Socorros"
    },
    {
        id: 14,
        title: "Em caso de hemorragia, a primeira medida é:",
        alternatives: [
            "Aplicar torniquete",
            "Comprimir o local do sangramento",
            "Dar analgésicos",
            "Lavar com água"
        ],
        correct: "B",
        category: "Primeiros Socorros"
    },
    {
        id: 15,
        title: "O número de emergência do SAMU é:",
        alternatives: [
            "190",
            "192",
            "193",
            "199"
        ],
        correct: "B",
        category: "Primeiros Socorros"
    },

    // ========================================
    // MECÂNICA BÁSICA
    // ========================================
    {
        id: 16,
        title: "O que indica o painel quando a luz do óleo do motor acende?",
        alternatives: [
            "Óleo em excesso",
            "Falta de óleo do motor",
            "Óleo vencido",
            "Filtro de óleo sujo"
        ],
        correct: "B",
        category: "Mecânica Básica"
    },
    {
        id: 17,
        title: "A luz vermelha da temperatura do motor indica:",
        alternatives: [
            "Motor frio",
            "Sobreaquecimento do motor",
            "Temperatura normal",
            "Problema no ar condicionado"
        ],
        correct: "B",
        category: "Mecânica Básica"
    },
    {
        id: 18,
        title: "O que verificar antes de uma viagem longa?",
        alternatives: [
            "Apenas combustível",
            "Pneus, óleo, água e combustível",
            "Apenas pneus",
            "Apenas água"
        ],
        correct: "B",
        category: "Mecânica Básica"
    },
    {
        id: 19,
        title: "A calibragem dos pneus deve ser verificada:",
        alternatives: [
            "Mensalmente",
            "Semanalmente",
            "Diariamente",
            "Apenas quando necessário"
        ],
        correct: "B",
        category: "Mecânica Básica"
    },
    {
        id: 20,
        title: "O que fazer quando o freio falha?",
        alternatives: [
            "Puxar o freio de mão bruscamente",
            "Usar o freio de mão gradualmente e reduzir marcha",
            "Desligar o motor",
            "Pisar no acelerador"
        ],
        correct: "B",
        category: "Mecânica Básica"
    },

    // ========================================
    // MEIO AMBIENTE E CIDADANIA
    // ========================================
    {
        id: 21,
        title: "O que é direção defensiva?",
        alternatives: [
            "Dirigir rapidamente",
            "Dirigir com cautela e prevenção",
            "Dirigir apenas em estradas",
            "Dirigir com música alta"
        ],
        correct: "B",
        category: "Meio Ambiente e Cidadania"
    },
    {
        id: 22,
        title: "Qual atitude contribui para um trânsito mais seguro?",
        alternatives: [
            "Ultrapassar pela direita",
            "Respeitar a sinalização",
            "Dirigir acima da velocidade",
            "Usar o celular ao dirigir"
        ],
        correct: "B",
        category: "Meio Ambiente e Cidadania"
    },
    {
        id: 23,
        title: "O que fazer ao encontrar um pedestre na faixa?",
        alternatives: [
            "Acelerar para passar rápido",
            "Parar e dar preferência",
            "Buzinar para o pedestre sair",
            "Contornar o pedestre"
        ],
        correct: "B",
        category: "Meio Ambiente e Cidadania"
    },
    {
        id: 24,
        title: "É permitido jogar lixo pela janela do veículo?",
        alternatives: [
            "Sim, se for orgânico",
            "Não, é proibido e multável",
            "Sim, apenas em rodovias",
            "Não, apenas em vias urbanas"
        ],
        correct: "B",
        category: "Meio Ambiente e Cidadania"
    },
    {
        id: 25,
        title: "Qual comportamento demonstra cidadania no trânsito?",
        alternatives: [
            "Não dar passagem para ambulância",
            "Respeitar idosos e deficientes",
            "Estacionar em vagas especiais",
            "Dirigir embriagado"
        ],
        correct: "B",
        category: "Meio Ambiente e Cidadania"
    }

    // ========================================
    // MAIS QUESTÕES DE LEGISLAÇÃO
    // ========================================
    {
        id: 26,
        title: "Qual a velocidade máxima em vias de trânsito rápido?",
        alternatives: [
            "80 km/h",
            "90 km/h",
            "100 km/h",
            "110 km/h"
        ],
        correct: "A",
        category: "Legislação"
    },
    {
        id: 27,
        title: "É permitido dirigir com apenas uma mão no volante?",
        alternatives: [
            "Sim, sempre",
            "Não, é proibido",
            "Sim, apenas em vias urbanas",
            "Sim, apenas em rodovias"
        ],
        correct: "B",
        category: "Legislação"
    },
    {
        id: 28,
        title: "Qual a idade mínima para dirigir veículo de carga?",
        alternatives: [
            "18 anos",
            "21 anos",
            "25 anos",
            "Não há limite"
        ],
        correct: "B",
        category: "Legislação"
    },
    {
        id: 29,
        title: "O que é considerado infração gravíssima?",
        alternatives: [
            "Dirigir sem CNH",
            "Não usar cinto de segurança",
            "Dirigir embriagado",
            "Todas as anteriores"
        ],
        correct: "D",
        category: "Legislação"
    },
    {
        id: 30,
        title: "Qual a multa por dirigir sem CNH?",
        alternatives: [
            "R$ 130,16",
            "R$ 293,47",
            "R$ 880,41",
            "R$ 1.467,35"
        ],
        correct: "C",
        category: "Legislação"
    },

    // ========================================
    // MAIS QUESTÕES DE SINALIZAÇÃO
    // ========================================
    {
        id: 31,
        title: "A placa de 'DÊ A PREFERÊNCIA' tem formato:",
        alternatives: [
            "Circular",
            "Triangular",
            "Retangular",
            "Octogonal"
        ],
        correct: "B",
        category: "Sinalização"
    },
    {
        id: 32,
        title: "O que indica uma placa de fundo amarelo?",
        alternatives: [
            "Perigo",
            "Obrigação",
            "Informação",
            "Proibição"
        ],
        correct: "A",
        category: "Sinalização"
    },
    {
        id: 33,
        title: "A sinalização horizontal branca indica:",
        alternatives: [
            "Sentido único",
            "Pista reversível",
            "Contramão",
            "Proibição de ultrapassagem"
        ],
        correct: "A",
        category: "Sinalização"
    },
    {
        id: 34,
        title: "O que significa uma placa com fundo verde?",
        alternatives: [
            "Perigo",
            "Obrigação",
            "Informação",
            "Proibição"
        ],
        correct: "C",
        category: "Sinalização"
    },
    {
        id: 35,
        title: "A placa de 'VELOCIDADE MÁXIMA PERMITIDA' tem formato:",
        alternatives: [
            "Circular",
            "Triangular",
            "Retangular",
            "Octogonal"
        ],
        correct: "A",
        category: "Sinalização"
    },

    // ========================================
    // MAIS QUESTÕES DE PRIMEIROS SOCORROS
    // ========================================
    {
        id: 36,
        title: "Em caso de queimadura, deve-se:",
        alternatives: [
            "Aplicar gelo diretamente",
            "Lavar com água corrente",
            "Aplicar pomada",
            "Cobrir com pano seco"
        ],
        correct: "B",
        category: "Primeiros Socorros"
    },
    {
        id: 37,
        title: "Para socorrer vítima de choque elétrico:",
        alternatives: [
            "Tocar a vítima imediatamente",
            "Desligar a fonte de energia",
            "Usar água para apagar",
            "Chamar apenas o bombeiro"
        ],
        correct: "B",
        category: "Primeiros Socorros"
    },
    {
        id: 38,
        title: "Em caso de fratura, deve-se:",
        alternatives: [
            "Mover a vítima",
            "Imobilizar o local",
            "Dar analgésicos",
            "Deixar a vítima sozinha"
        ],
        correct: "B",
        category: "Primeiros Socorros"
    },
    {
        id: 39,
        title: "O número de emergência da Polícia Militar é:",
        alternatives: [
            "190",
            "192",
            "193",
            "199"
        ],
        correct: "A",
        category: "Primeiros Socorros"
    },
    {
        id: 40,
        title: "Em caso de desmaio, deve-se:",
        alternatives: [
            "Dar água para a vítima",
            "Elevar as pernas da vítima",
            "Mover a vítima",
            "Deixar a vítima sozinha"
        ],
        correct: "B",
        category: "Primeiros Socorros"
    },

    // ========================================
    // MAIS QUESTÕES DE MECÂNICA BÁSICA
    // ========================================
    {
        id: 41,
        title: "O que indica a luz azul do painel?",
        alternatives: [
            "Problema no motor",
            "Farol alto ligado",
            "Falta de combustível",
            "Problema no freio"
        ],
        correct: "B",
        category: "Mecânica Básica"
    },
    {
        id: 42,
        title: "A troca do óleo do motor deve ser feita:",
        alternatives: [
            "A cada 5.000 km",
            "A cada 10.000 km",
            "A cada 20.000 km",
            "Conforme manual do veículo"
        ],
        correct: "D",
        category: "Mecânica Básica"
    },
    {
        id: 43,
        title: "O que verificar no sistema de freios?",
        alternatives: [
            "Apenas o pedal",
            "Fluido, pastilhas e discos",
            "Apenas as pastilhas",
            "Apenas o fluido"
        ],
        correct: "B",
        category: "Mecânica Básica"
    },
    {
        id: 44,
        title: "A luz amarela do painel indica:",
        alternatives: [
            "Perigo imediato",
            "Atenção necessária",
            "Funcionamento normal",
            "Problema crítico"
        ],
        correct: "B",
        category: "Mecânica Básica"
    },
    {
        id: 45,
        title: "O que fazer quando o motor superaquece?",
        alternatives: [
            "Continuar dirigindo",
            "Parar e desligar o motor",
            "Acelerar mais",
            "Ligar o ar condicionado"
        ],
        correct: "B",
        category: "Mecânica Básica"
    },

    // ========================================
    // MAIS QUESTÕES DE MEIO AMBIENTE E CIDADANIA
    // ========================================
    {
        id: 46,
        title: "O que é poluição sonora?",
        alternatives: [
            "Ruído excessivo",
            "Música alta",
            "Buzina",
            "Todas as anteriores"
        ],
        correct: "D",
        category: "Meio Ambiente e Cidadania"
    },
    {
        id: 47,
        title: "Qual comportamento demonstra respeito no trânsito?",
        alternatives: [
            "Não dar passagem",
            "Respeitar pedestres",
            "Ultrapassar pela direita",
            "Dirigir acima da velocidade"
        ],
        correct: "B",
        category: "Meio Ambiente e Cidadania"
    },
    {
        id: 48,
        title: "O que fazer ao encontrar veículo de emergência?",
        alternatives: [
            "Ignorar",
            "Dar passagem",
            "Acelerar",
            "Buzinar"
        ],
        correct: "B",
        category: "Meio Ambiente e Cidadania"
    },
    {
        id: 49,
        title: "É permitido usar celular ao dirigir?",
        alternatives: [
            "Sim, sempre",
            "Não, é proibido",
            "Sim, apenas com fone",
            "Sim, apenas parado"
        ],
        correct: "B",
        category: "Meio Ambiente e Cidadania"
    },
    {
        id: 50,
        title: "Qual atitude contribui para o meio ambiente?",
        alternatives: [
            "Desperdiçar combustível",
            "Manter o veículo em bom estado",
            "Jogar lixo pela janela",
            "Dirigir em alta velocidade"
        ],
        correct: "B",
        category: "Meio Ambiente e Cidadania"
    },

    // ========================================
    // QUESTÕES DIVERSAS - PARTE 1
    // ========================================
    {
        id: 51,
        title: "Qual a distância mínima para ultrapassagem?",
        alternatives: [
            "50 metros",
            "100 metros",
            "150 metros",
            "200 metros"
        ],
        correct: "C",
        category: "Direção Defensiva"
    },
    {
        id: 52,
        title: "O que é aquaplanagem?",
        alternatives: [
            "Dirigir na chuva",
            "Perda de aderência na água",
            "Dirigir em alta velocidade",
            "Dirigir com pneus carecas"
        ],
        correct: "B",
        category: "Direção Defensiva"
    },
    {
        id: 53,
        title: "Em caso de neblina, deve-se:",
        alternatives: [
            "Acelerar",
            "Usar farol baixo",
            "Desligar os faróis",
            "Usar apenas pisca-alerta"
        ],
        correct: "B",
        category: "Direção Defensiva"
    },
    {
        id: 54,
        title: "Qual a distância de segurança recomendada?",
        alternatives: [
            "1 segundo",
            "2 segundos",
            "3 segundos",
            "4 segundos"
        ],
        correct: "B",
        category: "Direção Defensiva"
    },
    {
        id: 55,
        title: "O que fazer em caso de pneu furado?",
        alternatives: [
            "Frear bruscamente",
            "Manter a direção e reduzir velocidade",
            "Acelerar",
            "Desligar o motor"
        ],
        correct: "B",
        category: "Direção Defensiva"
    },

    // ========================================
    // QUESTÕES DIVERSAS - PARTE 2
    // ========================================
    {
        id: 56,
        title: "Qual a velocidade máxima em área escolar?",
        alternatives: [
            "20 km/h",
            "30 km/h",
            "40 km/h",
            "50 km/h"
        ],
        correct: "B",
        category: "Legislação"
    },
    {
        id: 57,
        title: "É permitido dirigir com sandália?",
        alternatives: [
            "Sim, sempre",
            "Não, é proibido",
            "Sim, apenas em vias urbanas",
            "Sim, apenas em rodovias"
        ],
        correct: "B",
        category: "Legislação"
    },
    {
        id: 58,
        title: "Qual a multa por não usar cinto de segurança?",
        alternatives: [
            "R$ 130,16",
            "R$ 293,47",
            "R$ 880,41",
            "R$ 1.467,35"
        ],
        correct: "A",
        category: "Legislação"
    },
    {
        id: 59,
        title: "O que é considerado infração média?",
        alternatives: [
            "Dirigir sem CNH",
            "Não usar cinto de segurança",
            "Dirigir embriagado",
            "Estacionar em local proibido"
        ],
        correct: "D",
        category: "Legislação"
    },
    {
        id: 60,
        title: "Qual a idade mínima para CNH categoria A?",
        alternatives: [
            "16 anos",
            "17 anos",
            "18 anos",
            "21 anos"
        ],
        correct: "C",
        category: "Legislação"
    },

    // ========================================
    // QUESTÕES DIVERSAS - PARTE 3
    // ========================================
    {
        id: 61,
        title: "O que indica uma placa de 'PROIBIDO ESTACIONAR'?",
        alternatives: [
            "Pode parar",
            "Não pode parar",
            "Pode estacionar",
            "Não pode estacionar"
        ],
        correct: "D",
        category: "Sinalização"
    },
    {
        id: 62,
        title: "A placa de 'CUIDADO COM ANIMAIS' tem formato:",
        alternatives: [
            "Circular",
            "Triangular",
            "Retangular",
            "Octogonal"
        ],
        correct: "B",
        category: "Sinalização"
    },
    {
        id: 63,
        title: "O que significa uma placa de 'SENTIDO ÚNICO'?",
        alternatives: [
            "Pode ir e vir",
            "Apenas um sentido",
            "Pode ultrapassar",
            "Proibido ultrapassar"
        ],
        correct: "B",
        category: "Sinalização"
    },
    {
        id: 64,
        title: "A sinalização horizontal amarela contínua indica:",
        alternatives: [
            "Pode ultrapassar",
            "Proibido ultrapassar",
            "Pode parar",
            "Proibido parar"
        ],
        correct: "B",
        category: "Sinalização"
    },
    {
        id: 65,
        title: "O que indica uma placa de 'CURVA PERIGOSA'?",
        alternatives: [
            "Curva à direita",
            "Curva à esquerda",
            "Curva perigosa",
            "Curva fechada"
        ],
        correct: "C",
        category: "Sinalização"
    },

    // ========================================
    // QUESTÕES DIVERSAS - PARTE 4
    // ========================================
    {
        id: 66,
        title: "Em caso de acidente com vítima, deve-se:",
        alternatives: [
            "Remover a vítima",
            "Sinalizar e chamar socorro",
            "Tirar fotos",
            "Contatar o seguro"
        ],
        correct: "B",
        category: "Primeiros Socorros"
    },
    {
        id: 67,
        title: "Para socorrer vítima inconsciente:",
        alternatives: [
            "Mover a vítima",
            "Verificar respiração",
            "Dar água",
            "Deixar sozinha"
        ],
        correct: "B",
        category: "Primeiros Socorros"
    },
    {
        id: 68,
        title: "Em caso de hemorragia:",
        alternatives: [
            "Aplicar torniquete",
            "Comprimir o local",
            "Dar analgésicos",
            "Lavar com água"
        ],
        correct: "B",
        category: "Primeiros Socorros"
    },
    {
        id: 69,
        title: "O número do Corpo de Bombeiros é:",
        alternatives: [
            "190",
            "192",
            "193",
            "199"
        ],
        correct: "C",
        category: "Primeiros Socorros"
    },
    {
        id: 70,
        title: "Em caso de queimadura:",
        alternatives: [
            "Aplicar gelo",
            "Lavar com água",
            "Aplicar pomada",
            "Cobrir com pano"
        ],
        correct: "B",
        category: "Primeiros Socorros"
    },

    // ========================================
    // QUESTÕES DIVERSAS - PARTE 5
    // ========================================
    {
        id: 71,
        title: "O que indica a luz vermelha do painel?",
        alternatives: [
            "Atenção",
            "Perigo",
            "Funcionamento normal",
            "Problema crítico"
        ],
        correct: "D",
        category: "Mecânica Básica"
    },
    {
        id: 72,
        title: "A troca do filtro de ar deve ser feita:",
        alternatives: [
            "A cada 5.000 km",
            "A cada 10.000 km",
            "A cada 20.000 km",
            "Conforme manual"
        ],
        correct: "D",
        category: "Mecânica Básica"
    },
    {
        id: 73,
        title: "O que verificar nos pneus?",
        alternatives: [
            "Apenas a calibragem",
            "Calibragem, desgaste e válvulas",
            "Apenas o desgaste",
            "Apenas as válvulas"
        ],
        correct: "B",
        category: "Mecânica Básica"
    },
    {
        id: 74,
        title: "A luz verde do painel indica:",
        alternatives: [
            "Problema",
            "Funcionamento normal",
            "Atenção",
            "Perigo"
        ],
        correct: "B",
        category: "Mecânica Básica"
    },
    {
        id: 75,
        title: "O que fazer quando o freio falha:",
        alternatives: [
            "Puxar o freio de mão",
            "Usar freio de mão gradualmente",
            "Desligar o motor",
            "Pisar no acelerador"
        ],
        correct: "B",
        category: "Mecânica Básica"
    },

    // ========================================
    // QUESTÕES DIVERSAS - PARTE 6
    // ========================================
    {
        id: 76,
        title: "O que é direção defensiva?",
        alternatives: [
            "Dirigir rapidamente",
            "Dirigir com cautela",
            "Dirigir apenas em estradas",
            "Dirigir com música alta"
        ],
        correct: "B",
        category: "Meio Ambiente e Cidadania"
    },
    {
        id: 77,
        title: "Qual comportamento demonstra cidadania?",
        alternatives: [
            "Não dar passagem",
            "Respeitar idosos",
            "Estacionar em vagas especiais",
            "Dirigir embriagado"
        ],
        correct: "B",
        category: "Meio Ambiente e Cidadania"
    },
    {
        id: 78,
        title: "O que fazer ao encontrar pedestre na faixa?",
        alternatives: [
            "Acelerar",
            "Parar e dar preferência",
            "Buzinar",
            "Contornar"
        ],
        correct: "B",
        category: "Meio Ambiente e Cidadania"
    },
    {
        id: 79,
        title: "É permitido jogar lixo pela janela?",
        alternatives: [
            "Sim, se for orgânico",
            "Não, é proibido",
            "Sim, apenas em rodovias",
            "Não, apenas em vias urbanas"
        ],
        correct: "B",
        category: "Meio Ambiente e Cidadania"
    },
    {
        id: 80,
        title: "Qual atitude contribui para trânsito seguro?",
        alternatives: [
            "Ultrapassar pela direita",
            "Respeitar sinalização",
            "Dirigir acima da velocidade",
            "Usar celular ao dirigir"
        ],
        correct: "B",
        category: "Meio Ambiente e Cidadania"
    },

    // ========================================
    // QUESTÕES DIVERSAS - PARTE 7
    // ========================================
    {
        id: 81,
        title: "Qual a velocidade máxima em vias arteriais?",
        alternatives: [
            "60 km/h",
            "70 km/h",
            "80 km/h",
            "90 km/h"
        ],
        correct: "A",
        category: "Legislação"
    },
    {
        id: 82,
        title: "É permitido dirigir com fone de ouvido?",
        alternatives: [
            "Sim, sempre",
            "Não, é proibido",
            "Sim, apenas um lado",
            "Sim, apenas em vias urbanas"
        ],
        correct: "B",
        category: "Legislação"
    },
    {
        id: 83,
        title: "Qual a multa por dirigir embriagado?",
        alternatives: [
            "R$ 1.467,35",
            "R$ 2.934,70",
            "R$ 5.869,40",
            "R$ 8.804,10"
        ],
        correct: "C",
        category: "Legislação"
    },
    {
        id: 84,
        title: "O que é considerado infração leve?",
        alternatives: [
            "Dirigir sem CNH",
            "Não usar cinto de segurança",
            "Dirigir embriagado",
            "Estacionar em local proibido"
        ],
        correct: "D",
        category: "Legislação"
    },
    {
        id: 85,
        title: "Qual a idade mínima para CNH categoria C?",
        alternatives: [
            "18 anos",
            "21 anos",
            "25 anos",
            "Não há limite"
        ],
        correct: "B",
        category: "Legislação"
    },

    // ========================================
    // QUESTÕES DIVERSAS - PARTE 8
    // ========================================
    {
        id: 86,
        title: "O que indica uma placa de 'PROIBIDO ULTRAPASSAR'?",
        alternatives: [
            "Pode ultrapassar",
            "Não pode ultrapassar",
            "Pode parar",
            "Não pode parar"
        ],
        correct: "B",
        category: "Sinalização"
    },
    {
        id: 87,
        title: "A placa de 'ATENÇÃO' tem formato:",
        alternatives: [
            "Circular",
            "Triangular",
            "Retangular",
            "Octogonal"
        ],
        correct: "B",
        category: "Sinalização"
    },
    {
        id: 88,
        title: "O que significa uma placa de 'PARE'?",
        alternatives: [
            "Reduzir velocidade",
            "Parar completamente",
            "Atenção",
            "Proibido parar"
        ],
        correct: "B",
        category: "Sinalização"
    },
    {
        id: 89,
        title: "A sinalização horizontal branca tracejada indica:",
        alternatives: [
            "Pode ultrapassar",
            "Proibido ultrapassar",
            "Pode parar",
            "Proibido parar"
        ],
        correct: "A",
        category: "Sinalização"
    },
    {
        id: 90,
        title: "O que indica uma placa de 'CONSTRUÇÃO'?",
        alternatives: [
            "Obra à frente",
            "Desvio obrigatório",
            "Velocidade reduzida",
            "Todas as anteriores"
        ],
        correct: "D",
        category: "Sinalização"
    },

    // ========================================
    // QUESTÕES DIVERSAS - PARTE 9
    // ========================================
    {
        id: 91,
        title: "Em caso de acidente sem vítima:",
        alternatives: [
            "Remover veículo",
            "Sinalizar local",
            "Continuar viagem",
            "Chamar apenas seguro"
        ],
        correct: "B",
        category: "Primeiros Socorros"
    },
    {
        id: 92,
        title: "Para socorrer vítima de choque:",
        alternatives: [
            "Tocar vítima",
            "Desligar energia",
            "Usar água",
            "Chamar bombeiro"
        ],
        correct: "B",
        category: "Primeiros Socorros"
    },
    {
        id: 93,
        title: "Em caso de fratura:",
        alternatives: [
            "Mover vítima",
            "Imobilizar local",
            "Dar analgésicos",
            "Deixar sozinha"
        ],
        correct: "B",
        category: "Primeiros Socorros"
    },
    {
        id: 94,
        title: "O número de emergência geral é:",
        alternatives: [
            "190",
            "192",
            "193",
            "199"
        ],
        correct: "A",
        category: "Primeiros Socorros"
    },
    {
        id: 95,
        title: "Em caso de desmaio:",
        alternatives: [
            "Dar água",
            "Elevar pernas",
            "Mover vítima",
            "Deixar sozinha"
        ],
        correct: "B",
        category: "Primeiros Socorros"
    },

    // ========================================
    // QUESTÕES DIVERSAS - PARTE 10
    // ========================================
    {
        id: 96,
        title: "O que indica a luz laranja do painel?",
        alternatives: [
            "Problema crítico",
            "Atenção necessária",
            "Funcionamento normal",
            "Perigo imediato"
        ],
        correct: "B",
        category: "Mecânica Básica"
    },
    {
        id: 97,
        title: "A troca do filtro de combustível deve ser feita:",
        alternatives: [
            "A cada 5.000 km",
            "A cada 10.000 km",
            "A cada 20.000 km",
            "Conforme manual"
        ],
        correct: "D",
        category: "Mecânica Básica"
    },
    {
        id: 98,
        title: "O que verificar no sistema de arrefecimento?",
        alternatives: [
            "Apenas água",
            "Água, radiador e mangueiras",
            "Apenas radiador",
            "Apenas mangueiras"
        ],
        correct: "B",
        category: "Mecânica Básica"
    },
    {
        id: 99,
        title: "A luz azul do painel indica:",
        alternatives: [
            "Problema no motor",
            "Farol alto ligado",
            "Falta de combustível",
            "Problema no freio"
        ],
        correct: "B",
        category: "Mecânica Básica"
    },
    {
        id: 100,
        title: "O que fazer quando o motor superaquece:",
        alternatives: [
            "Continuar dirigindo",
            "Parar e desligar",
            "Acelerar mais",
            "Ligar ar condicionado"
        ],
        correct: "B",
        category: "Mecânica Básica"
    },

    // ========================================
    // QUESTÕES DIVERSAS - PARTE 11
    // ========================================
    {
        id: 101,
        title: "O que é poluição atmosférica?",
        alternatives: [
            "Fumaça dos veículos",
            "Ruído excessivo",
            "Música alta",
            "Todas as anteriores"
        ],
        correct: "A",
        category: "Meio Ambiente e Cidadania"
    },
    {
        id: 102,
        title: "Qual comportamento demonstra respeito?",
        alternatives: [
            "Não dar passagem",
            "Respeitar pedestres",
            "Ultrapassar pela direita",
            "Dirigir acima da velocidade"
        ],
        correct: "B",
        category: "Meio Ambiente e Cidadania"
    },
    {
        id: 103,
        title: "O que fazer ao encontrar ambulância?",
        alternatives: [
            "Ignorar",
            "Dar passagem",
            "Acelerar",
            "Buzinar"
        ],
        correct: "B",
        category: "Meio Ambiente e Cidadania"
    },
    {
        id: 104,
        title: "É permitido usar celular parado?",
        alternatives: [
            "Sim, sempre",
            "Não, é proibido",
            "Sim, apenas com fone",
            "Sim, apenas parado"
        ],
        correct: "D",
        category: "Meio Ambiente e Cidadania"
    },
    {
        id: 105,
        title: "Qual atitude contribui para meio ambiente?",
        alternatives: [
            "Desperdiçar combustível",
            "Manter veículo em bom estado",
            "Jogar lixo pela janela",
            "Dirigir em alta velocidade"
        ],
        correct: "B",
        category: "Meio Ambiente e Cidadania"
    },

    // ========================================
    // QUESTÕES DIVERSAS - PARTE 12
    // ========================================
    {
        id: 106,
        title: "Qual a distância mínima para ultrapassagem em rodovia?",
        alternatives: [
            "100 metros",
            "150 metros",
            "200 metros",
            "250 metros"
        ],
        correct: "C",
        category: "Direção Defensiva"
    },
    {
        id: 107,
        title: "O que é aquaplanagem?",
        alternatives: [
            "Dirigir na chuva",
            "Perda de aderência",
            "Dirigir em alta velocidade",
            "Dirigir com pneus carecas"
        ],
        correct: "B",
        category: "Direção Defensiva"
    },
    {
        id: 108,
        title: "Em caso de neblina:",
        alternatives: [
            "Acelerar",
            "Usar farol baixo",
            "Desligar faróis",
            "Usar apenas pisca-alerta"
        ],
        correct: "B",
        category: "Direção Defensiva"
    },
    {
        id: 109,
        title: "Qual a distância de segurança em rodovia?",
        alternatives: [
            "2 segundos",
            "3 segundos",
            "4 segundos",
            "5 segundos"
        ],
        correct: "B",
        category: "Direção Defensiva"
    },
    {
        id: 110,
        title: "O que fazer em caso de pneu furado:",
        alternatives: [
            "Frear bruscamente",
            "Manter direção e reduzir",
            "Acelerar",
            "Desligar motor"
        ],
        correct: "B",
        category: "Direção Defensiva"
    },

    // ========================================
    // QUESTÕES DIVERSAS - PARTE 13
    // ========================================
    {
        id: 111,
        title: "Qual a velocidade máxima em área hospitalar?",
        alternatives: [
            "20 km/h",
            "30 km/h",
            "40 km/h",
            "50 km/h"
        ],
        correct: "B",
        category: "Legislação"
    },
    {
        id: 112,
        title: "É permitido dirigir com chinelo?",
        alternatives: [
            "Sim, sempre",
            "Não, é proibido",
            "Sim, apenas em vias urbanas",
            "Sim, apenas em rodovias"
        ],
        correct: "B",
        category: "Legislação"
    },
    {
        id: 113,
        title: "Qual a multa por não usar capacete?",
        alternatives: [
            "R$ 130,16",
            "R$ 293,47",
            "R$ 880,41",
            "R$ 1.467,35"
        ],
        correct: "A",
        category: "Legislação"
    },
    {
        id: 114,
        title: "O que é considerado infração grave?",
        alternatives: [
            "Dirigir sem CNH",
            "Não usar cinto de segurança",
            "Dirigir embriagado",
            "Estacionar em local proibido"
        ],
        correct: "A",
        category: "Legislação"
    },
    {
        id: 115,
        title: "Qual a idade mínima para CNH categoria D?",
        alternatives: [
            "18 anos",
            "21 anos",
            "25 anos",
            "Não há limite"
        ],
        correct: "B",
        category: "Legislação"
    },

    // ========================================
    // QUESTÕES DIVERSAS - PARTE 14
    // ========================================
    {
        id: 116,
        title: "O que indica uma placa de 'PROIBIDO BUZINAR'?",
        alternatives: [
            "Pode buzinar",
            "Não pode buzinar",
            "Pode parar",
            "Não pode parar"
        ],
        correct: "B",
        category: "Sinalização"
    },
    {
        id: 117,
        title: "A placa de 'CUIDADO COM CRIANÇAS' tem formato:",
        alternatives: [
            "Circular",
            "Triangular",
            "Retangular",
            "Octogonal"
        ],
        correct: "B",
        category: "Sinalização"
    },
    {
        id: 118,
        title: "O que significa uma placa de 'VIA EXCLUSIVA'?",
        alternatives: [
            "Pode ir e vir",
            "Apenas um sentido",
            "Pode ultrapassar",
            "Proibido ultrapassar"
        ],
        correct: "B",
        category: "Sinalização"
    },
    {
        id: 119,
        title: "A sinalização horizontal amarela tracejada indica:",
        alternatives: [
            "Pode ultrapassar",
            "Proibido ultrapassar",
            "Pode parar",
            "Proibido parar"
        ],
        correct: "A",
        category: "Sinalização"
    },
    {
        id: 120,
        title: "O que indica uma placa de 'DESNIVEL'?",
        alternatives: [
            "Subida à frente",
            "Descida à frente",
            "Desnível à frente",
            "Curva à frente"
        ],
        correct: "C",
        category: "Sinalização"
    }

    // ========================================
    // FIM DAS QUESTÕES - TOTAL: 120
    // ========================================
];

// ========================================
// CONFIGURAÇÕES DO SIMULADO
// ========================================
const SIMULADO_CONFIG = {
    totalQuestions: 120,
    timeLimit: 60, // minutos
    passingScore: 70, // porcentagem
    shuffleQuestions: true,
    shuffleAlternatives: true,
    useRealQuestions: true // true = usa QUESTIONS_DATABASE, false = gera questões exemplo
};

// ========================================
// EXPORTAR PARA USO NO HTML
// ========================================
// Este arquivo deve ser incluído no HTML antes do script principal
// <script src="questoes-simulado.js"></script>

