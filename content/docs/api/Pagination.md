
# API Pagination

Some fields in the API are paginated. We have to sort through the pages to get the data we requested. Glimesh follows the GraphQL pagination spec.

> GraphQL pagination can be found [here](https://graphql.org/learn/pagination/)

## Connection, Edges, and Nodes

Pagination is used when the data requested is too large to send to the user. Take the below query as an example. This query would return the ID of all the users on the site. This would take a long time for Glimesh to get the data and would be a large payload to send.

```graphql
query {
  users {
    id
  }
}
# Above query will not work :(
```

Instead of sending all the users, Glimesh sends us a UserConnection. This contains data on how to get the data we requested.

> Note that each paginated field has its own Connection type. They always correspond to the field requested. Since we queried users we received a UserConnection

### Connections

Connections contain a count of all the edges, the edges themselves, and a pageInfo. They help us get the data we requested, and show us how much data we can paginate through.

```graphql
users {
  count, # How many edges exist on this query
  edges {}, # Some edges that match the query
  pageInfo {} # pageInfo containing info on the page returned
}
```

The count returns how many edges exist **based on your query**. This does not return the total amount of edges. For example, if you ask for the first 5 results you will have a count of 5, even though the total amount of edges is far more.

### Edges

Each edge contains a cursor and a node. The cursor is a string of text that identifies the edge. The node is the data on that edge. Each node has 1 item we queried (in this case a user).


```graphql
edges {
  cursor,# Unique ID that identifies the node
  node {id, username} # The node contains data that we requested
}
```

### PageInfo

A PageInfo object exists on every connection. They contain an end and start cursor, as well as a hasNextPage and hasPreviousPage. Pageinfo can be used to determine if there is any more data to paginate through.

> Note that the next and previous are determined by the first item returned, not the last.

```graphql
pageInfo {
  endCursor, # ID of the last cursor for the connection
  hasNextPage, # bool
  hasPreviousPage, # bool,
  startCursor # ID of the first cursor for the collection
}
```
## Paginating Through Data

Now that we know how pagination works, let's get the 5 most recent users and the first 5 users on Glimesh. All the necessary queries are posted below, but you will need to run them in your own project or use a graphql explorer.

First we start by making a query to get the first 5 users. We can query more at a time, but for this tutorial 5 will suffice. We also ask for the cursor of each edge.

{{< tabs "first5" >}}
{{< tab "Request" >}}

```graphql
query {
	users(first: 5) {
		edges {
			cursor
			node {
				id
				username
			}
		}
	}
}
```
{{< /tab >}}
{{< tab "Result" >}}
```json
{
    "data": {
        "users": {
            "edges": [
                {
                    "cursor": "YXJyYXljb25uZWN0aW9uOjA=",
                    "node": {
                        "id": "1",
                        "username": "clone1018"
                    }
                },
                {
                    "cursor": "YXJyYXljb25uZWN0aW9uOjE=",
                    "node": {
                        "id": "2",
                        "username": "IKAROS"
                    }
                },
                {
                    "cursor": "YXJyYXljb25uZWN0aW9uOjI=",
                    "node": {
                        "id": "3",
                        "username": "Kristoff"
                    }
                },
                {
                    "cursor": "YXJyYXljb25uZWN0aW9uOjM=",
                    "node": {
                        "id": "4",
                        "username": "Ember"
                    }
                },
                {
                    "cursor": "YXJyYXljb25uZWN0aW9uOjQ=",
                    "node": {
                        "id": "5",
                        "username": "Heiwa"
                    }
                }
            ]
        }
    }
}
```
{{< /tab >}}
{{< /tabs >}}

Now we have the first 5 users. Since we also have the cursors of each edge we could query the next 5. Take the below query as an example. We still ask for the first 5 but we request it **after** the 5th edge from the last query.


{{< tabs "next5" >}}
{{< tab "Request" >}}

```graphql
query {
	users(first: 5, after: "YXJyYXljb25uZWN0aW9uOjQ=" ) {
		edges {
			cursor
			node {
				id
				username
			}
		}
	}
}
```
{{< /tab >}}
{{< tab "Result" >}}
```json
{
    "data": {
        "users": {
            "edges": [
                {
                    "cursor": "YXJyYXljb25uZWN0aW9uOjU=",
                    "node": {
                        "id": "6",
                        "username": "Bubdrum"
                    }
                },
                {
                    "cursor": "YXJyYXljb25uZWN0aW9uOjY=",
                    "node": {
                        "id": "7",
                        "username": "Deicefenrir"
                    }
                },
                {
                    "cursor": "YXJyYXljb25uZWN0aW9uOjc=",
                    "node": {
                        "id": "8",
                        "username": "Umbreo"
                    }
                },
                {
                    "cursor": "YXJyYXljb25uZWN0aW9uOjg=",
                    "node": {
                        "id": "9",
                        "username": "UnTubular"
                    }
                },
                {
                    "cursor": "YXJyYXljb25uZWN0aW9uOjk=",
                    "node": {
                        "id": "10",
                        "username": "Asterisk"
                    }
                }
            ]
        }
    }
}
```
{{< /tab >}}
{{< /tabs >}}

Now we have the next 5 users. You can use this to move through the entire database. However, we wanted the last 5 users. We *could* continue in this way (although we would query more than 5 at a time!) but there is an easier way. We can use the **last** parameter. Simply replace **first** with **last** from the first query.


{{< tabs "getLast" >}}
{{< tab "Request" >}}
```graphql
query {
	users(last: 5) {
		edges {
			cursor
			node {
				id
				username
			}
		}
	}
}
```
{{< /tab >}}
{{< tab "Result" >}}
```json
{
    "data": {
        "users": {
            "edges": [
                {
                    "cursor": "YXJyYXljb25uZWN0aW9uOjQyMDc1",
                    "node": {
                        "id": "42336",
                        "username": "Emad"
                    }
                },
                {
                    "cursor": "YXJyYXljb25uZWN0aW9uOjQyMDc2",
                    "node": {
                        "id": "42337",
                        "username": "Mr_Emotional"
                    }
                },
                {
                    "cursor": "YXJyYXljb25uZWN0aW9uOjQyMDc3",
                    "node": {
                        "id": "42338",
                        "username": "BruteMouse"
                    }
                },
                {
                    "cursor": "YXJyYXljb25uZWN0aW9uOjQyMDc4",
                    "node": {
                        "id": "42339",
                        "username": "Bruhh"
                    }
                },
                {
                    "cursor": "YXJyYXljb25uZWN0aW9uOjQyMDc5",
                    "node": {
                        "id": "42340",
                        "username": "VeganGaymer"
                    }
                }
            ]
        }
    }
}
```
{{< /tab >}}
{{< /tabs >}}

This will return the 5 most recent users. Glimesh adds users in the order that they were created, so these users have the highest user IDs.

> Note that you will get a different result. Users have been added since this doc was written, so you will get different users.

We can also request pageInfo with each paginated query. This will tell us if there is another page after or before our result, and show us the first and last cursor of our result. For our queries this wasn't necessary, but if you plan to paginate through a large amount of users it is very helpful. The below query gets 5 users before the last 5 users with the **before** parameter.

{{< tabs "getBeforeLast" >}}
{{< tab "Request" >}}
```graphql
query {
    users(last: 5, before: "YXJyYXljb25uZWN0aW9uOjQyMDc1") {
        edges {
            cursor
            node {
                id
                username
            }
        },
        pageInfo {
            endCursor,  # ID of the last cursor for the result
            hasNextPage, # bool
            hasPreviousPage,  # bool,
            startCursor  # ID of the first cursor for the result
        }
    }
}
```
{{< /tab >}}
{{< tab "Result" >}}
```json
{
    "data": {
        "users": {
            "edges": [
                {
                    "cursor": "YXJyYXljb25uZWN0aW9uOjQyMDcw",
                    "node": {
                        "id": "42331",
                        "username": "FsnGaming"
                    }
                },
                {
                    "cursor": "YXJyYXljb25uZWN0aW9uOjQyMDcx",
                    "node": {
                        "id": "42332",
                        "username": "ajsdlasdasd"
                    }
                },
                {
                    "cursor": "YXJyYXljb25uZWN0aW9uOjQyMDcy",
                    "node": {
                        "id": "42333",
                        "username": "dfhdhsad"
                    }
                },
                {
                    "cursor": "YXJyYXljb25uZWN0aW9uOjQyMDcz",
                    "node": {
                        "id": "42334",
                        "username": "dqbyudvbqhdbvzh"
                    }
                },
                {
                    "cursor": "YXJyYXljb25uZWN0aW9uOjQyMDc0",
                    "node": {
                        "id": "42335",
                        "username": "Elitex"
                    }
                }
            ],
            "pageInfo": {
                "endCursor": "YXJyYXljb25uZWN0aW9uOjQyMDc0",
                "hasNextPage": true,
                "hasPreviousPage": true,
                "startCursor": "YXJyYXljb25uZWN0aW9uOjQyMDcw"
            }
        }
    }
}
```
{{< /tab >}}
{{< /tabs >}}

The same process applies for all paginated fields. If you have any questions be sure to let us know in discord!