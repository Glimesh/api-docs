# Chat WebSockets

Glimesh uses WebSockets to allow for constant communication between you and the chat API. To connect to a chat you will need an access token or a client ID. Keep in mind that using a client ID will keep you in read-only mode for chat environments. The access token must have the `chat` scope to post messages.


## Preparing the Connection

First, build your URL that you will connect to.  It should look like this:

```URL
wss://glimesh.tv/api/socket/websocket?vsn=2.0.0&token=TOKEN_HERE
```

That URL is for access token authentication. If you are using a client ID use this instead:

```URL
wss://glimesh.tv/api/socket/websocket?vsn=2.0.0&client_id=CLIENT_ID
```


 >Make sure to replace TOKEN_HERE or CLIENT_ID with the proper token or ID. 

Start by opening a secure websocket connection to the URL you are using. When the connection is opened we send Glimesh a join request in JSON format to stay connected to the socket.  The array below is a example of what this should look like. 

````
["1","1","__absinthe__:control","phx_join",{}]
````
Notice that this is a JSON array. Some WebSocket libraries only allow you to send strings or specially formatted JSON. Sometimes you need to encase the data in a string. If the connection closes immediately you may need to change the type of your request.  This depends purely on your library, if you are having trouble talk to us in our [discord.](https://discord.gg/Glimesh)

> Javascript example using the ws NPM package:
>  ```JS
>  connection.send(["1","1","__absinthe__:control","phx_join",{}]);  // Doesn't work :(
>  connection.send('["1","1","__absinthe__:control","phx_join",{}]');  // Option 1
>  connection.send(JSON.stringify(["1","1","__absinthe__:control","phx_join",{}])); //Safer option
>  ```


The first value is the join ref. The second is the normal ref. They can be useful for multi-connections but we will use the value of 1 for all refs in this doc. The third is the topic. The fourth is the event.  The fifth is for a payload. Glimesh does not require a payload for this request so we can leave this blank *{}* .

If Glimesh successfully receives our request we will get a response similar to what we sent. Notice that the first two values are the same. The response tells us that Glimesh is ready.

````JSON
["1","1","__absinthe__:control","phx_reply",{"response":{},"status":"ok"}]
````


## Joining Chat

Now that Glimesh has accepted our connection we can connect to a chat. You will need a channel ID for the channel you want to connect to. If you do not know the channel ID you can query the API for it. Simply replace Mytho with the proper user. 

```GraphQL

query {
  channel(username: "Mytho") {
    id
  }
}

```
> Remember: Channel IDs and user IDs are different things. Everyone is a user but not everyone has a channel. 

 Once you have the ID we can join the chat. Send this through the connection: 

```
["1","1","__absinthe__:control","doc",{"query":"subscription{ chatMessage(channelId: 6) { user { username avatar } message } }","variables":{} ]
```


*Make sure to replace 6 with your channel ID!* The query we just sent will determine what data is sent to us every time a chat message appears in chat. In this example we requested the message and the user who sent it. We ask for the username and avatar of the user in the `user` object. 

> To view a list of everything you can request check out the API docs [here](https://glimesh.tv/api) (Docs => subscription => chatMessage).

Glimesh will send us a response:

```JSON
["1","1","__absinthe__:control","phx_reply",{"response":{"subscriptionId":"__absinthe__:doc:-576460752303349214:33B2AA3BF7B8F0E158810EF0E0166F5E05840BE57444C92365C921943942A47D"},"status":"ok"}]
```

Now we are connected to chat! The only thing left to do is send a heartbeat to Glimesh so the connection won't be closed. You need to send a heartbeat every 30 seconds. Structure it as follows:

```
["1","1","phoenix","heartbeat",{}]
```

Glimesh will respond with:
```JSON
["null","1","phoenix","phx_reply",{"response":{},"status":"ok"}]
```
Now Glimesh won't disconnect us  and we have a stable chat connection! Next we will parse incoming messages and send messages back to chat.


## Incoming Messages

First let's handle incoming messages. A chat message sent from the API would look like this: 
```JSON
[null,null,"__absinthe__:doc:-576460752298178591:33B2AA3BF7B8F0E158810EF0E0166F5E05840BE57444C92365C921943942A47D","subscription:data",{"result":{"data":{"chatMessage":{"message":"hello world!","user":{"avatar":"/uploads/avatars/Mytho.png?v=63762672056","username":"Mytho"}}}},"subscriptionId":"__absinthe__:doc:-576460752298178591:33B2AA3BF7B8F0E158810EF0E0166F5E05840BE57444C92365C921943942A47D"}]
```
It is returning the data that we requested when we connected to this channel. The subscription ID helps you keep track of which channel the message is from. When you receive a message you need to parse the JSON data. Then you can get any of the data from the response. 

> The chat API is being worked on so the structure will likely change in a future update.

## Sending Messages

Next we will send a message back to chat. We must use a mutation to do so.  Send this to chat:

```
["1","1","__absinthe__:control","doc",{"query":"mutation {createChatMessage(channelId:6, message: {message: \"Hello There!\"}) {message }}","variables":{}}]
```

>  Don't forget to replace 6 with your channel ID and Hello World with your message!  The \ before the quotes are used to prevent the JSON structure from breaking. Depending on how your lib handles ws messages they may not be necessary.
>  The format for sending messages is very strict, ensure Glimesh receives your data as valid JSON.

Only access tokens with the `chat` scope can talk in chat. Client IDs are read only. In the above data we requested to have the message returned to us when Glimesh sent it to chat. Glimesh will confirm that the message was received:

```JSON
["1","1","__absinthe__:control","phx_reply",{"response":{"data":{"createChatMessage":{"message":"Hello There!"}}},"status":"ok"}]
```

## WebSocket API Queries

You don't need to disconnect from the connection to make a normal API request. You can send requests from within your websocket connection! As with normal queries you are limited by the scope of your access token or client ID. Let's build a simple request.

```GraphQL

query {
  followers(streamerUsername: "CHANNEL") {
    id,
    user {
      username
    }
  }
}

```
In this example we request the ID and username of the followers of a channel. Replace CHANNEL with any streamer on Glimesh. Keep in mind that they must be a channel and not just a normal user.  Add this query as the payload in the message that we will send to the API. As with all requests we must make this valid JSON before sending it to Glimesh. 

```
["1","1","__absinthe__:control","doc",{"query":"query {followers(streamerUsername: \"CHANNEL\") {id,user {username}}}"}]
```
> This snippet is already JSON, you may have to make adjustments depending on your websocket library. 

Glimesh will respond:

```JSON
["1","1","__absinthe__:control","phx_reply",{"response":{"data":{"followers":[{"id":"613","user":{"username":"Mytho"}},{"id":"629","user":{"username":"TheCat"}},{"id":"752","user":{"username":"Kirby"}},{"id":"11992","user":{"username":"RainbowFist"}}]}},"status":"ok"}]
```

This is all the info you will need to connect and use the chat API.  If you have any questions talk to us in our [discord!](https://discord.gg/Glimesh)


## Connection Issues

The most common issue is the connection closing with no message as to why. One of two things has happened:

 1. Heartbeat: You must send a heartbeat message to Glimesh every 30 seconds or Glimesh will drop the connection.
 2. Format: The chat API must receive data in the proper format. Most requests will need to be sent in a JSON array. The refs must be surrounded by quotes. The message in the mutation must also contain quotes. You may have to use a backslash to properly format the chat message. `\"message data\"`