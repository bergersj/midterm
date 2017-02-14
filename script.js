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

$('#lastName')

});
