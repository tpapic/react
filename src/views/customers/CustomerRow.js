import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CustomerRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props
    return (
      <tr>
        <td>{props.customer.Name}</td>
        <td>{props.customer.Surname}</td>
        <td>{props.customer.Email}</td>
        <td>{props.customer.CityName}</td>
        <td>{props.customer.StateName}</td>
        <td>
          <Link className="btn btn-secondary btn-sm" to={"customers/" + props.customer.Id + "/bills" }>Bills</Link>
          <button className="ml-1 btn btn-danger btn-sm" onClick={() => props.onDelete(props.customer.Id)}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default CustomerRow;