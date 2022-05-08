---
weight: 30
---
# Subscriber Alerts

The Glimesh API does not have a live update event for channel subscribers. However, you can listen for the subscriber chatmessage to be notified when someone subscribes to a channel. This requires that you have a working websocket connection.

## Listening for Subs

Simply ask Glimesh for the added property in a chatmessage subscription. This is a deprecated property and will be replaced in the future.

```graphql
subscription{
  chatMessage(channelId:1) {
    message,
    # True if the new subsriber message
    isSubscriptionMessage,
    # True if new follower message
    isFollowedMessage,
    user {
      username
    },
  }
}
```