// var saveButton = document.querySelector(".saveBtn"); //does not work
var saveButton = $(".saveBtn");

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

// saveButton.addEventListener("click", function() //does not work

saveButton.on("click", function() {

    console.log("CLICKED");

    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    localStorage.setItem(time, plan);
});


function savePlans() {

    console.log("CLICKED2");

    $(".hour").each(function() {
        
        var currentHour = $(this).text();
        var currentPlans = localStorage.getItem(currentHour);


        if (currentPlans !== null) {
            $(this).siblings(".plan").val(currentPlans);
        }
    });
}


// CALLING ALL FUNCTIONS DO YOU READ

timeColors();
savePlans();