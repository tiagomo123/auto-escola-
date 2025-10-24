document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    const form = document.getElementById('inscricao-form');
    const formMessage = document.getElementById('form-message');
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');


    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Função para verificar se a auto escola está aberta
    function checkBusinessHours() {
        const now = new Date();
        const currentHour = now.getHours();
        const currentDay = now.getDay(); // 0 = Domingo, 1 = Segunda, etc.
        
        // Horário de funcionamento:
        // Segunda a Sexta: 7h às 18h
        // Sábado: 7h às 12h
        // Domingo: Fechado
        
        let isOpen = false;
        
        if (currentDay >= 1 && currentDay <= 5) { // Segunda a Sexta
            isOpen = currentHour >= 7 && currentHour < 18;
        } else if (currentDay === 6) { // Sábado
            isOpen = currentHour >= 7 && currentHour < 12;
        } else { // Domingo
            isOpen = false;
        }
        
        // Atualizar indicador de status
        if (isOpen) {
            statusDot.classList.remove('closed');
            statusText.textContent = 'Aberto';
        } else {
            statusDot.classList.add('closed');
            statusText.textContent = 'Fechado';
        }
    }
    
    // Verificar status inicial e a cada minuto
    checkBusinessHours();
    setInterval(checkBusinessHours, 60000); // Atualizar a cada minuto

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
    });

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    const whatsappInput = document.getElementById('whatsapp');
    whatsappInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length <= 11) {
            if (value.length > 6) {
                value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/^(\d*)/, '($1');
            }
        }

        e.target.value = value;
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            whatsapp: document.getElementById('whatsapp').value,
            curso: document.getElementById('curso').value
        };

        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Redirecionando...';
        submitButton.disabled = true;

        // Criar mensagem formatada para WhatsApp
        const mensagem = `*🚗 NOVA INSCRIÇÃO - AUTO ESCOLA ISIS*%0A%0A` +
        `👤 *NOME:* ${formData.nome.toUpperCase()}%0A` +
        `📱 *WHATSAPP:* ${formData.whatsapp}%0A` +
        `📧 *E-MAIL:* ${formData.email.toLowerCase()}%0A` +
        `📚 *CURSO:* ${formData.curso.replace('categoria-', 'Categoria ').toUpperCase()}%0A` +
        `📅 *DATA:* ${new Date().toLocaleDateString('pt-BR')}%0A` +
        `⏰ *HORÁRIO:* ${new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'})}%0A%0A` +
        `_Formulário preenchido no site oficial_`;
        
        // Número do WhatsApp da Auto Escola Isis
        const numeroWhatsApp = '5571986309647'; // Formato: código do país + DDD + número
        
        // Criar link do WhatsApp
        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
        
        // Mostrar mensagem de sucesso
        formMessage.textContent = 'Redirecionando para WhatsApp...';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';

        // Limpar formulário
        form.reset();

        // Redirecionar para WhatsApp após 1 segundo
        setTimeout(() => {
            window.open(linkWhatsApp, '_blank');
            
            // Atualizar mensagem
            formMessage.textContent = 'Formulário enviado! Verifique o WhatsApp.';
            
            // Esconder mensagem após 5 segundos
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }, 1000);

        // Restaurar botão
        setTimeout(() => {
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }, 2000);
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.card, .diferencial-item, .depoimento-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Funcionalidade para botões "Saiba mais" dos cursos
    const saibaMaisBtns = document.querySelectorAll('.saiba-mais-btn');
    saibaMaisBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const curso = btn.getAttribute('data-curso');
            
            // Criar mensagem específica para o curso
            let mensagemCurso = '';
            switch(curso) {
                case 'carro':
                    mensagemCurso = 'Categoria B (Carro)';
                    break;
                case 'moto':
                    mensagemCurso = 'Categoria A (Moto)';
                    break;
                default:
                    mensagemCurso = 'Informações sobre cursos';
            }
            
            const mensagem = `Olá! Gostaria de saber mais sobre o curso de ${mensagemCurso}.`;
            const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
            
            window.open(linkWhatsApp, '_blank');
        });
    });

    // Scroll suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
