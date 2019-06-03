import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CustomerRow from './CustomerRow'

class CustomersList extends Component {

    constructor(props) {
        super(props);
        this.state = {customers: []};
    }

    componentDidMount() {
        this.getAllCutomers()
    }

    getAllCutomers() {
      axios.get('/customers')
        .then(response => {
          this.setState({ customers: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    handleDelete = id => {
      if(id && window.confirm('Are you sure to delete this customer?')) {
        axios.post('/deletecustomer', { Id: id })
          .then(response => {
            this.getAllCutomers()
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    };

    customerList() {
       let _this = this;
        return this.state.customers.map(function(currentCustomer, i) {
          return <CustomerRow customer={currentCustomer} onDelete={_this.handleDelete} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Customers List</h3>
                <Link className="btn btn-primary btn-lg" to={"/customers/create"}>Create customer</Link>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.customerList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CustomersList;