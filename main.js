// var headerArray = document.getElementsByTagName('h1');
//
//   console.log(headerArray[1]);

 // var bearliArray = document.getElementsByClassName('bearname');

// console.log(bearliArray[0]);
// console.log(bearliArray);

// var picture = document.getElementById("mainpicture");
//
// console.log(picture)


//modifying elements only changes on webpage not on html file
var bearImg = document.getElementById('mainpicture');
bearImg.src = "http://placekitten.com/344/543"
bearImg.className = "kittenimg";

//modify css directly
var title = document.getElementsByTagName("h1")[1];
var mainTitle = document.getElementsByTagName("h1")[0];
mainTitle.style.color = "purple";
title.style.fontFamily = "Arial";
title.style.color = 'green';

// create new elements
var newImg = document.createElement("img");

var newH1 = document.createElement("h1");

var newP = document.createElement("p");

var newImg = document.createElement("img");

newImg.src = "http://i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg";

var body = document.getElementsByTagName("body")[0];

body.appendChild(newImg);

body.appendChild(newH1);

body.appendChild(newP);

newH1.innerText = "Cats have invaded!";

newP.innerText = "We're here to take over your page"

newH1.style.color = 'cyan';
