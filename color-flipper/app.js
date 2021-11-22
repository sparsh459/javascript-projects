// a predetermined array of colors
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");  // grabbing the button as when it's clicked color changes
const color = document.querySelector(".color");  // grabbing the span area of heading as it's text has to be changed when teh background color changes

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();   // getting a random number from the function below
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];  // changin the background color by changin the css of the selected tag
  color.textContent = colors[randomNumber];  // changing the text in the heading to the background color
});

// get a ranfowm number from the indicies from the color's list above to provide the indice returning a int type
function getRandomNumber() {
    // to get random number betweenn 0 - length of the const array[0- (len(colors)-1)]
  return Math.floor(Math.random() * colors.length);
}