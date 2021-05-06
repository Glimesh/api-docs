
# Follower Alerts

This is a tutorial for follow alerts. This guide assumes you have a [client ID](https://glimesh.tv/users/settings/applications) or an access token from a user. You should also have a websocket connection open from [this](/api-docs/docs/chat/websockets/) tutorial. Having basic GraphQL knowledge would also be helpful.
> New to GraphQL? This tutorial explains the basics. https://graphql.org/learn/schema/


## Building the Subscription

Follow alerts are made of a standard subscription. The streamer ID of the channel that you want to have alerts for is required. A streamer ID is equal to the user ID. You can acquire the ID with the below query.

```graphql

query {
  user(username:"Mytho") {
    id
  }
}

```
> Make sure to replace Mytho with the channel name.

We will insert this ID into the below subscription. You must subscribe to this event through a websocket connection. Glimesh will notify us whenever a user follows the channel.

```graphql

subscription {
  followers(streamerId:6) {
    hasLiveNotifications,
    id,
    insertedAt,
    streamer {
      username
    },
    updatedAt,
    user {
      username
    }
  }
}

```

The above subscription shows all of the properties we can receive. This excludes nested properties. This information will be sent to us whenever the specified channel gets a new follower.

> Need a tutorial for connecting to the API with websockets? Click [here](/api-docs/docs/chat/websockets/)

## Follower Query

A subscription is the standard way to get follower alerts. However, this is not the only method to get the followers of a channel. We can make a query to get the followers of a channel as well as the followers of a user. You will need name of the streamer or of the user. The following query will return the followers of a streamer.
```GraphQL
query {
  followers(streamerUsername:"Mytho") {
    hasLiveNotifications,
    id,
    insertedAt,
    streamer {
      username
    },
    updatedAt,
    user {
      username
    }
  }
}
```
We requested the same properties as before. Glimesh will send us a JSON format response.
```JS

{
  "data": {
    "followers": [
      {
        "hasLiveNotifications": false,
        "id": "16946",
        "insertedAt": "2021-02-06T01:04:42",
        "streamer": {
          "username": "Mytho"
        },
        "updatedAt": "2021-02-06T01:04:42",
        "user": {
          "username": "Heiwa"
        }
      },
      {
        "hasLiveNotifications": false,
        "id": "629",
        "insertedAt": "2020-08-09T16:35:55",
        "streamer": {
          "username": "Mytho"
        },
        "updatedAt": "2020-08-09T16:35:55",
        "user": {
          "username": "TheCat"
        }
      },
      and so on...

```

We can also request who a user is following. The query is nearly identical. The only thing we change is the parameter. Replace `streamerUsername` with `userUsername`.

```graphql

query {
  followers(userUsername:"Mytho") {
    hasLiveNotifications,
    id,
    insertedAt,
    streamer {
      username
    },
    updatedAt,
    user {
      username
    }
  }
}

```


Stuck with something? Talk to us in [Discord](https://discord.gg/Glimesh). We would be happy to help you!
