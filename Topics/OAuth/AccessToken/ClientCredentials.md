---
weight: 100
---
# Client Credentials (Access Token)

An access token can be used to query the Glimesh API on behalf of a user. Normally you have to get a token from a user. Client credentials allows us to generate an access token for our own account to act as an authenticated user.

## Requesting A Token

Before requesting a token you must have a [developer application](https://glimesh.tv/users/settings/applications). You will need your client ID and secret key.
![app image](https://i.imgur.com/IIzwkHc.png)

Simply make a POST request to the following URL replacing CLIENT_ID and SECRET_KEY with the info from your dev app.

```URL
https://glimesh.tv/api/oauth/token?grant_type=client_credentials&client_id=CLIENT_ID&client_secret=SECRET_KEY
```

Glimesh will respond with:
```JSON

{
"access_token":  "qwertyuiop1234567890",
"created_at":  "2021-03-21T19:32:21",
"expires_in":  21600,
"refresh_token":  null,
"scope":  "public",
"token_type":  "bearer"
}

```
The access token received will allow us to make requests as if we were using a normal access token. We have permissions for all the scopes and have access to any user specific properties. The token generated will expire in 6 hours just like a normal token. Unlike normal tokens, this cannot be refreshed. As with all auth information you must keep this private.

If you have any questions talk to us in the #dev channel in our [Discord](https://discord.gg/Glimesh).