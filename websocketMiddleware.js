import { SOCKET } from '../constants'
import { socket } from '../../App'

export default ({ dispatch, getState }) => next => action => {
  if (action.type !== SOCKET) {
    return next(action);
  }

  socket.onmessage = event => {
      console.log(event.data);

  }
  socket.send(JSON.stringify({type: action.meta, payload: action.payload}))
}
