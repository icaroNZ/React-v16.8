import React, { Component } from 'react';
import axios from 'axios';

class ResourceListClass extends Component {
  state = { resources: [] };

  async requestResources() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );
    this.setState({ resources: response.data });
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
        <h2>{this.props.resource}</h2>
        <ul>
          {this.state.resources.slice(0, 5).map((record) => (
            <li key={record.id}>{record.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ResourceListClass;
