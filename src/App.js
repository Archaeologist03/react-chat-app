import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Sidebar } from './containers/SideBar';
// import { MessagesList } from './containers/MessagesList';
// import { AddMessage } from './containers/AddMessage';


class App extends Component {
  render() {
    return (
      <div id="container">
        <aside id="sidebar">Users</aside>
        <section id="main">
          {/* <MessagesList />
          <AddMessage /> */}
          {/* <section id="messages-list">Messages List</section>
          <section id="new-message">New Message</section> */}
        </section>
      </div>
    );
  }
}

export default App;
