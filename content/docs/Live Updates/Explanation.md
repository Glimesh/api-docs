---
weight: 40
title: Live Updates Explained
---

# Live Updates

Live updates allow you to listen for changes through the API.  Glimesh will notify you when a requested event occurs.

Live updates are sent via a websocket connection. You can set that up [here](/api-docs/docs/chat/websockets/).

## Types of Events

There are 3 events you can subscribe to. Each works the same way.

### Channels

Channel events occur when a top level field changes. You can listen for the status (live/not-live), title, and any other information. Note that you can only request top level properties.

```graphql
subscription {
  channel(id: 1) {
    status
    title
    # Any other fields you want...
    streamer {
        id # Will not work since it is a nested field
    }
  }
}
```

### Followers

Follower events occur when a user follows a channel. You can request info about the channel and the user who followed the stream.

```graphql
subscription {
  # streamerId is the userId
  followers(streamerId: 6) {
    hasLiveNotifications
    id
    insertedAt
    streamer {
        # streamer info
        username
    }
    updatedAt
    user {
        # user info
        username
     }
  }
}
```

### ChatMessages

Chatmessage events occur when a message is sent to a specified chat. We have a dedicated tutorial for this [here](/api-docs/docs/chat/websockets/).

### Subscribers

You can listen for new subscribers. However, you cannot do so via the live updates. View [this page](/api-docs/docs/live-updates/subscribers/) for more information.