export const socketConnect = url => ({type: 'SOCKET_CONNECT', url})
export const socketDisconnect = url => ({type: 'SOCKET_DISCONNECT', url})