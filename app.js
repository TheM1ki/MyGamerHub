const messages = {
    en: {
        title: 'MyGamerHub',
        home: 'Home',
        login: 'Login',
        register: 'Register',
        welcomeMessage: 'Welcome to MyGamerHub, a social platform for gamers.',
    },
    fr: {
        title: 'MonGamerHub',
        home: 'Accueil',
        login: 'Connexion',
        register: 'Inscription',
        welcomeMessage: 'Bienvenue sur MonGamerHub, une plateforme sociale pour les joueurs.',
    },
    es: {
        title: 'MiGamerHub',
        home: 'Inicio',
        login: 'Iniciar sesión',
        register: 'Registrarse',
        welcomeMessage: 'Bienvenido a MiGamerHub, una plataforma social para jugadores.',
    },
    // dodaj więcej języków tutaj
};

const i18n = new VueI18n({
    locale: navigator.language.split('-')[0], // wykrywanie języka przeglądarki
    fallbackLocale: 'en',
    messages,
});

new Vue({
    i18n,
    el: '#app',
});