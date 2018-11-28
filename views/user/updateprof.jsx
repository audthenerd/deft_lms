var React = require("react");
var Default = require('../layout/default');


class updateProfile extends React.Component {

  render() {

      console.log("update prof props", this.props);
      console.log("cookie-props:", this.props.id);

      // console.log("userhome-cookie", response.cookie);

    return (

    <Default title="DEFT - User Profile">

      <h2>{this.props.user.name.charAt(0).toUpperCase() + this.props.user.name.slice(1)}: Edit Profile</h2>

      <div id="updateprof">
        <form className="form-update" method="POST" action="/profile/int">
          <div className="user-attribute">
            <label>Name</label> <input name="name" value={this.props.user.name} />
          </div>
          <div className="user-attribute">
            <label>Username</label> <input name="username" value={this.props.user.username} />
          </div>
          <div className="user-attribute">
            <label for="level-list">Access Level</label>
              <select className="select-level" name="level">
                <option value="1">1 - Supervisor</option>
                <option value="2">2 - Chemist</option>
                <option value="3">3 - Technician</option>
              </select>
          </div>
          <div className="user-attribute">
            <label>Password</label> <input name="password" placeholder="Type new password here"  />
          </div>
            <input id={"U"+this.props.id} type="submit" className="updates" value="Save Changes" />
        </form>
        </div>


        <script src="/script-adminhome.js"></script>
    </Default>
    );
  }
}

module.exports = updateProfile;