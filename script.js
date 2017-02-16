$(document).ready(function() {

    //effect when mouse is over a particular seat
    $('.seat').hover(function() {
        $(this).fadeTo("fast", 0.65);
    });
    $('.seat').mouseleave(function() {
        $(this).fadeTo(50, 1.00);
    });

    //effect once seat has been clicked on
    $('.seat').click(function() {
        $(this).css('background-color', 'rgb(127, 0, 0)');
    });

    //creates an empty array to store our objects
    var reservedSeats = [];
    var seatId;

    $(".seat").on("click", function(event) {
        seatId = event.target.id;
    });

    $(".submitButton").on("click", function(event) {
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var phoneNumber = $("#phoneNumber").val();
        var eMail = $("#eMail").val();
        var extraInfo = $("#extraInfo").val();


        seatTaken = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: eMail,
            extraInfo: extraInfo,
            seatId: seatId
        };
        reservedSeats.push(seatTaken);
        clearForm();


    });

    $(".seat").on("mouseenter", function(event) {
        reservedSeats.forEach(function(i) {
            if (i.seatId === event.target.id) {
                $(event.target).text(i.lastName);
            }
        })
    }).on("mouseleave", function(event) {
        $(event.target).text(event.target.id);
    });

    function clearForm() {
        document.getElementById("userForm").reset();
    }


});
