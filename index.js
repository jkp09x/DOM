alert("Hello World");

document.firstElementChild.lastElementChild.querySelector("input").click();

// changing the third li element to my name
//    (my solution)
document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Jigar";
//    (instructor's solution)
document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = "Angela"

// different way to access html elements
document.getElementsByTagName("li"); // OUTPUT: HTMLCollection(3) [li.list, li.list, li.list]
document.getElementsByTagName("li")[1].style.color = "blue"; // Set color of middle li to blue
document.getElementsByClassName("header_hello"); // OUTPUT: HTMLCollection [h1.header_hello]

// Using querySelector
document.querySelector("a"); // OUTPUT: <a href=​"https:​/​/​www.google.com">​Google​</a>​
document.querySelector("li a"); // OUTPUT: <a href=​"https:​/​/​www.google.com">​Google Site​</a>​
