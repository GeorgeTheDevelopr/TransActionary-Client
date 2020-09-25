import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './SignIn.css';
import Context from '../../Context';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import { Redirect } from 'react-router-dom';

export default class SignIn extends React.Component {
  static contextType = Context;
  
  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { email, password } = ev.target;
    AuthApiService.postLogin({
      email: email.value,
      password: password.value,
    })
      .then((res) => {
        email.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.context.getData();
        this.props.history.push("/");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render(email) {
  const { user = {} } = this.context
  return !user.email ?  (
    <div>
      <Header className="App-header" />
      <Navbar />
      <main>
        <section className="body-content">
          <form className="signup-form" onSubmit={this.handleSubmitJwtAuth}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Johndoe123@gmail.com" required />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="jodo1234" minLength="6" maxLength="16" required />
            <input type="submit" id="login-btn" placeholder="Log In" value="Log In" />
          </form> 
          </section>

          <div className="login-cred">
            <p>Login Credentials:</p>
            <p>Email: thinkful@fakestudent.email.com</p>
            <p>Password: password</p>
          </div>
      </main>
      </div>
  ) : (<Redirect to="/" />);
}
}