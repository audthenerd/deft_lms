var React = require("react");
var Default = require('./layout/default');


class methodsPage extends React.Component {

  render() {
    let route = Object.keys(this.props)[1];
    let methods;
    let goBack;

      console.log("methods-props:", Object.keys(this.props));


      if (route === "tests") {
          methods = this.props.tests.map(test => {
            return (
            <tr className="test-lists">
              <td>{test.id}</td>
              <td>{test.name}</td>
              <td>{test.test_manual}</td>
            </tr>
            );
          });
          goBack = ("");
        } else if (route === "search") {
            methods = this.props.search.map(item => {
            return (
            <tr className="test-lists">
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.test_manual}</td>
            </tr>
            );
          });
            goBack = (<a href="/lab/tests">Back to Methods</a>);
        }


          function submitForm(event) {
            var form = document.getElementsByClassName('search-equip')[0];
            if (event.keyCode == 13) {
                form.submit();
            }
          }



    return (

    <Default title="DEFT - Your Test Methods Library">

        <div className="main-body">

          <h1>Test Methods</h1>
            <div className="search-div">
            <form className="search-equip" action="/lab/tests/search" >
                <input className="search-bar" type="text" placeholder="Search.." name="name" onkeypress="submitForm(event);" />
            </form>
            </div>

            <table>
            <tr id="methods-header">
              <th>S/N</th>
              <th id="method-name">Method Name</th>
              <th>Document</th>
            </tr>
            {methods}
            </table>
            {goBack}
        </div>
        <script src="/script-samples.js"></script>
    </Default>

    );
  }
}

module.exports = methodsPage;


