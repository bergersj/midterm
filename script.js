//wrapping all of our code in this document.ready function will ensure that the code only runs after the entire page has loaded
$(document).ready(function () {
    //when mouse is hovering a particular element in the seat class, this function fades to an opacity to .85 on the "fast" setting
    $('.seat').hover(function () {
        $(this).fadeTo("fast", 0.85);
    });
    //when the mouse leaves this element, it will fade back to full opacity as quick as possible
    $('.seat').mouseleave(function () {
        $(this).fadeTo(0, 1.00);
    });
    //creates an empty array to store our objects
    var reservedSeats = [];
    //initialized a global seatID variable
    var seatId;
    //assigns value to the seatID variable triggered by the on click event, ths value is the ID of the element targeted by this event
    $(".seat").on("click", function (event) {
        seatId = event.target.id;
    });
    //on click of the submit button of the modal, the function adds the values from each field into variables representing the firstName, lastName, phoneNumber, eMail, and extraInfo 
    $(".submitButton").on("click", function (event) {
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var phoneNumber = $("#phoneNumber").val();
        var eMail = $("#eMail").val();
        var extraInfo = $("#extraInfo").val();
        //using object literal notation to create a new seatTaken object, using the variables that were just declared to set the individual values of this object
        seatTaken = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: eMail,
            extraInfo: extraInfo,
            seatId: seatId
        };
        //pushes this new seatTaken object into the globally-scoped reservedSeats array variable
        reservedSeats.push(seatTaken);
        //runs the function clearForm to clear the form, after the attributes have been extracted
        clearForm();
        //runs a function that will change the class of the targeted div element from 'seat' to 'reservedSeat'
        changeClass();
    });
    //on the mouseenter event occuring on the targeted element in the seat class
    $(".seat").on("mouseenter", function (event) {
        //cycles through each object in the reservedSeats array, using i as a counter
        reservedSeats.forEach(function (i) {
                //if the id of the targeted element matches the seatId value of any object in the array perform the following function
                if (i.seatId === event.target.id) {
                    //text content of the event target (the selected seat) is appended to include the lastName value of the matching seatTaken object
                    $(event.target).text(i.lastName);
                }
            })
            //on the mouseleave event, the text is reverted back from the lastName value to the id of the targeted element
    }).on("mouseleave", function (event) {
        $(event.target).text(event.target.id);
    });
    //this function clears the form after its respective values are converted into local variables
    function clearForm() {
        document.getElementById("userForm").reset();
    }
    //created a function to change the class of the selected variable (the string content of the seatId variable, concatonated with a hashtag to indicate that it is, in fact, the Id of the selected element. This function removes the class of 'seat' and adds the class of 'reserved seat'.
    function changeClass() {
        $('#' + seatId).removeClass('seat').addClass('reservedSeat');
    }
});
//document ready is closed, this is the end of our script file
