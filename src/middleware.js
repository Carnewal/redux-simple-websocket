import { OPEN_WEBSOCKET, CLOSE_WEBSOCKET, SEND_WEBSOCKET_MESSAGE } from './actions';

export default const createSimpleWSMiddleware = (url, eventHandler) => {
  
  let socket

  return ({ dispatch }) => (next) => (action) => {
    const { type } = action;

    if(type === OPEN_WEBSOCKET) {

      this.socket = new WebSocket(url)
      this.socket.onopen = (event) => dispatch(eventHandler(event))
      this.socket.onerror = (event) => dispatch(eventHandler(event))
      this.websocket.onmessage = (event) => dispatch(eventHandler(event))
      this.websocket.onclose = (event) => dispatch(eventHandler(event))

    } else if (type === CLOSE_WEBSOCKET) {
      if(this.socket && this.socket.readyState === 1) {
        this.socket.close()        
      } 

    } else if( type === SEND_WEBSOCKET_MESSAGE) {
      if(this.socket && this.socket.readyState === 1) {
        this.socket.send()        
      } 
    } else {
      next(action)
    }

    return next(action)

  };
}