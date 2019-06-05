import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BillItem from './BillItem'

class BillItems extends Component {

  constructor(props) {
    super(props);

    let billId = this.props.match.params.billId

    this.state = { billId: billId, items: [] }
  }

  componentDidMount() {
    this.getAllCustomerBills()
  }

  getAllCustomerBills() {
    axios.get('/billitems/'+ this.state.billId)
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  handleDelete = id => {
    if (id && window.confirm('Are you sure to delete this item?')) {
      axios.post('/deletebill', { id: String(id) })
        .then(response => {
          this.getAllCustomerBills()
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  };

  billItems() {
    let _this = this;
    return this.state.items.map(function (currentItem, i) {
      return <BillItem item={currentItem} onDelete={_this.handleDelete} key={i} />;
    })
  }

  render() {
    return (
      <div>
        <h3>Bills List</h3>
        <Link className="btn btn-primary btn-lg" to={"/customers/bills/" + this.state.billId + "/items/create"}>Create item</Link>
        <table className="table table-striped" style={{ marginTop: 20 }} >
          <thead>
            <tr>
              <th>Product name</th>
              <th>Prodcut number</th>
              <th>Total price</th>
              <th>Quatity</th>
            </tr>
          </thead>
          <tbody>
            {this.billItems()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default BillItems;