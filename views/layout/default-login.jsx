var React = require('react');

class LoginLayout extends React.Component {
  render() {

        console.log("layout", this.props.children);

let pageLinks;

    if(this.props.title === "Welcome!") {

        pageLinks = (
            <ul class="nav navbar-nav navbar-right">
                <li><a href="/users/new">REGISTER</a></li>
                <li><a href="/login">LOGIN</a></li>
                <li><a href="#services">ABOUT</a></li>
                <li><a href="#portfolio">SERVICES</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        );
    } else if(this.props.title === "Welcome, New User!") {
        pageLinks = (
            <ul class="nav navbar-nav navbar-right">
                <li><a href="/login">LOGIN</a></li>
                <li><a href="#services">ABOUT</a></li>
                <li><a href="#portfolio">SERVICES</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
            );
    } else if(this.props.title === "Welcome Back!") {
        pageLinks = (
            <ul class="nav navbar-nav navbar-right">
                <li><a href="/users/new">REGISTER</a></li>
                <li><a href="#services">ABOUT</a></li>
                <li><a href="#portfolio">SERVICES</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
            );
    };



    return (
        <html>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat|Lato|IBM+Plex+Mono|Special+Elite" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" />
                <link rel="stylesheet" type="text/css" href="/login.css" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
            </head>
            <body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
            <nav class="navbar navbar-default navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="/">DEFT</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">

                {pageLinks}

            </div>
          </div>
        </nav>
                   {this.props.children}
                </body>
            </html>
    );
  }
}

module.exports = LoginLayout;