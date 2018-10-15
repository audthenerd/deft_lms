var React = require('react');

class LoginLayout extends React.Component {
  render() {

        console.log("layout", this.props.children);

let headerLog;

            // if(this.props.title === "Welcome") {
            //     headerLog = (
            //         <div className="header-log">
            //             <a href="#">Resources</a>
            //             <a href="#">Company</a>
            //             <a href="#">Contact Us</a>
            //             <a href="/login">Login</a>
            //         </div>);
            // } else {
             headerLog = (
                    <div className="logout"><a href="/logout">Logout</a></div>);
            // };

    return (
        <html>
                <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" type="text/css" href="/style.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                        <title>{this.props.title}</title>
                </head>
                <body>
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn">&times;</a>
                    <a href="/home/redirect">Workspace</a>
                    <a href="/lab/samples">Sample Management</a>
                    <a href="/lab/tests">Test Methods</a>
                    <a href="/lab/equipment">Equipment</a>
                    <a href="/lab/reports">Reports</a>
                  </div>
                    <nav class="navbar navbar-default navbar-fixed-top">
                    <div class="container">
                        <button id="toOpen"><div className="line">
                            </div>
                            <div className="line"></div>
                            <div className="line"></div>
                            </button>
                     <div class="navbar-header">
                          <a class="navbar-brand" href="/">DEFT</a>
                        </div>

                          <ul class="nav navbar-nav navbar-right">
                            <li><a href="/logout">LOGOUT</a></li>
                          </ul>

                        </div>
                    </nav>
                   {this.props.children}
                </body>
            </html>
    );
  }
}

module.exports = LoginLayout;