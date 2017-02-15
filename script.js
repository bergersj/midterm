$(document).ready(function(){

//effect when mouse is over a particular seat
  $('.seat').hover(function(){
     $(this).fadeTo("fast", 0.65);
   });
   $('.seat').mouseleave(function(){
      $(this).fadeTo("fast", 1.00);
   });

//effect once seat has been clicked on
$('.seat').click(function(){
   $(this).css('background-color', 'rgb(127, 0, 0)');
 });


});






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
  
