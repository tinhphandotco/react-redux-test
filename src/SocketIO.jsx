import React from "react"
import io from 'socket.io-client';

class SocketIO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.socket = null;
  }

  componentDidMount() {
    this.socket = io('http://localhost:3001/notification', {
      forceNew: true,
      query: {
        userID: '5dd505519060653f24f8ec68'
      }
    });

    this.socket.on('connect', this.connected);
    this.socket.on('disconnect', this.disconnected);
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  connected = () => {
    console.log('connected')
    this.listen();
  }

  listen = () => {
    this.socket.on('new-notification', data => {
      console.log('new-notification', data);
    })
  }

  disconnected = () => {
    console.log('disconnected')
    this.socket.removeAllListeners([
      'register-userID'
    ]);
  }

  render() {
    return (
      <div>
        connect SocketIO
      </div>
    )
  }
}

export default SocketIO;