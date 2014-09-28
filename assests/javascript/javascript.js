
window.onload = function() {
	var title = document.getElementsByTagName("title")[0].innerHTML;
	document.getElementById("menuButton").addEventListener('click', menuStyle,
		false);
	searchBox(title);
    
};

function menuStyle() {
	var id = $("ul#menu li:first").get(0).id;
	if (id == "menuButton") {
		$("#menuButton").attr('id', 'menuButtona');
		$(".menuItem").attr('class', 'menuItema');
	} else {
		$("#menuButtona").attr('id', 'menuButton');
		$(".menuItema").attr('class', 'menuItem');
	}
}

function searchBox(title) {
	if (title == "YourSear.ch") {
		var menuDiv = "s";
	} else if (title == "YourSear.ch : Images") {
		var menuDiv = document.getElementById('search');
	}
    else if (title == "YourSear.ch : Videos") {
		var menuDiv = document.getElementById('search');
	}
	var searchTerm = document.createElement('input');
	searchTerm.setAttribute('class', 'searchinput');
	searchTerm.setAttribute('id', 'searchinput');
	searchTerm.setAttribute('placeholder', 'What will you search');
	searchTerm.setAttribute('name', 'searchinput');
	menuDiv.appendChild(searchTerm);
    
    	if (title == "YourSear.ch") {
//document.getElementById("searchinput").addEventListener('click', search,false);
	} else if (title == "YourSear.ch : Images") {
document.getElementById("searchinput").addEventListener('click', flicker,false);
	}   else if (title == "YourSear.ch : Videos") {
document.getElementById("searchinput").addEventListener('click', youtube,false);
	}
    
    

}
	 google.load('search', '1');
    google.setOnLoadCallback(OnLoad);  
function search() {
    	     
	$('#searchinput').bind('keypress', function(e) {
		if (e.keyCode == 13) {


		}
	});
}
function searchStart(searchControl, searcher, query) {
  var content = document.getElementById('searchContent');
  var queryDiv = document.getElementById('searchinput');
  if (! queryDiv) {
    var queryDiv = document.createElement('div');
    queryDiv.id = 'query';
    document.body.appendChild(queryDiv);
  }

}




function OnLoad() {
    
    
  // create a search control
  var searchControl = new google.search.SearchControl();

  // Set the Search Control to get the most number of results
  searchControl.setResultSetSize(google.search.Search.LARGE_RESULTSET);

  // Create 2 searchers and add them to the control
  searchControl.addSearcher(new google.search.WebSearch());

  // Set the options to draw the control in tabbed mode
  var drawOptions = new google.search.DrawOptions();
  drawOptions.setDrawMode(google.search.SearchControl.DRAW_MODE_TABBED);
  searchControl.setSearchStartingCallback(this, searchStart);
  // Draw the control onto the page
  searchControl.draw(document.getElementById("searchContent"), drawOptions);

  // Search!
  searchControl.execute(document.getElementById("searchContent").value);

}











function youtube(){

$(".searchinput").focus();
$(".searchinput").keyup(function() 
{
 
 $("#video").html('');
var search_input = $(this).val();
var keyword= encodeURIComponent(search_input);
 
var yt_url='http://gdata.youtube.com/feeds/api/videos?q='+keyword+'&format=5&max-results=6&v=2&alt=jsonc'; 


$.ajax({
type: "GET",
url: yt_url,
dataType:"jsonp",
success: function(response)
{
if(response.data.items)
{
 
 
 
$.each(response.data.items, function(i,data)
{
var video_id=data.id;
var video_title=data.title;
var video_viewCount=data.viewCount;
 
 
 
var video_frame="<iframe id='videoFrame'width='300' height='200' src='http://www.youtube.com/embed/"+video_id+"' frameborder='0' type='text/html'></iframe>";
var final="<div id='result'><div>"+video_frame+"</div><div id='title'>"+video_title+"</div></div>";
 
$("#video").append(final);
 
});
 
 
}
else
{
$("#video").html("<div id='no'>No Video</div>");
}
}
 
});

 
 
 
 
 
 
 
});
 
    
}



function flicker() {

$('#searchinput').bind('keypress', function(e) {
    	if (e.keyCode == 13) {
                
       var searches = "";
        $("#searchinput").each(function (index) {

            searches += $(this).val() + "+";
        });

        $("h1").remove();

         $("#imagesResult img").remove();
        var term = searches;
        var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8b010ef32af4006f4fac0249a746289e&tags=" + term +"&safe_search=1&per_page=100";
        var src;
        $.getJSON(url + "&format=json&jsoncallback=?", function (data) {

            if (data.photos.photo.length === 0) {

                $("<img/>").attr("class", 'error').appendTo("#imagesResult");
         
                $(".error").attr("src", "../img/icons/graph.png").appendTo("#imagesResult");
          
            }
            $.each(data.photos.photo, function (i, item) {
                src = "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_m.jpg";
            
                $("<img/>").attr("src", src).appendTo("#imagesResult");
                 
      
         

                if (i == 1000) {
                    return false;
                }
            });
        });
			}
	});
}
