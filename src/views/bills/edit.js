import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BillItem from './BillItem'
import { Button, Modal } from 'react-bootstrap';

class Edit extends Component {

  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    let billId = this.props.match.params.billId

    this.state = {billId: billId, items: [], show: false}
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentDidMount() {
    axios.get('/billitems/' + this.state.billId)
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  billsList() {
    let _this = this;
    return this.state.items.map(function (currentItem, i) {
      return <BillItem item={currentItem} onDelete={_this.handleDelete} key={i} />;

    })
  }

  render() {
    return (
      <div>
        <h3>Bill number: { this.state.billId }</h3>
        
        <Button variant="primary" onClick={this.handleShow}>
          Add item
        </Button>

        <table className="table table-striped" style={{ marginTop: 20 }} >
          <thead>
            <tr>
              <th>Bill number</th>
              <th>Seller</th>
            </tr>
          </thead>
          <tbody>
            {this.billsList()}
          </tbody>
        </table>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default Edit;