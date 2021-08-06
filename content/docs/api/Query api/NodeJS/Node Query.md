# Glimesh API Requests With NodeJS

This is a basic tutorial for communicating with the Glimesh API using NodeJS. This guide assumes you know basic JS and have an access token from a user. You can use a client ID if you do not yet have a token. Having basic GraphQL knowledge would also be helpful.
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
Now we need to build our query. In this example we will ask Glimesh for the name and ID of our user. If you are using an access token you can get this data in the **myself** object.
`query{
  myself {
    username,
    id
  }
}`
However, we need to convert this so JS can understand it. To do this we create a data variable. Paste this under the import statement above.
```JS
var data = `
query {
myself {
username,
id}
}
`
```

If you are going to use a client ID you have to specify which user to get data for. This is because a client ID does not have a user identity. This query will return the same data as the **myself** object.

```JS
var data = `
query {
user (username: "USERNAME"){
username,
id}
}
`
```
Feel free to replace `USERNAME` with your own username! Since we are not accessing any private information we do not need any special permissions/scopes.

> Leave the quotations around `"USERNAME"`. Glimesh processes our query as graphQL. Even though `data` is a string Glimesh will convert it to graphQL when it receives our request. GraphQL requires that the user we search for be a string. Since we used `` to encase the contents of `data`, quotations must be used to keep your username a string.

## Define Options

Next we set up the call to the API. We need to add our data variable from above and our authentication as a header. We do this with the options variable. If you do not already have an authentication method (Client ID or Access Token) you need to get one now. Paste this below your query.
```JS
var options = {
    method: 'POST',
    body: data,
    url: 'https://glimesh.tv/api/graph',
    headers: {
        'Authorization': 'Bearer Your_Token'
    }
};
```
Notice we are sending the **data** variable from before. If you are using an access token replace "Your_Token" with your access token in the Authorization string.  It should look like this.
`'Authorization': 'Bearer qertyuiop123456789'`

If you are using a client ID replace "Bearer" with "Client-ID" and "Your_Token" with your client ID. It should look like this.

`'Authorization':  'Client-ID qwertyuiop123456789'`

## Send Request

Now we set up the request. We ask Glimesh for data and we setup a callback function to handle it when it arrives. The server will normally respond in less than one second. Paste this below the options variable.
```JS
function callback(error, response, body) {
    if (!error && response.statusCode == 200) { //if all works as it should...
        console.log(body); //The unfiltered response
        var convertedResponse = JSON.parse(body); //Convert the response so we can use it
        console.log(`The user is ${convertedResponse.data.myself.username} and the ID is ${convertedResponse.data.myself.id}`);
    } else {
        console.log(error) //log any errors.
        console.log(body) //sometimes the body contains the error.
    }
}
```
If you searched for a **user** instead of **myself** you need to change the `convertedResponse` output to:
```JS
console.log(`The user ${convertedResponse.data.user.username} has an ID of ${convertedResponse.data.user.id}`);
```
Finally we send the request. At the bottom of the file add this line.
```JS
request(options, callback);
```
When you are ready, **save the file** and type the line below in your terminal to query the API!

`node filename.js`

 Make sure to replace "filename" with the name of your file! For example -

  `node glimesh.js`

## Common Errors

- `You must be logged in to access the API.`
>Cause: The auth string is incorrect. Make sure the token is valid. They expire after a short period and a new token is needed. You should also check the auth string. It should look like this `'Authorization': 'Bearer qertyuiop123456789'` or `'Authorization': 'Client-ID qertyuiop123456789'` depending on the auth method you used.

- `Internal Server Error`
>Cause: This is usually user error rather than a server error. Ensure the auth info is correct and check your query. The query is a string but the contents of that variable are graphQL. If you think your query is correct try it in a graphql [explorer](/api-docs/docs/api/pagination). Don't forget to remove the `` when testing in an editor!
***Note that you must be signed in to use the API website!***

- `syntax error before: \"\\\"query\\\"\""`
>Cause: Your query is in the incorrect format. Ensure it matches the example in the code above. You can only request properties that exist and you must have the proper permissions to access them.

# Conclusion

This is the basis for most API requests. If you have any questions let us know in the #dev-questions channel in our [Discord](https://Discord.gg/Glimesh).

The full file can be found here.
```JS
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
    url: 'https://glimesh.tv/api/graph',
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
```