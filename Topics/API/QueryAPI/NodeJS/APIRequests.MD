# Glimesh API Requests With NodeJS

This is a basic tutorial for communicating with the Glimesh API using NodeJS. This guide assumes you know basic JS and have an access token from a user. Having basic GraphQL knowledge would also be helpful.
> Need a refresh? This tutorial explains the basics of graphql. https://graphql.org/learn/schema/


## Creating the Project

We need to create a basic project. In your terminal type 

`npm init -y` . 

This will create a project.JSON file. This project uses the [Request](https://www.npmjs.com/package/request) npm package. It helps with sending requests to the server and handling the response. In your terminal type

`npm install request`.

That is the only package that you will need!

## Starting Up

In your project create a blank JS file. I will title mine "glimesh.js". Start by importing the Request library. Paste this at the top of your file. 
```
var request = require('request');
```
Now we need to build our query. The Glimesh API docs can be found [here](https://github.com/Glimesh/glimesh.tv/wiki/GraphQL-API). It is a work in progress. In this example we will ask Glimesh for the name and ID of our user. We can get this data in the **myself** object.
`query{
  myself {
    username,
    id
  }
}`
However, we need to convert this so JS can understand it. To do this we create a data variable. Paste this under the import statement above.
```
var data = `
query {
myself {
username,
id}
}
`
```
Feel free to replace this with a different query of your own!

## Define Options

Next we set up the call to the api. We need to add our data variable from above and our oauth token as a header. We do this with the options variable.  If you do not already have an oauth token for a user you need to get one now. Paste this below your query. 
```
var options = {
    method: 'POST',
    body: data,
    url: 'https://glimesh.tv/api',
    headers: {
        'Authorization': 'Bearer Your_Token'
    }
};
```
Notice we are sending the **data** variable from before. Don't forget to replace "Your_Token" with your oauth token in the Authorization string.  It should look like this.
`'Authorization': 'Bearer qertyuiop123456789'`
## Send Request

Now we set up the request. We ask Glimesh for data and we setup a callback function to handle it when it arrives. The server will normally respond in less than one second. Paste this below the options variable.
```
function callback(error, response, body) {
    if (!error && response.statusCode == 200) { //if all works as it should...
        console.log(body); //The unfiltered response
        var convertedResponse = JSON.parse(body); //Convert the response so we can use it
        console.log(`You are ${convertedResponse.data.myself.username} and your ID is ${convertedResponse.data.myself.id}`);
    } else {
        console.log(error) //log any errors. 
        console.log(body) //sometimes the body contains the error.
    }
}
```
Finally we send the request. At the bottom of the file add this line.
```
request(options, callback);
```
When you are ready, **save the file** and type the line below in your terminal to query the API!

`node filename.js`

 Make sure to replace "filename" with the name of your file! For example -
 
  `node glimesh.js`

## Common Errors

- `You must be logged in to access the API.`
>Cause: The auth string is incorrect. Make sure the token is valid. They expire after a short period and a new token is needed. You should also check the auth string. It should look like this `'Authorization': 'Bearer qertyuiop123456789'`

- `Internal Server Error`
>Cause: This is usually user error rather than a server error. Ensure the auth info is correct and check your query. The query is a string but the contents of that variable are graphQL. If you think your query is correct try it [here](https://glimesh.tv/api). Don't forget to remove the `` when testing the API site.
***Note that you must be signed in to use the API website!***

- `syntax error before: \"\\\"query\\\"\""`
>Cause: Your query is in the incorrect format. Ensure it matches the example in the code above. You can only request properties that exist and you must have the proper permissions to access them. Check the [API docs](https://github.com/Glimesh/glimesh.tv/wiki/GraphQL-API) for more information. 

# Conclusion

This is the basis for most API requests. If you have any questions let us know in the #dev channel in our [Discord](https://Discord.gg/Glimesh).

The full file can be found here.
```
var request = require('request'); //Import the library
//Define the data we want from Glimesh
var data = `
query {
myself {
username,
id}
}
`

//Tell the request library where to send the request and how to add auth
var options = {
    method: 'POST',
    body: data,
    url: 'https://glimesh.tv/api',
    headers: {
        'Authorization': 'Bearer Token_Here'
    }
};

//Callback function runs when the data is recieved. We convert it to an object on arrival.
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); //The unfiltered response
        var convertedResponse = JSON.parse(body); //Convert the response
        console.log(`You are ${convertedResponse.data.myself.username} and your ID is ${convertedResponse.data.myself.id}`);
    } else {
        console.log(error); //log any errors
        console.log(body);
    }
}

//send the request
request(options, callback);
```
