---
bookHidden: true
---


Shows all the queries related to moderation. Note that for nested properties only one property is shown.



Short and long timeouts have the same properties.

```js
mutation {
  shortTimeoutUser(channelId:6, userId:201) {
    action,
    channel {id},
    insertedAt,
    moderator {displayname},
    updatedAt,
    user {displayname}
  }
}
```


Banning and unbanning a user have the same properties.

```js
mutation {
  banUser(channelId:6, userId:201) {
    action,
    channel {id},
    insertedAt,
    moderator {displayname},
    updatedAt,
    user {displayname}
  }
}
```

Deletes a message.

```js
mutation {
  deleteChatMessage(channelId:6, messageId: 999) {
    action,
    channel {id},
    insertedAt,
    moderator {
      displayname
    },
    updatedAt,
    user {
      displayname
    }
  }
}
```

Shows all of the properties for a moderation log.

```js
query {
  channel(id: 6) {
    moderationLogs {
      edges {
        node {
          action
          channel {
            id
          }
          insertedAt
          moderator {
            username
          }
          updatedAt
          user {
            username
          }
        }
      }
    }
  }
}
```