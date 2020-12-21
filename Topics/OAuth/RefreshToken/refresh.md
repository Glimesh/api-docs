# Refresh Tokens
  
A refresh token allows you to get a new access token without having your user authenticate again. It is a standard part of OAuth 2.

> Looking for authentication flow? Start with [access tokens](./AccessToken/generalInfo.MD)

 
## Refreshing A Token

Refresh tokens are sent when you request an access token. You can pull them from the data that Glimesh sends you.
```js
{
  access_token: 'qwertyuiopo1234567890',
  created_at: '2020-12-14T15:15:29',
  expires_in: 21600,
  refresh_token: 'qwertyuiop0987654321',
  scope: 'public email chat streamkey',
  token_type: 'bearer'
}
```

You can refresh a token at any time. You do not need to wait for the access token to expire. Refresh tokens last for about one year. When you refresh a token you will need all the info from when you requested an access token.

Send a POST request to:

`https://glimesh.tv/api/oauth/token?grant_type=refresh_token&refresh_token=REFRESH_TOKEN&redirect_uri=REDIRECT_URL&client_id=CLIENT_ID&client_secret=SECRET_ID&code=CODE`

Make sure to replace REFRESH_TOKEN, REDIRECT_URL, CLIENT_ID, SECRET_ID, and CODE with their corresponding values. You must use the same information that was sent when you requested an access token. If you want new scopes you must request a new token. 

Provided you formatted your request correctly Glimesh will send you back a new refresh token and access token.
```JS
{
"access_token":  "qwertyuioip123456789",
"created_at":  "2020-12-21T23:08:22",
"expires_in":  21600,
"refresh_token":  "qwertyuiop098765321",
"scope":  "public email chat streamkey",
"token_type":  "bearer"
}
```

This will allow you to use the new token and continue to query the Glimesh API. You must use the new access token and the new refresh token. You can safely discard the old tokens.

## Other Info

 - You cannot get new scopes from refresh tokens. You must make the user authenticate again with the new scopes.
 - Access tokens last for about 6 hours. You can refresh them earlier if needed.
 - Refresh tokens last for about 1 year. 
 - If a user revokes your dev app you cannot use the access or refresh tokens. This would require the user to authenticate again. 

If you have any questions talk to us in the #dev channel in our [Discord](https://discord.gg/Glimesh).