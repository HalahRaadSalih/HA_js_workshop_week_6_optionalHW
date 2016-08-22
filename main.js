$(document).ready(function(){
  var $Form = $('form');
  console.log($Form[0]);
  $Form.on('submit', function(event) {
    event.preventDefault();  // Override the browser action - helps prevent strange problems

    var apiURLCall; // API Call URL to OMBD
    var movieTitle; // The Movie Title from the Input
    var ombdData; // The Object with all the cool Data

    // Takes the value from the HTML input and puts it into the variable
    movieTitle = $Form.find('input').val();

    // Adds the movieTitle into the full API call URL.
    apiURLCall = 'http://www.omdbapi.com/?t=' + movieTitle + '&type=movie&tomatoes=true';

    // AJAX call to pull in the data
    $.ajax(apiURLCall, {
      complete: function(p_oXHR, p_sStatus) {

        // Put the Data into this object
        ombdData = $.parseJSON(p_oXHR.responseText);


        // List entire Data found
        console.log(ombdData);


      }
    });
  });

});
