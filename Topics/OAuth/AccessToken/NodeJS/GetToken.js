//This requires the Reqest and Express packages
//Before running install them with: npm install express request
//Questions? Let us know in discord!

const express = require('express'); //Express package
const app = express(); // Creates endpoints for the server.
const request = require('request'); //Request package
var clientID = ""; // ID for connecting your users to your app.
var secretID = ""; //ID to verify your app, keep private.

const port = process.env.PORT || 3000; //Opens the server on port 3000
app.listen(port, () =>  console.log('App listening on port ' + port));
//keeps the server running^

//When a user visits http://localhost:3000/auth
app.get('/auth', (req, res) => {
    //redirects the user to the glimesh authenication page
    res.redirect(301, 'https://glimesh.tv/oauth/authorize?response_type=code&state=&client_id=' + clientID + '&scope=public%20email%20chat%20streamkey&redirect_uri=http://localhost:3000/success');
    });

app.get("/success", (req, res) => {
    let code = req.query.code;
    console.log("The code is " + code);
    res.send(`<h1>Code Recieved!</h1>`) //Sends a confirm message to the user
    //Now we send this code to Glimesh to ask for a token.
    var options = {
        method: 'POST',
        body: "",
        url: "https://glimesh.tv/api/oauth/token?grant_type=authorization_code&code=" + code + "&redirect_uri=http://localhost:3000/success&client_id=" + clientID + "&client_secret=" + secretID
    };
    request(options, (error, response, body) => { //Send glimesh the code for a token in return
        if (!error && response.statusCode == 200) { //If all is as it should be
            console.log(body); //The unfiltered response
            var data = JSON.parse(body); //The parsed response
            console.log(data) // The data we want!
        } else {
            console.log(error) //log any errors
            console.log(response.statusCode) //Status code if an error occurs
            console.log(body) //The body for more info
        }
    });
});