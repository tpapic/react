import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BillItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props
    return (
      <tr>
        <td>{props.item.Product.Name}</td>
        <td>{props.item.Product.ProductNumber}</td>
        <td>{props.item.TotalPrice}</td>
        <td>{props.item.Quantity}</td>
        <td>
          <button className="ml-1 btn btn-danger btn-sm" onClick={() => props.onDelete(props.item.Id)}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default BillItem;