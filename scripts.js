$(document).ready(function() {
    i18next.use(i18nextBrowserLanguageDetector).init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    "nav_home": "Home",
                    "nav_posts": "Posts",
                    "nav_add_post": "Add Post",
                    "nav_about": "About",
                    "nav_contact": "Contact",
                    "home_title": "Welcome to MyGamerHub",
                    "home_description": "Your ultimate hub for gaming news and updates. Connect with gamers from around the world and share your insights on the latest games and trends.",
                    "posts_title": "Latest Posts",
                    "add_post_title": "Add New Post",
                    "post_title_label": "Title:",
                    "post_content_label": "Content:",
                    "submit_button": "Submit",
                    "posted_by": "Posted by:",
                    "on_date": "on",
                    "about_title": "About MyGamerHub",
                    "about_description": "MyGamerHub is a platform created for gamers by gamers. Our mission is to provide a space where gaming enthusiasts can share their thoughts, reviews, and news about the latest games and consoles. Whether you are a PC gamer, a console gamer, or both, you will find a community here that shares your passion.",
                    "contact_title": "Contact Us",
                    "contact_name_label": "Name:",
                    "contact_email_label": "Email:",
                    "contact_message_label": "Message:",
                    "contact_submit_button": "Send",
                    "all_rights_reserved": "All rights reserved."
                }
            },
            fr: {
                translation: {
                    "nav_home": "Accueil",
                    "nav_posts": "Articles",
                    "nav_add_post": "Ajouter un article",
                    "nav_about": "À propos",
                    "nav_contact": "Contact",
                    "home_title": "Bienvenue sur MyGamerHub",
                    "home_description": "Votre hub ultime pour les nouvelles et mises à jour de jeux. Connectez-vous avec des joueurs du monde entier et partagez vos idées sur les derniers jeux et tendances.",
                    "posts_title": "Derniers Articles",
                    "add_post_title": "Ajouter un Nouveau Post",
                    "post_title_label": "Titre:",
                    "post_content_label": "Contenu:",
                    "submit_button": "Soumettre",
                    "posted_by": "Posté par:",
                    "on_date": "le",
                    "about_title": "À propos de MyGamerHub",
                    "about_description": "MyGamerHub est une plateforme créée par des joueurs pour des joueurs. Notre mission est de fournir un espace où les passionnés de jeux peuvent partager leurs pensées, avis et nouvelles sur les derniers jeux et consoles. Que vous soyez un joueur PC, un joueur console ou les deux, vous trouverez ici une communauté qui partage votre passion.",
                    "contact_title": "Nous contacter",
                    "contact_name_label": "Nom:",
                    "contact_email_label": "Email:",
                    "contact_message_label": "Message:",
                    "contact_submit_button": "Envoyer",
                    "all_rights_reserved": "Tous droits réservés."
                }
            },
            // Add more languages here...
        }
    }, function(err, t) {
        if (err) return console.error(err);
        updateContent();
    });

    function updateContent() {
        $('[data-i18n]').each(function() {
            var key = $(this).data('i18n');
            $(this).text(i18next.t(key));
        });
    }

    $('#post-form').on('submit', function(event) {
        event.preventDefault();
        var title = $('#post-title').val();
        var content = $('#post-content').val();
        if (title && content) {
            var postHtml = '<article><h3>' + title + '</h3><p>' + content + '</p><p class="meta"><span data-i18n="posted_by">' + i18next.t('posted_by') + '</span> User123 <span data-i18n="on_date">' + i18next.t('on_date') + '</span> ' + new Date().toISOString().split('T')[0] + '</p></article>';
            $('#posts').append(postHtml);
            $('#post-title').val('');
            $('#post-content').val('');
            updateContent();
        }
    });

    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        var name = $('#contact-name').val();
        var email = $('#contact-email').val();
        var message = $('#contact-message').val();
        if (name && email && message) {
            alert('Thank you for your message, ' + name + '! We will get back to you at ' + email + ' soon.');
            $('#contact-name').val('');
            $('#contact-email').val('');
            $('#contact-message').val('');
        }
    });
});