var React = require("react");
var Default = require('./layout/default-login');


class userHome extends React.Component {

  render() {

      console.log("userhome-props:", this.props);
      // console.log("userhome-cookie", response.cookie);



    return (

    <Default title="Welcome!">
    <div class="jumbotron text-center">
        <div className="main-body">

          <h1>DEFT</h1>
          <h2>A Lab Management System</h2>
          <p>Solutions right at your doorstep</p>

        </div>
    </div>
    </Default>

    );
  }
}

module.exports = userHome;