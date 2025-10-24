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
    // ADICIONE MAIS QUESTÕES AQUI
    // ========================================
    // 
    // Para adicionar mais questões, copie o formato abaixo:
    // 
    // {
    //     id: 26,
    //     title: "Sua pergunta aqui?",
    //     alternatives: [
    //         "Alternativa A",
    //         "Alternativa B", 
    //         "Alternativa C",
    //         "Alternativa D"
    //     ],
    //     correct: "A", // ou "B", "C", "D"
    //     category: "Sua Categoria"
    // },
    //
    // Continue incrementando o ID e adicionando até 120 questões
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
