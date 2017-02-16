$(document).ready(function(){

//effect when mouse is over a particular seat
  $('.seat').hover(function(){
     $(this).fadeTo("fast", 0.65);
   });
   $('.seat').mouseleave(function(){
      $(this).fadeTo(50, 1.00);
   });

//effect once seat has been clicked on
$('.seat').on('click', function(){
   $(this).css('background-color', 'rgb(127, 0, 0)');
 });
//creates an empty array called reservedSeats to store our objects
var reservedSeats = [];
    //empty variable seatID holds the ID attribute of the targeted seat element
var seatId;

//on click function to retrieve the ID from the seat that was targeted, stores it in global seatId variable
$('.seat').on('click', function(event){
    seatId = event.target.id;
});

//created a function to retrieve form data that is submitted by the onclick event. it places each individual attribute to a corresponding variable
$('.submitButton').on('click', function(event){
    
  var firstName = $('#firstName').val();
  var lastName = $("#lastName").val();
  var phoneNumber = $('#phoneNumber').val();
  var eMail = $('#eMail').val();
  var extraInfo = $('#extraInfo').val();

//uses the previously obtained attributes to create an object within the function
    seatTaken = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        eMail: eMail,
        extraInfo: extraInfo,
        seatId: seatID
        
    };
//pushes the newly created seatTaken object into the reservedSeats array
    reservedSeats.push(seatTaken);
    //calls the clearForm function to clear any previous values that may have been entered in the form.
    clearForm();
});
    
    //upon the event of the mouse entering this "seat" element, an anonymous function runs through the reservedSeats array.
$('.seat').on('mouseenter', function(event) {
    reservedSeats.forEach(function(i){
        //if the seatId value of our object within the reservedSeats array matches the id of the target of the event (in this case, the mouse entering this particular element), text content containing the lastName attribute will be updated to this target element
      if(i.seatId === event.target.id) {
          $(event.target).text(i.lastName);
      }                                          
 })
    //when the mouseleave event occurs, the text content of the targeted element is set (back to what it was originally) to its ID attribute
}).on('mouseleave', function(event){
    $(event.target).text(event.target.id);
 
});

//this function clears out all forms after user submits information
function clearForm() {
     document.getElementById("userForm").reset();
}
});