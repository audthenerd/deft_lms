var sha256 = require('js-sha256');

window.onload = function(){

    document.querySelector('#mySidenav').addEventListener('click', closeNav);

    document.querySelector('#toOpen').addEventListener('click', openNav);

     //
     checkPw();
};


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
};

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};




function checkPw() {

    var ajaxUrl = "http://localhost:3000/users/lint";

    var responseHandler = function() {
    console.log("response text", this.responseText);
      console.log("status text", this.statusText);
      console.log("status code", this.status);

      var responseObj = JSON.parse(this.responseText);

      console.log("checkpw:", responseObj);

      var loginCheck = document.getElementById('login-submit');

      var enteredPw = document.getElementById('field-pw').value;

    };

    // make a new request
    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    request.open("GET", ajaxUrl);

    // send the request
    request.send();

};
