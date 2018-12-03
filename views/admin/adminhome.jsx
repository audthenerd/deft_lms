var React = require("react");
var Default = require('../layout/default');


class adminHome extends React.Component {

  render() {

      console.log("adminhome-props:", this.props);
      // console.log("userhome-cookie", response.cookie);


      let usersList = this.props.users.map(user => {
        return (
            <option value={user.id}>{user.username}</option>
        );
      })


    return (

    <Default title="LMS - Admin">

        <div className="top-msg">
          Welcome, <a href={'/profile/'+this.props.name}>{this.props.name}</a>!
        </div>

        <div className="main-body">

          <h1 className="admin-home">Administrator Workspace</h1>
          <div id="userhome-h2">
            <h2>Samples List</h2>
            <button id="refresh-button">Refresh</button>
            <div id="sample-header"></div>
        </div>
            <div id='calendar'></div>
            <div id="userhome-assign">
              <h2>Assign Tasks</h2>
              <div id="assign-header"></div>
               <div className="new-div">
                  <form className="assign-form" method="POST" action="/tests/assign">
                    <div className="sample-log">
                      <label>Test Name</label>
                          <select className="select-level" name="test_id" required="required">
                              <option value="1">Absorbance</option>
                              <option value="2">Water Content</option>
                              <option value="3">Titration</option>
                              <option value="4">Ash Content</option>
                            </select>
                    </div>
                    <div className="sample-log">
                    <label for="level-list">Sample Type</label>
                        <select className="select-level" name="typez">
                          <option value="h2so4">H<sub>2</sub>SO<sub>4</sub></option>
                          <option value="hcl">HCL</option>
                          <option value="ch3cooh">CH<sub>3</sub>COOH</option>
                          <option value="h2o2">H<sub>2</sub>O<sub>2</sub></option>
                        </select>
                    </div>
                     <div className="sample-log">
                    <label for="level-list">Assigned To</label>
                        <select className="select-level" name="user_id">
                        {usersList}
                        </select>
                    </div>
                    <div className="sample-log">
                     <input className="sample" name="user_id" type="text" required="required" defaultValue={this.props.id} hidden="hidden" />
                    </div>
                    <input className="submit" name="submit" type="submit" />
                  </form>
                  </div>

            </div>

        </div>



        <script src="/script-adminhome.js"></script>
    </Default>
    );
  }
}

module.exports = adminHome;