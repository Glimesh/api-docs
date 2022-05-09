# API Explorer

Insomnia is a GraphQL explorer. It allows you to make queries without needing a dev environment. It is the recommended way to learn the API and is helpful if you are new to programming.

> We have a JSON file with a collection to handle auth and make common requests in Insomnia. You can download it [here](https://github.com/Glimesh/api-docs/tree/master/static/GlimeshCollection.json)


## Getting Started

First we need to download Insomnia. They have a free tier which is more than enough for our purposes. Insomnia can be downloaded [here](https://insomnia.rest/download). You **don't** need to make an account to use the app. When the download is complete, you can skip your way through setup and get to the collection viewer.

### Glimesh Collection

If you downloaded the Glimesh Collection this will be a very fast setup. Drag the file directly into the editor. This will import all our requests and our environment variables.

First we need to set up our variables to authenticate our requests. On the top left select the "no environment" button. Then "manage environments" . Add your client ID / secret to their matching values. If you do not yet have an ID you can get one by creating a dev app.

![img](https://i.imgur.com/iwfuVTa.png)

Insomnia will automatically run the auth request now that the variables are filled in.

The file contains a few common requests. To test one, click on the request. Then select the send button. Your response will appear on the right.

![example query](https://i.imgur.com/gM3Mi8f.png)


All the requests in this file have the auth header. If you make a new request you will have to add it yourself. Simply have the header name as "Authorization" and the value as the *access_token* environment variable (ctrl+space in the text field to view env variables). You can use the *default_url* variable for the URL.

![Header example](https://i.imgur.com/PoJqnn7.png)


### Manual Setup

Create a new collection. For this tutorial we will call this collection "Glimesh".

First we will handle authentication. Generally it's easiest to make 1 auth request and have your credentials be environment variables. We will start with the variables first. On the top left press environment. Then manage environments. Copy the below JSON into the box.

```json
{
  "base_url": "https://glimesh.tv/api/graph",
  "client_id": "YOUR_ID_HERE",
  "client_secret": "YOUR_SECRET_HERE",
  "access_token": "Bearer "
}
```
Copy your ID/secret into their places. For the access token we need to make a request that will authenticate you. Close the environments box.

Create a new request on the left. Use `https://glimesh.tv/api/oauth/token` for the URL. It needs to be a POST request with a multipart-form body. Title the request Auth.

Use the following values for the form entries.

![Auth headers](https://i.imgur.com/LlD0k1V.png)

The purple boxes are the variables from earlier. Press ctrl+space while in the text field to view all variables and select the proper variables. To verify that the request is valid send the request. You should receive an access token from the response. If you don't receive one make sure all the values are correct.

> Note that I have 5 headers, you will not have that many for this request. The default Insomnia headers will suffice.

Next we need to set our access token to the *access_token* variable in Insomnia. Open the environment tab from earlier. In the access token value after Bearer press ctrl+space. Select response => body-attribute. Click on the box that appeared in the value.

Request must be set to out Auth Request from eariler. Filter must be $.access_token . This pulls the token from the auth response. The trigger behavior must be set to "when expired". Max age is 21600 (the life of the token).
![token](https://i.imgur.com/Q4niJEK.png)

 Select done. Close the variable window.

Now we can make a request to get data from the API. Create a new request. You can use the *base_url* variable or enter the URL manually.

 `https://glimesh.tv/api/graph`

It needs to be a POST request and have a body type of graphql. We need to add our auth info from the previous request. Head to the header section. The name needs to be "Authorization" and the value needs to be your *access_token* variable.

![Header example](https://i.imgur.com/PoJqnn7.png)

Now we can head back to the GraphQL section. You can make any query but we will request the user ID from a user. Copy the below query into the section.

```graphql
query {
  user(username: "Mytho") {
    id
  }
}
```

All that's left is to make the request! Select send on the top and the result will be on the right. You can make any number of requests in this format. The Glimesh collection includes basic requests and can be downloaded [here](https://github.com/Glimesh/api-docs/tree/master/static/GlimeshCollection.json)


## Generating Code

Insomnia can generate code based on your request to the API. Although the code will work, it could likely use some optimizing based on your needs. Insomnia supports most programming languages, so choose the one that matches your project. Right click on a request and select generate code.

![Generate Code](https://i.imgur.com/7FCxpAs.png)

This will open a box and you can choose the format and language. If you have any questions about using the Glimesh collection or using the Glimesh API let us know in #dev-questions in our [discord](https://discord.gg/Glimesh).
