// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn"); // returns a node list, most array methods work but some does not so using accordingly

// making a for loop and calling the function for each element in the nodelist we get from btns
btns.forEach(function (btn) {  // // passing a parameter for accessing items in list
  btn.addEventListener("click", function (e) {  // passing a parameter for know which button is clicked
    const styles = e.currentTarget.classList; // assigning the list of classes the current clicked button has []
    // changing the count accordingly when the button is clicked
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    // changing the color of the value  when it's 0, >0, <0 
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }

    value.textContent = count;  // changing the value on the screen
  });
});