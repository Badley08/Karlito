// Variables globales
let currentTheme = 'dark';
let currentLang = 'fr';
let chatHistory = [];
let visitCount = 0;
let typingAnimation = null; // Variable pour contrôler l'animation typing

// Traductions pour toutes les langues
const translations = {
    fr: {
        title: "Luberisse Karl Brad | Karlito",
        theme: "Thème",
        language: "Langue",
        hello: "Salut, je suis",
        name: "Karlito",
        subtitle: "Développeur Full Stack | Geek du Code | Créateur d'Apps",
        about_btn: "À propos",
        projects_btn: "Projets",
        about_title: "À propos de moi",
        about_text1: "Je suis Luberisse Karl Brad, plus connu sous le nom de Karlito, j'ai 16 ans et je suis un jeune passionné de technologie, programmation et innovation numérique.",
        about_text2: "Je développe des sites web Full Stack avec Python, JavaScript, HTML/CSS, et j'adore les environnements Linux.",
        about_text3: "Mon objectif ? Devenir un développeur complet, capable de concevoir des applications performantes, intuitives et élégantes.",
        age: "Âge",
        years: "ans",
        skills_title: "Compétences clés",
        web_dev: "Développement Web",
        linux: "Linux & Terminal",
        ux_ui: "UX/UI Design",
        projects: "Projets",
        projects_title: "Mes Projets",
        project1_title: "Plateforme Éducative",
        project1_desc: "Quiz interactifs, suivi de progression, interface fluide.",
        project2_title: "Convertisseur d'Unités",
        project2_desc: "Température, devise, poids — tout en un seul outil.",
        project3_title: "Dashboard Statistique",
        project3_desc: "Visualisation de données en temps réel.",
        project4_title: "Mini-Réseau Social",
        project4_desc: "Authentification, posts, gestion d'utilisateurs.",
        contact_title: "Contactez-moi",
        name_placeholder: "Votre nom",
        email_placeholder: "Votre email",
        message_placeholder: "Votre message",
        send_btn: "Envoyer",
        rights: "Tous droits réservés.",
        visits: "visites",
        all_sites: "Tous mes sites",
        chatbot_title: "Le chatbot pacifique",
        chatbot_welcome: "Salut ! Je suis Paxel, le chatbot le plus pacifique du monde ! Pose-moi des questions sur Karlito ! 🤖",
        chatbot_placeholder: "Écris ton message...",
        back_to_top: "Retour en haut"
    },
    en: {
        title: "Luberisse Karl Brad | Karlito",
        theme: "Theme",
        language: "Language",
        hello: "Hi, I'm",
        name: "Karlito",
        subtitle: "Full Stack Developer | Code Geek | App Creator",
        about_btn: "About",
        projects_btn: "Projects",
        about_title: "About Me",
        about_text1: "I'm Luberisse Karl Brad, known as Karlito, I'm 16 years old and I'm a young passionate about technology, programming and digital innovation.",
        about_text2: "I develop Full Stack websites with Python, JavaScript, HTML/CSS, and I love Linux environments.",
        about_text3: "My goal? To become a complete developer, capable of designing performant, intuitive and elegant applications.",
        age: "Age",
        years: "years",
        skills_title: "Key Skills",
        web_dev: "Web Development",
        linux: "Linux & Terminal",
        ux_ui: "UX/UI Design",
        projects: "Projects",
        projects_title: "My Projects",
        project1_title: "Educational Platform",
        project1_desc: "Interactive quizzes, progress tracking, smooth interface.",
        project2_title: "Unit Converter",
        project2_desc: "Temperature, currency, weight - all in one tool.",
        project3_title: "Statistics Dashboard",
        project3_desc: "Real-time data visualization.",
        project4_title: "Mini Social Network",
        project4_desc: "Authentication, posts, user management.",
        contact_title: "Contact Me",
        name_placeholder: "Your name",
        email_placeholder: "Your email",
        message_placeholder: "Your message",
        send_btn: "Send",
        rights: "All rights reserved.",
        visits: "visits",
        all_sites: "All my sites",
        chatbot_title: "The peaceful chatbot",
        chatbot_welcome: "Hi! I'm Paxel, the most peaceful chatbot in the world! Ask me questions about Karlito! 🤖",
        chatbot_placeholder: "Type your message...",
        back_to_top: "Back to top"
    },
    es: {
        title: "Luberisse Karl Brad | Karlito",
        theme: "Tema",
        language: "Idioma",
        hello: "Hola, soy",
        name: "Karlito",
        subtitle: "Desarrollador Full Stack | Geek del Código | Creador de Apps",
        about_btn: "Acerca de",
        projects_btn: "Proyectos",
        about_title: "Acerca de mí",
        about_text1: "Soy Luberisse Karl Brad, conocido como Karlito, tengo 16 años y soy un joven apasionado por la tecnología, programación e innovación digital.",
        about_text2: "Desarrollo sitios web Full Stack con Python, JavaScript, HTML/CSS, y me encantan los entornos Linux.",
        about_text3: "¿Mi objetivo? Convertirme en un desarrollador completo, capaz de diseñar aplicaciones performantes, intuitivas y elegantes.",
        age: "Edad",
        years: "años",
        skills_title: "Habilidades Clave",
        web_dev: "Desarrollo Web",
        linux: "Linux & Terminal",
        ux_ui: "Diseño UX/UI",
        projects: "Proyectos",
        projects_title: "Mis Proyectos",
        project1_title: "Plataforma Educativa",
        project1_desc: "Cuestionarios interactivos, seguimiento de progreso, interfaz fluida.",
        project2_title: "Convertidor de Unidades",
        project2_desc: "Temperatura, moneda, peso - todo en una sola herramienta.",
        project3_title: "Panel de Estadísticas",
        project3_desc: "Visualización de datos en tiempo real.",
        project4_title: "Mini Red Social",
        project4_desc: "Autenticación, publicaciones, gestión de usuarios.",
        contact_title: "Contáctame",
        name_placeholder: "Tu nombre",
        email_placeholder: "Tu email",
        message_placeholder: "Tu mensaje",
        send_btn: "Enviar",
        rights: "Todos los derechos reservados.",
        visits: "visitas",
        all_sites: "Todos mis sitios",
        chatbot_title: "El chatbot pacífico",
        chatbot_welcome: "¡Hola! Soy Paxel, ¡el chatbot más pacífico del mundo! ¡Hazme preguntas sobre Karlito! 🤖",
        chatbot_placeholder: "Escribe tu mensaje...",
        back_to_top: "Volver arriba"
    },
    pt: {
        title: "Luberisse Karl Brad | Karlito",
        theme: "Tema",
        language: "Idioma",
        hello: "Olá, eu sou",
        name: "Karlito",
        subtitle: "Desenvolvedor Full Stack | Geek do Código | Criador de Apps",
        about_btn: "Sobre",
        projects_btn: "Projetos",
        about_title: "Sobre Mim",
        about_text1: "Sou Luberisse Karl Brad, conhecido como Karlito, tenho 16 anos e sou um jovem apaixonado por tecnologia, programação e inovação digital.",
        about_text2: "Desenvolvo sites Full Stack com Python, JavaScript, HTML/CSS, e adoro ambientes Linux.",
        about_text3: "Meu objetivo? Tornar-me um desenvolvedor completo, capaz de projetar aplicações performáticas, intuitivas e elegantes.",
        age: "Idade",
        years: "anos",
        skills_title: "Habilidades Principais",
        web_dev: "Desenvolvimento Web",
        linux: "Linux & Terminal",
        ux_ui: "Design UX/UI",
        projects: "Projetos",
        projects_title: "Meus Projetos",
        project1_title: "Plataforma Educacional",
        project1_desc: "Questionários interativos, acompanhamento de progresso, interface fluida.",
        project2_title: "Conversor de Unidades",
        project2_desc: "Temperatura, moeda, peso - tudo em uma única ferramenta.",
        project3_title: "Painel de Estatísticas",
        project3_desc: "Visualização de dados em tempo real.",
        project4_title: "Mini Rede Social",
        project4_desc: "Autenticação, posts, gerenciamento de usuários.",
        contact_title: "Contate-me",
        name_placeholder: "Seu nome",
        email_placeholder: "Seu email",
        message_placeholder: "Sua mensagem",
        send_btn: "Enviar",
        rights: "Todos os direitos reservados.",
        visits: "visitas",
        all_sites: "Todos os meus sites",
        chatbot_title: "O chatbot pacífico",
        chatbot_welcome: "Oi! Eu sou o Paxel, o chatbot mais pacífico do mundo! Faça-me perguntas sobre o Karlito! 🤖",
        chatbot_placeholder: "Escreva sua mensagem...",
        back_to_top: "Voltar ao topo"
    }
};

// Réponses du chatbot Paxel
const chatbotResponses = {
    fr: {
        salut: 'Salut ! Je suis Paxel, le chatbot le plus pacifique du monde ! 😊',
        bonjour: 'Bonjour ! Je suis ravi de te parler !',
        nom: 'Je suis Paxel, le chatbot pacifique créé par Karlito !',
        karlito: 'Ah, Karlito est mon créateur ! C\'est un génie du code ! 🚀',
        age: 'J\'ai été créé récemment, mais je suis sage comme un vieux sage !',
        projet: 'Karlito a créé plein de projets géniaux ! Regarde la section Projets !',
        contact: 'Tu peux contacter Karlito par email : karlluberisse1308@gmail.com',
        theme: 'Tu peux changer de thème dans le menu ! Il y en a 7 ! 🎨',
        langue: 'Je parle français, anglais, espagnol et portugais ! 🌍',
        site: 'Tous les sites de Karlito sont sur : badley08.github.io/LinkNest',
        compétence: 'Karlito maîtrise HTML, CSS, JavaScript, Python, Linux et le développement Full Stack !',
        expérience: 'Karlito a 16 ans mais il code comme un pro !',
        github: 'Tu peux voir les projets de Karlito sur GitHub : github.com/badley08',
        default: 'Je suis Paxel, le chatbot pacifique ! Pose-moi des questions sur Karlito, ses projets ou ses compétences ! 🤖'
    },
    en: {
        hello: 'Hello! I\'m Paxel, the most peaceful chatbot in the world! 😊',
        hi: 'Hi there! Nice to meet you!',
        name: 'I\'m Paxel, the peaceful chatbot created by Karlito!',
        karlito: 'Ah, Karlito is my creator! He\'s a coding genius! 🚀',
        age: 'I was created recently, but I\'m wise like an old sage!',
        project: 'Karlito has created many awesome projects! Check the Projects section!',
        contact: 'You can contact Karlito by email: karlluberisse1308@gmail.com',
        theme: 'You can change themes in the menu! There are 7 of them! 🎨',
        language: 'I speak French, English, Spanish and Portuguese! 🌍',
        site: 'All of Karlito\'s sites are at: badley08.github.io/LinkNest',
        skill: 'Karlito masters HTML, CSS, JavaScript, Python, Linux and Full Stack development!',
        experience: 'Karlito is 16 years old but codes like a pro!',
        github: 'You can see Karlito\'s projects on GitHub: github.com/badley08',
        default: 'I\'m Paxel, the peaceful chatbot! Ask me questions about Karlito, his projects or skills! 🤖'
    }
};

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initVisitCounter();
    initThemeSwitching();
    initLanguageSwitching();
    initScrollTop();
    initMobileMenu();
    initChatbot();
    initProjectCards();
    initSmoothScroll();
    initOutsideClickClose();
    init3DEffects();
    
    // Charger les paramètres sauvegardés
    loadSavedSettings();
    
    // Lancer l'animation typing après un petit délai
    setTimeout(() => {
        initTypingEffect();
    }, 500);
});

// Compteur de visites VRAIMENT persistant avec simulation de localStorage
function initVisitCounter() {
    // Créer un identifiant unique pour le navigateur
    const browserId = getBrowserFingerprint();
    const storageKey = `portfolio_visits_${browserId}`;
    const sessionKey = `portfolio_session_${browserId}`;
    
    // Simuler localStorage avec des cookies ou utiliser une méthode alternative
    const getStoredValue = (key, defaultValue) => {
        // Essayer de récupérer depuis les cookies
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === key) {
                return parseInt(value) || defaultValue;
            }
        }
        return defaultValue;
    };
    
    const setStoredValue = (key, value, days = 365) => {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${key}=${value}; expires=${date.toUTCString()}; path=/`;
    };
    
    const currentTime = Date.now();
    const lastSession = getStoredValue(sessionKey, 0);
    
    // Si plus d'1 heure depuis la dernière session, considérer comme nouvelle visite
    if (currentTime - lastSession > 3600000) { // 1 heure
        visitCount = getStoredValue(storageKey, Math.floor(Math.random() * 200) + 100);
        visitCount++;
        setStoredValue(storageKey, visitCount);
        setStoredValue(sessionKey, currentTime);
    } else {
        // Récupérer le compteur existant sans incrémenter
        visitCount = getStoredValue(storageKey, Math.floor(Math.random() * 200) + 100);
    }
    
    updateVisitDisplay();
    
    // Simulation d'autres visiteurs (très occasionnellement)
    setInterval(() => {
        if (Math.random() > 0.95) { // 5% de chance seulement
            visitCount++;
            setStoredValue(storageKey, visitCount);
            updateVisitDisplay();
        }
    }, 120000); // Toutes les 2 minutes
}

function getBrowserFingerprint() {
    // Identifiant plus stable basé sur les caractéristiques du navigateur
    const fingerprint = [
        navigator.userAgent,
        navigator.language,
        screen.width + 'x' + screen.height,
        new Date().getTimezoneOffset(),
        navigator.platform,
        navigator.cookieEnabled
    ].join('|');
    
    // Créer un hash simple
    let hash = 0;
    for (let i = 0; i < fingerprint.length; i++) {
        const char = fingerprint.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(16);
}

function updateVisitDisplay() {
    const visitCountEl = document.getElementById('visitCount');
    if (visitCountEl) {
        // Animation du nombre
        const currentDisplayed = parseInt(visitCountEl.textContent) || 0;
        if (currentDisplayed !== visitCount) {
            animateNumber(visitCountEl, currentDisplayed, visitCount, 500);
        }
    }
}

function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    const difference = end - start;
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentValue = Math.floor(start + (difference * progress));
        element.textContent = currentValue;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Changement de thème
function initThemeSwitching() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const theme = this.getAttribute('data-theme');
            changeTheme(theme);
        });
    });
}

function changeTheme(theme) {
    // Animation de transition
    document.body.style.opacity = '0.7';
    document.body.style.transform = 'scale(0.98)';
    
    setTimeout(() => {
        document.body.className = `theme-${theme}`;
        currentTheme = theme;
        
        // Mettre à jour les boutons actifs
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-theme="${theme}"]`).classList.add('active');
        
        document.body.style.opacity = '1';
        document.body.style.transform = 'scale(1)';
        document.body.style.transition = 'all 0.5s ease';
        
        saveSettings();
    }, 200);
}

// Changement de langue
function initLanguageSwitching() {
    const langButtons = document.querySelectorAll('.language-selector a');
    langButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
}

function changeLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    if (!t) return;
    
    // Mettre à jour tous les textes
    updateTexts(t);
    
    // Mettre à jour les boutons actifs
    document.querySelectorAll('.language-selector a').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Mettre à jour le titre de la page
    document.title = t.title;
    
    saveSettings();
}

function updateTexts(t) {
    // Navigation
    const navName = document.getElementById('navName');
    if (navName) navName.textContent = t.name;
    
    const navAbout = document.getElementById('navAbout');
    if (navAbout) navAbout.textContent = t.about_btn;
    
    const navSkills = document.getElementById('navSkills');
    if (navSkills) navSkills.textContent = t.skills_title;
    
    const navProjects = document.getElementById('navProjects');
    if (navProjects) navProjects.textContent = t.projects_title;
    
    const navContact = document.getElementById('navContact');
    if (navContact) navContact.textContent = t.contact_title;
    
    const navSites = document.getElementById('navSites');
    if (navSites) navSites.textContent = t.all_sites;
    
    // Labels de contrôle
    const themeLabel = document.getElementById('themeLabel');
    if (themeLabel) themeLabel.textContent = t.theme + ':';
    
    const langLabel = document.getElementById('langLabel');
    if (langLabel) langLabel.textContent = t.language + ':';
    
    // Hero section
    const heroHello = document.getElementById('heroHello');
    if (heroHello) heroHello.textContent = t.hello;
    
    const heroName = document.getElementById('heroName');
    if (heroName) heroName.textContent = t.name;
    
    const heroSubtitle = document.getElementById('heroSubtitle');
    if (heroSubtitle) heroSubtitle.textContent = t.subtitle;
    
    const heroAboutBtn = document.getElementById('heroAboutBtn');
    if (heroAboutBtn) heroAboutBtn.textContent = t.about_btn;
    
    const heroProjectsBtn = document.getElementById('heroProjectsBtn');
    if (heroProjectsBtn) heroProjectsBtn.textContent = t.projects_btn;
    
    // About section
    const aboutTitle = document.getElementById('aboutTitle');
    if (aboutTitle) aboutTitle.textContent = t.about_title;
    
    const aboutText1 = document.getElementById('aboutText1');
    if (aboutText1) aboutText1.textContent = t.about_text1;
    
    const aboutText2 = document.getElementById('aboutText2');
    if (aboutText2) aboutText2.textContent = t.about_text2;
    
    const aboutText3 = document.getElementById('aboutText3');
    if (aboutText3) aboutText3.textContent = t.about_text3;
    
    const ageLabel = document.getElementById('ageLabel');
    if (ageLabel) ageLabel.textContent = t.age;
    
    const yearsLabel = document.getElementById('yearsLabel');
    if (yearsLabel) yearsLabel.textContent = t.years;
    
    // Skills section
    const skillsTitle = document.getElementById('skillsTitle');
    if (skillsTitle) skillsTitle.textContent = t.skills_title;
    
    const webDevTitle = document.getElementById('webDevTitle');
    if (webDevTitle) webDevTitle.textContent = t.web_dev;
    
    const linuxTitle = document.getElementById('linuxTitle');
    if (linuxTitle) linuxTitle.textContent = t.linux;
    
    const designTitle = document.getElementById('designTitle');
    if (designTitle) designTitle.textContent = t.ux_ui;
    
    const projectsSkillTitle = document.getElementById('projectsSkillTitle');
    if (projectsSkillTitle) projectsSkillTitle.textContent = t.projects;
    
    // Projects section
    const projectsMainTitle = document.getElementById('projectsMainTitle');
    if (projectsMainTitle) projectsMainTitle.textContent = t.projects_title;
    
    const project1Title = document.getElementById('project1Title');
    if (project1Title) project1Title.textContent = t.project1_title;
    
    const project1Desc = document.getElementById('project1Desc');
    if (project1Desc) project1Desc.textContent = t.project1_desc;
    
    const project2Title = document.getElementById('project2Title');
    if (project2Title) project2Title.textContent = t.project2_title;
    
    const project2Desc = document.getElementById('project2Desc');
    if (project2Desc) project2Desc.textContent = t.project2_desc;
    
    const project3Title = document.getElementById('project3Title');
    if (project3Title) project3Title.textContent = t.project3_title;
    
    const project3Desc = document.getElementById('project3Desc');
    if (project3Desc) project3Desc.textContent = t.project3_desc;
    
    const project4Title = document.getElementById('project4Title');
    if (project4Title) project4Title.textContent = t.project4_title;
    
    const project4Desc = document.getElementById('project4Desc');
    if (project4Desc) project4Desc.textContent = t.project4_desc;
    
    // Contact section
    const contactTitle = document.getElementById('contactTitle');
    if (contactTitle) contactTitle.textContent = t.contact_title;
    
    // Footer
    const rightsText = document.getElementById('rightsText');
    if (rightsText) rightsText.textContent = t.rights;
    
    // Compteur de visites
    const visitsText = document.getElementById('visitsText');
    if (visitsText) visitsText.textContent = t.visits;
    
    // Chatbot
    const chatbotTitle = document.getElementById('chatbotTitle');
    if (chatbotTitle) chatbotTitle.textContent = `Paxel - ${t.chatbot_title}`;
    
    const chatbotWelcome = document.getElementById('chatbotWelcome');
    if (chatbotWelcome) chatbotWelcome.textContent = t.chatbot_welcome;
    
    const userMessage = document.getElementById('userMessage');
    if (userMessage) userMessage.placeholder = t.chatbot_placeholder;
    
    // Bouton retour en haut
    const scrollTop = document.getElementById('scrollTop');
    if (scrollTop) scrollTop.title = t.back_to_top;
    
    // Relancer l'effet de frappe pour le sous-titre avec le nouveau texte
    setTimeout(() => {
        initTypingEffect();
    }, 100);
}

// Effet de frappe CORRIGÉ
function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;
    
    // Arrêter l'animation précédente si elle existe
    if (typingAnimation) {
        clearTimeout(typingAnimation);
        typingAnimation = null;
    }
    
    // Récupérer le texte actuel selon la langue
    const currentTranslation = translations[currentLang] || translations.fr;
    const text = currentTranslation.subtitle;
    
    // Réinitialiser complètement l'élément ET les classes CSS
    typingText.className = 'typing-text-active'; // Nouvelle classe
    typingText.style.animation = 'none';
    typingText.style.borderRight = '2px solid currentColor';
    typingText.style.whiteSpace = 'nowrap';
    typingText.style.overflow = 'hidden';
    typingText.style.width = 'auto';
    typingText.textContent = '';
    
    // Forcer un reflow
    typingText.offsetWidth;
    
    let currentIndex = 0;
    
    function typeCharacter() {
        if (currentIndex < text.length) {
            typingText.textContent = text.substring(0, currentIndex + 1);
            currentIndex++;
            typingAnimation = setTimeout(typeCharacter, 80);
        } else {
            // Animation terminée, faire clignoter le curseur
            setTimeout(() => {
                if (typingText) {
                    typingText.style.animation = 'blink-caret 1s step-end infinite';
                }
            }, 500);
        }
    }
    
    // Commencer l'animation après un court délai
    typingAnimation = setTimeout(() => {
        typeCharacter();
    }, 300);
}

// Bouton retour en haut
function initScrollTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    // Afficher/masquer le bouton selon le scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll vers le haut avec animation
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Animation du bouton
        this.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            this.style.transform = 'rotate(0deg)';
        }, 1000);
    });
}

// Menu mobile hamburger
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        // Animation hamburger
        const spans = this.querySelectorAll('span');
        if (sidebar.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        }
    });
}

// Fermer le menu en cliquant à l'extérieur
function initOutsideClickClose() {
    const overlay = document.getElementById('overlay');
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    
    overlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        menuToggle.classList.remove('active');
        
        // Réinitialiser l'animation hamburger
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    });
}

// Chatbot Paxel avancé
function initChatbot() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbot = document.getElementById('chatbot');
    const closeChatbot = document.getElementById('closeChatbot');
    const sendMessageBtn = document.getElementById('sendMessage');
    const userMessageInput = document.getElementById('userMessage');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const quickReplies = document.getElementById('quickReplies');
    
    // Ouvrir/fermer le chatbot
    chatbotToggle.addEventListener('click', function() {
        chatbot.style.display = chatbot.style.display === 'none' ? 'flex' : 'none';
        chatbotToggle.style.display = chatbot.style.display === 'none' ? 'flex' : 'none';
        
        // Animation d'ouverture
        if (chatbot.style.display !== 'none') {
            chatbot.style.transform = 'scale(0)';
            setTimeout(() => {
                chatbot.style.transform = 'scale(1)';
                chatbot.style.transition = 'transform 0.3s ease';
            }, 10);
        }
    });
    
    closeChatbot.addEventListener('click', function() {
        chatbot.style.display = 'none';
        chatbotToggle.style.display = 'flex';
    });
    
    // Envoyer un message
    function sendMessage() {
        const message = userMessageInput.value.trim();
        if (!message) return;
        
        // Ajouter le message de l'utilisateur
        addMessage(message, 'user');
        userMessageInput.value = '';
        
        // Sauvegarder dans l'historique
        chatHistory.push({sender: 'user', message: message});
        
        // Réponse du bot (simulée avec délai réaliste)
        setTimeout(() => {
            const response = getBotResponse(message.toLowerCase());
            addMessage(response, 'bot');
            chatHistory.push({sender: 'bot', message: response});
        }, 1000 + Math.random() * 1000);
    }
    
    sendMessageBtn.addEventListener('click', sendMessage);
    
    userMessageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Ajouter un message au chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        
        // Animation d'entrée
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = sender === 'user' ? 'translateX(20px)' : 'translateX(-20px)';
        setTimeout(() => {
            messageDiv.style.transition = 'all 0.3s ease';
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateX(0)';
        }, 10);
    }
    
    // Réponses du bot avec IA simulée
    function getBotResponse(message) {
        const responses = chatbotResponses[currentLang] || chatbotResponses.fr;
        
        for (let key in responses) {
            if (key !== 'default' && message.includes(key)) {
                return responses[key];
            }
        }
        return responses.default;
    }
    
    // Réponses rapides
    function showQuickReplies() {
        const replies = {
            fr: [
                'Qui est Karlito ?',
                'Ses compétences',
                'Ses projets',
                'Comment le contacter ?'
            ],
            en: [
                'Who is Karlito?',
                'His skills',
                'His projects',
                'How to contact him?'
            ],
            es: [
                '¿Quién es Karlito?',
                'Sus habilidades',
                'Sus proyectos',
                '¿Cómo contactarlo?'
            ],
            pt: [
                'Quem é Karlito?',
                'Suas habilidades',
                'Seus projetos',
                'Como contatá-lo?'
            ]
        };
        
        const currentReplies = replies[currentLang] || replies.fr;
        
        quickReplies.innerHTML = '';
        currentReplies.forEach(reply => {
            const button = document.createElement('button');
            button.textContent = reply;
            button.classList.add('quick-reply');
            button.addEventListener('click', function() {
                userMessageInput.value = reply;
                sendMessage();
            });
            quickReplies.appendChild(button);
        });
    }
    
    showQuickReplies();
}

// Cartes de projets dynamiques
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// Effets 3D et animations avancées
function init3DEffects() {
    // Animation 3D du logo
    const logos = document.querySelectorAll('.logo');
    logos.forEach(logo => {
        logo.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
    
    // Animation des titres de section
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        title.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Smooth scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Fermer le menu mobile si ouvert
                const sidebar = document.getElementById('sidebar');
                const overlay = document.getElementById('overlay');
                const menuToggle = document.getElementById('menuToggle');
                
                if (sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                    overlay.classList.remove('active');
                    menuToggle.classList.remove('active');
                    
                    // Réinitialiser l'animation hamburger
                    const spans = menuToggle.querySelectorAll('span');
                    spans.forEach(span => {
                        span.style.transform = 'none';
                        span.style.opacity = '1';
                    });
                }
            }
        });
    });
}

// Sauvegarder les paramètres en mémoire (simulation localStorage persistant)
let savedSettings = {
    theme: 'dark',
    language: 'fr',
    visits: 0,
    lastVisit: 0
};

function saveSettings() {
    savedSettings.theme = currentTheme;
    savedSettings.language = currentLang;
    savedSettings.visits = visitCount;
    savedSettings.lastVisit = Date.now();
    
    // Sauvegarder dans le contexte global pour la persistance
    if (window.portfolioVisitorData) {
        window.portfolioVisitorData.set('userSettings', savedSettings);
    }
}

function loadSavedSettings() {
    // Récupérer les paramètres sauvegardés
    if (window.portfolioVisitorData && window.portfolioVisitorData.has('userSettings')) {
        savedSettings = window.portfolioVisitorData.get('userSettings');
    }
    
    currentTheme = savedSettings.theme || 'dark';
    currentLang = savedSettings.language || 'fr';
    
    // Appliquer le thème
    changeTheme(currentTheme);
    
    // Appliquer la langue
    changeLanguage(currentLang);
}

// Animations au scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialiser les animations de section
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
});

// Animation de particules (optionnel)
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: currentColor;
            opacity: 0.3;
            border-radius: 50%;
            animation: float ${5 + Math.random() * 10}s infinite linear;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
}

// Animation CSS pour les particules
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(100vh) rotate(0deg); }
        100% { transform: translateY(-100vh) rotate(360deg); }
    }
    
    @keyframes blink-caret {
        from, to { border-color: transparent; }
        50% { border-color: currentColor; }
    }
    
    /* Correction de l'animation typing */
    .typing-text {
        font-family: 'Space Mono', monospace;
        font-size: 1.3rem;
        margin: 20px 0;
        min-height: 60px;
        /* Supprimer les animations CSS par défaut qui causent des conflits */
    }
    
    .typing-text-active {
        font-family: 'Space Mono', monospace;
        font-size: 1.3rem;
        margin: 20px 0;
        min-height: 60px;
        white-space: nowrap;
        overflow: hidden;
        border-right: 2px solid currentColor;
    }
`;
document.head.appendChild(style);

// Initialiser les particules pour les thèmes appropriés
setTimeout(() => {
    if (['neon', 'hacker', 'glass'].includes(currentTheme)) {
        createParticles();
    }
}, 1000);