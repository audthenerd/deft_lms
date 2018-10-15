var React = require("react");
var Default = require('../layout/default');


class equipmentEdit extends React.Component {

  render() {

      console.log("equipment-props:", this.props);



    return (

    <Default title="LMS - Edit Your Equipment">
    <html>
        <head />
        <body>

          <div className="main-body">
          <h1>Edit equipment</h1>
          <div className="new-div">
          <form className="equip-form" method="POST" action="/equip/edit/int">
            <div className="equip-log">
              <label>Equipment Name</label><input className="sample" name="name" type="text" value={this.props.equipment.name} required="required" />
            </div>
            <div className="equip-log">
            <label>Serial Number</label><input className="sample" name="serial_number" type="text" value={this.props.equipment.serial_number} required="required" />
              </div>
            <div className="equip-log">
              <label>Operation Manual</label> <input className="sample" name="operation_manual" type="text" value={this.props.equipment.operation_manual} required="required" />
            </div>
            <div className="equip-log">
             <label>Maintenance Date</label> <input className="maint-date" name="latest_maint" type="date" value={this.props.equipment.latest_maint.toLocaleDateString()} />
            </div>
            <div className="equip-log">
             <label>Edited By</label> <input className="username" name="username" type="text" value={this.props.name} readonly="readonly" />
            </div>
            <div className="equip-log">
             <input className="equipment" name="edit_date" value={new Date()} hidden="hidden" />
            </div>
            <div className="equip-log">
             <input className="equipment" name="equipment_id" value={this.props.equipment.id} hidden="hidden" />
            </div>
            <div className="equip-log">
             <input className="equipment" name="user_id" type="text" value={this.props.id} required="required" hidden="hidden" />
            </div>
            <input className="submit" name="submit" type="submit" />
          </form>
          </div>
          </div>
          <script src="/script-equipedit.js"></script>
        </body>
    </html>
    </Default>

    );
  }
};

module.exports = equipmentEdit;