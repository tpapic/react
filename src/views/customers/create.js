import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'react-bootstrap';

class Create extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTelephone = this.onChangeTelephone.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name: '',
            Surname: '',
            Email: '',
            Telephone: '',
            Cities: [],
            CityId: null
        }
    }

    componentDidMount() {
      this.getAllCities();
    }

    getAllCities() {
      axios.get('/cities')
        .then(response => {
          this.setState({ Cities: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    onChangeSurname(e) {
        this.setState({
            Surname: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        });
    }

    onChangeTelephone(e) {
        this.setState({
            Telephone: e.target.value
        });
    }

    onChangeCity(e) {
        this.setState({
            CityId: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log('Form submitted:', this.state);

        const newCustomer = {
            Name: this.state.Name,
            Surname: this.state.Surname,
            Email: this.state.Email,
            Telephone: this.state.Telephone,
            CityId: this.state.CityId
        }

        axios.post('/addcustomer', newCustomer)
            .then(res => { 
                console.log(res.data)
                alert('Succesful created customer');
            });
        
        
        this.setState({
            Name: '',
            Surname: '',
            Email: '',
            Telephone: '',
            CityId: null
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
              <Link className="btn btn-primary btn-lg" to={"/"}>Customer lists</Link>
                <h3>Create Customer</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Surname: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.Surname}
                                onChange={this.onChangeSurname}
                                />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input 
                                type="email" 
                                className="form-control"
                                value={this.state.Email}
                                onChange={this.onChangeEmail}
                                />
                    </div>
                    <div className="form-group">
                        <label>Telephone: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.Telephone}
                                onChange={this.onChangeTelephone}
                                />
                    </div>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Select city: </Form.Label>
                <Form.Control as="select" onChange={this.onChangeCity}>
                  <option>Choose...</option>
                  {
                    this.state.Cities.map((c, i) => {
                      return <option key={i} value={c.Id}>{c.Name}</option>
                    })
                  }
                </Form.Control>
              </Form.Group>
                    

                    <div className="form-group">
                        <input type="submit" value="Create Customer" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Create;