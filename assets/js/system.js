var app = angular.module("yoursearch", []);
app.controller("core", function ($scope, $http) {

    $scope.values = [];
    $scope.temp = [];

    $scope.init = function () {
        runApis("nfl"); //Default Search Term
    };

    $scope.checkIfEnterKeyWasPressed = function ($event, myValue) {
        var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) {
            runApis(myValue);
        }
    };


    function runApis(myValue) {
        $scope.values = [];
        var google_url = 'http://ajax.googleapis.com/ajax/services/search/web?callback=JSON_CALLBACK&v=1.0&q=' + myValue;
        var duckduckgo_url = 'http://api.duckduckgo.com/?callback=JSON_CALLBACK&q=' + myValue + '&format=json';
        var reddit_url = 'https://www.reddit.com/r/all.json';
        //    var rottenTomatoes = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=3wu47t4b7vkjx2q4qq3hzwxg&q=' + encodeURI(myValue) + '&page_limit=1';
        fetch(duckduckgo_url, 'duck');
        fetch(google_url, 'google');
        // fetch(reddit_url, 'reddit');
    }

    function fetch(apiUrl, engine) {
        $http.jsonp(apiUrl).success(function (data) {
            if (engine === 'duck') {
                $scope.temp = {
                    titles: data.Heading,
                    urls: data.RelatedTopics[1].FirstURL,
                    dis: data.RelatedTopics[1].Text,
                    sources: "DuckDuckGo"
                };
                $scope.values.push($scope.temp);

            } else if (engine === 'reddit') {
                console.log(data);
                $scope.temp = {
                    titles: data.children.data.title,
                    urls: data.children.data.url,
                    dis: 'ss',
                    sources: "DuckDuckGo"
                };
                $scope.values.push($scope.temp);

            } else if (engine === 'google') {
                $scope.temp = {
                    titles: data.responseData.results[1].title,
                    urls: data.responseData.results[1].unescapedUrl,
                    dis: data.responseData.results[1].content,
                    sources: "Google"
                };
                $scope.values.push($scope.temp);
            }
        });
    }

});
