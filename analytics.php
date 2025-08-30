<?php
include 'counter.php';

$data = [
    'total_visits' => getVisitCount(),
    'today_visits' => getDailyVisits(),
    'week_visits' => getWeeklyVisits(),
    'most_popular_theme' => 'dark', // À implémenter
    'top_languages' => ['fr' => 60, 'en' => 30, 'es' => 7, 'pt' => 3] // À implémenter
];

header('Content-Type: application/json');
echo json_encode($data);
?>