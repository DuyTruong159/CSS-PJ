$(document).ready(function() {
    $(function() {
        $("#header").load("./header.html");
        $("#footer").load("./footer.html");
        $("#meta").load("./meta.html");
    });

    $('#contactus').submit(function(e){
        e.preventDefault();
        alert($(this).find('input[type="email"]').val() + "\nWe will contact soon!");
    });

    $('#minus').click(function(e) {
        e.preventDefault();
        var quantity = $('#quantity').find('input[type="number"]').val();
        $('#quantity').find('input[type="number"]').val(parseInt(quantity) - 1);
        if(quantity == 1) $('#quantity').find('input[type="number"]').val(1);
    });

    $('#plus').click(function(e) {
        e.preventDefault();
        var quantity = $('#quantity').find('input[type="number"]').val();
        $('#quantity').find('input[type="number"]').val(parseInt(quantity) + 1);
    });

    $('#quantity').submit(function(e) {
        e.preventDefault();
        alert($('h1').text() + "\nQuantity: " + $(this).find('input[type="number"]').val());
    });
});