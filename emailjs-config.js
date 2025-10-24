// Configuração do EmailJS
// Para configurar o EmailJS:
// 1. Acesse https://www.emailjs.com/
// 2. Crie uma conta gratuita
// 3. Configure um serviço de email (Gmail, Outlook, etc.)
// 4. Crie um template de email
// 5. Substitua os valores abaixo pelas suas credenciais

const EMAILJS_CONFIG = {
    // Sua chave pública do EmailJS
    PUBLIC_KEY: "YOUR_PUBLIC_KEY",
    
    // ID do seu serviço de email
    SERVICE_ID: "YOUR_SERVICE_ID",
    
    // ID do template de email
    TEMPLATE_ID: "YOUR_TEMPLATE_ID",
    
    // Email de destino
    TO_EMAIL: "contato@institutopro.com.br"
};

// Template de email sugerido para o EmailJS:
/*
Assunto: Nova Pré-inscrição - InstitutoPRO

Corpo do email:
Nome: {{from_name}}
Email: {{from_email}}
WhatsApp: {{whatsapp}}
Curso de Interesse: {{curso}}

Data: {{date}}
*/

// Para usar, substitua no script.js:
// emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
// emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {...});
