var React = require("react");
var Default = require('../layout/default');


class userHome extends React.Component {

  render() {

      console.log("userhome-props:", this.props);
      // console.log("userhome-cookie", response.cookie);



    return (

    <Default title="LMS - Tasks">
        <div className="top-msg">
          Welcome, <a href={'/profile/'+this.props.name}>{this.props.name}</a>!
        </div>

        <div className="main-body">

          <h1 className="userhome-h1"><b>Workspace</b></h1>
                <div id="userhome-h2">
                    <h2>Samples List</h2>
                    <button id="refresh-button">Refresh</button>
                    <div id="sample-header"></div>
                </div>
                <div id="userhome-todo">
                <h2>To-do List</h2>
                    <div id="todo-header"></div>
                </div>
        </div>

        <script src="/script-userhome.js"></script>
    </Default>
    );
  }
}

module.exports = userHome;