let checkBox = document.getElementsByClassName('boxes');
let deleteButton = document.getElementsByClassName('deletes');

window.onload = function(){

    document.querySelector('#mySidenav').addEventListener('click', closeNav);

    document.querySelector('#toOpen').addEventListener('click', openNav);

    for (i in checkBox) {

        checkBox[i].addEventListener('click', checkedBox);

    };

//     for (i in deleteButton) {

//         deleteButton[i].addEventListener('click', clicked);
//     };


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



// function clicked(event) {

//     event.preventDefault();

//     if (confirm('Do you want to submit?')) {
//         deleteButton.submit();
//     } else {
//         return false;
//        }
//     };

