# Chat Mutations

This tutorial will enable you to query and send messages to the chat using the Glimesh API. If you are looking to build a chatbot or other program that needs a constant connection view [this tutorial](/api-docs/docs/chat/websockets/). To connect to a chat you will need an access token or a client ID. Keep in mind that using a client ID will keep you in read-only mode for chat environments. The access token must have the `chat` scope to post messages.

> If you are testing you can use [client credentials](/api-docs/docs/authentication/accesstoken/clientcredentials/) to get an access token. This will allow you to talk as your own account without going through the entire auth process.

## Starting Up

Since we are not using a websocket connection we have to manually query and send chat messages. This is done through the Glimesh API. We can query any channel for chat messages. We can also send messages to any channel that we choose. Understanding how API requests work will be important for completing this tutorial.

> New to the API? Read [this](/api-docs/docs/api/query-api/basic-query/) before starting.

## Authentication

All API requests must contain the proper authentication. The authentication value should be included as a header of the request. This value will change depending on the authentication type. For access tokens use:

`Authorization: Bearer YOUR_TOKEN` .

Replace YOUR_TOKEN with your access token. If you are using a client ID to authenticate you must use this instead:

`Authorization: Client-ID YOUR_CLIENT_ID`

Replace YOUR_CLIENT_ID with your ID. This will allow you access to the API.

>  A client ID can only use the API in read only mode. An access token must have the `chat` scope.

## Querying Existing Messages

We need to set up a query to gather the chat messages. You will need the channel ID of a streamer to get the messages. You can get a channel ID with this query. Replace Mytho with the name of the user that you want the ID from.

```GraphQL

query {
  channel(streamerUsername: "Mytho") {
    id
  }
}

```

Once you have the ID we can build our request. The query needs to be in the body of the request. You must send the query as a POST request. Structure it as follows:

```GraphQL

query {
  channel(id: ID) {
    chatMessages(last: 10) {
      edges {
        node {
          message,
          user {
            username,
            avatarUrl
          }
        }
      }
    }
  }
}

```

> Don't forget to replace ID with the channel ID! If you want more data you can view the chatMessage reference [here](/api-docs/docs/reference/chat/) Chat messages are paginated, you can read about that [here](/api-docs/docs/api/pagination)

Glimesh will respond with a set of JSON data. You need to parse it to get the data that you want.

```JSON

{
  "data": {
    "channel": {
      "chatMessages": {
        "edges": [
          {
            "node": {
              "message": "lee run the free truck in ovals bro no chance of rating loss and really gives you a good feeling ",
              "user": {
                "avatarUrl": "https://glimesh-user-assets.nyc3.cdn.digitaloceanspaces.com/uploads/avatars/Sainted_Lord.png?v=63782488662",
                "username": "Sainted_Lord"
              }
            }
          },
          {
            "node": {
              "message": "You all make this game seem so awesome! D:",
              "user": {
                "avatarUrl": "https://glimesh-user-assets.nyc3.cdn.digitaloceanspaces.com/uploads/avatars/FadedKamui.png?v=63794027172",
                "username": "FadedKamui"
              }
            }
          },
        // and so on...
```

## Sending Messages

The Glimesh API uses mutations to send messages. The request must contain this mutation with a channel ID and a chat message. Structure it as show below. Make sure to replace MESSAGE with your chat message and ID with your channel ID.

```GraphQL

mutation {
  createChatMessage(channelId:6, message: {message: "MESSAGE"}) {
    message,
    insertedAt,
    user {
      username
    }
  }
}

```

> This should go in the body of the request.



Glimesh will return with the message that was sent to chat. If you want more data you have to request it. The chatMessage reference can be found [here](/api-docs/docs/reference/chat/).

```JSON

{
  "data": {
    "createChatMessage": {
      "insertedAt": "2021-01-08T05:03:44",
      "message": "MESSAGE",
      "user": {
        "username": "AFaithfulServant"
      }
    }
  }
}

```

This is all of the info required to interact with the chat API. Although this is a viable method, using websockets is the standard way of connecting to the chat. Websockets provide a constant connection and eliminates the need to query the API for new information. This is essential for services such as chatbots. If you have any questions talk to us in our [discord](https://discord.gg/Glimesh).