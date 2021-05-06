# Chat Tokens

Chat tokens are a different way to handle messages sent from chat. A normal message is just a simple string. A chat token is an array of data that shows you all sorts of information about the message and what it contains.

> This is a continuation of the websocket tutorial. If you have not already completed the tutorial you can do so [here](/api-docs/docs/chat/websockets). A chat connection is required for this tutorial.

## The Basics

A chat token is the original message split by several factors. 

 1. Normal text
 2. Emotes
 3. URL's

Using the `token` property we can identify information we would previously have had to parse.  Normal text is exactly what is sounds like. Emotes are emotes from Glimesh. The URL is included as well as the text to create it `:glimsmile:` . URL's are also detected separately from text. This information is also provided alongside the default `message` property.  This means you don't have to use chat tokens if you don't want to. 

![Chat Parts Example](https://i.imgur.com/vCIasEk.png)

As shown in the image above the chat parts contain all the data from the chat message. The original message is above the chat parts.

## Building The Query/Subscription

We need to query `chatMessage`. We will plan for every possible type of data in a message. If you do not already have a working websocket for Glimesh you need to get one. If you don't want to keep a connection open you can make a normal query to the channel and view the `chatMessages` property.  Either method is valid. 

Start with this subscription
```graphql

subscription{
  chatMessage(channelId:6) {
    message,
    user {
      id
    },
    tokens {
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

Or use a query.

```graphql

query{
  channel(id:6) {
  chatMessages {
    message,
    user {
      id
    },
    tokens {
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
}

```
> Make sure to replace 6 with your channel ID!


You don't need to request every property, adjust the request as needed.

These requests will return the chat message as well as its message parts. The parts are in an array. The array values are generated if the message contains the type requested. If the type does not exist an array value is not generated.

Response:
```json
[
   null,
   null,
   "__absinthe__:doc:-576460752302054414:1C57C19163D4D59F61626243BCCA79AB4E50D5C4C2BD8BDA0DDCE83517B20C16",
   "subscription:data",
   {
      "result":{
         "data":{
            "chatMessage":{
               "message":"Hello Glimesh Devs :glimsmile:",
               "tokens":[
                  {
                     "text":"Hello Glimesh Devs ",
                     "type":"text"
                  },
                  {
                     "src":"/emotes/svg/glimsmile.svg",
                     "text":":glimsmile:",
                     "type":"emote",
                     "url":"https://glimesh.tv/emotes/svg/glimsmile-af9a10c9d4c4181dbd87ab245d3e3bee.svg?vsn=d"
                  }
               ]
            }
         }
      },
     "subscriptionId":"__absinthe__:doc:-576460752302054414:1C57C19163D4D59F61626243BCCA79AB4E50D5C4C2BD8BDA0DDCE83517B20C16"
   }
]
```
> Message: Hello Glimesh Devs :glimsmile:

Your response will vary slightly depending on the message and the query. 

## FAQ

Q: What happens if I use a nonexistent emote? :fakeemote:
> A: Glimesh will realize the emote is not real and detect it as text.

Q: What is the difference between this and the normal chat API?
> A: This version is more advanced and all the parsing is done for you.

Q: Should I switch to chat parts?
> A: That depends on your project. The normal chat API isn't going away so you can use whichever method you like.

If you have more questions feel free to talk to us in our [discord](https://discord.gg/Glimesh)!


