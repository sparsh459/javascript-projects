// a predetermined array of colors
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025 is a hex color for F, 

const btn = document.getElementById("btn");  // grabbing the button as when it's clicked color changes
const color = document.querySelector(".color");  // grabbing the span area of heading as it's text has to be changed when teh background color changes

btn.addEventListener("click", function () {
  let hexColor = "#";
  // generating a hex number for color by looping 6 times as length of hex color is 6
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);

  color.textContent = hexColor;  // changing the text in the heading to the background color
  document.body.style.backgroundColor = hexColor;   // changin the background color by changin the css of the selected tag
});


// get a ranfowm number from the indicies from the color's list above to provide the indice returning a int type
function getRandomNumber() {
    // to get random number betweenn 0 - length of the const array[0- (len(hex)-1)]
  return Math.floor(Math.random() * hex.length);
}