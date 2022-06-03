---
title: Glimesh IDs
---
## IDs

IDs are a unique identifier for data in the API. Each item of the same type will have its own ID. This can be used to separate it from other items. An ID **will never change** unlike other unique fields (username). IDs are auto-incremented which means that the higher the ID the newer the item is.

If you are confused about which ID to use simply look at what the query requires. All parameters can be found in the [API Explorer](/api-docs/docs/api/api-explorer).

### Channel ID

A channel ID identifies a channel. It is used in channel related queries.

### Streamer ID

A **streamer ID is the same as a user ID**. We use a different name to prevent confusion in certain queries (followers).

### User ID

A user ID identifies a user. Used in user related queries.