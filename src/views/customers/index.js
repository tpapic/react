import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CustomerRow from './CustomerRow';
import Pagination from '../../components/pagination';
import _ from 'lodash';
import { Form } from 'react-bootstrap';

class CustomersList extends Component {

    constructor(props) {
      super(props);

      this.state = {
        customers: [], 
        pageSize: 10, 
        currentPage: 1 
      }
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
       let customers = this.paginate(this.state.customers, this.state.currentPage, this.state.pageSize);
       return customers.map(function(currentCustomer, i) {
          return <CustomerRow customer={currentCustomer} onDelete={_this.handleDelete} key={i} />;
       })
    }

    paginate = (allItems, pageNumber, pageSize) => {
      const startIndex = (pageNumber - 1) * pageSize;
      return _(allItems)
        .slice(startIndex)
        .take(pageSize)
        .value();
    };

    handlePageChange = page => {
      this.setState({ currentPage: page });
    };

    onChangePageSize = e => {
      let pageParse = parseInt(e.target.value);
      this.setState({ pageSize: pageParse });
    }

    render() {
        return (
            <div>
                <h3>Customers List</h3>
                <Link className="btn btn-primary btn-lg" to={"/customers/create"}>Create customer</Link>
                <div className="row">
                  <Form.Group controlId="" className="per-page">
                    <Form.Label>Per page: </Form.Label>
                    <Form.Control as="select" onChange={this.onChangePageSize}>
                      <option>10</option>
                      <option>20</option>
                      <option>50</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="row justify-content-center customer">
                  <div className="col-sm-6">
                  <Pagination
                    itemsCount={this.state.customers.length}
                    pageSize={this.state.pageSize}
                    currentPage={this.state.currentPage}
                    onPageChange={this.handlePageChange}
                  />
                  </div>
                </div>

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