$(document).ready(function() {
    $('#btn_translate').click(fetchTranslation);
    $('#language_code').keypress(function(event) {
        if (event.keyCode === 13) {
            fetchTranslation();
        }
    });

    function fetchTranslation() {
        const languageCode = $('#language_code').val();
        $.get(`https://www.fourtonfish.com/hellosalut/hello/?lang=${languageCode}`, function(data) {
            $('#hello').text(data.hello);
        });
    }
});

