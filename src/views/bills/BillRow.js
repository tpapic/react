import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BillRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props
    return (
      <tr>
        <td>{props.bill.BillNumber}</td>
        <td>{props.bill.Seller.Name} {props.bill.Seller.Surname}</td>
        <td>
          <Link className="btn btn-secondary btn-sm" to={"/customers/bills/" + props.bill.Id + "/items"}>Items</Link>
          <button className="ml-1 btn btn-danger btn-sm" onClick={() => props.onDelete(props.bill.Id)}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default BillRow;