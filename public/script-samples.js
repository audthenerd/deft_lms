let checkBox = document.getElementsByClassName('boxes');

window.onload = function(){

    document.querySelector('#mySidenav').addEventListener('click', closeNav);

    document.querySelector('#toOpen').addEventListener('click', openNav);

    // listSample('samplespage-h2');

    for (i in checkBox) {

        checkBox[i].addEventListener('click', checkedBox);

    };

};



function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
};

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};

function checkedBox() {

    console.log(this);

        if (document.getElementById(this.id).checked) {
            document.getElementById('B'+ this.id).style.display = "block";
            document.getElementById('E'+ this.id).style.display = "block";
        } else {
            document.getElementById('B'+ this.id).style.display = "none";
            document.getElementById('E'+ this.id).style.display = "none";
        }
};


// function listSample(item) {

//     var ajaxUrl = "http://localhost:3000/lab/sint";

//     var responseHandler = function() {
//     console.log("response text", this.responseText);
//       console.log("status text", this.statusText);
//       console.log("status code", this.status);

//       var responseObj = JSON.parse(this.responseText);
//       // console.log(responseObj);

//     var sampleList = document.createElement('div');
//     sampleList.setAttribute('id', 'sample-list');
//     document.getElementById(item).appendChild(sampleList);

//     var linkHeader = document.createElement('ul');
//     linkHeader.setAttribute('id', 'sample-unordered')
//     sampleList.appendChild(linkHeader);


//     console.log(responseObj['keys']);

//     for (i in responseObj) {

//         let keys = Object.keys(responseObj[i]);
//         let values = Object.values(responseObj[i]);

//         var eachSample = document.createElement('li');
//         eachSample.setAttribute('class', 'sample-li')

//         for (j in keys) {


//             var eachItem = document.createElement('div');
//             eachItem.innerText = keys[j] +": "+ values[j];
//             eachSample.appendChild(eachItem);

//         }

//         linkHeader.appendChild(eachSample);
//     };
//     };

//     // make a new request
//     var request = new XMLHttpRequest();

//     // listen for the request response
//     request.addEventListener("load", responseHandler);

//     // ready the system by calling open, and specifying the url
//     request.open("GET", ajaxUrl);

//     // send the request
//     request.send();

// };









