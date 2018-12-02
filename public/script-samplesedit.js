let opt = document.getElementsByTagName('option');


window.onload = function(){

    document.querySelector('#mySidenav').addEventListener('click', closeNav);

    document.querySelector('#toOpen').addEventListener('click', openNav);
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
};

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};