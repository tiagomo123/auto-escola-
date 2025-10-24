# 📱 Configuração do WhatsApp - Formulário

## Como configurar seu número do WhatsApp

### 1. Encontrar seu número
No arquivo `script.js`, procure por esta linha:
```javascript
const numeroWhatsApp = '5511999999999'; // Formato: código do país + DDD + número
```

### 2. Formato do número
O número deve estar no formato internacional:
- **55** = Código do Brasil
- **11** = DDD (substitua pelo seu DDD)
- **999999999** = Seu número (sem espaços, traços ou parênteses)

### 3. Exemplos de formatação

**Se seu número for: (11) 99999-9999**
- Formato correto: `5511999999999`

**Se seu número for: (21) 98888-7777**
- Formato correto: `5521988887777`

**Se seu número for: (85) 98765-4321**
- Formato correto: `5585987654321`

### 4. Como alterar
1. Abra o arquivo `script.js`
2. Encontre a linha com `numeroWhatsApp`
3. Substitua `5511999999999` pelo seu número no formato correto
4. Salve o arquivo

### 5. Teste
1. Abra o site no navegador
2. Preencha o formulário
3. Clique em "Enviar Pré-Inscrição"
4. Deve abrir o WhatsApp com a mensagem formatada

## 📋 Exemplo de mensagem que você receberá:

```
🎯 NOVA PRÉ-INSCRIÇÃO - InstitutoPRO

👤 Nome: João Silva
📧 Email: joao@email.com
📱 WhatsApp: (11) 99999-9999
🎓 Curso de Interesse: Desenvolvimento Web

📅 Data: 15/12/2024
⏰ Hora: 14:30:25

Formulário enviado através do site institucional
```

## ✅ Vantagens desta solução:

- ✅ **Instantâneo** - Recebe na hora
- ✅ **Gratuito** - Sem custos
- ✅ **Simples** - Só precisa do seu número
- ✅ **Formatado** - Mensagem organizada
- ✅ **Completo** - Todos os dados do formulário
- ✅ **Data/Hora** - Timestamp automático

## 🔧 Personalização

Você pode alterar a mensagem editando a variável `mensagem` no arquivo `script.js`:

```javascript
const mensagem = `🎯 *NOVA PRÉ-INSCRIÇÃO - InstitutoPRO*

👤 *Nome:* ${formData.nome}
📧 *Email:* ${formData.email}
// ... resto da mensagem
`;
```
