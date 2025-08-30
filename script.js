// Variables globales
let currentTheme = 'dark';
let currentLang = 'fr';
let chatHistory = [];

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialisation
    initTypingEffect();
    initScrollTop();
    initMobileMenu();
    initChatbot();
    initThemeSwitching();
    initProjectCards();
    initAnalytics();
    
    // Smooth scroll pour les ancres
    initSmoothScroll();
    
    // Fermer le menu en cliquant à l'extérieur
    initOutsideClickClose();
    
    // Effets 3D
    init3DEffects();
});

// Effet de frappe
function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const text = typingText.textContent;
        typingText.textContent = '';
        typingText.style.width = '0';
        
        let i = 0;
        function type() {
            if (i < text.length) {
                typingText.textContent += text.charAt(i);
                i++;
                setTimeout(type, 70);
            }
        }
        setTimeout(type, 1000);
    }
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
        const responses = {
            'salut': 'Salut ! Je suis Paxel, le chatbot le plus pacifique du monde ! 😊',
            'bonjour': 'Bonjour ! Je suis ravi de te parler !',
            'nom': 'Je suis Paxel, le chatbot pacifique créé par Karlito !',
            'karlito': 'Ah, Karlito est mon créateur ! C\'est un génie du code ! 🚀',
            'age': 'J\'ai été créé récemment, mais je suis sage comme un vieux sage !',
            'projet': 'Karlito a créé plein de projets géniaux ! Regarde la section Projets !',
            'contact': 'Tu peux contacter Karlito par email : karlluberisse1308@gmail.com',
            'theme': 'Tu peux changer de thème dans le menu ! Il y en a 7 ! 🎨',
            'langue': 'Je parle français, anglais, espagnol et portugais ! 🌍',
            'site': 'Tous les sites de Karlito sont sur : badley08.github.io/LinkNest',
            'compétence': 'Karlito maîtrise HTML, CSS, JavaScript, Python, Linux et le développement Full Stack !',
            'expérience': 'Karlito a 16 ans mais il code comme un pro !',
            'github': 'Tu peux voir les projets de Karlito sur GitHub : github.com/badley08',
            'default': 'Je suis Paxel, le chatbot pacifique ! Pose-moi des questions sur Karlito, ses projets ou ses compétences ! 🤖'
        };
        
        for (let key in responses) {
            if (message.includes(key)) {
                return responses[key];
            }
        }
        return responses['default'];
    }
    
    // Réponses rapides
    function showQuickReplies() {
        const replies = [
            'Qui est Karlito ?',
            'Ses compétences',
            'Ses projets',
            'Comment le contacter ?'
        ];
        
        replies.forEach(reply => {
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

// Changement de thème avec animations
function initThemeSwitching() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const theme = this.textContent.toLowerCase();
            
            // Animation de transition
            document.body.style.opacity = '0';
            document.body.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                document.body.className = `theme-${theme}`;
                document.body.style.opacity = '1';
                document.body.style.transform = 'scale(1)';
                document.body.style.transition = 'all 0.5s ease';
            }, 300);
        });
    });
}

// Cartes de projets dynamiques
function initProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    // Simulation de chargement AJAX
    setTimeout(() => {
        // Ajout d'effets hover 3D
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
    }, 1000);
}

// Analytics et statistiques
function initAnalytics() {
    // Simulation de chargement des données analytics
    setTimeout(() => {
        console.log('Analytics chargés');
        // Ici, tu pourrais appeler une API pour charger les vraies données
    }, 2000);
}

// Effets 3D et animations avancées
function init3DEffects() {
    // Animation 3D du logo
    const logo = document.querySelector('.logo');
    if (logo) {
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
    }
    
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

// Fonction utilitaire pour l'AJAX
function ajaxRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.send();
}