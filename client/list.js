Template.body.events({

	// handle form submission
	'submit form' : function(event){
		// stop the form from submitting
    	event.preventDefault();

    	// get the data we need from the form
    	var heading = event.target.heading.value;
      	var text =  event.target.text_area.value;

      	Lists.insert({
      		heading: heading,
      		text: text
      	});
     	// clear form

     	event.target.heading.value = "";
     	event.target.text_area.value = "";
	}
});