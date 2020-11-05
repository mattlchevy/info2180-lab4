$(document).ready(function(){
    var goheros = $('#click');

    goheros.on('click', function(){
        $.ajax('superheroes.php', {
            method: 'GET'
        }).done(function(response){
          alert(response);
        }).fail(function(){
            alert('Error with request...');
        });
    });
});