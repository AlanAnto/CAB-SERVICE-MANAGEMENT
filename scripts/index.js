// var elements = document.querySelectorAll('#searchForm input');

// elements.forEach(e =>
//     {
//         e.addEventListener('submit', function () {
//             //e.preventDefault();
//             var pickup = document.getElementById["PickUp"].value;
//             var destination = document.getElementById["Destination"].value;
//             console.log(pickup);
//             if (pickup == destination) 
//             {
//                 alert("Pick and Destination are given as same. Try Again");
//             }
//     })
// });

var pickup = document.forms['searchForm']['PickUp'];
var destination = document.forms['searchForm']['Destination'];

function validate(e) {
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