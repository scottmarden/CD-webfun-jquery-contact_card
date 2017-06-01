$(document).ready(function(){

	$(document).on("click", ".contact_card", function(){
		$(this).children().toggle();
	})

	$("form").submit(function(){
		// pull the information from the form
		var firstName = $("#first_name").val();
		var lastName = $("#last_name").val();
		var description = $("#description").val();

		//populate the html string that will generate the contact card, both front and back.
		var htmlStr = ("<div class='contact_card'> <div class='card_front'><h2>" + firstName + " " +lastName + "</h2><p>Click for description!</p></div><p class='card_back'>" + description + "</p></div>");

		//append the new contact card html, and hide the back of the card. Reset the form fields to empty.
		$("#rolodex").append(htmlStr);
		$(".card_back").hide();
		$("#first_name, #last_name, #description").val("");
		return false;
	})



})
