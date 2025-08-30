<?php
function generateSEOData($lang, $translations) {
    $seoData = [
        'fr' => [
            'title' => 'Luberisse Karl Brad | Karlito - Développeur Full Stack',
            'description' => 'Portfolio de Karlito (Luberisse Karl Brad), développeur Full Stack de 16 ans passionné par la technologie et l\'innovation numérique.',
            'keywords' => 'développeur, full stack, karlito, programmation, web, python, javascript, linux, portfolio',
            'author' => 'Luberisse Karl Brad'
        ],
        'en' => [
            'title' => 'Luberisse Karl Brad | Karlito - Full Stack Developer',
            'description' => 'Portfolio of Karlito (Luberisse Karl Brad), a 16-year-old Full Stack developer passionate about technology and digital innovation.',
            'keywords' => 'developer, full stack, karlito, programming, web, python, javascript, linux, portfolio',
            'author' => 'Luberisse Karl Brad'
        ],
        'es' => [
            'title' => 'Luberisse Karl Brad | Karlito - Desarrollador Full Stack',
            'description' => 'Portafolio de Karlito (Luberisse Karl Brad), desarrollador Full Stack de 16 años apasionado por la tecnología e innovación digital.',
            'keywords' => 'desarrollador, full stack, karlito, programación, web, python, javascript, linux, portafolio',
            'author' => 'Luberisse Karl Brad'
        ],
        'pt' => [
            'title' => 'Luberisse Karl Brad | Karlito - Desenvolvedor Full Stack',
            'description' => 'Portfólio do Karlito (Luberisse Karl Brad), desenvolvedor Full Stack de 16 anos apaixonado por tecnologia e inovação digital.',
            'keywords' => 'desenvolvedor, full stack, karlito, programação, web, python, javascript, linux, portfólio',
            'author' => 'Luberisse Karl Brad'
        ]
    ];
    
    return $seoData[$lang] ?? $seoData['fr'];
}
?>