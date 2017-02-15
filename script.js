$(document).ready(function(){

//effect when mouse is over a particular seat
  $('.seat').hover(function(){
     $(this).fadeTo("fast", 0.65);
   });
   $('.seat').mouseleave(function(){
      $(this).fadeTo(50, 1.00);
   });

//effect once seat has been clicked on
$('.seat').click(function(){
   $(this).css('background-color', 'rgb(127, 0, 0)');
 });


});
//creates an empty array to store our objects
var reservedSeats = [];
var reservedSeat;
//creates a class of Individual to create our object from
class Individual {
  constructor(formFirstName, formLastName, formPhoneNumber, formEMail, formExtraInfo){
    // set the species property of our animal to whatever parameter we pass through it
    this.firstName = formFirstName;
    this.lastName = formLastName;
    this.phoneNumber = formPhoneNumber;
    this.emailAddress = formEMail;
    this.additionalInfo = formExtraInfo;
  }
}

//created a function to retrieve form data that is submitted by the onclick event. it places each individual attribute to a variable
function registerSeat(){
  var firstName = $('#firstName').val();
  var lastName = $("#lastName").val();
  var phoneNumber = $('#phoneNumber').val();
  var eMail = $('#eMail').val();
  var extraInfo = $('#extraInfo').val();
    
    seatTaken = {};
    seatTaken ["this.firstName"] = firstName;
    seatTaken ["this.lastName"] = lastName;
    seatTaken["this.phoneNumber"] = phoneNumber;
    seatTaken ["this.eMail"] = eMail;
    seatTaken["this.extraInfo"] = extraInfo;
    //pushes our newly created seatTaken object into our empty reservedSeats array
    reservedSeats.push(seatTaken);
}

function clearForm() {
     document.getElementById("userForm").reset();
}

// var formFirstName = document.input.getElementById('firstName').value;
// var formLastName = document.input.getElementById('lastName').value;
// var formPhoneNumber = document.input.getElementById('phoneNumber').value;
// var formEMail = document.input.getElementById('eMail').value;
// var formExtraInfo = document.input.getElementById('extraInfo').value;

// var seatTaken  = new Individual('Grant', 'Circus', 313131313, 'GC@gc.com', 'formExtraInfo');
//
// reservedSeats.push(seatTaken);
