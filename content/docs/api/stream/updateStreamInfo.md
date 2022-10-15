---
title: Update Stream Info
---



# Update Stream Info

Using the new `stream_info` scope we can modify the title of a stream using the Glimesh API. While this scope currently contains 1 mutation, it will be expanded to cover the rest of the stream info fields.

>Before beginning this tutorial you should have a working dev environment and understand the basics of the API.

## Getting Permission

This mutation requires the `stream_info` scope. Any OAuth flow that uses an access token is valid for this query. Simply add the scope to the request:
```
scope=stream_info
```
> If you don't understand the above explanation take a look at [Auth Explained](/api-docs/docs/authentication/auth-explained). You will need to choose a method of authentication that uses an access token. Set up the request and add the scope. Contact us on [Discord](https://glimesh.tv/s/discord) if you need help!

## Making the Mutation

Each action requires a slightly different mutation. Currently title is the only supported parameter. All mutations require the channel ID to target.

### Updating the Title
You can request any channel info from the mutation. Here we request the updated title and the channel ID.
Make the below query

```graphql
mutation {
	updateStreamInfo(channelId: 6, title: "Updated from the API, wow, much amaze!") {
		title,
		id
	}
}
```
Note that you cannot make a title longer than 255 characters. Additionally, entering a blank or invalid string will reset the title to its default state (`Live Stream!`).