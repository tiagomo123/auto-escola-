# Auto Escola InstitutoPRO - Site Institucional

Site institucional da Auto Escola InstitutoPRO com design moderno, responsivo e otimizado para conversão de matrículas.

## 🎯 Características

- ✅ **Design moderno e limpo** com tema claro/escuro
- ✅ **Totalmente responsivo** (mobile-first)
- ✅ **Otimizado para conversão** de cadastros
- ✅ **Formulário integrado** com EmailJS
- ✅ **Animações suaves** e transições
- ✅ **Botão flutuante WhatsApp**
- ✅ **Banner promocional** destacado

## 🚀 Como executar o site

### Opção 1: Abrir diretamente no navegador
1. Navegue até a pasta do projeto
2. Clique duas vezes no arquivo `index.html`
3. O site será aberto no seu navegador padrão

### Opção 2: Servidor local (recomendado)
Se você tiver Python instalado:
```bash
python -m http.server 8000
```
Depois acesse: http://localhost:8000

Se você tiver Node.js instalado:
```bash
npx serve .
```

## 🎨 Paleta de Cores

- **Branco**: #FFFFFF
- **Cinza claro**: #F5F5F5
- **Vermelho principal**: #D62828
- **Amarelo destaque**: #FFC300
- **Preto**: #000000
- **Texto**: #333333

## 📱 Configuração do WhatsApp

Para receber os formulários no seu WhatsApp:

1. **Abra o arquivo `script.js`**
2. **Encontre a linha**: `const numeroWhatsApp = '557194111622';`
3. **O número já está configurado** para: (71) 9411-1622
4. **Para alterar**, substitua pelo seu número no formato internacional:
   - Exemplo: Se seu número for (11) 99999-9999
   - Formato correto: `5511999999999`

**Formato do número:**
- **55** = Código do Brasil
- **11** = Seu DDD
- **999999999** = Seu número (sem espaços ou traços)

**Exemplo de mensagem que você receberá:**
```
🎯 NOVA PRÉ-INSCRIÇÃO - InstitutoPRO

👤 Nome: João Silva
📧 Email: joao@email.com
📱 WhatsApp: (11) 99999-9999
🎓 Curso: Desenvolvimento Web

📅 Data: 15/12/2024
⏰ Hora: 14:30:25
```

## 📱 Funcionalidades

- **Cabeçalho fixo** com logo, menu e botão de ação
- **Seção Hero** com título de impacto e CTAs
- **Cards de cursos** com ícones e descrições
- **Diferenciais** em formato de grid
- **Formulário de pré-cadastro** funcional
- **Depoimentos** de clientes
- **Mapa e contatos**
- **Modo escuro/claro** com botão toggle
- **Menu responsivo** (hambúrguer no mobile)
- **Botão WhatsApp** flutuante
- **Banner promocional** destacado

## 🏗️ Estrutura do projeto

```
site/
├── index.html              # Página principal
├── style.css               # Estilos CSS com variáveis
├── script.js               # JavaScript funcional
├── emailjs-config.js       # Configuração do EmailJS
├── package.json            # Configuração do projeto
├── README.md               # Este arquivo
└── bot/
    └── config.json         # Configuração do bot
```

## ⚙️ Requisitos técnicos atendidos

- ✅ **HTML, CSS e JS puros** (sem frameworks)
- ✅ **Estrutura semântica** e mobile-first
- ✅ **CSS limpo e comentado** com variáveis
- ✅ **Formulário integrado** com EmailJS
- ✅ **Menu responsivo** (hambúrguer no mobile)
- ✅ **Animações leves** (scroll suave e transições)
- ✅ **3 arquivos principais**: index.html, style.css, script.js

## 🔧 Personalização

### Alterar número do WhatsApp:
Edite no `index.html`:
```html
href="https://wa.me/5511999999999?text=..."
```

### Alterar cores:
Modifique as variáveis CSS no início do `style.css`:
```css
:root {
    --color-red: #D62828;
    --color-yellow: #FFC300;
    /* ... */
}
```

### Alterar conteúdo:
Edite diretamente no `index.html` os textos, títulos e descrições.

## 📞 Contato

Para dúvidas sobre o site, entre em contato através do formulário na página ou pelo WhatsApp.
