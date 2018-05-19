var Spotify = function(sKey){};
var Twitter = function(tKey){};

// variable for dotenv
var env = require("dotenv").config();
// variable for API keys
var keys = require("./keys.js");
// variable for request npm for OMDB
var request = require("request");
// variable for inquirer npm
var inquirer = require("inquirer");
// variable to create new spotify object
var spotify = new Spotify(keys.spotify);
// variable to create new twitter object
var client = new Twitter(keys.twitter);

inquirer.prompt([
    {
        name: "select_file",
        message: "Select which program you would like to search through.",
        type: "list",
        choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"]
    }
]).then(function(mainAnswer){
    if(mainAnswer.select_file === "my-tweets"){
        client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
            console.log(response);
        });
    }
    else if (mainAnswer.select_file === "spotify-this-song"){
        inquirer.prompt([
            {
                name: "question",
                type: "input",
                message: "What song would you like to search?"
            }
        ]).then(function(songResponse){
            if(songResponse != ""){
                spotify.get("search", {q: songResponse})
                    console.log("------------------");
                    // Parse the artist's name
                    console.log("The Artist's name is : " + JSON.stringify(body).Title);
                    // Parse the song name
                    console.log("The song title is: " + JSON.parse(body).Year);
                    // Parse the spotify preview link
                    console.log("Here is a preview link: " + JSON.parse(body).imdbRating);
                    // Pasre the album name
                    console.log("This is the album name for the song: " + JSON.parse(body).tomatoRating);
                    console.log("------------------");
            }
            else{
                spotify.get("search", {q: "I Want It That Way"})

                        console.log("------------------");
                        // Parse the artist's name
                        console.log("The Artist's name is : " + JSON.stringify(body).Title);
                        // Parse the song name
                        console.log("The song title is: " + JSON.parse(body).Year);
                        // Parse the spotify preview link
                        console.log("Here is a preview link: " + JSON.parse(body).imdbRating);
                        // Pasre the album name
                        console.log("This is the album name for the song: " + JSON.parse(body).tomatoRating);
                        console.log("------------------");
            };

        });
    }
    else if (mainAnswer.select_file === "movie-this"){
        inquirer.prompt([
            {
                name: "question",
                type: "input",
                message: "What movie would you like to search?"
            }
        ]).then(function(movieResponse){
            if(movieResponse != ""){
                request("http://www.omdbapi.com/?t=" + movieResponse.question + "&apikey=trilogy", function(error, response, body) {

                    // If the request is successful
                    if (!error && response.statusCode === 200) {
                        console.log("------------------");
                        // Parse the movie title
                        console.log("The movie's title is : " + JSON.parse(body).Title);
                        // Parse the year the movie came out
                        console.log("The movie came out in: " + JSON.parse(body).Year);
                        // Parse the imdb rating
                        console.log("The movie's IMDB rating is: " + JSON.parse(body).imdbRating);
                        // Pasre the rotten tomatoes rating
                        console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).tomatoRating);
                        // Parse the country the movie was produced
                        console.log("The movie was produced in: " +JSON.parse(body).Country);
                        // Parse the language of the movie
                        console.log("The movie is spokin in: " + JSON.parse(body).Language);
                        // Parse the movie plot
                        console.log("The plot of the movie is: " + JSON.parse(body).Plot);
                        // Parse the actors
                        console.log("The cast of the movie is: " + JSON.parse(body).Actors);
                        console.log("------------------");
                    }
                    else {
                        console.log("The error is " + error);
                    };
                });
            }
            else{
                request("http://www.omdbapi.com/?t=mr+nobody&apikey=trilogy", function(error, response, body) {

                    // If the request is successful
                    if (!error && response.statusCode === 200) {
                        console.log("------------------");
                        // Parse the movie title
                        console.log("The movie's title is : " + JSON.stringify(body).Title);
                        // Parse the year the movie came out
                        console.log("The movie came out in: " + JSON.parse(body).Year);
                        // Parse the imdb rating
                        console.log("The movie's IMDB rating is: " + JSON.parse(body).imdbRating);
                        // Pasre the rotten tomatoes rating
                        console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).tomatoRating);
                        // Parse the country the movie was produced
                        console.log("The movie was produced in: " +JSON.stringify(body).Country);
                        // Parse the language of the movie
                        console.log("The movie is spokin in: " + JSON.stringify(body).Language);
                        // Parse the movie plot
                        console.log("The plot of the movie is: " + JSON.stringify(body).Plot);
                        // Parse the actors
                        console.log("The cast of the movie is: " + JSON.stringify(body).Actors);
                        console.log("------------------");
                    }
                    else {
                        console.log("The error is " + error);
                    };

                });
            };
        });
    }
    else if (mainAnswer.select_file === "do-what-it-says"){

    }
    else {
        return console.log("How did you not make a choice?");
    };
})


