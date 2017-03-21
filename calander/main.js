var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"];

var monthsEls = document.querySelectorAll(".months");

for (x = 0; x < monthsEls.length; x++){
    monthsEls[x].innerHTML = months[x+0];
}