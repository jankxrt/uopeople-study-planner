var button = document.getElementById("add-button");
var inputOne = document.getElementById("course-input");
var inputTwo = document.getElementById("grade-input");
var rowsWrapper = document.getElementById("list-row")
var rowOne = document.getElementById("column-1");
var rowTwo = document.getElementById("column-2");

button.addEventListener('click', function() {
    rowsWrapper.style.display = "flex";
    rowsWrapper.style.gap = "70%";
    rowOne.textContent = inputOne.value;
    rowTwo.textContent = inputTwo.value;
});