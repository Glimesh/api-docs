---
bookHidden: true
---

Shows all the properties of the channel object. Note that for nested objects only one propery is shown.

```js
subscription {
  channel(id:6) {
    bans {reason},
    category {name},
    chatMessages {message},
    chatRulesHtml,
    chatRulesMd,
    hmacKey,
    id,
    inaccessible,
    insertedAt,
    language,
    moderationLogs {action},
    moderators {canBan},
    status,
    stream {id},
    streamKey, 
    streamer {displayname},
    tags {name},
    thumbnail,
    title,
    updatedAt
  }
}

```