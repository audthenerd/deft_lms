var React = require("react");
var Default = require('./layout/default');


class errorPage extends React.Component {

  render() {

    return (

    <Default title="DEFT - Your Test Methods Library">

        <div className="main-body">

          <h1>This username has been used! Please use another username.</h1>

          </div>
        <script src="/script-error.js"></script>
    </Default>

    );
  }
}

module.exports = errorPage;

