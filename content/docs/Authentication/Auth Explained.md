# Authentication Explanation

Glimesh requires a form of authentication to use the API. Every query (or endpoint) must have authentication passed to it to receive your information. This doc explains what methods of authentication exist and how to get them.

> Glimesh follows the OAuth 2.0 spec which can be found [here](https://datatracker.ietf.org/doc/html/rfc6749)

## Methods of Authentication

If you want to use the API you must have a developer application. This is a small document that contains info about your product. Each project needs its own app.

The developer application will give you a client ID and a client secret. These are similar to passwords and should be kept private (In some cases the client ID must be public, see PKCE). [This](/api-docs/docs/dev-app) doc goes in-depth explaining the creation process.

There are two forms of authentication to use the Glimesh API. Both require you to create a developer application.


### Client IDs

A client ID is the easiest way to get started with the API. Simply attach the below snippet as a HTTP header/value.

```
Authorization: Client-Id YOUR-ID
```

This lets you query most fields and is a great starting point. There are a few limits when using client IDs:

 - You are not a user. You can't use the `myself` query.
 - You do not have any scopes so you cannot access scope protected fields (email, streamkey, etc)
 - You are in read-only mode. You cannot use mutations (talking to chat, banning users, etc).


### Access Tokens

Access tokens represent a users consent to use the API on their behalf. You can access all of the API that you had access to with a client ID, and you can access what is granted in the tokens scopes. Attatch the below snippet as a HTTP header/value.

```
Authorization: Bearer YOUR_TOKEN
```

Access tokens have the below limits:

 - Limited by your scopes.
 - Expire in a short period (check the ````expires_in```` when you receive a token, usually 24 hours)


## Obtaining Tokens

There are a variety of methods (called *flows*) to get access tokens.  DIfferent methods are better for different applications.

### Client Credentials

This method is mainly used for testing the API. This will give you a token with all of the available scopes.

Client credentials require both a client ID and a client secret to obtain a token. They are used on the server side if you use 1 token for all of your requests. This method **cannot** be used when your source code is exposed to your users.

[Tutorial](/api-docs/docs/authentication/accesstoken/clientcredentials)

### Authorization Code

This method is commonly used for authenticating users when you can hide authentication behind a server. This will give you a token based on the scopes you requested. You will need an authentication server. A NodeJS example can be found [here](/api-docs/docs/authentication/accesstoken/nodejs/node-access-token/)

This flow requires a client ID and a client secret. As such this flow **cannot** be used if your users have access to your authentication code.

[Tutorial](/api-docs/docs/authentication/accesstoken/accesstoken/)


### PKCE

PKCE (proof key for code exchange) is a new flow for obtaining a users access token. This requires a client ID as well as a user generated code_verifer and code_challenge.

PKCE is used when your source code is open to your users. This is one flow where your client ID can be safely shown to your users. No secret is required.

[Tutorial](/api-docs/docs/authentication/accesstoken/pkceauth)



## Refreshing Tokens

All access tokens expire after a short time. You can ask the user to authorize again and get a new token, or you can refresh the token. Each flow has a slightly different requirement for refreshing tokens.

Client credentials cannot be refreshed. You have to request a new token.

Authorization Code => Follow normal refresh flow [here](/api-docs/docs/authentication/refreshtoken/refreshtoken).

PKCE => We don't have a doc for this yet, but you can follow the OAuth [spec](https://datatracker.ietf.org/doc/html/rfc6749).

## FAQ

**Question**: Do I still need a dev app if I am only testing/learning the API?

*Answer*: Yes, you need it for authentication.

**Question**: Why does Glimesh need the info requested on the dev app?

*Answer*: Glimesh will use it to contact you if your app is disrupting the API. All of the information is kept private.

**Question**: Do I need a website for the developer application?

*Answer*: No. You can use a localhost URL instead. ex. `http://localhost`

**Question**: Why doesn't `x` work? I need help with ....

*Answer*: Join our discord and ask your questions in the #dev-questions channel.