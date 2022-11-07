// var elements = document.querySelector('#search');
//     elements.addEventListener('click', function () {
//             //e.preventDefault();
//             var pickup = document.getElementById("PickUp").value;
//             var destination = document.getElementById("Destination").value;
//             console.log(pickup);
//             if (pickup === destination) 
//             {
//                 alert("Pick and Destination are given as same. Try Again");
//                 return false;
//             }
//     })

var pickup = document.forms['searchForm']['PickUp'];
var destination = document.forms['searchForm']['Destination'];

function validate(e) {
    console.log(1);
    if (pickup.value == "") {
        e.preventDefault();
        alert("Please provide a Pick Up !");
    }
     else if (destination.value == "") {
        e.preventDefault();
        alert("Please provide a Destination !");
    }
     else if (pickup.value == destination.value) {
        e.preventDefault();
        alert("Pick Up and Destination are given as same. Try Again !");
    }
}