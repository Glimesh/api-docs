---
weight: 40
---
# Chat Moderation

Using the Glimesh API we can use mod features such as timeouts and bans. These are critical for chatbots and other services. Before starting this tutorial you should have a working connection to the API and understand basic GraphQL.

> New to GraphQL? This tutorial explains the basics. https://graphql.org/learn/schema/

> If you are looking for live updates related to moderation you can apply the queries in this tutorial to our Live Updates tutorial [here](/api-docs/docs/live-updates/channels).


## Understanding Mod Actions

Glimesh has various methods to help streamers moderate their chat. All of the below methods are useable through the API.

|Action|Result |
|--|--|
| banUser | Bans the user from the channel. |
| unbanUser | Removes the ban on a user. |
| longTimeoutUser | Prevents a user from typing for 15 minutes. |
| shortTimeoutUser | Prevents a user from typing for 5 minutes. |
| deleteChatMessage | Removes a message from chat. |

To use any of these methods you must have the proper rank in the chat. You need to be a streamer or a moderator in their chat. You also need the user ID of the user who will receive the action and the channel ID of the channel in which the action will take place.  You can get a channel ID with the below query.

```GraphQL
query {
  channel(streamerUsername: "NAMEHERE") {
    id
  }
}
```
A user ID can be attained from various queries. Since you are likely in a chat you can pull the ID from the chatMessage event. Your subscription to a chat (to listen for chat messages) would look something like this.
```GraphQL
subscription {
  chatMessage(channelId:6) {
    message,
    user {
      id
    }
  }
}
```
The message would be the chat message and the ID in the user object would be the ID of the user who sent the message.

> There is also an ID property in the chatMessage. This is the ID of the message, **not** a user or channel ID. Don't get them confused!

## Connection

Now that we have a method to get the user and channel IDs we can start <del>banning everyone</del> moderating!

> Memes aside, you always need to use the API responsibly. Bots, AI, and message parsing can fail and you never want to wrongly ban a user. Always ensure that any automated services log all their actions. You may need to go back and unban someone if a mistake is made.

For testing purposes you should use your own channel and a bot account. You *can* ban yourself but it's easier to use a different account. Glimesh uses mutations to moderate users. Mutations can be sent in http or websocket form. If you are in chat it is best to use the websocket since a connection would already be open.

### Timeouts

Send this to the API to timeout a user for 5 minutes.


```Graphql
mutation {
  shortTimeoutUser(channelId:6, userId:201) {
    action,
    moderator {displayname},
  }
}
```
> You need to replace 6 and 201 with the proper IDs.

A long timeout is very similar. This will last for 15 minutes.

```graphql
mutation {
  longTimeoutUser(channelId:6, userId:201) {
    action,
    moderator {displayname},
  }
}
```

### Bans

Banning users works the same way. Simply replace the timeout mutation with the ban mutation.

```graphql
mutation {
  banUser(channelId:6, userId:201) {
    action,
    moderator {displayname}
  }
}
```

If you need to unban a user you can use this mutation.

```graphql
mutation {
  unbanUser(channelId:6, userId:201) {
    action,
    moderator {displayname}
  }
}
```

### Delete Messages

You can also delete messages. You need the channel ID and the message ID. The message ID can be attained by querying the messages in a channel or by requesting it in a chatMessage subscription. Use this mutation to delete a message.

```graphql
mutation {
  deleteChatMessage(channelId:6, messageId: 111) {
    action,
    moderator {
      displayname
    }
  }
}
```

Attempting to unban a user that is not banned will return an internal server error. Attempting to use any moderator action on a user or message that does not exist will return "not found". Using moderator actions in a channel that you do not have the authorization will result in an error. If you need more information about what properties you can receive from a moderator action check out the [moderator reference](/api-docs/docs/reference/mod/). It provides a list of all the properties you can request. [Glimesh.tv/api](https://glimesh.tv/api) has a full list of all the API features.

## Moderation Log

Glimesh stores a copy of all the moderation events that happen to a user.  This log can be viewed by the streamer [here](https://glimesh.tv/users/settings/channel/mods).
![Mod Log](https://i.imgur.com/zy3yhhy.png)

We can also access this log via the API. Unlike the webpage, this log can be viewed by any user! Let's create a basic query.
```graphql
query {
  channel(id:6) {
    moderationLogs(last: 3) {
      edges {
        node {
          action,
          moderator {username}
        }
      }
    }
  }
}
```
This will return an array of data showing the moderation logs. Moderation logs are paginated, you can read more about that [here](/api-docs/docs/api/pagination)

```JS
{
  "data": {
    "channel": {
      "moderationLogs": {
        "edges": [
          {
            "node": {
              "action": "delete_message",
              "moderator": {
                "username": "Mytho"
              }
            }
          },
          {
            "node": {
              "action": "delete_message",
              "moderator": {
                "username": "AFaithfulServant"
              }
            }
          },
          {
            "node": {
              "action": "delete_message",
              "moderator": {
                "username": "Mytho"
              }
            }
          }
        ]
      }
    }
  }
}
```

That is the basis for using moderation actions with the API. All of the above queries and mutations can be done through a websocket connection as well as a normal query.

If you have any questions talk to us in the #dev-questions channel in our [Discord](https://glimesh.tv/s/discord).