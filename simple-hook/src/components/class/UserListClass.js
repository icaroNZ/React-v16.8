import React, { Component } from 'react';
import axios from 'axios';

class UserListClass extends Component {
  state = { users: [] };

  async requestResources() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    this.setState({ users: response.data });
  }

  componentDidMount() {
    this.requestResources();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.resource === this.props.resource) {
      return;
    }
    this.requestResources();
  }
  render() {
    return (
      <div>
        <h2>User List</h2>
        <ul>
          {this.state.users.slice(0, 5).map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserListClass;
