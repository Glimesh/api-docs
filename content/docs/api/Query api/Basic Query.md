---
title: Generic Query
---
# Glimesh API Requests

This is a basic tutorial for communicating with the Glimesh API. This guide assumes you have a [client ID](https://glimesh.tv/users/settings/applications) or an access token from a user.  Having basic GraphQL knowledge would also be helpful.
> New to GraphQL? This tutorial explains the basics. https://graphql.org/learn/schema/


## Authentication

All requests made to Glimesh must contain the proper authentication. The authentication  value should be included as a header of the request. This value will change depending on the authentication type. For access tokens use:

`Authorization: Bearer YOUR_TOKEN`

Replace YOUR_TOKEN with your access token. If you are using a client ID to authenticate you must use this instead:

`Authorization: Client-ID YOUR_CLIENT_ID`

Replace YOUR_CLIENT_ID with your ID. This will allow you access to the API.

>  A client ID can use the API in read only mode. An access token is limited by its scopes.

## Building Our Request

The Glimesh API uses GraphQL. You must structure your query accordingly. Some data requires an access token with a special scope. For this example we will structure a basic request that requires no special scope. The query must be included in the body of the request.
```GraphQL
query {
  user(username: "USERNAME") {
    username
    id
  }
}

```
Make sure to change "USERNAME" to a user on Glimesh. We are requesting the username and ID of the user. Now that we have our authentication and our query we can request the data. Send a POST request with our query and header from above to:

```url
https://glimesh.tv/api/graph
````

Glimesh will send a JSON formatted response when it receives our request.
```JSON
{
  "data": {
    "user": {
      "id": "154",
      "username": "Mytho"
    }
  }
}
```

You can parse the response to get the data you want. You *could* test every query like this but there is an easier way.

## API Explorer

You can use an API explorer to make queries without the need of a dev environment. API explorers let you run queries with intellisense and some even handle authentication for you.

We have a dedicated tutorial on using the Insomnia GraphQL editor [here](/api-docs/docs/api/api-explorer). We also provide a collection of common requests which can be found in that tutorial.

If you have any questions feel free to talk to us in [Discord](https;//discord.gg/Glimesh).

## Common Errors

There are a few errors you may encounter while querying the API.

`Error: 401 Unauthorized. You must be logged in to access the API.`

This is an authentication issue. Check your authentication header. You need to use the right type of authentication and make sure that the information is valid.

___

-   `Internal Server Error`

 This is usually user error rather than a server error. Ensure the auth info is correct and check your query for errors.  If you think your query is correct try it [here](https://glimesh.tv/api).
 ___


-   `syntax error before: \"\\\"QUERY\\\"\""`

 Your query is in the incorrect format. It must match the GraphQL specifications. You can only request properties that exist and you must have the proper permissions to access them. Check the [API docs](https://github.com/Glimesh/glimesh.tv/wiki/GraphQL-API) for more information.



> Stuck with something? Talk to us in [Discord](https://discord.gg/Glimesh). We would be happy to help you!
