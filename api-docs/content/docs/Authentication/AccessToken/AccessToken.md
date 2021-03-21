# Access Tokens

An access token can be used to query the Glimesh API on behalf of a user. You can also get info about the user that the token belongs to.

> This guide is for getting a token from a real user. If you are just testing or don't want to setup authentication yet you can use [client credentials](/api-docs/docs/authentication/accesstoken/clientcredentials/)

## Requesting A Token

Before requesting a token you must have a [developer application](https://glimesh.tv/users/settings/applications). You will need your client ID, secret ID, and redirect URL.
![app image](https://i.imgur.com/IIzwkHc.png)


First you need to have a user authenticate with your app. The user must be directed to
```URL
https://glimesh.tv/oauth/authorize?response_type=code&state=&client_id=CLIENT_ID&scope=public%20email%20chat%20streamkey&redirect_uri=REDIRECT_URL
```

Make sure to replace your client ID and your redirect URL. The redirect URL must match one of the URL's on your application. Scopes are space separated values that determine what permissions you want from the user. Only request the scopes that you need.

The current scopes are:

{{% content "docs/reference/scopesReference.md" %}}

When the user is sent to the link they will have to accept your app scopes. They will then be sent to your apps redirect URL. Glimesh will send a code inside the URL when they are sent back to your app. You need to extract it from the URL.

```URL
http://your-app.com/some/area?code=qwertyuiop123
```

Once you have the code you need to make a request to Glimesh. We will exchange the code for an access token.

```URL
POST https://glimesh.tv/api/oauth/token?grant_type=authorization_code&code=CODE&redirect_uri=REDIRECT_URL&client_id=CLIENTID&client_secret=SECRETID
```

Send a POST request with the URL above replacing the code,redirect url, client ID, and secret ID. Remember to **keep the secret ID hidden** from your users. When Glimesh receives the POST request it will send back the information we want. Once it is parsed it will look like this:
```JS
{
  access_token: 'qwertyuiopo1234567890',
  created_at: '2020-12-14T15:15:29',
  expires_in: 21600,
  refresh_token: 'qwertyuiop0987654321',
  scope: 'public email chat streamkey',
  token_type: 'bearer'
}

```

Now you can query the Glimesh API on behalf of a user. This token will expire after a few hours so you need to refresh it or ask the user for a new one. If you have any questions talk to us in the #dev channel in our [Discord](https://discord.gg/Glimesh).

> Ready to refresh your token? Continue with OAuth [here](/api-docs/docs/authencation/refreshtoken/refreshtoken/)

## Common Errors

There are a few errors you may encounter while requesting a token.

```JS

{
  error: 'invalid_grant',
  error_description: 'The provided authorization grant is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client.'
}

```

This means something is wrong with your URL. You can only use each code once. You must send the request with the `grant_type=authorization_code` for Glimesh to send you the access token. Ensure all of the data in the URL matches the data in your dev application. Glimesh will refuse any request that is not properly formatted.

```JS

{
  error: 'invalid_request',
  error_description: 'The request is missing a required parameter, includes an unsupported parameter value, or is otherwise malformed.'
}

```

This is a request error. Some part of your URL is not necessary or missing. Ensure the parameters in the URL are spelled correctly. You should also check that you have all of the required data in the URL.

`Error: 401 Unauthorized. You must be logged in to access the API.`

This is an authentication issue. This is commonly seen when querying the API but I added it here because it most likely means you must request another token. You must renew or request a new token and send the API request to Glimesh properly.  Tokens expire after a few hours unless they are renewed.

> Stuck with something? Talk to us in [Discord](https://discord.gg/Glimesh). We would be happy to help you!

