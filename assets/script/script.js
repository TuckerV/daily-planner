var currentDayEl = $("#currentDay");
var currentHour = moment().hour();

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
        var commentCol = renderCommentSections(hour);
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

function renderCommentSections(hour) {
    var commentArea = $("<textarea>");
    commentArea.attr("id", `text-${hour}`);
    commentArea.addClass("w-100 h-100");
    //set before current after

    return $("<div>").addClass("col-10 px-0").append(commentArea);
}

// alert(currentHour);
currentDay();
renderHourBlocks();