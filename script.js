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


var reservedSeats = [];
class Individual {
  constructor(firstName, lastName, phoneNumber, emailAddress, additionalInfo){
    // set the species property of our animal to whatever parameter we pass through it

}
  //created a method for our animal to allow it to eat, and make a noise while doing so
 eatFood() {
    console.log('Nom Nom Nom!');
  }
  //created a method for our animal that allows it to speak to us
 speak(){
   console.log(this.species + " makes a sound")
 }
}
      this.firstName = firstName;
      this.lastName = lastName;
      this.phoneNumber = firstName;
      this.emailAddress = emailAddress;
      this.additionalInfo = additionalInfo; }
