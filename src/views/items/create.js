import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'react-bootstrap';



class Create extends Component {

  constructor(props) {
    super(props);

    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeSubcategory = this.onChangeSubcategory.bind(this);
    this.onChangeProduct = this.onChangeProduct.bind(this);
    this.onChangeTotalPrice = this.onChangeTotalPrice.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    let billId = this.props.match.params.billId

    this.state = {
      BillId: billId,
      Quantity: '',
      Categories: [],
      Subcategories: [],
      Products: [],
      ProductId: null,
      TotalPrice: ''
    }
  }

  componentDidMount() {
    this.getAllCategories();
  }

  getAllCategories() {
    axios.get('/categories')
      .then(response => {
        this.setState({ Categories: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  getAllSubCategories(subId) {
    axios.get('/subcategories/' + subId)
      .then(response => {
        this.setState({ Subcategories: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  getAllProducts(prodId) {
    axios.get('/products/' + prodId)
      .then(response => {
        this.setState({ Products: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeQuantity(e) {
    this.setState({
      Quantity: e.target.value
    });
  }

  onChangeCategory(e) {
    this.getAllSubCategories(e.target.value)
  }

  onChangeSubcategory(e) {
    this.getAllProducts(e.target.value)
  }

  onChangeProduct(e) {
    this.setState({
      ProductId: parseInt(e.target.value)
    });
  }

  onChangeTotalPrice(e) {
    this.setState({
      TotalPrice: e.target.value
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

    const newItem = {
      Quantity: this.state.Quantity,
      BillId: this.state.BillId,
      ProductId: String(this.state.ProductId),
      TotalPrice: this.state.TotalPrice
    }

    axios.post('/additem', newItem)
      .then(res => {
        console.log(res.data)
        alert('Succesful created item');
    });


    this.setState({
      Quantity: '',
      Products: [],
      ProductId: null,
      TotalPrice: 'null'
    })
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <Link className="btn btn-primary btn-lg" to={"/customers/bills/" + this.state.BillId + "/items"}>Bills items</Link>
        <h3>Create Bill</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Quantity: </label>
            <input type="number"
              className="form-control"
              value={this.state.Quantity}
              onChange={this.onChangeQuantity}
            />
          </div>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select category: </Form.Label>
            <Form.Control as="select" onChange={this.onChangeCategory}>
              <option>Choose...</option>
              {
                this.state.Categories.map((c, i) => {
                  return <option key={i} value={c.Id}>{c.Name}</option>
                })
              }
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select subcategory: </Form.Label>
            <Form.Control as="select" onChange={this.onChangeSubcategory}>
              <option>Choose...</option>
              {
                this.state.Subcategories.map((s, i) => {
                  return <option key={i} value={s.Id}>{s.Name}</option>
                })
              }
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select product: </Form.Label>
            <Form.Control as="select" onChange={this.onChangeProduct}>
              <option>Choose...</option>
              {
                this.state.Products.map((p, i) => {
                  return <option key={i} value={p.Id}>{p.Name}</option>
                })
              }
            </Form.Control>
          </Form.Group>

          <div className="form-group">
            <label>TotalPrice: </label>
            <input type="number"
              className="form-control"
              value={this.state.TotalPrice}
              onChange={this.onChangeTotalPrice}
            />
          </div>


          <div className="form-group">
            <input type="submit" value="Create Item" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

export default Create;