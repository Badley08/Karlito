<?php
function incrementVisitCount() {
    $file = 'data/visits.txt';
    $dailyFile = 'data/daily_visits.json';
    
    // Créer les dossiers et fichiers nécessaires
    if (!file_exists('data')) {
        mkdir('data', 0777, true);
    }
    
    if (!file_exists($file)) {
        file_put_contents($file, '0');
    }
    
    // Compteur quotidien
    $today = date('Y-m-d');
    $dailyData = file_exists($dailyFile) ? json_decode(file_get_contents($dailyFile), true) : [];
    
    if (!isset($dailyData[$today])) {
        $dailyData[$today] = 0;
    }
    
    // Incrémenter les compteurs
    $total = (int)file_get_contents($file);
    $total++;
    file_put_contents($file, $total);
    
    $dailyData[$today]++;
    file_put_contents($dailyFile, json_encode($dailyData));
}

function getVisitCount() {
    $file = 'data/visits.txt';
    
    if (!file_exists($file)) {
        return 0;
    }
    
    return (int)file_get_contents($file);
}

function getDailyVisits() {
    $dailyFile = 'data/daily_visits.json';
    $today = date('Y-m-d');
    
    if (file_exists($dailyFile)) {
        $dailyData = json_decode(file_get_contents($dailyFile), true);
        return isset($dailyData[$today]) ? $dailyData[$today] : 0;
    }
    
    return 0;
}
?>