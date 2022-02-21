var time12am = document.getElementById("0");
var time1am = document.getElementById("1");
var time2am = document.getElementById("2");
var time3am = document.getElementById("3");
var time4am = document.getElementById("4");
var time5am = document.getElementById("5");
var time6am = document.getElementById("6");
var time7am = document.getElementById("7");
var time8am = document.getElementById("8");
var time9am = document.getElementById("9");
var time10am = document.getElementById("10");
var time11am = document.getElementById("11");
var time12pm = document.getElementById("12");
var time1pm = document.getElementById("13");
var time2pm = document.getElementById("14");
var time3pm = document.getElementById("15");
var time4pm = document.getElementById("16");
var time5pm = document.getElementById("17");
var time6pm = document.getElementById("18");
var time7pm = document.getElementById("19");
var time8pm = document.getElementById("20");
var time9pm = document.getElementById("21");
var time10pm = document.getElementById("22");
var time11pm = document.getElementById("23");

 var allTimes = [time12am, time1am, time2am, time3am, time4am, time5am, time6am, time7am, time8am, time9am, time10am, time11am, 
    time12pm, time1pm, time2pm, time3pm, time4pm, time5pm, time6pm, time7pm, time8pm, time9pm, time10pm, time11pm]
//target the time block    
var hourvalue= document.getElementsByClassName("hour");
console.log(hourvalue[0].id)

// var hourvalue = dateNew.getHours();
// var dateNew = new Date;
var saveBtn = document.getElementsByClassName("saveBtn")

//show hour value (1-24)
var hour = moment().hour()
console.log(hour)

//display todays date
$("#currentDay").text(moment().format('MMMM Do YYYY'))


for(var i = 0; i < hourvalue.length; i++){
    console.log(i)

    if(hourvalue[i].id < hour) {
        hourvalue[i].classList.add('past')
        console.log(hourvalue[i].id)
    } else if
    (hourvalue[i].id == hour) {
        hourvalue[i].classList.add('present')
    } else
    {
        hourvalue[i].classList.add('future')
    }
 console.log(hourvalue.id)   
}

for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", function () {
        console.log("Local data saved");
    localStorage.setItem("allTimes[i]", allTimes[i].value);

        localStorage.setItem("time12am", time12am.value);
        localStorage.setItem("time1am", time1am.value);
        localStorage.setItem("time2am", time2am.value);
        localStorage.setItem("time3am", time3am.value);
        localStorage.setItem("time4am", time4am.value);
        localStorage.setItem("time5am", time5am.value);
        localStorage.setItem("time6am", time6am.value);
        localStorage.setItem("time7am", time7am.value);
        localStorage.setItem("time8am", time8am.value);
        localStorage.setItem("time9am", time9am.value);
        localStorage.setItem("time10am", time10am.value);
        localStorage.setItem("time11am", time11am.value);
        localStorage.setItem("time12pm", time12pm.value);
        localStorage.setItem("time1pm", time1pm.value);
        localStorage.setItem("time2pm", time2pm.value);
        localStorage.setItem("time3pm", time3pm.value);
        localStorage.setItem("time4pm", time4pm.value);
        localStorage.setItem("time5pm", time5pm.value);
        localStorage.setItem("time6pm", time6pm.value);
        localStorage.setItem("time7pm", time7pm.value);
        localStorage.setItem("time8pm", time8pm.value);
        localStorage.setItem("time9pm", time9pm.value);
        localStorage.setItem("time10pm", time10pm.value);
        localStorage.setItem("hour11pm", hour11pm.value);
    })
};

time12am.value = localStorage.getItem("time1am");
time1am.value = localStorage.getItem("time1am");
time2am.value = localStorage.getItem("time2am");
time3am.value = localStorage.getItem("time3am");
time4am.value = localStorage.getItem("time4am");
time5am.value = localStorage.getItem("time5am");
time6am.value = localStorage.getItem("time6am");
time7am.value = localStorage.getItem("time7am");
time8am.value = localStorage.getItem("time8am");
time9am.value = localStorage.getItem("time9am");
time10am.value = localStorage.getItem("time10am");
time11am.value = localStorage.getItem("time11am");
time12pm.value = localStorage.getItem("time12pm");
time1pm.value = localStorage.getItem("time1pm");
time2pm.value = localStorage.getItem("time2pm");
time3pm.value = localStorage.getItem("time3pm");
time4pm.value = localStorage.getItem("time4pm");
time5pm.value = localStorage.getItem("time5pm");
time6pm.value = localStorage.getItem("time6pm");
time7pm.value = localStorage.getItem("time7pm");
time8pm.value = localStorage.getItem("time8pm");
time9pm.value = localStorage.getItem("time9pm");
time10pm.value = localStorage.getItem("time10pm");
time11pm.value = localStorage.getItem("time11pm");