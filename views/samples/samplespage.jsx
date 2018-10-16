var React = require("react");
var Default = require('../layout/default');


class samplesPage extends React.Component {

  render() {

      console.log("sample-props:", this.props.samples);

      let disCheck;
      let samplePost;

           var d = new Date();
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var dateNow = d.getDate()+"-"+ monthNames[d.getMonth()]+"-"+d.getFullYear();


      if (this.props.samples.length >= 1) {

            samplePost = this.props.samples.map(sample => {


                if(this.props.level > 2) {
                    disCheck = (<input id ={sample.sample_id} type="checkbox" className="boxes" name="id" disabled />);
                } else {

                    disCheck = (<input id={sample.sample_id} type="checkbox" className="boxes" name="id" />);
                };


                return (
                        <tr id={"samplepg-"+ sample.sample_id}>
                            <td>{sample.sample_id} </td>
                            <td>{sample.company_name} </td>
                            <td>{sample.type} </td>
                            <td>{sample.comments} </td>
                            <td>{sample.logged_by} </td>


                        <td>
                        <label className="container">
                            {disCheck}
                        </label>
                            <form className="buttons" method="POST" action="/sample/del?_method=delete">
                                <input name="id" type="hidden" value={sample.sample_id} />
                                <input id={"B"+sample.sample_id} type="submit" className="deletes" value="Delete"/>
                            </form>
                            <form action="/sample/edit">
                                <input name="id" type="hidden" value={sample.sample_id} />
                                <input id={"E"+sample.sample_id} type="submit" className="edits" value="Edit"/>
                            </form>
                        </td>
                    </tr>
                );
            });

        } else if (this.props.samples.length === 0) {
            samplePost = (<tr id="samplepg-none"><td colspan="7">No samples available.</td></tr>);
        };


    return (

    <Default title="DEFT - Manage Your Samples">

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
             <input className="sample" name="user_id" type="text" required="required" defaultValue={this.props.id} hidden="hidden" />
            </div>
            <div className="sample-log">
            <label>Login Date</label> <input className="sample" name="date_logged" type="text" defaultValue={dateNow} readonly="readonly" />
            </div>
            <input className="submit" name="submit" type="submit" />
          </form>
          </div>

          <h2>Samples List</h2>
            <table>

                <tr>
                    <th>Assigned Sample ID</th>
                    <th>Company Name</th>
                    <th>Sample Type</th>
                    <th>Comments</th>
                    <th>Logged By</th>

                    <th id="edit-col">Edit</th>
                </tr>
                {samplePost}
            </table>
        </div>
        <script src="/script-samples.js"></script>
    </Default>

    );
  }
}

module.exports = samplesPage;