var React = require("react");
var Default = require('./layout/default');


class methodsPage extends React.Component {

  render() {

      console.log("methods-props:", this.props);

      let methods = this.props.tests.map(test => {
        return (
        <tr className="test-lists">
          <td>{test.id}</td>
          <td>{test.name}</td>
          <td>{test.test_manual}</td>
        </tr>
        );
      });


    return (

    <Default title="DEFT - Your Test Methods Library">

        <div className="main-body">

          <h1>Test Methods</h1>
            <div className="search-div">
            <input className="search-bar" type="text" placeholder="Search.." />
            </div>

            <table>
            <tr id="methods-header">
              <th>S/N</th>
              <th id="method-name">Method Name</th>
              <th>Document</th>
            </tr>
            {methods}
            </table>
        </div>
        <script src="/script-samples.js"></script>
    </Default>

    );
  }
}

module.exports = methodsPage;


