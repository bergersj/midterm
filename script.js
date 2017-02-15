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



<<<<<<< HEAD



var reservedSeats = [];
var reservedSeat;

//created an Indivudual object
class Individual {
  constructor(firstName, lastName, phoneNumber, emailAddress, additionalInfo){
    // set the species property of our animal to whatever parameter we pass through it
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
    this.additionalInfo = additionalInfo;
    return lastName;
}
 displayName(lastName) {
    var lastName = lastName;
document.write.getElementById("A1").lastName;
}
}

// class Individual {
//  constructor(firstName, lastName, phoneNumber, emailAddress, additionalInfo){
//      this.firstName = firstName;
//      this.lastName = lastName;
//      this.phoneNumber = firstName;
//      this.emailAddress = emailAddress;
//      this.additionalInfo = additionalInfo;}
//
//    displayName(lastName, firstName) {
//    console.log(lastName + ", " firstName);
//  };
  
=======
var reservedSeats = [];


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

var formFirstName = document.input.getElementById('#firstName');
var formLastName = document.input.getElementById('#lastName');
var formPhoneNumber = document.input.getElementById('#phoneNumber');
var formEMail = document.input.getElementById('#eMail');
var formExtraInfo = document.input.getElementById('#extraInfo');

var seatTaken  = new Individual(formFirstName, formLastName, formPhoneNumber, formEMail, formExtraInfo);
  console.log(seatTaken);
>>>>>>> e2bded25d509370a585882bc32614a0c244908d5
