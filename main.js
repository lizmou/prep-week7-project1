/*
=======================================================

    ** Week 7 - Project 1  **
*** Ajax and JSON with OMDB ***

This assignment is more open than the past assignments. 
You are free to build a simple web page that interacts 
with OMBD. It can simply display data within the HTML 
page or buttons and text fields can be added to interact
with the data and update the page accordingly. 

Have fun! 
 
=======================================================
*/


function getMovie(name){
	var params = {
		t:name
	}
	return $.get( "http://www.omdbapi.com/", params);
}

document.getElementById("search").addEventListener("click",function(){
	var name = document.getElementById("movie-box").value;
	var p = getMovie(name);
	p.done(function( data ) {
		var title = data.Title;
  		var rating = data.Rated;
  		document.getElementById("title").innerHTML = title;
  		document.getElementById("rating").innerHTML = rating;
	});
})
