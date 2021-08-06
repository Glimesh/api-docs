---
bookHidden: true
---

Shows all the properties of the channel object. Note that for nested objects only one propery is shown.

```js
subscription {
  channel(id: 6) {
    bans(last: 3) {
      edges {
        node {
          reason
        }
      }
    }
    blockLinks
    category {
      name
    }
    chatBgUrl
    chatRulesHtml
    chatMessages(last: 3) {
      edges {
        node {
          message
        }
      }
    }
    chatRulesMd
    disableHyperlinks
    hmacKey
    id
    inaccessible
    insertedAt
    language
    matureContent
    minimumAccountAge
    moderationLogs {
      edges {
        node {
          action
        }
      }
    }
    moderators {
      edges {
        node {
          canBan
        }
      }
    }
    posterUrl
    requireConfirmedEmail
    showOnHomepage
    showRecentChatMessagesOnly
    status
    stream {
      id
    }
    streamKey
    streamer {
      username
    }
    streams {
      edges {
        node {
          countViewers
        }
      }
    }
    subcategory {
      name
    }
    tags {
      name
    }
    title
    updatedAt
  }
}
```