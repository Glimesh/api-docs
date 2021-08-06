# API Migration


Glimesh has migrated to a new API and a new Authentication system. This migration changes the endpoint URL, adds pagination, and modifies some fields. The Auth change adds PKCE auth and changes the structure of the credentials.
> ***If you are new to the API you can safely skip this doc.***


## Using the New API

Using the new API is very easy. Simply point all requests to the new URL.

```URL
https://glimesh.tv/api/graph
```

This will give you full access to the new endpoints and features of the API. The websocket URL is unchanged, but is affected by the below changes.


### What Changed?

Some changes are internal and do not affect the developer. However, the following changes will affect you:

 - The API explorer at [glimesh.tv/api](https://glimesh.tv/api) has been removed. This is because Glimesh no longer supports the auth format the editor used. We have a new tutorial about using your own editor [here](/api-docs/docs/api/api-explorer).
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

Our OAuth system now supports PKCE auth. This is a new standard and it is not required to use the API. We have a guide on getting it setup shortly.