var saveButton = document.querySelector(".saveBtn");


var today = moment();
$("#currentDay").text(moment().format('ll LT')); //preset format from https://devhints.io/moment

// console.log(today);

function timeColors() {
    var hour = moment().hours();


    $(".time-block").each(function() {
        var currentTime = parseInt($(this).attr("id"));

        if (currentTime > hour) {
            $(this).addClass("future");
        } else if (currentTime === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })

};






// CALLING ALL FUNCTIONS DO YOU READ ME

timeColors();