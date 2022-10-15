---
weight: 100
title: PKCE
---
# PKCE Authentication Flow

PKCE builds upon authorization flow. PKCE is commonly used for mobile and frontend code where your source code (namely client ID) is accessible to your users. PKCE auth does not require a client secret.

> Glimesh closely follows the RFC spec which can be found [here](https://datatracker.ietf.org/doc/html/rfc7636).

## Verifier and Challenge

First we need to generate a *code verifier* and a *code challenge* to use in the authorization request.

A code verifier is a random string using unreserved characters that is 43-128 characters long. The [RFC](https://datatracker.ietf.org/doc/html/rfc7636) acceptable characters are listed below.
```
code-verifier = 43*128unreserved
unreserved = ALPHA / DIGIT / "-" / "." / "_" / "~"
ALPHA = %x41-5A / %x61-7A
DIGIT = %x30-39
```

You can generate the verifier in whichever method is the most convenient for your application. There is a great set of [code samples](https://docs.cotter.app/sdk-reference/api-for-other-mobile-apps/api-for-mobile-apps#step-1-create-a-code-verifier) to generate the code verifier. Below is their example for javascript.

```js
function dec2hex(dec) {
  return ('0' + dec.toString(16)).substr(-2)
}
function generateRandomString() {
  let array = new Uint32Array(56/2);
  window.crypto.getRandomValues(array);
  return Array.from(array, dec2hex).join('');
}
let verifier = generateRandomString();
```


Next we need to create a code challenge. We use the verifier to create the challenge. Glimesh requires us to use the S256 transformation as specified in the [RFC](https://datatracker.ietf.org/doc/html/rfc7636) spec.

`code_challenge = BASE64URL-ENCODE(SHA256(ASCII(code_verifier)))`

 As before we will use the [code samples](https://docs.cotter.app/sdk-reference/api-for-other-mobile-apps/api-for-mobile-apps#step-1-b-create-a-code-challenge-from-code-verifier) to generate our example. Their javascript example is listed below.
```js
function sha256(plain) { // returns promise ArrayBuffer
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest('SHA-256', data);
}

function base64urlencode(a) {
      let str = "";
      let bytes = new Uint8Array(a);
      let len = bytes.byteLength;
      for (let i = 0; i < len; i++) {
        str += String.fromCharCode(bytes[i]);
      }
      return btoa(str)
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
    }

async function challenge_from_verifier(v) {
  hashed = await sha256(v);
  base64encoded = base64urlencode(hashed);
  return base64encoded;
}

let challenge = await challenge_from_verifier(verifier);
```
Now we need to get permission from the user.

> You should create a new verifier and challenge for each user. They should be kept private, and deleted when the user is authenticated.

## Authorization Code

Now that we have our code verifier and code challenge we can direct our user to Glimesh so they can approve our app. You will need a client ID handy.

> Need a client ID? Create a dev app [here](https://glimesh.tv/users/settings/applications).

The user must be directed to the authorization URL with the below query parameters.

```url
https://glimesh.tv/oauth/authorize?response_type=code&code_challenge=CODE_CHALLENGE&code_challenge_method=S256&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_CALLBACK_URL&scope=SCOPE
```

Make sure to replace the parameters with their values. When the user is directed to Glimesh they will be asked to approve the scopes you requested. If they approve it they will be redirected to the redirect URL provided. We need to extract the authorization code from the URL (sent as a query param). There are many libraries for each language to help with this. Since we are just testing we can look at the URL and copy it manually.

```url
http://localhost:3000/success?code=qwertyuiop1234567890
```
> Example redirect URL response. We want the code value.

This code expires in 60 seconds. If it expires you have to get the user to authorize your app again.

## Getting Tokens

Now that we have an authorization code we can request an access token. Simply send a HTTP POST request to the below URL adding the body as x-www-form-urlencoded.

```url
https://glimesh.tv/api/oauth/token
```

```
code_verifier:Verifier Here
client_id: Client ID Here
redirect_uri: Redirect Uri Here
scope:public
code:Authorization Code Here
grant_type:authorization_code
```
> Each line is one key/value.


When Glimesh receives your request they will send back an access and refresh token, as well as other info about the request.

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
> Glimesh will send an error in JSON format if your request has an error. Keep in mind that all credentials must be accurate and you must request a token within 1 minute of the user authorizing your app. You need to include the code **verifier**, not the challenge!

You can use the access token for 24 hours. When it expires you need to request a new one with your refresh token. We have a guide on refreshing tokens which can be found [here](/api-docs/docs/authentication/refreshtoken/refreshtoken).

Questions? Join the #dev-questions channel on our [discord](https://glimesh.tv/s/discord).