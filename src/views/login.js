import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {

  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Email: '',
      Password: ''
    }
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

    const login = {
      username: this.state.Email,
      password: this.state.Password
    }

    axios.post('/login', login)
      .then(res => {
        console.log(res)
        localStorage.setItem('user', JSON.stringify({user: res.data}))

        this.props.history.push('/')
      });


    this.setState({
      Email: '',
      Password: ''
    })
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Login</h3>
        <form onSubmit={this.onSubmit}>
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
            <input type="submit" value="Login" className="btn btn-primary" />
            <Link className="ml-5" to={"/register"}>Register</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default Login;