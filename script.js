
$(document).ready(function(){

//effect when mouse is over a particular seat
 $('.seat').hover(function(){
    $(this).fadeTo("fast", 0.85);
  });
  $('.seat').mouseleave(function(){
     $(this).fadeTo(0, 1.00);
  });

//creates an empty array to store our objects
var reservedSeats = [];
var seatId;

$(".seat").on("click", function(event){
seatId = event.target.id;
});

$(".submitButton").on("click",function(event){
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
changeClass();


});

$(".seat").on("mouseenter", function(event){
 reservedSeats.forEach(function(i) {
   if(i.seatId === event.target.id) {
     $(event.target).text(i.lastName);
   }
 })
}).on("mouseleave", function(event) {
 $(event.target).text(event.target.id);
});

function clearForm(){
 document.getElementById("userForm").reset();
}
//created a function to change the class of the selected variable (the string content of the seatId variable, concatonated with a hashtag to indicate that it is, in fact, the Id of the selected element. This function removes the class of 'seat' and adds the class of 'reserved seat'.
function changeClass(){
   $('#' + seatId).removeClass('seat').addClass('reservedSeat');
}


});
