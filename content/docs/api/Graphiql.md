# GraphiQl (/API)

Glimesh has a built in webpage that we can use to test the API without a dev environment. For a graphic version see [Voyager](/api-docs/docs/api/voyager).

## Getting Started

Click on our [API page](https://glimesh.tv/api) to begin.  You will need to be logged in to Glimesh for this to work. When it is done loading you will see the page below.

![API Explorer](https://i.imgur.com/PxqwdEq.png)


## Navigation

The top part of the Explorer shows what queries you have saved. These are stored in the browser and will persist across restarts. If this is your first time viewing the Explorer you will only have 1 query shown.

![Explorer Query Selection](https://i.imgur.com/f7tGW7s.png)

Below that shows the connection URLs for Glimesh. The URL is correct, however the WS URL is not. More on that [below](#subscriptions). Glimesh handles your authentication for queries/mutations in the session so you don't need to add any headers to requests.

On the right you have the GraphiQL import/export buttons. You can move saved queries to other devices. You also have the option to reset the workspace and bring back previous queries.

The bottom left box is for structuring your queries/subscriptions. A basic query is shown below. The box has intellisense, press CTRL+Spacebar to view autocompletion possibilities. Below the query box is the variable section (You probably have to drag it up first!). Here you can add GraphQL variables for use in your queries.

![Explorer with query](https://i.imgur.com/oIF04uk.png)

The Explorer also has built in documentation. You can view it by clicking on the docs link on the right. These docs go over the basic queries/subs/mutations and show what data they return.

> The Explorer docs show all of the query specific info. This is useful if you are looking for something specific. The docs on this website are useful if you are looking for non API info (such as OAuth) or if you want to see some examples.

## Queries/Mutations

Queries/mutations function as expected. The data you request or modify will be shown on the right. Note that this is still scope protected, so you can only request data that you have access to.

![Query with result](https://i.imgur.com/gVvkl4l.png)

## Subscriptions

Subscriptions require modification to work in the Explorer. You need to change the WS URL to include a client ID. If you do not yet have a [dev app](/api-docs/docs/dev-app) you should create one [here](https://glimesh.tv/users/settings/applications).

Change the WS URL to the below URL.
```URL
wss://glimesh.tv/api/socket?client_id=YOUR_ID_HERE
```

Now you can subscribe to any topic on Glimesh! If you have any questions let us know in our discord!

