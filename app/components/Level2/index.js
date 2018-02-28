import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

class Level2 extends Component {
  render() {
    const {list, messages}    = this.props;
    const maplist = list.map((entry, index) => 
      <ListItem key={index}
              id={entry.id}
              title={entry.title}
              post={entry.post} />
      )

    return (
      <table>
      <thead>
      <tr> 
        <th>Id</th>
        <th>Title</th>
        <th>Post</th>
      </tr>
      </thead>
      <tbody>
        {maplist}
      </tbody>
      
      </table>
    )

    function ListItem(props) {
      return (<tr><td>{props.id}</td>
              <td>{props.title}</td>
              <td>{props.post}</td></tr>);
    }
  }
}

export default Level2;
