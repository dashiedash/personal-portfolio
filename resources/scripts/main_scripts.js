// Icon bounce on hover - start
let bouncyElement = document.getElementsByClassName("address-icon");

function hover(targetArray, i) {
   return function () {
      targetArray[i].classList.toggle("fa-bounce");
   };
}

for (let j = 0; j < bouncyElement.length; j++) {
   bouncyElement[j].addEventListener(
      "mouseover",
      hover(bouncyElement, j),
      false
   );

   bouncyElement[j].addEventListener(
      "mouseout",
      hover(bouncyElement, j),
      false
   );
}
