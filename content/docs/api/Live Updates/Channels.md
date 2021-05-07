# Channel Changes

Using graphQL subscriptions we can listen for changes to a channel without making repeated queries! Before starting this tutorial you should understand basic graphQL and have a method of authentication. Completing our websocket tutorial will also be helpful.

> Need authentication? Start with [access tokens](/api-docs/docs/authentication/accesstoken/accesstoken/)

> Websocket tutorial can be found [here](/api-docs/docs/chat/websockets/)


## Selecting a Channel

Before we can subscribe to a user we need a channel ID. This will specify which channel we are wanting to connect to. The easiest way to get a channel ID is to go to [glimesh.tv/api](https://glimesh.tv/api) and make the following query. Simply replace YOURNAME with the channel you want to listen to.

```GraphQL
query {
  channel(username: "YOURNAME") {
    id
  }
}
```

Glimesh will return a response that should look something like this.

```JSON
{
  "data": {
    "channel": {
      "id": "6"
    }
  }
}
```

## Building Our Subscription

Now that we have a channel ID we can build our subscription query. Glimesh will send us data through this subscription whenever a change is made to the selected channel. Our query needs to specify the information we want returned when this happens.

> Note that any change to the channel will result in data being sent even if you did not listen for that specific change.  The data received will contain the query and nothing more.

To keep things simple we will listen for a change in the channel title.

```Graphql
subscription {
  channel(id:6) {
    title
  }
}
```
> Don't forget to replace 6 with your channel ID!

If Glimesh detects a change in the channel it will send us the data that we asked for. As noted above any change will cause this data to be sent, not just a title change. Next we will create a connection to Glimesh and send them our subscription!

## Websocket Connection

Since this is a subscription a websocket connection is needed. If you have followed the chat websocket tutorial you can modify that code to fit this tutorial. If you have not done so you must do the following -

 1.  Create a connection URL:
	 - For Access Tokens:  ```wss://glimesh.tv/api/socket/websocket?vsn=2.0.0&token=TOKEN_HERE```

	 - For Client IDs: ```wss://glimesh.tv/api/socket/websocket?vsn=2.0.0&client_id=CLIENT_ID```

	 > Make sure to replace TOKEN_HERE or CLIENT_ID with their proper values!

2.  Open a connection and send this through:

```WS
["1","1","__absinthe__:control","phx_join",{}]
```


3. Send this through replacing 6 with your channel ID.
```WS
 ["1","1","__absinthe__:control","doc",{"query":"subscription{ channel(ID: 6) { title, id } }","variables":{} }]
 ```
4. Send this through every 30 seconds.
```WS
["1","1","phoenix","heartbeat",{}]
```


> Having issues? The [websocket tutorial](/api-docs/docs/chat/websockets/) goes into more detail about the connection. You may find it helpful to complete that tutorial first. If you are still having problems talk to us in [discord](https://discord.gg/Glimesh).

The above code will connect to Glimesh, subscribe to any changes, and keep us from getting disconnected. To test our code we need to make a change on the channel that we specified. We requested to be sent the current title. Lets change it and see our code in action!

Before (Basic Query)
```JS
{
  "data": {
    "channel": {
      "title": "Hello Glimesh API "
    }
  }
}
```


After (Websocket)
```JS
[
  null,
  null,
  '__absinthe__:doc:-576460752299317854:BEF9A4EF11FCFAD0A1B750BCEE8C2CBEAB66ADDAFE214A6CF692FBA68473F68A',
  'subscription:data',
  {
    result: { channel: { id: '6', title: 'Hello Glimesh API ' } },
    subscriptionId: '__absinthe__:doc:-576460752299317854:BEF9A4EF11FCFAD0A1B750BCEE8C2CBEAB66ADDAFE214A6CF692FBA68473F68A'
  }
]
```

After the title was changed Glimesh sent us the new title.  All properties will function the same way. Using this format you can listen to any property of any channel on Glimesh!

> Looking for a reference? Click [here](/api-docs/docs/reference/channel/) to view all the channel properties.

If you have any questions talk to us in the #dev channel in our [Discord](https://discord.gg/Glimesh).