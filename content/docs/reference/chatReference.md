---
bookHidden: true
---

Shows all of the fields in the chatMessage object.

```JS
  chatMessage {
    id,
    insertedAt,
    message,
    updatedAt,
    isSubscriptionMessage,
    isFollowedMessage,
    channel {
      // Channel data
    },
    metadata {
        // Metadata about the user at the time of the message (is sub/mod/founder/etc)
    }
    user {
      // User data
    }
  }
```