# 🚗 Simulado DETRAN - Auto Escola Isis

## 📋 Descrição
Sistema de simulado online que replica a experiência do exame do DETRAN, com 120 questões de múltipla escolha, embaralhamento automático e design responsivo.

## 🎯 Características
- ✅ **120 questões** de múltipla escolha (A, B, C, D)
- ✅ **Embaralhamento automático** das questões a cada acesso
- ✅ **Design responsivo** similar ao DETRAN
- ✅ **Barra de progresso** em tempo real
- ✅ **Código organizado** para fácil edição
- ✅ **Sistema de pontuação** configurável
- ✅ **Resultados detalhados** ao final

## 📁 Arquivos do Projeto

### 1. `simulado-detran.html` (Versão Completa)
- Design avançado com animações
- Interface moderna e profissional
- Funcionalidades completas

### 2. `simulado-simples.html` (Versão Simplificada)
- Design limpo e direto
- Mais fácil de personalizar
- Ideal para edição rápida

### 3. `questoes-simulado.js` (Banco de Questões)
- Arquivo separado com todas as questões
- Fácil de editar e manter
- Estrutura organizada por categorias

## 🛠️ Como Editar as Questões

### Passo 1: Abrir o arquivo de questões
```bash
# Edite o arquivo:
questoes-simulado.js
```

### Passo 2: Estrutura de uma questão
```javascript
{
    id: 1,                    // Número único da questão
    title: "Sua pergunta?",   // Enunciado da questão
    alternatives: [           // 4 alternativas obrigatórias
        "Alternativa A",
        "Alternativa B", 
        "Alternativa C",
        "Alternativa D"
    ],
    correct: "B",             // Letra da resposta correta
    category: "Legislação"    // Categoria da questão
}
```

### Passo 3: Adicionar novas questões
```javascript
// Copie este formato e cole no final do array QUESTIONS_DATABASE
{
    id: 26,  // Incremente o ID
    title: "Qual é a velocidade máxima em rodovias?",
    alternatives: [
        "80 km/h",
        "100 km/h",
        "110 km/h", 
        "120 km/h"
    ],
    correct: "C",
    category: "Legislação"
}
```

## ⚙️ Configurações

### No arquivo `questoes-simulado.js`:
```javascript
const SIMULADO_CONFIG = {
    totalQuestions: 120,      // Total de questões
    timeLimit: 60,           // Tempo limite (minutos)
    passingScore: 70,        // Pontuação para aprovação (%)
    shuffleQuestions: true,  // Embaralhar questões
    shuffleAlternatives: true, // Embaralhar alternativas
    useRealQuestions: true   // Usar questões reais ou exemplo
};
```

## 🎨 Personalização Visual

### Cores principais (no CSS):
```css
:root {
    --primary-color: #D62828;    /* Vermelho principal */
    --secondary-color: #FFC300;  /* Amarelo secundário */
    --success-color: #28a745;    /* Verde para acertos */
    --danger-color: #dc3545;     /* Vermelho para erros */
}
```

### Alterar logo:
```html
<!-- No cabeçalho, substitua: -->
<div class="logo">🚗</div>

<!-- Por: -->
<img src="seu-logo.png" alt="Logo" class="logo">
```

## 🚀 Como Usar

### Opção 1: Abrir diretamente
```bash
# Abra no navegador:
simulado-simples.html
```

### Opção 2: Servidor local
```bash
# Python 3:
python -m http.server 8000

# Python 2:
python -m SimpleHTTPServer 8000

# Node.js:
npx http-server
```

### Opção 3: Hospedar online
- Upload para qualquer servidor web
- Funciona em GitHub Pages, Netlify, Vercel, etc.

## 📱 Responsividade

O simulado é totalmente responsivo e funciona em:
- 💻 **Desktop** (1200px+)
- 📱 **Tablet** (768px - 1199px)
- 📱 **Mobile** (até 767px)

## 🔧 Funcionalidades Técnicas

### Embaralhamento
- **Fisher-Yates Algorithm** para embaralhamento justo
- Questões e alternativas embaralhadas independentemente
- Nova ordem a cada recarregamento da página

### Progresso
- Barra de progresso em tempo real
- Contagem de questões respondidas
- Atualização automática

### Resultados
- Pontuação em tempo real
- Comparação com nota de corte
- Feedback personalizado

## 📊 Categorias de Questões

As questões estão organizadas em categorias:
- 🚦 **Legislação** - Leis de trânsito
- 🚧 **Sinalização** - Placas e sinais
- 🚑 **Primeiros Socorros** - Emergências
- 🔧 **Mecânica Básica** - Manutenção do veículo
- 🌱 **Meio Ambiente e Cidadania** - Comportamento no trânsito

## 🎯 Dicas para Criar Questões

### ✅ Boas práticas:
- Use linguagem clara e objetiva
- Evite pegadinhas desnecessárias
- Mantenha alternativas com tamanho similar
- Teste as questões antes de publicar

### ❌ Evite:
- Questões muito longas
- Alternativas muito similares
- Linguagem técnica excessiva
- Questões ambíguas

## 🔄 Atualizações Futuras

### Funcionalidades planejadas:
- [ ] Timer com contagem regressiva
- [ ] Salvamento de progresso
- [ ] Relatório detalhado de erros
- [ ] Modo offline
- [ ] Integração com banco de dados
- [ ] Sistema de usuários

## 📞 Suporte

Para dúvidas ou sugestões:
- 📧 Email: contato@autoescolaisis.com.br
- 📱 WhatsApp: (71) 98630-9647
- 🌐 Site: [Auto Escola Isis](https://autoescolaisis.com.br)

## 📄 Licença

Este projeto foi desenvolvido para a Auto Escola Isis.
Todos os direitos reservados.

---

**Desenvolvido com ❤️ para a Auto Escola Isis**
