# Creating a Chatbot with Typescript

This tutorial will show how to make a basic chatbot for Glimesh. You should have some experience in Javascript or Typescript. This tutorial is focused towards beginners so **as long as you have some programming experience you will be alright.** You will need the below items.

 - [NodeJS](https://nodejs.org/en/) (Recent version, 12+)
 - Code Editor ([VSCode](https://code.visualstudio.com/) works great with this project)
 - Glimesh account with a channel and a [Dev App](https://glimesh.tv/users/settings/applications)

The finished project can be found on Github [here](https://github.com/aMytho/Glimesh-Chatbot).  We suggest that you follow along and use it as a point of reference only if needed.

> Note that if future tutorials are created the repo may look different. You can always go back to the commit for each tutorial. This one is called "Getting Started".

If you have any questions let us know in the #dev-questions channel in Discord.

## Getting started

First we will create the package.json file for our chatbot. This file contains info about our project and our dependencies. In a **new folder** run the below command in your terminal.

```npm init -y```

This will create a basic `package.json` file as seen below.

> Your file will look slightly different depending on the projects git status and info entered (if `-y` is removed).

```json
{
	"name": "glimesh-chatbot",
	"version": "1.0.0",
	"description": "Tutorial for creating a chatbot on Glimesh.tv",
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
	},
	"repository": {
	"type": "git",
	"url": "git+https://github.com/aMytho/Glimesh-Chatbot.git"
	},
	"author": "Mytho",
	"license": "MIT",
	"bugs": {
		"url": "https://github.com/aMytho/Glimesh-Chatbot/issues"
	},
	"homepage": "https://github.com/aMytho/Glimesh-Chatbot#readme",
}
```

Now we can begin installing the required dependencies. Type the below commands into your terminal.

`npm install ws`

`npm install --save-dev typescript @types/ws`

> ws is a websocket client and server library. @types/ws is the type definitions for the websocket library. Typescript is the language we will be using.

Let's create our first typescript file for the project. Create a `index.ts`file in the root directory of the project.  Add the below line into the file.

```ts
/* index.ts */

console.log("Hello World");
```
> Don't copy the /* index.ts */ part. That is just to show which file the code belongs in! This will be applied to all files in this tutorial.

Now we need to run this file. Typescript files cannot be run natively. They need to be compiled to javascript. We will set up a tsconfig file to handle this for us. Create a file with the name `tsconfig.json` . Paste the below code into it. This sets the basic typescript options and tells the compiler which files and folders to compile.

> We don't have the lib folder yet, it will be created soon!

```json
{
	"compilerOptions": {
	"target": "ESNext",
	"outDir": "build",
	"module": "commonjs",
	"esModuleInterop": true,
	"forceConsistentCasingInFileNames": true,
	"strict": true,
	"skipLibCheck": true
	},
	"include": ["index.ts", "lib/"]
}
```

> Visit https://aka.ms/tsconfig.json to read more about this file!

Save the file.  We could run the compiler from the command line but it's easier to set it up as a npm script. Add the compile, dev, and start scripts as shown below. The script section of `package.json` should look like this.

```json
/* package.json */

"test": "echo \"Error: no test specified\" && exit 1",
"compile": "tsc",
"dev": "tsc --watch",
"start": "node build/index.js"
```

`package.json` should now closely mirror the below file.

```json
{
	"name": "glimesh-chatbot",
	"version": "1.0.0",
	"description": "Tutorial for creating a chatbot on Glimesh.tv",
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"compile": "tsc",
		"dev": "tsc --watch",
		"start": "node build/index.js"
	},
	"repository": {
		"type": "git",
		"url": "git+https://github.com/aMytho/Glimesh-Chatbot.git"
	},
	"author": "Mytho",
	"license": "MIT",
	"bugs": {
		"url": "https://github.com/aMytho/Glimesh-Chatbot/issues"
	},
	"homepage": "https://github.com/aMytho/Glimesh-Chatbot#readme",
	"devDependencies": {
		"@types/ws": "^8.2.0",
		"typescript": "^4.4.4"
	},
	"dependencies": {
		"ws": "^8.2.3"
	}
}
```

This adds 3 scripts.
- **compile** will compile all of the Typescript to Javascript once.
- **dev** will compile all the code and recompile files automatically as changes are saved.
- **start** will run our project. *We have to compile the JS files first!*

Let's compile the file and run it.  Enter the below lines into the terminal one after the other.

`npm run compile`

`npm run start`

This should compile the file and then output `Hello World` to the console. We should also run our `dev` script and ensure that it works.

`npm run dev`

While its running modify `index.ts` as shown below. Save the file.

```js
/* index.ts */

console.log("Hello Glimesh");
```

The file will be recompiled when saved because the `dev` script is running. In a new terminal window run `npm run start` . This will run the compiled file.

> It is common to have 2 terminal windows open. One runs the dev script in the background and the other is for manually runs your scripts. You can also use auto-reload tools such as [nodemon](https://www.npmjs.com/package/nodemon).

Now that we have a proper dev env setup we can start to build our bot.

## Authentication

All projects that use the Glimesh API require some form of authentication. Glimesh needs to know which project is making API requests. There are many different methods to authenticate our chatbot but we will use [client credentials](https://glimesh.github.io/api-docs/docs/authentication/accesstoken/clientcredentials/). We are using this method because we are the only people who will view our source code. It is also the easiest form of auth.

We will start by creating a module to handle all auth related code. Create a folder called `lib`. In this folder create a file called `auth.ts`. Fill it with the data shown below.

```ts
/* lib/auth.ts */

// File handles all auth functions.
import {readFile} from "fs/promises"
import {join} from  "path"
const axios:typeof import("axios").default = require('axios').default;
console.log("Auth Dependencies loaded!");
```

**readFile** is a function to read a specific file asynchronously. This will read our auth file when we create one.
**join** is a function to combine file paths. This will help us to locate our auth file.
**axios** is a library to make HTTP requests. We will send our auth information to Glimesh using this library.

**Notice the error that shows up on the line that imports axios.** This is because Axios is not installed by default. We need to add it to our dependencies. Run the below line in your terminal.

`npm install axios`

> You can install any NPM library this way!

We also need a place to store our auth info (clientId / secretId). It is not wise to include your secretId in your source code. We will make a dedicated json file to store the auth info. We will also add a reference to it in the .gitignore file. This prevents it from being included in commit history.

> If you want even more security you can do this through env variables instead of an auth.json file.

Create the files shown below in the root of the project.

**auth.json**

Replace your client ID and client secret as shown below. If you do not yet have a developer application you can get one [here](https://glimesh.tv/users/settings/applications/new).
```json
{
	"clientId": "YOUR ID HERE",
	"secretId": "YOUR SECRET ID HERE"
}
```

**.gitignore**

This may already be created. If so just add the lines to the bottom of the file.  If not create the file. This prevents git from commiting our auth code and generated files.
```git
# Ignore our credentials
auth.json

# Ignore our js built files
build/
```

Now we need to import the auth info so we can send it to Glimesh. We will create a variable that mirrors the structure from the auth file. We also create a function to read the auth file and a function to request an access token from Glimesh. These will both be imported and called from *index.ts*. Add the below lines to the auth file.

```ts
/* lib/auth.ts */
async function readAuthInfo(): Promise<AuthFile | false> {
	try {
		const path = join(__dirname, "..", "..", "auth.json");
		let data = await readFile(path);
		let authData = data.toString();
		return JSON.parse(authData);
	} catch(e) {
		console.log("Error getting auth info", e);
		return false
	}
}

async function getAccessToken(client: string, secret: string) {
	try {
		const URL = `https://glimesh.tv/api/oauth/token?grant_type=client_credentials&client_id=${client}&client_secret=${secret}&scope=chat public`;
		let data = await axios.post(URL);
		let tokenInfo = data.data as ClientCredentialsResult;
		console.log(tokenInfo);
		return tokenInfo.access_token
	} catch (e) {
		console.log(e);
		return false
	}
}

interface AuthFile {
	clientId: string;
	secretId: string;
}

/**
* Info from a client cred request.
*/
interface ClientCredentialsResult {
	access_token: string,
	created_at: string,
	expires_in: number,
	refresh_token: null,
	scope: string,
	token_type: string
}

export {getAccessToken, readAuthInfo}
```

This is a lot of code!
Let's start with the first function `readAuthInfo()`. This is an async function so it returns a promise. It tries to read the auth file and then returns a JSON parsed version of the auth data. This lets us easily access the properties. This function will return false if anything goes wrong.

The next function `getAccessToken()` returns a Glimesh access token. It requires our client and secret ID to be passed to it as parameters. We send a HTTP POST request to Glimesh and wait for the result. If all goes well we will receive an access token.

> Note the type defs on the bottom. These provide autocompletion for our data. They are removed at runtime.

Now we can import the functions and run them to get an access token. Add the lines to `index.ts`.

```ts
/* index.ts */

import { getAccessToken, readAuthInfo } from  "./lib/auth";

let token = "";
async function authenticate() {
	let authInfo = await readAuthInfo();
	if (authInfo) {
		let accessToken = await getAccessToken(authInfo.clientId, authInfo.secretId);
		return accessToken
	}
}

let waitForAuth = authenticate();
waitForAuth.then(data => {
	console.log(data);
	// Make sure everything worked correctly.
	if (data && typeof data == "string") {
		token = data;
	}
})
```

First we define a token variable. This will hold our access token when we receive it. Then we read the auth file and use it to request a token. When we receive the token we set our token variable equal to it. We can now connect to the API!

## Connecting to Chat

We will create a function `connectToGlimesh` to connect to chat and add several listeners. We will also make a module for parsing data and a module for running commands. This helps to keep our code organized. Add the following lines to the top of `index.ts`.

```ts
/* Top of index.ts */
import WebSocket from "ws"
```


```ts
/* index.ts */

async function connectToGlimesh(token: string) {
	console.log("Trying to connect to the Glimesh API.");
	let connection = new WebSocket(`wss://glimesh.tv/api/socket/websocket?vsn=2.0.0&token=${token}`);

	// Add listeners.
	connection.on("open", (data: any) => {
		console.log("Connected to Glimesh.");
		// Connect to phoenix websocket
		connection.send('["1","1","__absinthe__:control","phx_join",{}]');
		// Join a chat and listen for messages
		connection.send('["1","2","__absinthe__:control","doc",{"query":"subscription{ chatMessage(channelId: 6) { user { username avatar } message } }","variables":{} }]');
		// Send a heartbeat every 30 sec so glimesh knows we still exist
		setInterval(() => {
			connection.send('["1","3","phoenix","heartbeat",{}]');
		}, 30000)
	})

	connection.on("close", (closure:any) => {
		console.log(`Connection was closed.`);
		console.log(closure);
	})

	connection.on("error", (err:any) => {
		console.log("Connection encountered an error! This will likely disconnect and fire the close event.");
		console.log(err);
	})

	connection.on("message", (data: Buffer) => {
		console.log(data.toString());
	})
}
```

This function needs to run once we receive our token. Call the function below the `token = data` line. The `waitForAuth` callback function should look like the code below.

```ts
/* index.ts */

waitForAuth.then(data => {
	console.log(data);
	// Make sure everything worked correctly.
	if (data && typeof data == "string") {
		token = data;
		// Now that we have a token we can connect to chat!
		connectToGlimesh(token);
	}
})
```

The function `connectToGlimesh` will connect us to the Glimesh websocket server. Once connected we add event listeners to the `connection` variable. They will run whenever the specified event occurs. When the connection is completed we send a few packets to the server.

Connects to the internal Phoenix endpoint.
```ts
connection.send('["1","1","__absinthe__:control","phx_join",{}]');
```

Connects to a channel with a specified ID. (We will explain this later). Subscribes to new chat messages and asks for the message and the user's name and avatar.
```ts
connection.send('["1","2","__absinthe__:control","doc",{"query":"subscription{ chatMessage(channelId: 6) { user { username avatar } message } }","variables":{} }]');
```
Sends a heartbeat to Glimesh every 30 seconds. This let's Glimesh know your connection still exists.
```ts
setInterval(() => {
	connection.send('["1","3","phoenix","heartbeat",{}]');
}, 30000)
```


This will complete the chat connection and send us chat messages on the specified ID. If you know your channel ID you can add it to the above code replacing 6 with your ID. If you do not know your ID you can head to [/API](https://glimesh.tv/api) and make the below query in the editor replacing Mytho with your channel. It will return the ID of your channel.

```graphql
query {
  channel(username: "Mytho") {
    id
  }
}
```

> You don't need any special permission to listen for chat messages. Any access token or client ID can listen to any channel. Once you complete this tutorial have a look at [listening to every channel at once](/api-docs/docs/chat/projects/sitewidesubscription/).

Save and run the file. It should connect to chat and listen for messages. Try sending one! It will also send you a heartbeat every 30 seconds.

> Make sure the file is compiled before you run it!

### Handling Incoming Data

Now that we have messages we need to parse the incoming data and make it check for commands. Create the 2 files shown below.

Responsible for handling all data from Glimesh (not just chatMessages) `lib/packet.ts`

Responsible for scanning messages and running commands. `lib/command.ts`

Add the below code to `lib/packet.ts`

```ts
/* lib/packet.ts */

function parsePacket(packet: any) {
	if (packet[1] == 1) {
		// Its the connection response, do nothing.
		return false
	} else if (packet[1] == 2) {
		// Glimesh confirming our chat message subscription.
		return false
	} else if (packet[1] == 3) {
		// Its a heartbeat. We can ignore it.
		return false
	} else if (packet[1] == 4) {
		// Its a response to a message we sent. We don't respond to those.
		return false
	} else {
		// Its a chat message!
		return packet[4].result.data.chatMessage.message
	}
}

export {parsePacket}
```

This creates a function to parse the data from Glimesh. We only return data if the packet is a chatmessage. This ignores heartbeats and all other data. If you want to add the ability to make queries from the websocket you would need to modify this function or use the same first 2 values as the chatMessage query. We will not be covering that in this doc.

### Handling Commands

We also need to add the code to handle commands.  Add the following to `lib/command.ts`

```ts
/* lib/command.ts */

function checkForCommand(message: string): string | false {
	let firstWord = message.split(" ")[0];
	for (let i=0; i < Commands.length; i++) {
		if (Commands[i].cmdName == firstWord) {
			return  Commands[i].cmdMessage;
		}
	}
	return false
}

const Commands:Command[] = [
	{
		cmdName:  "!example",
		cmdMessage:  "Hello World!"
	}
]

type Command = {
	cmdName: string;
	cmdMessage: string
}

export { checkForCommand }
```

This file adds a few things.
We define a `Command` type. This provides type safety and handy autocompletion. We also create the `Commands` variable. This holds all of our commands. In our case we added the command `example`. Feel free to add as many commands as you want in the above format. We also define a function to scan for the command and return the message if it finds a match.

> Although adding commands in the code is fine for this example in a real scenario you would want some sort of data storage. A JSON file or small database would work well.

We need to run the function we created in the last 2 files. Import them at the top of `index.ts`

```js
import { checkForCommand } from "./lib/command";
import { parsePacket } from "./lib/packet";
```

Call them in the websocket message handler function. It should look like the code below.

```ts
/* index.ts */

connection.on("message", (data: any) => {
	let glimeshData = data.toString();
	console.log(glimeshData.toString());
	let message = parsePacket(JSON.parse(glimeshData));
	if (message) {
		let command = checkForCommand(message);
		if (command) {
			sendMessage(command);
		}
	}
})
```

This checks for a message and if it exists it checks for a command. If the command exists the command message is returned. We need to make the `sendMessage` function so we can talk to chat. Add the following function just below the message handler function. (It must be within the `connectToGlimesh` function. Replace 6 with your channel ID.

```ts
function sendMessage(message: string) {
	let query = `mutation {createChatMessage(channelId: 6, message: {message: "${message}"}) { message }}`
	let packet = [
		"1", "4", "__absinthe__:control", "doc",
		{
			query: query,
			variables: {}
		}
	]
	console.log(JSON.stringify(packet))
	connection.send(JSON.stringify(packet))
}
```

Now we call this function if a command is triggered. Whenever a command is triggered the message of the command is sent back to chat.


Congratulations! You now have a fully functioning chatbot. You can continue to add commands in the format shown.

What next?

> Add a dedicated database to store commands. Small databases such as [NEDB](https://www.npmjs.com/package/nedb) and [SQLite](https://www.npmjs.com/package/sqlite3) work well for this.  You would need to add a way to programmatically add and edit commands in the database.
> Add modules for storing user data (watch time, points, etc).
> Add a web panel to modify and monitor the bot (advanced).

Questions?

Ask your questions in the dev-questions channel in discord. We will try to help with any issue provided the project is Glimesh related.