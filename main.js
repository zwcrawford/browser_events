let outputEl = document.getElementById("output-target")

/*
    You can get a reference to DOM elements and
    directly attach an event handler. In this
    example, we get every element with a class of
    "article-section" and listen for when the
    user clicks on the element. When that event
    fires, the attached "handleSectionClick"
    function gets executed.
 */
let articleEl = document.getElementsByClassName("article-section")
let header = document.querySelector("#page-header")

/*
    JavaScript, in the browser, automatically send the source
    event to the handler function for the event.
*/
function handleSectionClick (event) {
    console.log(event)
}

for (let i = 0; i < articleEl.length; i++) {
    articleEl.item(i).addEventListener("click", handleSectionClick)
}

/*
    Define functions that hold logic to be performed when mouse
    events are triggered by the browser.
*/
function handleHeaderMouseOver (event) {
    outputEl.innerHTML = "You moved your mouse over me"
}

function handleHeaderMouseOut(event) {
    outputEl.innerHTML = "Why u leave me?"
}

/*
    Get a reference to the DOM element with an id of
    "page-header", and attach an event handler for the
    mouseover, and mouseout, events.
 */
header.addEventListener("mouseover", handleHeaderMouseOver)
header.addEventListener("mouseout", handleHeaderMouseOut)



/*
    We can also write an anonymous function (lamba expression)
    in the addEventListener declaration instead of using a
    function reference.
 */
let fieldEl = document.getElementById("keypress-input")

fieldEl.addEventListener("keyup", function (event) {
    outputEl.innerHTML = event.target.value
})


/*
  Now we can start making a truly interactive experience
  combining HTML, JavaScript and CSS. When a user clicks
  on a button in the DOM, we can listen for that event in
  JavaScript, and then add, or remove, CSS classes.

  In this example, I simply use the `toggle()` method on
  the `classList` property of a DOM element to automatically
  add and remove a class.
 */
let guineaPig = document.getElementById("guinea-pig")

// Here there is a specific function instead of a generic function like the exaples below
function toggleClass (newClass) {
  guineaPig.classList.toggle(newClass)
  console.log("guineaPig.classList", guineaPig.classList)
}
// When an argument is required for a function, you need to pass it in this way:
document.getElementById("add-color").addEventListener("click", function() {
    toggleClass("blue")
})
// This will not work:

// document.getElementById("add-color").addEventListener("click", toggleClass("blue") {
// })
document.getElementById("make-large").addEventListener("click", function() {
    toggleClass("large")
})

document.getElementById("add-border").addEventListener("click", function() {
    toggleClass("bordered")
})

document.getElementById("add-rounding").addEventListener("click", function() {
    toggleClass("rounded")
})


/*
EVENT BUBBLING:

  You can add an event handler on the body tag, and since all
  browser events bubble up to the body, you can then put in
  conditional logic to handle the click event on many different
  elements in one function.
 */
document.querySelector("body").addEventListener("click", function(event) {
    console.log("You clicked on the body of the DOM")
})

// when adding a nameless function, it can only be added the one time and not reused

// Get a reference to a DOM element: document.getElementById("add-color")
// Add an event listener: addEventListener("click", function() {
// Run this function:   toggleClass("blue")