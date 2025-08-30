<?php
class ChatbotPaxel {
    private $responses = [
        'fr' => [
            'salut' => 'Salut ! Je suis Paxel, le chatbot le plus pacifique du monde ! 😊',
            'bonjour' => 'Bonjour ! Je suis ravi de te parler !',
            'nom' => 'Je suis Paxel, le chatbot pacifique créé par Karlito !',
            'karlito' => 'Ah, Karlito est mon créateur ! C\'est un génie du code ! 🚀',
            'age' => 'J\'ai été créé récemment, mais je suis sage comme un vieux sage !',
            'projet' => 'Karlito a créé plein de projets géniaux ! Regarde la section Projets !',
            'contact' => 'Tu peux contacter Karlito par email : karlluberisse1308@gmail.com',
            'theme' => 'Tu peux changer de thème dans le menu ! Il y en a 7 ! 🎨',
            'langue' => 'Je parle français, anglais, espagnol et portugais ! 🌍',
            'site' => 'Tous les sites de Karlito sont sur : badley08.github.io/LinkNest',
            'compétence' => 'Karlito maîtrise HTML, CSS, JavaScript, Python, Linux et le développement Full Stack !',
            'expérience' => 'Karlito a 16 ans mais il code comme un pro !',
            'github' => 'Tu peux voir les projets de Karlito sur GitHub : github.com/badley08',
            'default' => 'Je suis Paxel, le chatbot pacifique ! Pose-moi des questions sur Karlito, ses projets ou ses compétences ! 🤖'
        ],
        'en' => [
            'hello' => 'Hello! I\'m Paxel, the most peaceful chatbot in the world! 😊',
            'hi' => 'Hi there! Nice to meet you!',
            'name' => 'I\'m Paxel, the peaceful chatbot created by Karlito!',
            'karlito' => 'Ah, Karlito is my creator! He\'s a coding genius! 🚀',
            'age' => 'I was created recently, but I\'m wise like an old sage!',
            'project' => 'Karlito has created many awesome projects! Check the Projects section!',
            'contact' => 'You can contact Karlito by email: karlluberisse1308@gmail.com',
            'theme' => 'You can change themes in the menu! There are 7 of them! 🎨',
            'language' => 'I speak French, English, Spanish and Portuguese! 🌍',
            'site' => 'All of Karlito\'s sites are at: badley08.github.io/LinkNest',
            'skill' => 'Karlito masters HTML, CSS, JavaScript, Python, Linux and Full Stack development!',
            'experience' => 'Karlito is 16 years old but codes like a pro!',
            'github' => 'You can see Karlito\'s projects on GitHub: github.com/badley08',
            'default' => 'I\'m Paxel, the peaceful chatbot! Ask me questions about Karlito, his projects or skills! 🤖'
        ]
    ];
    
    public function getResponse($message, $lang = 'fr') {
        $message = strtolower($message);
        $responses = $this->responses[$lang] ?? $this->responses['fr'];
        
        // Recherche de mots-clés
        foreach ($responses as $keyword => $response) {
            if (strpos($message, $keyword) !== false) {
                return $response;
            }
        }
        
        return $responses['default'];
    }
    
    public function getQuickReplies($lang = 'fr') {
        $replies = [
            'fr' => [
                'Qui est Karlito ?',
                'Ses compétences',
                'Ses projets',
                'Comment le contacter ?'
            ],
            'en' => [
                'Who is Karlito?',
                'His skills',
                'His projects',
                'How to contact him?'
            ]
        ];
        
        return $replies[$lang] ?? $replies['fr'];
    }
}
?>