import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Customer = props => (
    <tr>
        <td>{props.customer.Name}</td>
        <td>{props.customer.Surname}</td>
        <td>{props.customer.Email}</td>
        <td>
            <Link to={"customers/edit/"+props.customer.Id}>Edit</Link>
        </td>
    </tr>
)

class CustomersList extends Component {

    constructor(props) {
        super(props);
        this.state = {customers: []};
    }

    componentDidMount() {
        axios.get('/customers')
            .then(response => {
                this.setState({ customers: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    customerList() {
        return this.state.customers.map(function(currentCustomer, i){
            return <Customer customer={currentCustomer} key={i} />;
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