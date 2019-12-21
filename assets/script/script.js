var currentDayEl = $("#currentDay");
var currentHour = moment().hour();
var plans;
currentDay();
load();
// clearPlans();
renderHourBlocks();

function currentDay(){
    currentDayEl.text(moment().format('dddd, MMMM DD'));
}

function renderHourBlocks(){
    for(var i = 0; i < 9; i++){
        var hour = i + 9;
        var hourBlock = $("<div>").addClass("row hourRow");
        hourBlock.attr("id", `hour-${hour}`);
        $(".container").append(hourBlock);
        var hourCol = $("<div>").addClass("hour col-1").text(moment(hour,"H").format('h a').toUpperCase());
        var commentCol = renderCommentSections(hour, plans[i]);
        var saveCol = renderSave(hour);
        hourBlock.append(hourCol);
        hourBlock.append(commentCol);
        hourBlock.append(saveCol);
    }
}

function renderSave(hour) {
    var saveBtn = $('<button><i class="fas fa-save"></i></button>');
    saveBtn.attr("data-time", hour);
    saveBtn.addClass("btnSave w-100 h-100");

    return $("<div>").addClass("col-1 px-0").append(saveBtn);
}

function renderCommentSections(hour, text) {
    var commentArea = $("<textarea>");
    commentArea.attr("id", `text-${hour}`);
    commentArea.addClass("w-100 h-100");
    if (text != null) {
        commentArea.val(text);
        alert("TExt area not null");

    }

    return $("<div>").addClass("col-10 px-0").append(commentArea);
}



$(".btnSave").click(function() {
    // alert("Button working");
    var hour = $(this).attr("data-time");
    var text = $(`#text-${hour}`).val();
    var index = parseInt(hour) - 9;
    alert(index);
    plans[index] = text;
    alert(text);


    localStorage.setItem("plans", JSON.stringify(plans));
    // var comment = $(this).data-time();
    // alert(comment);
    // var hourDisplay = $(this).siblings("textarea").attr("id");
    // localStorage.setItem(hourDisplay, comment);
    // $(this).siblings("textarea").fadeOut(100).fadeIn(100);
})

function load() {
    plans = localStorage.getItem("plans") != null
        ? JSON.parse(localStorage.getItem("plans")) : new Array(9);
}

function clearPlans() {
   function empty() {
       plans.length = 0;
   }
   empty();
   localStorage.setItem("plans", JSON.stringify(plans));
}