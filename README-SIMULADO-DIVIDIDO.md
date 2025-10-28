# 🚗 Simulado DETRAN Dividido - Auto Escola Isis

## 📋 Descrição

Este simulado foi dividido em **3 provas de 40 questões cada**, totalizando **120 questões** como o simulado original. Cada prova é apresentada separadamente com navegação intuitiva entre elas.

## 🎯 Características

### ✅ **Divisão Inteligente**
- **Prova 1**: Questões 1-40 (Legislação, Sinalização, Primeiros Socorros)
- **Prova 2**: Questões 41-80 (Mecânica Básica, Meio Ambiente, Cidadania)
- **Prova 3**: Questões 81-120 (Questões Diversas e Revisão Geral)

### 🧭 **Navegação**
- **Botão "← Prova Anterior"**: Volta para a prova anterior
- **Botão "Próxima Prova →"**: Avança para a próxima prova
- **Botão "📤 Finalizar Simulado"**: Aparece na última prova

### 📊 **Barra de Progresso**
- **Progresso Geral**: Mostra porcentagem total concluída
- **Prova Atual**: Indica qual prova está sendo realizada
- **Questões Respondidas**: Contador por prova e geral

### 📈 **Resultados Detalhados**
- **Resultado por Prova**: Pontuação individual de cada prova
- **Resultado Geral**: Pontuação consolidada de todas as provas
- **Status de Aprovação**: Aprovado/Reprovado por prova e geral

## 🚀 Como Usar

### 1. **Acessar o Simulado**
```
simulado-dividido.html
```

### 2. **Realizar as Provas**
- Comece pela **Prova 1**
- Responda todas as 40 questões
- Use **"Próxima Prova →"** para avançar
- Repita para **Prova 2** e **Prova 3**

### 3. **Finalizar**
- Na última prova, clique em **"📤 Finalizar Simulado"**
- Visualize os resultados detalhados
- Use **"📋 Ver Detalhes"** para relatório completo

## 📁 Arquivos

- **`simulado-dividido.html`**: Interface principal do simulado dividido
- **`questoes-simulado.js`**: Banco de 120 questões (atualizado)
- **`simulado-simples.html`**: Simulado original (mantido)

## ⚙️ Configurações

```javascript
const CONFIG = {
    totalQuestions: 120,        // Total de questões
    questionsPerProva: 40,       // Questões por prova
    totalProvas: 3,              // Número de provas
    timeLimit: 60,               // Tempo limite (minutos)
    passingScore: 70,            // Nota para aprovação (%)
    shuffleQuestions: true,      // Embaralhar questões
    shuffleAlternatives: true    // Embaralhar alternativas
};
```

## 🎨 Design

- **Interface Moderna**: Design limpo e profissional
- **Responsivo**: Funciona em desktop e mobile
- **Cores da Auto Escola**: Vermelho (#D62828) e Amarelo (#FFC300)
- **Animações Suaves**: Transições fluidas entre provas

## 📱 Responsividade

- **Desktop**: Layout completo com navegação lateral
- **Tablet**: Layout adaptado com botões maiores
- **Mobile**: Layout vertical com botões em tela cheia

## 🔧 Personalização

### Alterar Número de Provas
```javascript
// Para 4 provas de 30 questões cada:
const CONFIG = {
    totalQuestions: 120,
    questionsPerProva: 30,
    totalProvas: 4,
    // ... resto das configurações
};
```

### Alterar Questões por Prova
```javascript
// Para 2 provas de 60 questões cada:
const CONFIG = {
    totalQuestions: 120,
    questionsPerProva: 60,
    totalProvas: 2,
    // ... resto das configurações
};
```

## 📊 Categorias de Questões

1. **Legislação de Trânsito** (25 questões)
2. **Sinalização** (25 questões)
3. **Primeiros Socorros** (20 questões)
4. **Mecânica Básica** (20 questões)
5. **Meio Ambiente e Cidadania** (15 questões)
6. **Direção Defensiva** (15 questões)

## 🎯 Vantagens do Simulado Dividido

- ✅ **Menos Cansativo**: 40 questões por vez
- ✅ **Melhor Organização**: Provas temáticas
- ✅ **Progresso Visual**: Barra de progresso clara
- ✅ **Navegação Intuitiva**: Botões claros
- ✅ **Resultados Detalhados**: Análise por prova
- ✅ **Mesmo Conteúdo**: 120 questões originais

## 🚀 Próximos Passos

1. Teste o simulado dividido
2. Ajuste as configurações conforme necessário
3. Personalize as categorias das provas
4. Adicione mais questões se necessário

---

**Desenvolvido para Auto Escola Isis** 🚗
*Simulado DETRAN Profissional e Moderno*
