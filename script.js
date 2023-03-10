// Declarations
let saveBtn = document.querySelector(".saveBtn");
let inputVal = document.querySelector(".description");
let timeBlockHTML = document.querySelector("#myTimeBlocks"); // my code
let saveLocal = document.querySelector("#localStorageSave");
let clearBtn = document.querySelector('#ClearBtn')


// Todays Date.
var today = moment();
$("#currentDay").text(
  today.format("[Today's date is]:  MMMM Do YYYY, h:mm:ss a")
);

// All times Array
var timeArray = [
  {
    hour: 9,
    display: "9AM",
  },
  {
    hour: 10,
    display: "10AM",
  },
  {
    hour: 11,
    display: "11AM",
  },
  {
    hour: 12,
    display: "12PM",
  },
  {
    hour: 13,
    display: "1PM",
  },
  {
    hour: 14,
    display: "2PM",
  },
  {
    hour: 15,
    display: "3PM",
  },
  {
    hour: 16,
    display: "4PM",
  },
  {
    hour: 17,
    display: "5PM",
  },
];

// timeBlocks function
function showTimeBlocks() {
  var timeBlockHTML = "";
  var currentHour = today.hour();

  for (var i = 0; i < timeArray.length; i++) {
    var current = timeArray[i];

    var timeClass = "";

    if (current.hour === currentHour) {
      timeClass = "present";
    } else if (current.hour < currentHour) {
      timeClass = "past";
    } else if (current.hour > currentHour) {
      timeClass = "future";
    }

    timeBlockHTML += `
    <div class="row time-block">
      <div class="col-1 hour">
        ${current.display}
      </div>
      <textarea id="text-${current.hour}" class="col-10 description ${timeClass}" ></textarea>
      <button class="col-1 saveBtn" data-hour =${current.hour} >
        <i class="fa-solid fa-floppy-disk"></i>
      </button>
    </div>
    `;
  }

  $("#time-block-section").html(timeBlockHTML);
  showSavedTasks();
}

showTimeBlocks();

// what happens when saveBtn is clicked
$(".saveBtn").click((event) => {
  event.preventDefault();

  var hour = event.target.dataset.hour
  

  // Saving input to the local storage
  var getInput = $(`#text-${hour}`).val();
  localStorage.setItem(`task-${hour}`, getInput);
  saveLocal.innerText = "You have saved successfully ???";
  setTimeout(clearSavedMessage, 1100)

});

function clearSavedMessage(){
  saveLocal.innerText = ""
}

function showSavedTasks(){
  for (var i = 0; i < timeArray.length; i++) {
    let current = timeArray[i];
    let saved = localStorage.getItem(`task-${current.hour}`) || "";
    $(`#text-${current.hour}`).val(saved)
  }
}


//What happens when clear task button is clicked
$(clearBtn).on('click', ()=> {
  
  let myOption = prompt('Press Y/N to confirm')
  let myAnswer = myOption.toLowerCase();

  if (myAnswer === 'y'){
    localStorage.clear();
    showSavedTasks();
  } else if (myAnswer === 'n'){
    alert('Tasks not cleared');
  } else {
    alert('Input a valid request');
  }
  
})


