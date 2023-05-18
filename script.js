

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
// TODO1: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?



// TODO2: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO3: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO4: Add code to display the current date in the header of the page.

// });

//add this code under TODO1

var saveButton = $(".saveBtn");
$(saveButton).on("click", function (e) {
  // e.preventDefault();
  var value = $(this).siblings(".description").val();
  var timeBlockId = $(this).parent().attr("id");
  console.log(value, timeBlockId)
  console.log(localStorage)
  localStorage.setItem(timeBlockId, value);

});
//end of TODO1

//add this code under TODO2
// loop over time blocks

$('.time-block').each(function () {
  var blockHour = parseInt($(this).attr('id').split('-')[1]);
  var currentHour = dayjs().hour()
  // check if we've moved past this time
  if (blockHour < currentHour) {
    $(this).addClass('past');
  } else if (blockHour === currentHour) {
    $(this).removeClass('past');
    $(this).addClass('present');
  } else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
  }
});
//end of TODO2

//add this code under TODO3
// var tasks = localStorage.getItem("saveButton")
// var textArea = document.querySelector(".description")
// function saveTasks(){
//   textArea.textContent = tasks
// }

$(".description").each(function (){
  var tasks = localStorage.getItem("saveButton")
  var textArea = document.querySelector(".description")
  if (localStorage.getItem("saveButton")===null){
    localStorage.setItem("saveButton",JSON.stringify([]));
  }
  textArea.textContent = tasks;

});


//add this code under TODO4
var currentDayEl = $("#currentDay")

function displayDate() {
  var today = dayjs();
  currentDayEl.text(today.format("MMM D, YYYY, h:mm:ss"));
};
setInterval(displayDate, 1000);
//end of TODO4 code