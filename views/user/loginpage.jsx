var React = require("react");
var Default = require('../layout/default-login');


class loginPage extends React.Component {

  render() {

      console.log("userhome-props:", this.props);
      // console.log("userhome-cookie", response.cookie);



    return (

    <Default title="Welcome Back!">
        <div className="main-body">
        <h2>HELLO AGAIN.</h2>
        <p>Please login into your account</p>
        <div className="form-div">
          <form className="user-form" method="POST" action="/users/account">
            <div className="user-attribute">
              <label>Username</label><input id="field-username" name="username" type="text" />
            </div>
            <div className="user-attribute">
              <label>Password</label><input id="field-pw" name="password" type="password" />
            </div>
            <input id="login-submit" name="submit" type="submit" />
          </form>
        </div>
        </div>
    </Default>

    );
  }
}

module.exports = loginPage;