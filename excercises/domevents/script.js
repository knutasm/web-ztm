var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body")

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", function() {li.classList.toggle("done")});
	var button = document.createElement("button")
	button.appendChild(document.createTextNode("Delete"))
	button.classList.add("btn-delete")
	button.addEventListener("click", function(){deleteItem(button)})
	li.appendChild(button)
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteItem(item) {
	item.parentNode.remove();
}

items.forEach(function (item) {
	item.addEventListener("click", function() {item.classList.toggle("done")});
	var button = document.createElement("button")
	button.appendChild(document.createTextNode("Delete"))
	button.classList.add("btn-delete")
	button.addEventListener("click", function(){deleteItem(button)})
	item.appendChild(button)
})

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);



/*TODO 
1. If you click on the list item, it toggles the .done  class on and off.

2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)
*/