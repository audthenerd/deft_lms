var React = require("react");
var Default = require('../layout/default');


class profilePage extends React.Component {

  render() {

      console.log("profile-props:", this.props);
      console.log("cookie-props:", this.props.id);

      // console.log("userhome-cookie", response.cookie);

      let updateProf;

    if(this.props.id == this.props.user.id) {
      updateProf = (
        <div id="updateprof">
        <form className="form-update" action={"/profile/"+this.props.user.username+"/update"}>
            <input name="id" hidden="hidden" value={this.props.user.id} />
            <input id={"U"+this.props.id} type="submit" className="updates" value="Update Your Profile"/>
        </form>
      </div>
        );
    };


    return (

    <Default title="DEFT - User Profile">

      <h2 className="profile">{this.props.user.name.charAt(0).toUpperCase() + this.props.user.name.slice(1)}'s Profile</h2>

      <p>Name: {this.props.user.name}</p>
      <p>Access Level: {this.props.user.level}</p>
      <p>Username: {this.props.user.username}</p>

        {updateProf}

        <script src="/script-adminhome.js"></script>
    </Default>
    );
  }
}

module.exports = profilePage;