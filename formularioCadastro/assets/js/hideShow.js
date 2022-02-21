$(document).ready(function() {

    $('#charClass').on('change', function(){

        var selectValor = '#' + $(this).val();

        $('.charTree').children('div').hide();
        $('.charTree').children(selectValor).show();
        
    })

})   