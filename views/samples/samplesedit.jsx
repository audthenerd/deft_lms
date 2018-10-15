var React = require("react");
var Default = require('../layout/default');


class samplesEdit extends React.Component {

  render() {

      console.log("sample-props:", this.props);
      // console.log("userhome-cookie", response.cookie);




    return (

    <Default title="LMS - Manage Your Samples">
          <div className="main-body">
          <h1>Add samples</h1>
          <div className="new-div">
          <form className="sample-form" method="POST" action="/lab/sint">
            <div className="sample-log">
              <label>Customer Name</label><input className="sample" name="name" type="text" required="required" />
            </div>
            <div className="sample-log">
            <label for="level-list">Sample Type</label>
                <select className="select-level" name="type">
                  <option value="h2so4">H<sub>2</sub>SO<sub>4</sub></option>
                  <option value="hcl">HCL</option>
                  <option value="ch3cooh">CH<sub>3</sub>COOH</option>
                  <option value="h2o2">H<sub>2</sub>O<sub>2</sub></option>
                </select>
              </div>
            <div className="comments-log">
              <label>Comments</label> <input className="sample" name="comments" type="text" placeholder="Type NA if no comments" required="required" />
            </div>
            <div className="sample-log">
             <input className="sample" name="user_id" type="text" required="required" defaultValue={this.props.name.id} hidden="hidden"/>
            </div>
            <input className="submit" name="submit" type="submit" />
          </form>
          </div>
          <h2>Samples List</h2>
          <div id="samplespage-h2"></div>
          </div>
          <script src="/script-samples.js"></script>
    </Default>
    );
  }
}

module.exports = samplesEdit;