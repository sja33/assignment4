// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

var APIurl = 'http://www.mattbowytz.com/simple_api.json?data=all';
var code;
var data;
var info;
var status;
var interests;
var programming;

(function() {

  $.getJSON(APIurl, function(x){
    code = x.code;
    data = x.data;
    info = x.info;
    status = x.status;
    interests = data.interests;
    programming = data.programming;
    console.log(x);
    console.log(code);
    console.log(info);
    console.log(status);
    console.log(interests);
    console.log(programming);
  })

  $('.flexsearch-input').keyup(function(){
    var output = "<p id=resultsHeader>Displaying results for <em>&quot;"
    var searchTerm = $('.flexsearch-input').val();
    searchTerm = searchTerm.toLowerCase();
    output = output.concat(searchTerm + "&quot;</em>:</p>");
    if (searchTerm.length > 0) {
      $('.results').html(output);
      $('.results').append("<b>Results from Interests:</b>");
      $('.results').append("<hr>");
      for (var i=0; i < interests.length; i++) {
        var interest = interests[i];
        if(searchTerm == interest.substring(0, searchTerm.length).toLowerCase()){
          interestplus = interest.replace(" ","+");
          $('.results').append('<br><a href=http://www.google.com/search?q='+interestplus+'>'+interest+'</a>');
        }
      };
      $('.results').append("<br></br><b>Results from Programs:</b>");
      $('.results').append("<hr>");
      for (var i=0; i < programming.length; i++) {
        var program = programming[i];
        if(searchTerm == program.substring(0, searchTerm.length).toLowerCase()){
          programplus = program.replace(" ","+");
          $('.results').append('<br><a href=http://www.google.com/search?q='+programplus+'>'+program+'</a>');
        }
      };

    }
    else {
      $('.results').html("");
    }
  });

})();
