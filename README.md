# redux-simple-websocket

Simple [Redux](http://rackt.github.io/redux) middleware for websockets

## Installation

```bash
npm install --save redux-simple-websocket
```


## Actions

These are the actions you can dispatch for the middleware:

```javascript
import {openSocket, closeSocket, sendSocketMessage} from 'redux-simple-websocket'
```

#### Opening the socket

The middleware won't do anything until you've opened the socket. So let's do that first.

```javascript
dispatch(openSocket())
```

#### Sending a message

Once open, you can start sending messages.

```javascript
dispatch(sendSocketMessage({type: 'myMessage', data: 'yes'}))
```

#### Closing the socket

Of course you can also close the socket.

```javascript
dispatch(closeSocket('myReason'))
```


## Importing & Events

First import the middleware

```javascript
import createSimpleWSMiddleware from 'redux-simple-websocket'
```

Then add it to your redux middlewares as follows: 

```javascript
createSimpleWSMiddleware(url, eventHandler)
```
#### url
The url (with parameters) for the WebSocket to connect to

#### eventHandler
The middleware will dispatch whatever the eventhandler returns from the given onOpen, onClose, onMessage and onError event, so create an object like this: 

```javascript
const eventHandler = (event) => {
	switch(event.type) {
		case 'message':
			return myOnMessageAction(JSON.parse(event.data))
		case 'close':...
		case 'error':...
		case 'open':...
		case 'closing_error':...
		case 'sending_error':...
		default:
			return myUnhandledAction(event.type)
	}
}
```

An example of an action: 

```javascript
const myOnMessageAction = (data) => {
	return {
		type: 'NEW_MESSAGE_RECEIVED_FROM_WEBSOCKET',
		data
	}
}
```




