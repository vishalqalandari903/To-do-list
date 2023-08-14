var input = document.getElementById("input");
var submit = document.getElementById("submit");
var toDoItems = document.getElementsByClassName("to-do-items")[0];
var searchBox = document.querySelector(".searchbox");
var array = [];
// input.addEventListener("click", function (event) {
//   if(event.key === "Enter")
// });
function additem() {
  var parentDiv = document.createElement("div");
  parentDiv.className = "item";

  var divChild1 = document.createElement("div");
  divChild1.className = "left-side";
  divChild1.innerHTML = input.value;
  parentDiv.appendChild(divChild1);

  var divChild2 = document.createElement("div");
  divChild2.className = "right-side";
  parentDiv.appendChild(divChild2);

  var checkIcon = document.createElement("i");
  checkIcon.className = "fas fa-check-square";
  divChild2.appendChild(checkIcon);
  checkIcon.addEventListener("click", function () {
    checkIcon.style.color = "green";
  });

  var trashIcon = document.createElement("i");
  trashIcon.className = "fa fa-trash";
  divChild2.appendChild(trashIcon);
  trashIcon.addEventListener("click", function () {
    var confirm_delete = confirm("confirm before deleting");
    if (confirm_delete == true) {
      parentDiv.remove();
    } else {
    }
    searchBox.addEventListener("input", function () {
      console.log("he;");
      array.forEach(function (value) {
        for (i = 0; i <= value.length - 1; i++) {
          if (searchBox.value == value[i]) {
          } else {
            parentDiv.remove();
          }
        }
      });
    });
  });

  input.value = "";
  // console.log(parentDiv);
  toDoItems.appendChild(parentDiv);
  array.push(divChild1.innerHTML);
  console.log(array);
}
submit.addEventListener("click", function () {
  var inputValue = input.value;
  inputValue = inputValue.trim();
  // console.log(inputValue);
  if (inputValue == "") {
  } else {
    additem();
  }
});

var item_made = document.querySelector(".item-made");
var right_side = document.querySelector(".r-s");
var left_side = document.querySelector(".l-s");
var trash_box = document.querySelector(".trash");
var check = document.querySelector(".check");

check.addEventListener("click", function () {
  check.classList.add("checked");
  check.classList.remove("hover");
});
trash_box.addEventListener("click", function () {
  var confirm_delete = confirm("confirm before deleting");
  if (confirm_delete == true) {
    item_made.classList.add("removed");
  } else {
  }
});
