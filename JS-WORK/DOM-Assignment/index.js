// Change document background color to silver
document.body.style.backgroundColor = "silver";

// Change the font color for h1 title tag to green
let title = document.getElementById("title");
title.style.color = "green";

// Change the font case for h3 title tags to uppercase
let h3Tags = document.getElementsByTagName("h3");
for (let i = 0; i < h3Tags.length; i++) {
  h3Tags[i].style.textTransform = "uppercase";
}

// Add one more fruit to the fruits list
let fruList = document.getElementById("fruList");
let newFruit = document.createElement("li");
newFruit.innerHTML = "Apples";
fruList.appendChild(newFruit);

// Add one more vegetable to the vegetables list
let vegList = document.getElementById("vegList");
let newVegetable = document.createElement("li");
newVegetable.innerHTML = " Carrots";
vegList.appendChild(newVegetable);
