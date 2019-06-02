import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Name: '',
      Email: '',
      Password: '',
      CityId: null
    }
  }

  onChangeName(e) {
    this.setState({
      Name: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      Password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log('Form submitted:', this.state);

    const register = {
      username: this.state.Email,
      password: this.state.Password,
      name: this.state.Name
    }

    axios.post('/registeruser', register)
      .then(res => {
        this.props.history.push('login')
      });


    this.setState({
      Name: '',
      Email: '',
      Password: ''
    })
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Register</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.Name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.Email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.Password}
              onChange={this.onChangePassword}
            />
          </div>


          <div className="form-group">
            <input type="submit" value="Register" className="btn btn-primary" />
            <Link className="ml-5" to={"/login"}>Login</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default Register;