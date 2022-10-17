# API Migration

Glimesh has started migrated to a new API because of major changes in the way result data is returned from the API. We've added pagination to all queries that return lists to improve performance on the app, and renamed several fields for consistency.

In addition, we are in the process of migrating to a new OAuth 2.0 provider which adds additional features, but may require some changes for your application. The migration to the new OAuth 2.0 provider will complete on August 20th 2021 at 8AM EDT.

> ***If you are new to the API you can safely skip this doc.***

## Timeline
The new API endpoint has already been introduced, however there are currently no plans to remove the old API endpoint. However we will be soon pointing all new developers to our new API only, and removing documentation relating to the older API as we continue to prove the new one out.

## Using the New API

Using the new API is very easy. Simply point all requests to the new URL.

```URL
HTTP Endpoint: https://glimesh.tv/api/graph
WebSocket Endpoint: wss://glimesh.tv/api/graph/websocket
```

This will give you full access to the new endpoints and features of the API.


### What Changed?

Some changes are internal and do not affect the developer. However, the following changes will affect you:

- The new API endpoint does not support a built-in graphical editor. This change was required to properly support CORS across the new API endpoint. We have a new tutorial about using your own editor [here](/api-docs/docs/api/api-explorer).
- Query Complexity analysis has been added which will help us maintain API performance. You should not run into any limits with any possible queries (due to pagination), but if you do receive errors about query complexity, let us know so we can check it out!
 ___
 - The following fields have been **added** to the API.
	 - Category
		 - insertedAt: Creation time of the category.
		 - updatedAt: When the category was last updated.
	 - Channel
		 - chatBgUrl : The URL of the channels chat background.
		 - posterUrl: Image that is shown in place of the stream when the user is offline.
		 - Streams: List of the streams the channel currently has (1). See [pagination](/api-docs/docs/api/pagination).
	 - Channel Ban
		 - id: The ID of the channel ban.
	- Channel Moderator
		- id: The ID of the channel moderator.
	- Stream
		- thumbnailUrl: The URL of the current thumbnail (stream snapshot)
	- User
		- allowGlimeshNewsletter: Does the user allow newsletters?
		- allowLiveSubscriptionEmails: Does the user allow "going live" emails?
		- channel: The user's channel.
		- email: The user's email address (scope protected).
		- followingLiveChannels: The channels that the user is following that are currently streaming.
		- insertedAt: When the user was inserted into the database.
        - showOnHomePage: Has the user enabled the selection to be on the homepage?
		- teamRole: The role the user has on the Glimesh Team (dev, design, GCT, etc)
		- updatedAt: The last time the user was modified.
---

 - The following are now paginated and no longer return every item in the collection at once. See [pagination](/api-docs/docs/api/pagination)
	 -	Subcategories
	 -	Tags
	 -	Channels
	 -	Channel Bans
	 -	Channel Chat Messages
	 -	Channel Moderation Logs
	 -	Channel Streams
	 -	Channel Moderator List
	 -	Followers
	 -	Users
	 -	User Followers
	 -	User Following
	 -	User Following Live Channels
___

- The following fields have been **removed** from the API. Some have been moved or had their names changed to a new field.
	- Channel
		- thumbnail: Moved to Stream as thumbnailUrl
        - Replaced hmackey and username as arguments. Added streamerId and streamerUsername
    - deleteMessage
        - Changed to deleteChatMessage
	- Emote Token
		- url: Use src instead.
    - Followers
        - Replaced streamerUsername and userUsername as arguments. Added streamerId and userId
	- Stream
		- avgChatters
		- avgViewers
		- countChatters
		- newSubscribers
		- resubSubscribers
		- subcategory: Moved to Channel.
		- thumbnail: Changed to thumbnailUrl.
	- User
		- avatar: Use avatarUrl instead.


## Using the New Authentication

The new authentication method will not require any changes for the user. However, it does add support for PKCE auth.

### What Changed?

Credentials now use new formats. Client IDs and Secret Keys will be converted for each request you make. This means you **do not** need to change your keys. However, we recommend that you migrate to the new format whenever possible. Simply rotate the existing keys from the [dev app](/api-docs/docs/dev-app) and replace them in your projects.

 - Access/Refresh Tokens
	 - Can now contain upper case values.
	 - Max length increased to 255 characters.
- Client ID
	- Are now UUID’s instead of alpha-numeric values.
- Client Secret
	- Can now contain upper case values.
	- Max length increased to 255 characters.

Our OAuth system now supports PKCE auth. This is a new standard and it is not required to use the API. We have a guide on it [here](/api-docs/docs/authentication/accesstoken/pkceauth/).
