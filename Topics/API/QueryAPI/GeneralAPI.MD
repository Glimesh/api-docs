Glimesh uses a graphQL API.
This documentation and associated API is a work in progress.

API URL: https://glimesh.tv/api

API GraphQL Websocket URL: wss://glimesh.tv/api/socket?token={oauth_token}

OAuth Applications: https://glimesh.tv/users/settings/applications

You can access the API via your authenticated user, or via an OAuth Access Token.

image

schema {
  query: RootQueryType
  mutation: RootMutationType
}

type RootMutationType {
  """
  Create a stream
  """
  createStream(channelId: ID!): Stream

  """
  End a stream
  """
  endStream(channelId: ID!): Stream

  """
  Start a stream
  """
  startStream(channelId: ID!): Stream

  """
  Update a stream
  """
  updateStream(id: ID!): Stream
}

type RootQueryType {
  """
  List all categories
  """
  categories: [Category]

  """
  Query individual category
  """
  category(slug: String): Category

  """
  Query individual channel
  """
  channel(id: ID, streamKey: String, username: String): Channel

  """
  List all channels
  """
  channels: [Channel]

  """
  List all follows or followers
  """
  followers(streamerUsername: String, userUsername: String): [Follower]

  """
  Get yourself
  """
  myself: User

  """
  List all subscribers or subscribees
  """
  subscriptions(streamerUsername: String, userUsername: String): [Sub]

  """
  Query individual user
  """
  user(id: Int, username: String): User

  """
  List all users
  """
  users: [User]
}

"""
The `DateTime` scalar type represents a date and time in the UTC
timezone. The DateTime appears in a JSON response as an ISO8601 formatted
string, including UTC timezone ("Z"). The parsed date and time string will
be converted to UTC if there is an offset.
"""
scalar DateTime

"""
The `Naive DateTime` scalar type represents a naive date and time without
timezone. The DateTime appears in a JSON response as an ISO8601 formatted
string.
"""
scalar NaiveDateTime

enum ChannelStatus {
  LIVE
  OFFLINE
}

"""
Categories are the containers for live streaming content.
"""
type Category {
  id: ID

  """
  Name of the category
  """
  name: String

  """
  Parent category, if null this is a parent category
  """
  parent: Category

  """
  Slug of the category
  """
  slug: String

  """
  Parent Name and Name of the category in one string
  """
  tagName: String
}

"""
A channel is a user's actual container for live streaming.
"""
type Channel {
  category: Category
  chatRulesHtml: String
  chatRulesMd: String
  id: ID
  inaccessible: Boolean

  """
  The language a user can expect in the stream.
  """
  language: String
  status: ChannelStatus
  stream: Stream
  streamKey: String
  streamer: User!
  thumbnail: String

  """
  The title of the current stream, live or offline.
  """
  title: String
  user: User! @deprecated(reason: "Please use the streamer field")
}

"""
A follower is a user who subscribes to notifications for a particular channel.
"""
type Follower {
  hasLiveNotifications: Boolean
  id: ID
  insertedAt: NaiveDateTime!
  streamer: User!
  updatedAt: NaiveDateTime!
  user: User!
}


"""
A stream is a single live stream in, either current or historical.
"""
type Stream {
  avgChatters: Int
  avgViewers: Int
  category: Category!
  channel: Channel!
  countChatters: Int
  countViewers: Int
  endedAt: DateTime
  id: ID
  newSubscribers: Int
  peakChatters: Int
  peakViewers: Int
  resubSubscribers: Int
  startedAt: DateTime!

  """
  The title of the stream.
  """
  title: String
}

"""
A subscription is an exchange of money for support.
"""
type Sub {
  endedAt: DateTime
  id: ID
  insertedAt: DateTime!
  isActive: Boolean
  price: Int
  productName: String
  startedAt: DateTime!
  streamer: User!
  updatedAt: DateTime!
  user: User!
}

"""
A user of Glimesh, can be a streamer, a viewer or both!
"""
type User {
  avatar: String
  confirmedAt: NaiveDateTime

  """
  Exactly the same as the username, but with casing the user prefers
  """
  displayname: String
  id: ID

  """
  HTML version of the user's profile, should be safe for rendering directly
  """
  profileContentHtml: String

  """
  Markdown version of the user's profile
  """
  profileContentMd: String

  """
  Qualified URL for the user's Discord server
  """
  socialDiscord: String

  """
  Qualified URL for the user's Instagram account
  """
  socialInstagram: String

  """
  Qualified URL for the user's Twitter account
  """
  socialTwitter: String

  """
  Qualified URL for the user's YouTube account
  """
  socialYoutube: String

  """
  Lowercase user identifier
  """
  username: String

  """
  YouTube Intro URL for the user's profile
  """
  youtubeIntroUrl: String
}