export default class Api {
    constructor() {
      this.BASE_URL = 'http://snu-chat2.herokuapp.com';
    }
  
    makeHeaders(auth=false) {
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      };
      if(auth)
        headers.Authorization = `Key ${localStorage.getItem('key')}`;
      return headers;
    }

    signup(name) {
      return fetch(this.BASE_URL + '/login', {
        method: 'POST',
        headers: this.makeHeaders(),
        body: `name=${name}`
      }).then(res => res.json());
    }
    getRooms() {
      return fetch(this.BASE_URL + '/rooms').then(res => res.json());
    };
  
    createRoom(name) {
      return fetch(this.BASE_URL + '/rooms', {
        method: 'POST',
        headers: this.makeHeaders(true),
        body: `name=${name}`
      }).then(res => res.json());
    }
  
    getRoom(roomId) {
      return fetch(`${this.BASE_URL}/rooms/${roomId}`).then(res => res.json());
    };

    getChats(roomId) {
      return fetch(`${this.BASE_URL}/rooms/${roomId}/chats`).then(res => res.json());
    }

    sendMessage(roomId, message) {
      return fetch(`${this.BASE_URL}/rooms/${roomId}/chats`, {
        method: 'POST',
        headers: this.makeHeaders(true),
        body: `message=${message}`
      }).then(res => res.json());
    }
    
  }
