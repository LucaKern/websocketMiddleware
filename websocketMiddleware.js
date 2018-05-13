// import { SOCKET } from '../constants' -> 'SOCKET'
// import { socket } from '../../App' --> import the socket

export default ({ dispatch, getState }) => next => action => {
  if (action.type !== SOCKET) {
    return next(action);
  }

  socket.onmessage = event => {
      console.log(event.data);

  }
  socket.send(JSON.stringify({type: action.meta, payload: action.payload}))
}
