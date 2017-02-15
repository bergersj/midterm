$(document).ready(function(){

//effect when mouse is over a particular seat
  $('.seat').hover(function(){
     $(this).fadeTo("fast", 0.65);
   });
   $('.seat').mouseleave(function(){
      $(this).fadeTo(50, 1.00);
   });
//    $(".seat").hover(
//     function(){$(this).animate({width: 200%, height:200%}, 1000);},
//     function(){$(this).animate({width: 100%, height:100%}, 1000);}
// );

//effect once seat has been clicked on
$('.seat').click(function(){
   $(this).css('background-color', 'rgb(127, 0, 0)');
 });


});



var reservedSeats = [];
var formFirstName = getElementById('#firstName');
var formLastName = getElementById('#lastName');
var formPhoneNumber = getElementById('#phoneNumber');
var formEMail = getElementById('#eMail');
var formExtraInfo = getElementById('#extraInfo');

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

var seatTaken  = new Individual(formFirstName, formLastName, formPhoneNumber, formEMail, formExtraInfo);
  console.log(seatTaken);
