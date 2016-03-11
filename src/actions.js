
export const OPEN_SOCKET = '[RSW]open';
export const CLOSE_SOCKET = '[RSW]close';
export const SEND_SOCKET_MESSAGE = '[RSW]send'

export const openSocket = () => {
  return {
    type: OPEN_SOCKET,
    onMessage,
  };
}

export function closeSocket = (reason) => {
  return {
    type: CLOSE_SOCKET,
    reason,
  };
}

export function sendSocketMessage = (message) => {
  return {
    type: SEND_SOCKET_MESSAGE,
    message,
  };
}


