var global_date;
var gold = ["7-21", "8-4", "8-18", "9-9", "9-23", "10-6", "10-20", "11-4", "11-18", "0-1", "0-15", "0-29", "1-12", "1-26", "2-12", "3-2", "3-16", "3-30", "4-14"]
var white = ["7-28", "8-11", "8-25", "9-2", "9-16", "9-30", "10-13", "10-27", "11-11", "0-8", "0-22", "1-5", "1-19", "2-5", "2-19", "2-26", "2-9", "2-23", "2-7"]


var x = setInterval(function(){
  var now = new Date();
  global_date = now
  document.getElementById("clock").innerHTML = digits(now.getHours()) + ":" + digits(now.getMinutes());
  var diff = now.getDay() - 1;
  var monday_date = new Date();
  monday_date.setDate(now.getDate() - diff);
  var monday_string = monday_date.getMonth() + "-" + monday_date.getDate();
  if(gold.indexOf(monday_string) >= 0){
    console.log("Gold Week!")
    document.getElementById("title").style.color = "gold";
    Gold();
  }
  else if(white.indexOf(monday_string) >= 0){
    console.log("White week!")
    document.getElementById("title").style.color = "white";
    White();
  }
}, 1000);

function digits(time){
  if (time < 10){
    return "0" + time;
  }
  return time;
}

function Gold(){
  const fs = require('fs');
  g = global_date;
  let mydata = JSON.parse(fs.readFileSync('data.json'));

  if(g.getDay() == 1){
    day1(mydata.oneA, mydata.twoA, mydata.threeA, mydata.fourA, mydata.fourA_HS, mydata.fourA_MS, mydata.fiveA, mydata.sixA, mydata.sevenA);
  }
  else if(g.getDay() == 2){
    day2(mydata.fiveB, mydata.sixB, mydata.sevenB, mydata.sevenB_HS, mydata.sevenB_MS, mydata.oneB, mydata.twoB);
  }
  else if(g.getDay() == 3){
    day3(mydata.threeB, mydata.fourB, mydata.fourB_HS, mydata.fourB_MS, mydata.fiveA, mydata.sixA);
  }
  else if(g.getDay() == 4){
    day2(mydata.sevenA, mydata.oneA, mydata.twoA, mydata.twoA_HS, mydata.twoA_MS, mydata.threeA, mydata.fourA);
  }
  else if(g.getDay() == 5){
    day1(mydata.twoB, mydata.threeB, mydata.fourB, mydata.fiveB, mydata.fiveB_HS, mydata.fiveB_MS, mydata.sixB, mydata.sevenB, mydata.oneB);
  }
}

function White(){
  const fs = require('fs');
  g = global_date;
  let mydata = JSON.parse(fs.readFileSync('data.json'));

  if(g.getDay() == 1){
    day1(mydata.fourA, mydata.fiveA, mydata.sixA, mydata.sevenA, mydata.sevenA_HS, mydata.sevenA_MS, mydata.oneA, mydata.twoA, mydata.threeA);
  }
  else if(g.getDay() == 2){
    day2(mydata.oneB, mydata.twoB, mydata.threeB, mydata.threeB_HS, mydata.threeB_MS, mydata.fourB, mydata.fiveB);
  }
  else if(g.getDay() == 3){
    day3(mydata.sixB, mydata.sevenB, mydata.sevenB_HS, mydata.sevenB_MS, mydata.oneA, mydata.twoA);
  }
  else if(g.getDay() == 4){
    day2(mydata.threeA, mydata.fourA, mydata.fiveA, mydata.fiveA_HS, mydata.fiveA_MS, mydata.sixA, mydata.sevenA);
  }
  else if(g.getDay() == 5){
    day1(mydata.fiveB, mydata.sixB, mydata.sevenB, mydata.oneB, mydata.oneB_HS, mydata.oneB_MS, mydata.twoB, mydata.threeB, mydata.fourB);
  }
}

function day1(one, two, three, four, four_hs, four_ms, five, six, seven){
  if(g.getHours() == 7){
    document.getElementById("future").innerHTML = "Today's Schedule: " + one + ", " + two + ", " + three + ", " + four + ", " + five + ", " + six + ", " + seven;
  }
  else if(g.getHours() == 8 && (g.getMinutes() >= 0 && g.getMinutes() <= 50)){
    document.getElementById("current").innerHTML = "Current Class: " + one;
    document.getElementById("future").innerHTML = "Coming Up: Advisory and " + two;
  }
  else if((g.getHours() == 8 && g.getMinutes() >= 50) || (g.getHours() == 9 && g.getMinutes() == 0)){
    document.getElementById("current").innerHTML = "Current Class: Advisory";
    document.getElementById("future").innerHTML = "Coming Up: " + two;
  }
  else if(g.getHours() == 9 && g.getMinutes() >= 3 && g.getMinutes() <= 53){
    document.getElementById("current").innerHTML = "Current Class: " + two;
    document.getElementById("future").innerHTML = "Coming Up: Activities" + three;
  }
  else if((g.getHours() == 9 && g.getMinutes() >= 53) || (g.getHours() == 10 && g.getMinutes() <= 17)){
    document.getElementById("current").innerHTML = "Current Class: Activities";
    document.getElementById("future").innerHTML = "Coming Up: " + three;
  }
  else if((g.getHours() == 10 && g.getMinutes() >= 20) || (g.getHours() == 11 && g.getMinutes() <= 11)){
    document.getElementById("current").innerHTML = "Current Class: " + three;
    document.getElementById("future").innerHTML = "Coming Up: " + four;
  }
  else if(four_hs && (g.getHours() == 11 && g.getMinutes() >= 13) || (g.getHours() == 12 && g.getMinutes() <= 3)){
    document.getElementById("current").innerHTML = "Current Class: " + four;
    document.getElementById("future").innerHTML = "Coming Up: " + five;
  }
  else if(four_hs && g.getHours() == 12 && g.getMinutes() >= 3 && g.getMinutes() <= 33){
    document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
  }
  else if(four_ms && g.getHours() == 11 && g.getMinutes() >= 10 && g.getMinutes() <= 40){
    document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
  }
  else if(four_ms && (g.getHours() == 11 && g.getMinutes() >= 43) || (g.getHours() == 12 && g.getMinutes() <= 33)){
    document.getElementById("current").innerHTML = "Current Class: " + four;
    document.getElementById("future").innerHTML = "Coming Up: " + five;
  }
  else if((g.getHours() == 12 && g.getMinutes() >= 36) || (g.getHours() == 13 && g.getMinutes() <= 26)){
    document.getElementById("current").innerHTML = "Current Class: " + five;
    document.getElementById("future").innerHTML = "Coming Up: Break and " + six;
  }
  else if(g.getHours() == 13 && g.getMinutes() >= 26 && g.getMinutes() <= 34){
    document.getElementById("current").innerHTML = "Current Class: " + "Break";
    document.getElementById("future").innerHTML = "Coming Up: " + six;
  }
  else if((g.getHours() == 13 && g.getMinutes() >= 37) || (g.getHours() == 14 && g.getMinutes() <= 27)){
    document.getElementById("current").innerHTML = "Current Class: " + six;
    document.getElementById("future").innerHTML = "Coming Up: " + seven;
  }
  else if((g.getHours() == 14 && g.getMinutes() >= 30) || (g.getHours() == 15 && g.getMinutes() <= 20)){
    document.getElementById("current").innerHTML = "Current Class: " + seven;
    document.getElementById("future").innerHTML = "Coming Up: End of School";
  }
  else{
    document.getElementById("current").innerHTML = "No Classes At This Time";
    document.getElementById("future").innerHTML = "";
  }
}



function day2(one, two, three, three_hs, three_ms, four, five){
  if(g.getHours() == 7){
    document.getElementById("future").innerHTML = "Today's Schedule: " + one + ", " + two + ", " + three + ", " + four + ", " + five;
  }
  else if((g.getHours() == 8 && g.getMinutes() >= 0) || (g.getHours() == 9 && g.getMinutes() <= 12)){
    document.getElementById("current").innerHTML = "Current Class: " + one;
    document.getElementById("future").innerHTML = "Coming Up: Advisory, Activities, and " + two;
  }
  else if(g.getHours() == 9 && (g.getMinutes() >= 12 && g.getMinutes <= 22)){
    document.getElementById("current").innerHTML = "Current Class: Advisory";
    document.getElementById("future").innerHTML = "Coming Up: Activities and " + two;
  }
  else if(g.getHours() == 9 && g.getMinutes() >= 22 && g.getMinutes() <= 42){
    document.getElementById("current").innerHTML = "Current Class: Activities";
    document.getElementById("future").innerHTML = "Coming Up: " + two;
  }
  else if((g.getHours() == 9 && g.getMinutes() >= 45) || (g.getHours() == 10 && g.getMinutes() <= 57)){
    document.getElementById("current").innerHTML = "Current Class: " + two;
    document.getElementById("future").innerHTML = "Coming Up: " + three;
  }
  else if(three_hs && ((g.getHours() == 11 && g.getMinutes() >= 0) || (g.getHours() == 12 && g.getMinutes() <= 12))){
    document.getElementById("current").innerHTML = "Current Class: " + three;
    document.getElementById("future").innerHTML = "Coming Up: " + four;
  }
  else if(three_hs && g.getHours() == 12 && g.getMinutes() >= 12 && g.getMinutes() <= 42){
    document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
  }
  else if(three_ms && ((g.getHours() == 10 && g.getMinutes() >= 57) || (g.getHours() == 11 && g.getMinutes() <= 27))){
    document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
  }
  else if(three_ms && ((g.getHours() == 11 && g.getMinutes() >= 30) || (g.getHours() == 12 && g.getMinutes() <= 42))){
    document.getElementById("current").innerHTML = "Current Class: " + three;
    document.getElementById("future").innerHTML = "Coming Up: " + four;
  }
  else if((g.getHours() == 12 && g.getMinutes() >= 45) || (g.getHours() == 13 && g.getMinutes() <= 57)){
    document.getElementById("current").innerHTML = "Current Class: " + four;
    document.getElementById("future").innerHTML = "Coming Up: Break and " + five;
  }
  else if((g.getHours() == 13 && g.getMinutes() >= 57) || (g.getHours() == 14 && g.getMinutes() <= 5)){
    document.getElementById("current").innerHTML = "Current Class: Break";
    document.getElementById("future").innerHTML = "Coming Up: " + five;
  }
  else if((g.getHours() == 14 && g.getMinutes() >= 8) || (g.getHours() == 15 && g.getMinutes() <= 20)){
    document.getElementById("current").innerHTML = "Current Class: " + five;
    document.getElementById("future").innerHTML = "Coming Up: End of School";
  }
  else{
    document.getElementById("current").innerHTML = "No Classes At This Time";
    document.getElementById("future").innerHTML = "";
  }
}

function day3(one, two, two_hs, two_ms, three, four){
  if(g.getHours() == 7){
    document.getElementById("future").innerHTML = "Today's Schedule: " + one + ", " + two + ", " + three + ", " + four;
  }
  else if((g.getHours() == 9 && g.getMinutes() >= 0) || (g.getHours() == 10 && g.getMinutes() <= 9)){
    document.getElementById("current").innerHTML = "Current Class: " + one;
    document.getElementById("future").innerHTML = "Coming Up: Advisory, X-Period, and " + two;
  }
  else if(g.getHours() == 10 && g.getMinutes() >= 9 && g.getMinutes() <= 19){
    document.getElementById("current").innerHTML = "Current Class: Advisory";
    document.getElementById("future").innerHTML = "Coming Up: X-Period and " + two;
  }
  else if((g.getHours() == 10 && g.getMinutes() >= 22) || (g.getHours() == 11 && g.getMinutes() <= 12)){
    document.getElementById("current").innerHTML = "Current Class: X-Period";
    document.getElementById("future").innerHTML = "Coming Up:  " + two;
  }
  else if(two_hs && (g.getHours() == 11 && g.getMinutes() >= 15) || (g.getHours() == 12 && g.getMinutes() <= 24)){
    document.getElementById("current").innerHTML = "Current Class: " + two;
    document.getElementById("future").innerHTML = "Coming Up:  " + three;
  }
  else if(two_hs && g.getHours() == 12 && g.getMinutes() >= 24 && g.getMinutes() <= 49){
    document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
  }
  else if(two_ms && g.getHours() == 11 && g.getMinutes() >= 12 && g.getMinutes() <= 37){
    document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
  }
  else if(two_ms && (g.getHours() == 11 && g.getMinutes() >= 40) || (g.getHours() == 12 && g.getMinutes() <= 49)){
    document.getElementById("current").innerHTML = "Current Class: " + two;
    document.getElementById("future").innerHTML = "Coming Up:  " + three;
  }
  else if((g.getHours() == 12 && g.getMinutes() >= 52) || (g.getHours() == 14 && g.getMinutes() <= 1)){
    document.getElementById("current").innerHTML = "Current Class: " + three;
    document.getElementById("future").innerHTML = "Coming Up: Break and" + four;
  }
  else if(g.getHours() == 14 && g.getMinutes() >= 1 && g.getMinutes() <= 8){
    document.getElementById("current").innerHTML = "Current Class: Break";
    document.getElementById("future").innerHTML = "Coming Up: " + four;
  }
  else if((g.getHours() == 14 && g.getMinutes() >= 11) || (g.getHours() == 15 && g.getMinutes() <= 20)){
    document.getElementById("current").innerHTML = "Current Class: " + four;
    document.getElementById("future").innerHTML = "Coming Up: End of School";
  }
  else{
    document.getElementById("current").innerHTML = "No Classes At This Time";
    document.getElementById("future").innerHTML = "";
  }

}
