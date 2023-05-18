const circleBtns = document.getElementById("circle-btns")
const circle1Elem = document.getElementById("c1")
const circle2Elem = document.getElementById("c2")
const circle3Elem = document.getElementById("c3")
const circle4Elem = document.getElementById("c4")
const bodys = document.getElementById("body")

circle1Elem.addEventListener("click", function() {
    bodys.style.backgroundColor = "gray";
  });
  
  circle2Elem.addEventListener("click", function() {
    bodys.style.backgroundColor = "red";
  });
  
  circle3Elem.addEventListener("click", function() {
    bodys.style.backgroundColor = "blue";
  });
  
  circle4Elem.addEventListener("click", function() {
    bodys.style.backgroundColor = "yellow";
  });