//This requires the Request package.
//Before running install it with: npm install request
//Questions? Talk to us in discord!

var request = require('request'); //Import the library
//Define the data we want from Glimesh. 
var data = `
query {
myself {
username,
id}
}
`
// If you used a client ID the myself object will not exist. Try this:
/*
var data = `
query {
user (username: "USERNAME"){
username,
id}
}`
*/
//Make sure to replace USERNAME with a user!


//Tell the request library where to send the request and how to add auth
var options = {
    method: 'POST',
    body: data,
    url: 'https://glimesh.tv/api',
    headers: {
        'Authorization': 'Bearer Token_Here' //If you are using a client ID use 'Authorization': 'Client-ID qwertyuiop123456789' 
    }
};

//Callback function runs when the data is recieved. We convert it to an object on arrival.
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); //The unfiltered response
        var convertedResponse = JSON.parse(body); //Convert the response
        console.log(`You are ${convertedResponse.data.myself.username} and your ID is ${convertedResponse.data.myself.id}`);
        // If you are using a client ID you will have requested the user object. Use the line below instead!
        // console.log(`The user ${convertedResponse.data.user.username} has an ID of ${convertedResponse.data.user.id}`);
    } else {
        console.log(error); //log any errors
        console.log(body);
    }
}

//send the request
request(options, callback);
