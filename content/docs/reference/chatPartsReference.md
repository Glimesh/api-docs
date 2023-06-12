---
bookHidden: true
---

All the possible data to query from a chat part.

```js
subscription{
  chatMessage(channelId:6) {
    message,
    user {
      id
    },
    tokens {
        text,
        type,
      ...on EmoteToken {
        src,
        text,
        type,
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

A possible response. (Dependent on query and message)

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
               "tokens":[
                  {
                     "text":"Hello Glimesh Devs ",
                     "type":"text"
                  },
                  {
                     "src":"/emotes/svg/glimsmile.svg",
                     "text":":glimsmile:",
                     "type":"emote",
                  },
                  {
                    "text": "http://glimesh.tv",
                    "type": "url",
                    "url": "http://glimesh.tv"
                  },
               ]
            }
         }
      },
     "subscriptionId":"__absinthe__:doc:-576460752302054414:1C57C19163D4D59F61626243BCCA79AB4E50D5C4C2BD8BDA0DDCE83517B20C16"
   }
]
```