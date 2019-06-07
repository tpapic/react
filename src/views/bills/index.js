import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BillRow from './BillRow'

class BillsList extends Component {

    constructor(props) {
        super(props);

        let customerId = this.props.match.params.customerId

        this.state = { customerId: customerId, bills: [] }
    }

    componentDidMount() {
        this.getAllCustomerBills()
    }

    getAllCustomerBills() {
      axios.get('/customerbills/' + this.state.customerId)
        .then(response => {
          this.setState({ bills: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    handleDelete = id => {
      if(id && window.confirm('Are you sure to delete this bill?')) {
        axios.post('/deletebill', { Id: id })
          .then(response => {
            this.getAllCustomerBills()
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    };

    billsList() {
       let _this = this;
        return this.state.bills.map(function(currentBill, i) {
          return <BillRow bill={currentBill} onDelete={_this.handleDelete} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Bills List</h3>
                <Link className="btn btn-primary btn-lg" to={"/customers/" + this.state.customerId +"/bills/create"}>Create bill</Link>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Bill number</th>
                            <th>Seller</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.billsList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BillsList;