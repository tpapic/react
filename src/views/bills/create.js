import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

class Create extends Component {

    constructor(props) {
        super(props);

        this.onChangeBillNumber = this.onChangeBillNumber.bind(this);
        this.onChangeSeller = this.onChangeSeller.bind(this);
        this.onChangeCreditCard = this.onChangeCreditCard.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

      let customerId = this.props.match.params.customerId

        this.state = {
            BillNumber: '',
            CustomerId: parseInt(customerId),
            Sellers: [],
            SellerId: null,
            CreditCards: [],
            CreditCardId: null,
            Comment: '',
            Date: null
        }
    }

    componentDidMount() {
      this.getAllSellers();
      this.getAllCreditCards();
    }

    getAllSellers() {
      axios.get('/sellers')
        .then(response => {
          this.setState({ Sellers: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    getAllCreditCards() {
      axios.get('/creditcards')
        .then(response => {
          this.setState({ CreditCards: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    onChangeBillNumber(e) {
        this.setState({
          BillNumber: e.target.value
        });
    }

    onChangeSeller(e) {
        this.setState({
          SellerId: parseInt(e.target.value)
        });
    }

    onChangeCreditCard(e) {
        this.setState({
          CreditCardId: parseInt(e.target.value)
        });
    }

    onChangeComment(e) {
        this.setState({
            Comment: e.target.value
        });
    }

    onChangeDate(date) {
      this.setState({
        Date: date
      });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log('Form submitted:', this.state);
        console.log(this.state.Date)

        const newBill = {
          BillNumber: this.state.BillNumber,
          CustomerId: this.state.CustomerId,
          SellerId: this.state.SellerId,
          CreditCardId: this.state.CreditCardId,
          Comment: this.state.Comment,
          Date: moment(this.state.Date).format('YYYY-MM-DD')
        }

      axios.post('/addbill', newBill)
            .then(res => { 
                console.log(res.data)
                alert('Succesful created bill');
            });
        
        
        this.setState({
          BillNumber: '',
          CustomerId: null,
          SellerId: null,
          CreditCardId: null,
          Comment: '',
          Date: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
              <Link className="btn btn-primary btn-lg" to={"/customers/" + this.state.CustomerId + "/bills"}>Bills lists</Link>
                <h3>Create Bill</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Bill number: </label>
                        <input  type="number"
                                className="form-control"
                                value={this.state.BillNumber}
                                onChange={this.onChangeBillNumber}
                                />
                    </div>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Select seller: </Form.Label>
                      <Form.Control as="select" onChange={this.onChangeSeller}>
                        <option>Choose...</option>
                        {
                    this.state.Sellers.slice(0, 50).map((s,i) => {
                            return <option key={i} value={s.Id}>{s.Name} {s.Surname}</option>
                          })
                        }
                      </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Select credit card: </Form.Label>
                      <Form.Control as="select" onChange={this.onChangeCreditCard}>
                        <option>Choose...</option>
                        {
                    this.state.CreditCards.slice(0, 50).map((cc,i) => {
                            return <option key={i} value={cc.Id}>{cc.CardNumber}</option>
                          })
                        }
                      </Form.Control>
                    </Form.Group>

                    <div className="form-group">
                      <label>Comment: </label>
                      <input type="text"
                        className="form-control"
                        value={this.state.Comment}
                        onChange={this.onChangeComment}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>Date bill: </label>
                      <div>
                  <DatePicker className="form-control"
                            selected={this.state.Date}
                            onChange={this.onChangeDate}
                            dateFormat="yyyy-MM-dd"
                            strictParsing
                          />
                      </div>
                    </div>
                    

                    <div className="form-group">
                        <input type="submit" value="Create Bill" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Create;