<?php
session_start();

// Inclure les fichiers nécessaires
include 'counter.php';
include 'chatbot.php';
include 'seo.php';

// Gestion du thème
$themes = ['dark', 'light', 'glass', 'neon', 'hacker', 'vintage', 'royal'];
$theme = isset($_GET['theme']) && in_array($_GET['theme'], $themes) ? $_GET['theme'] : 'dark';

// Gestion de la langue
$languages = ['fr', 'en', 'es', 'pt'];
$lang = isset($_GET['lang']) && in_array($_GET['lang'], $languages) ? $_GET['lang'] : 'fr';

// Charger les traductions
$translations = json_decode(file_get_contents("languages/{$lang}.json"), true);
$t = $translations;

// Compteur de visites (ne s'incrémente qu'une fois par session)
if (!isset($_SESSION['visited'])) {
    incrementVisitCount();
    $_SESSION['visited'] = true;
}
$visits = getVisitCount();

$_SESSION['theme'] = $theme;
$_SESSION['lang'] = $lang;

// Données SEO
$seo = generateSEOData($lang, $t);
?>

<!DOCTYPE html>
<html lang="<?= $lang ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $seo['title'] ?></title>
    <meta name="description" content="<?= $seo['description'] ?>">
    <meta name="keywords" content="<?= $seo['keywords'] ?>">
    <meta name="author" content="<?= $seo['author'] ?>">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph -->
    <meta property="og:title" content="<?= $seo['title'] ?>">
    <meta property="og:description" content="<?= $seo['description'] ?>">
    <meta property="og:image" content="assets/karlito.jpg">
    <meta property="og:type" content="website">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="<?= $seo['title'] ?>">
    <meta name="twitter:description" content="<?= $seo['description'] ?>">
    
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="themes.css">
    <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Roboto+Mono:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="icon" href="assets/karlito.jpg" type="image/jpeg" size="32x32">
    <link rel="icon" href="karlito.jpg" type="image/jpeg" sizes="32x32">
</head>
<body class="theme-<?= $theme ?>">

<!-- Menu Hamburger -->
<div class="mobile-menu-toggle" id="menuToggle">
    <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>

<!-- Menu Latéral -->
<div class="sidebar" id="sidebar">
    <div class="sidebar-header">
        <img src="assets/karlito.jpg" alt="<?= $t['name'] ?>" class="logo">
        <h2><?= $t['name'] ?></h2>
    </div>
    
    <nav class="sidebar-nav">
        <a href="#about"><i class="fas fa-user"></i> <?= $t['about_btn'] ?></a>
        <a href="#skills"><i class="fas fa-code"></i> <?= $t['skills_title'] ?></a>
        <a href="#projects"><i class="fas fa-project-diagram"></i> <?= $t['projects_title'] ?></a>
        <a href="#contact"><i class="fas fa-envelope"></i> <?= $t['contact_title'] ?></a>
        <a href="https://badley08.github.io/LinkNest" target="_blank"><i class="fas fa-globe"></i> <?= $t['all_sites'] ?></a>
    </nav>
    
    <div class="sidebar-controls">
        <div class="theme-selector">
            <h4><?= $t['theme'] ?>:</h4>
            <?php foreach($themes as $th): ?>
                <a href="?theme=<?= $th ?>&lang=<?= $lang ?>" class="theme-btn <?= $th == $theme ? 'active' : '' ?>" data-theme="<?= $th ?>"><?= ucfirst($th) ?></a>
            <?php endforeach; ?>
        </div>
        
        <div class="language-selector">
            <h4><?= $t['language'] ?>:</h4>
            <a href="?theme=<?= $theme ?>&lang=fr" class="<?= $lang == 'fr' ? 'active' : '' ?>" title="Français">🇫🇷</a>
            <a href="?theme=<?= $theme ?>&lang=en" class="<?= $lang == 'en' ? 'active' : '' ?>" title="English">🇺🇸</a>
            <a href="?theme=<?= $theme ?>&lang=es" class="<?= $lang == 'es' ? 'active' : '' ?>" title="Español">🇪🇸</a>
            <a href="?theme=<?= $theme ?>&lang=pt" class="<?= $lang == 'pt' ? 'active' : '' ?>" title="Português">🇵🇹</a>
        </div>
    </div>
</div>

<!-- Overlay pour fermer le menu -->
<div class="overlay" id="overlay"></div>

<!-- Boutons flottants -->
<div class="floating-buttons">
    <!-- Bouton Chatbot Paxel -->
    <button class="floating-btn chatbot-toggle" id="chatbotToggle" title="Chatbot Paxel">
        <i class="fas fa-robot"></i>
    </button>
    
    <!-- Bouton Retour en Haut -->
    <button class="floating-btn scroll-top" id="scrollTop" title="<?= $t['back_to_top'] ?>">
        <i class="fas fa-arrow-up"></i>
    </button>
</div>

<!-- Visit Counter -->
<div class="visit-counter">
    <i class="fas fa-eye"></i> 
    <span id="visitCount"><?= $visits ?></span> 
    <?= $t['visits'] ?>
</div>

<!-- Header -->
<header class="hero-section">
    <div class="hero-content">
        <img src="assets/karlito.jpg" alt="<?= $t['name'] ?>" class="profile-pic">
        <h1><?= $t['hello'] ?> <span class="highlight"><?= $t['name'] ?></span></h1>
        <p class="typing-text"><?= $t['subtitle'] ?></p>
        <div class="hero-buttons">
            <a href="#about" class="btn-primary"><?= $t['about_btn'] ?></a>
            <a href="#projects" class="btn-secondary"><?= $t['projects_btn'] ?></a>
        </div>
    </div>
</header>

<!-- About Section -->
<section id="about" class="section">
    <div class="container">
        <h2 class="section-title"><?= $t['about_title'] ?></h2>
        <div class="about-content">
            <img src="assets/karlito.jpg" alt="<?= $t['name'] ?>" class="about-pic">
            <div class="about-text">
                <p><?= $t['about_text1'] ?></p>
                <p><?= $t['about_text2'] ?></p>
                <p><?= $t['about_text3'] ?></p>
                <div class="age-info">
                    <i class="fas fa-birthday-cake"></i>
                    <?= $t['age'] ?>: 16 <?= $t['years'] ?>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Skills Section -->
<section id="skills" class="section skills-section">
    <div class="container">
        <h2 class="section-title"><?= $t['skills_title'] ?></h2>
        <div class="skills-grid">
            <div class="skill-card">
                <h3><i class="fas fa-code"></i> <?= $t['web_dev'] ?></h3>
                <ul>
                    <li>HTML5, CSS3, JavaScript</li>
                    <li>Python (Flask, Django)</li>
                    <li>APIs & Backend</li>
                </ul>
            </div>
            <div class="skill-card">
                <h3><i class="fab fa-linux"></i> <?= $t['linux'] ?></h3>
                <ul>
                    <li>Arch Linux, Ubuntu</li>
                    <li>Terminal & Bash</li>
                    <li>Server Management</li>
                </ul>
            </div>
            <div class="skill-card">
                <h3><i class="fas fa-paint-brush"></i> <?= $t['ux_ui'] ?></h3>
                <ul>
                    <li>Responsive Design</li>
                    <li>Interactive Interfaces</li>
                    <li>User Experience</li>
                </ul>
            </div>
            <div class="skill-card">
                <h3><i class="fas fa-project-diagram"></i> <?= $t['projects'] ?></h3>
                <ul>
                    <li>Educational Platforms</li>
                    <li>Online Converters</li>
                    <li>Full Stack Apps</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Projects Section -->
<section id="projects" class="section projects-section">
    <div class="container">
        <h2 class="section-title"><?= $t['projects_title'] ?></h2>
        <div class="projects-grid">
            <div class="project-card">
                <h3><i class="fas fa-graduation-cap"></i> <?= $t['project1_title'] ?></h3>
                <p><?= $t['project1_desc'] ?></p>
                <small>HTML, CSS, JS, Python Flask</small>
            </div>
            <div class="project-card">
                <h3><i class="fas fa-exchange-alt"></i> <?= $t['project2_title'] ?></h3>
                <p><?= $t['project2_desc'] ?></p>
                <small>JavaScript, CSS Animations</small>
            </div>
            <div class="project-card">
                <h3><i class="fas fa-chart-line"></i> <?= $t['project3_title'] ?></h3>
                <p><?= $t['project3_desc'] ?></p>
                <small>Chart.js, Flask</small>
            </div>
            <div class="project-card">
                <h3><i class="fas fa-users"></i> <?= $t['project4_title'] ?></h3>
                <p><?= $t['project4_desc'] ?></p>
                <small>Python, SQLite, REST API</small>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="section contact-section">
    <div class="container">
        <h2 class="section-title"><?= $t['contact_title'] ?></h2>
        <form action="contact.php" method="POST" class="contact-form">
            <input type="text" name="name" placeholder="<?= $t['name_placeholder'] ?>" required>
            <input type="email" name="email" placeholder="<?= $t['email_placeholder'] ?>" required>
            <textarea name="message" placeholder="<?= $t['message_placeholder'] ?>" required></textarea>
            <button type="submit" class="btn-primary"><?= $t['send_btn'] ?></button>
        </form>
    </div>
</section>

<!-- Chatbot Paxel -->
<div class="chatbot" id="chatbot">
    <div class="chatbot-header">
        <img src="assets/karlito.jpg" alt="Paxel" class="chatbot-logo">
        <span class="chatbot-title">Paxel - <?= $t['chatbot_title'] ?></span>
        <button class="chatbot-close" id="closeChatbot">×</button>
    </div>
    <div class="chatbot-messages" id="chatbotMessages">
        <div class="message bot">
            <?= $t['chatbot_welcome'] ?>
        </div>
    </div>
    <div class="chatbot-input">
        <input type="text" id="userMessage" placeholder="<?= $t['chatbot_placeholder'] ?>">
        <button id="sendMessage"><i class="fas fa-paper-plane"></i></button>
    </div>
    <div class="quick-replies" id="quickReplies"></div>
</div>

<!-- Footer -->
<footer>
    <div class="container">
        <p>&copy; 2025 Luberisse Karl Brad. <?= $t['rights'] ?></p>
        <div class="social-links">
            <a href="mailto:karlluberisse1308@gmail.com" title="Email"><i class="fas fa-envelope"></i></a>
            <a href="https://github.com/badley08" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
            <a href="#" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
        </div>
    </div>
</footer>

<script>
    // Passer les variables PHP au JavaScript
    window.currentTheme = '<?= $theme ?>';
    window.currentLang = '<?= $lang ?>';
    window.translations = <?= json_encode($t) ?>;
</script>
<script src="script.js"></script>
</body>
</html>