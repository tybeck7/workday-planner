var currentDate = moment().format('MMMM Do YYYY ')
var hour = moment().format('H')

document.querySelector("#currentDay").innerHTML = currentDate

$(".saveBtn").click(function(e){
    localStorage.setItem($(this).parents("div").attr("id"), $(this).siblings("textarea").val())
})
    var toDoArray = document.querySelectorAll(".myTextArea")
    for (let i = 0; i < toDoArray.length; i++) {
        toDoArray[i].innerHTML = localStorage.getItem(i + 9)
    }

var timeBlock = document.querySelectorAll(".row")
for (let i = 0; i < timeBlock.length; i++) {
    if(hour < i+9){
        timeBlock[i].classList.add("future")
    } else if(hour > i+9){
        timeBlock[i].classList.add("past")
    } else {
        timeBlock[i].classList.add("present")
    }
}