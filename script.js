// Todays Date.
var today = moment();
$("#currentDay").text(today.format("[Today's date is]:  MMMM Do YYYY, h:mm:ss a"));

var timeArray = [
    {
        hour: 9,
        display: "9AM"
    },
    {
        hour: 10,
        display: "10AM"
    },
    {
        hour: 14,
        display: "2PM"
    },
    {
        hour: 3,
        display: "3PM"
    },
    {
        hour: 3,
        display: "3PM"
    },
    {
        hour: 3,
        display: "3PM"
    }
]

function showTimeBlocks(){
    var timeBlockHTML = '';
    var currentHour = today.hour()

    for(var i = 0; i < timeArray.length; i++){
        var current = timeArray[i];

        var timeClass =  "";

        if(current.hour === currentHour){
            timeClass = "present"
        }else if(current.hour < currentHour){
            timeClass = "past"
        }else if(current.hour > currentHour){
            timeClass = "future"
        }

        timeBlockHTML += `
         <div class="row time-block">
            <div class="col-1 hour">
                ${current.display}
            </div>
            <textarea id="text-${current.hour}" class="col-10 description ${timeClass}"></textarea>
            <button class="col-1 saveBtn">
            <i class="fa-regular fa-floppy-disk"></i>
            </button>
        </div>
        `
    }

    $("#time-block-section").html(timeBlockHTML)
}





































// const m = moment();
// // var today = m
// $("#currentDay").text(m.toString())


