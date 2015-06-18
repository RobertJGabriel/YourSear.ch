$(document).ready(function () {

    var urls = [];
    var title = [];
    var dis = [];









    $('#searchinput').bind('keypress', function (e) {
        if (e.keyCode == 13) {
            var search_input = $(this).val();
            var bing_url = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=' + search_input;
            var duckduckgo_url = 'http://api.duckduckgo.com/?q=' + search_input + '&format=json';
            //     var rottenTomatoes = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=3wu47t4b7vkjx2q4qq3hzwxg&q=' + encodeURI(search_input) + '&page_limit=1';

            search(duckduckgo_url, 'duck');
            //    search(rottenTomatoes, 'movies');
            displayResults();
        }
    });



    function searchDuckDuckGo() {








    }

    function search(apiUrl, engine) {

        $.ajax({
            type: "GET",
            url: apiUrl,
            dataType: "jsonp",
            jsonpCallback: 'jsonp',
            success: function (data) {

                console.log(data);

                if (engine === 'duck') {
                    title.push(data.Heading);
                    urls.push(data.RelatedTopics[1].FirstURL);
                    dis.push(data.RelatedTopics[1].Text);
                } else if (engine === 'movies') {
                    title.push(data.movies.title);
                    urls.push(data.RelatedTopics[1].FirstURL);
                    dis.push(data.RelatedTopics[1].Text);

                } else {

                }
            }
        });

    }



    function displayResults() {

        var final = '';
        for (i = 0; i < urls.length; i++) {

            final += "<ul class='nav nav-tabs nav-stacked well fadeIn' ><li><div class='panel panel-warning'><div class='panel-heading'><h3 class='panel-title'><a href='" + urls[i] +
                "'>" + title[i] +
                "</a></h3></div><div class='panel-body'><h5><a href='" + urls[0] +
                "'>" + urls[i] +
                "</a></h5><p>" + dis[i] +
                "</p><span class='label label-warning'>DuckDuckGo</span></li></div></div></ul>";

        }

        $("#result").append(final); // Result

    }









});
