var React = require("react");
var Default = require('../layout/default');


class equipmentPage extends React.Component {

  render() {

      console.log("equipment-props:", this.props);

      let equipPost;
      let disCheck;


       if (this.props.equipment.length >= 1) {

            equipPost = this.props.equipment.map(equip => {

                if(this.props.level < 2) {
                    disCheck = (
                     <input id={equip.id} type="checkbox" className="boxes" name="id" />   );
                } else {
                    disCheck = (
                      <input id={equip.id} type="checkbox" className="boxes" name="id" disabled />  );
                }

        return (

                <tr id={"equippage-"+equip.id}>
                    <td>{equip.equipment_name} </td>
                    <td>{equip.serial_number} </td>
                    <td>{equip.operation_manual} </td>
                    <td>{equip.logged_by} </td>
                    <td className="edit-col">
                        <label className="container">
                            {disCheck}
                        </label>
                                <br />
                                <form className="form-del" method="POST" action="/equip/del?_method=delete">
                                    <input name="id" type="hidden" value={equip.id}/>
                                    <input id={"B"+equip.id} type="submit" className="deletes" value="Delete"/>
                                </form>
                                <form className="form-edit" action="/equip/edit">
                                    <input name="id" type="hidden" value={equip.id}/>
                                    <input id={"E"+equip.id} type="submit" className="edits" value="Edit"/>
                                </form>
                    </td>
                </tr>

        );
            });

        } else if (this.props.equipment.length === 0) {
            equipPost = (<tr id="equippg-none"><td colspan="7">No equipment available.</td></tr>);
        };

    return (

    <Default title="LMS - Manage Your Equipment">
    <html>
        <head />
        <body>

          <div className="main-body">
          <h1>Add equipment</h1>
          <div className="new-div">
          <form className="equip-form" method="POST" action="/equip/int">
            <div className="equip-log">
              <label>Equipment Name</label><input className="sample" name="name" type="text" required="required" />
            </div>
            <div className="equip-log">
            <label>Serial Number</label><input className="sample" name="serial_number" type="text" required="required" />
              </div>
            <div className="equip-log">
              <label>Operation Manual</label> <input className="sample" name="operation_manual" type="text" required="required" />
            </div>
            <div className="equip-log">
             <input className="equipment" name="user_id" type="text" value={this.props.id} required="required" hidden="hidden" />
            </div>
            <input className="submit" name="submit" type="submit" />
          </form>
          </div>

          <h2>Equipment List</h2>
            <table className="equipment">

                <tr>
                    <th>Equipment Name</th>
                    <th>Serial Number</th>
                    <th>Operation Manual</th>
                    <th>Logged By</th>
                    <th>Edit</th>
                </tr>

                {equipPost}

            </table>
          </div>
          <script src="/script-equip.js"></script>
        </body>
    </html>
    </Default>

    );
  }
}

module.exports = equipmentPage;