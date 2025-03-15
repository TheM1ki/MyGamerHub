$(document).ready(function() {
    i18next.use(i18nextBrowserLanguageDetector).init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    "posts_title": "Latest Posts",
                    "add_post_title": "Add New Post",
                    "post_content_label": "Content:",
                    "submit_button": "Submit"
                }
            },
            fr: {
                translation: {
                    "posts_title": "Derniers Articles",
                    "add_post_title": "Ajouter un Nouveau Post",
                    "post_content_label": "Contenu:",
                    "submit_button": "Soumettre"
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
        var content = $('#post-content').val();
        if (content) {
            $('#posts').append('<article><p>' + content + '</p></article>');
            $('#post-content').val('');
        }
    });
});