import React, { Component } from 'react';
import ResourceListClass from './ResourceListClass';
import UserListClass from './UserListClass';
class AppClass extends Component {
  state = { resource: 'posts' };
  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.setState({ resource: 'posts' })}>
            Posts
          </button>
          <button onClick={() => this.setState({ resource: 'todos' })}>
            Todos
          </button>
        </div>
        <UserListClass />
        <ResourceListClass resource={this.state.resource} />
      </div>
    );
  }
}

export default AppClass;
