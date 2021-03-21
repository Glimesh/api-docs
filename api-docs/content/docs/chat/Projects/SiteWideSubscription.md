# Site Wide Chat Messages

The Glimesh API allows you to subscribe to any channel to listen for chat messages. There is no limit to the amount of channels that you can listen to. In this project we will listen for every chat message from every user across the entire site. Before starting you should fully understand the [WebSocket Tutorial](/api-docs/docs/chat/websockets/).

First we need to open a websocket connection to Glimesh. Use the process from the websocket tutorial linked above to get the connection open. Instead of subscribing to a specific channel you want to subscribe to the `chatMessage` event. You can do so with this:

```JSON
["1","1","__absinthe__:control","doc",{"query":"subscription{ chatMessage { user { username avatar } message } }"}]
```

Normally the event requires a channel ID as a parameter. Since we don't specify which channel to listen to it connects to every channel on the site. All you have to do is log the messages as they come in!

```JSON
[null,null,"__absinthe__:doc:-576460752298178591:33B2AA3BF7B8F0E158810EF0E0166F5E05840BE57444C92365C921943942A47D","subscription:data",{"result":{"data":{"chatMessage":{"message":"hello world!","user":{"avatar":"/uploads/avatars/Mytho.png?v=63762672056","username":"Mytho"}}}},"subscriptionId":"__absinthe__:doc:-576460752298178591:33B2AA3BF7B8F0E158810EF0E0166F5E05840BE57444C92365C921943942A47D"}]
```

In the example above we requested the message as well as the username and avatar of the chatter. This query shows all of the possible data we can get from a chat message.

```graphql

subscription {
  chatMessage {
    id,
    insertedAt,
    message,
    updatedAt,
    channel {
      # Channel data
    },
    user {
      # User data
    },
    tokens {
        text,
        type,
      ...on EmoteToken {
        src,
        text,
        type,
        url
      },
      ...on TextToken {
        text,
        type
      },
      ...on UrlToken {
        text,
        type,
        url
      }
    }
  }
}

```

This is all of the info required to listen to every chatroom. If you have any questions talk to us on our [Discord](https://discord.gg/Glimesh).