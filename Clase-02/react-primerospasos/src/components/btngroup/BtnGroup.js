import React, { Component } from 'react';
import Button from '../button/Button';

class BtnGroup extends Component {
  render() {
    return (
      <div className="btn-group-container">
        {this.props.collection.map(row => {
          return (
            <Button value={row.value} color={row.color} event={row.event} />
          );
        })}
      </div>
    );
  }
}

export default BtnGroup;
