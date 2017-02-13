$(document).ready(function(){

  $('.gallery__slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
  });

  $('#timer').countdown('2017/12/31').on('update.countdown', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<span class="timer-number">%-d</span> <span class="timer-word">дня</span> '
    + '<span class="timer-number">%H</span> <span class="timer-word">часов</span> '
    + '<span class="timer-number">%M</span> <span class="timer-word">минут</span> '
    + '<span class="timer-number">%S</span> <span class="timer-word">секунд</span>'));
});


$('#path__select').on('change', cost);
$('#people-number__select').on('change', cost);

function cost() {

	var itemCost = document.getElementById("path__select").value;
	console.log(itemCost);
	var select = document.getElementById("people-number__select").value;
	console.log(select);
	var totalPrice = select * itemCost;
	console.log(totalPrice);
	document.getElementById("price").innerText=totalPrice + ' Р';

}

});