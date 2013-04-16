$(document).ready(function() {
    $('#cost').focus();

    var cost = 10000000;
    $('#calculate').click(function(e) {
        e.preventDefault();

        var input = $('#cost').val();
        var calculated_cost = (parseFloat(input) / cost).toFixed(9);
        var num_units = cost / input;

        if(isNaN(calculated_cost)) {
            $('.out').text("That's not a number!");
        } else {
            // toFixed = convert from e number to set number of decimal
            // parseFloat/toString strip trailing zeros
            var msg = "";
            if(calculated_cost < 1) {
                msg = "<p>That's only <span class='fraction'>" + (calculated_cost).toString() + "</span> of a Thatcher.</p>";
                msg += "<p>You could get <span class='fraction'>" + Math.floor(num_units) + "</span> of these.</p>";
            } else {
                msg = "That's <span class='fraction'>" + parseFloat(calculated_cost).toString() + "</span> Thatchers.";
                msg += "<p>You could get <span class='fraction'>" + ((num_units).toFixed(2)) + "</span> of these.</p>";
            }
            
            $('.out').html(msg);
        }
    });

    $('.panel a').click(function() {
        $('#cost').val($(this).data('cost'));
        $('#calculate').click();
    });
});
