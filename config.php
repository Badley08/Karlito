<?php
// Configuration du portfolio
define('SITE_NAME', 'Luberisse Karl Brad | Karlito');
define('SITE_AUTHOR', 'Luberisse Karl Brad');
define('SITE_EMAIL', 'karlluberisse1308@gmail.com');
define('SITE_AGE', 16);
define('SITE_GITHUB', 'https://github.com/badley08');
define('SITE_LINKNEST', 'https://badley08.github.io/LinkNest');

// Thèmes disponibles
$available_themes = ['dark', 'light', 'glass', 'neon', 'hacker', 'vintage', 'royal'];

// Langues disponibles
$available_languages = ['fr', 'en', 'es', 'pt'];

// Fonction pour vérifier si un thème est valide
function isValidTheme($theme) {
    global $available_themes;
    return in_array($theme, $available_themes);
}

// Fonction pour vérifier si une langue est valide
function isValidLanguage($lang) {
    global $available_languages;
    return in_array($lang, $available_languages);
}

// Fonction pour obtenir le thème par défaut
function getDefaultTheme() {
    return 'dark';
}

// Fonction pour obtenir la langue par défaut
function getDefaultLanguage() {
    return 'fr';
}
?>