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
/**
 * GOLD SCHEDULE STARTS HERE
 */
function Gold(){
  const fs = require('fs');
  g = global_date;

  let mydata = JSON.parse(fs.readFileSync('data.json'));
  //A Days
  if(g.getDay() == 1){
    if(g.getHours() == 8 && (g.getMinutes() >= 0 && g.getMinutes() <= 50)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.oneA;
      document.getElementById("future").innerHTML = "Coming Up: Advisory and " + mydata.twoA;
    }
    else if((g.getHours() == 8 && g.getMinutes() >= 50) || (g.getHours() == 9 && g.getMinutes() == 0)){
      document.getElementById("current").innerHTML = "Current Class: Advisory";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.twoA;
    }
    else if(g.getHours() == 9 && g.getMinutes() >= 3 && g.getMinutes() <= 53){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.twoA;
      document.getElementById("future").innerHTML = "Coming Up: Activities" + mydata.threeA;
    }
    else if((g.getHours() == 9 && g.getMinutes() >= 53) || (g.getHours() == 10 && g.getMinutes() <= 17)){
      document.getElementById("current").innerHTML = "Current Class: Activities";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.threeA;
    }
    else if((g.getHours() == 10 && g.getMinutes() >= 20) || (g.getHours() == 11 && g.getMinutes() <= 11)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.threeA;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.fourA;
    }
    else if(mydata.fourA_HS && (g.getHours() == 11 && g.getMinutes() >= 13) || (g.getHours() == 12 && g.getMinutes() <= 3)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.fourA;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.fiveA;
    }
    else if(mydata.fourB_HS && g.getHours() == 12 && g.getMinutes() >= 3 && g.getMinutes() <= 33){
      document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
    }
    else if(mydata.fourB_MS && g.getHours() == 11 && g.getMinutes() >= 10 && g.getMinutes() <= 40){
      document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
    }
    else if(mydata.fourA_MS && (g.getHours() == 11 && g.getMinutes() >= 43) || (g.getHours() == 12 && g.getMinutes() <= 33)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.fourA;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.fiveA;
    }
    else if((g.getHours() == 12 && g.getMinutes() >= 36) || (g.getHours() == 13 && g.getMinutes() <= 26)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.fiveA;
      document.getElementById("future").innerHTML = "Coming Up: Break and " + mydata.sixA;
    }
    else if(g.getHours() == 13 && g.getMinutes() >= 26 && g.getMinutes() <= 34){
      document.getElementById("current").innerHTML = "Current Class: " + "Break";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.sixA;
    }
    else if((g.getHours() == 13 && g.getMinutes() >= 37) || (g.getHours() == 14 && g.getMinutes() <= 27)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.sixA;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.sevenA;
    }
    else if((g.getHours() == 14 && g.getMinutes() >= 30) || (g.getHours() == 15 && g.getMinutes() <= 20)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.sevenA;
      document.getElementById("future").innerHTML = "Coming Up: End of School";
    }
    else{
      document.getElementById("current").innerHTML = "No Classes At This Time";
    }
  }
  //B days start with 5th
  else if(g.getDay() == 2){
    if((g.getHours() == 8 && g.getMinutes() >= 0) || (g.getHours() == 9 && g.getMinutes() <= 12)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.fiveB;
      document.getElementById("future").innerHTML = "Coming Up: Advisory, Activities, and " + mydata.sixB;
    }
    else if(g.getHours() == 9 && (g.getMinutes() >= 12 && g.getMinutes <= 22)){
      document.getElementById("current").innerHTML = "Current Class: Advisory";
      document.getElementById("future").innerHTML = "Coming Up: Activities and " + mydata.sixB;
    }
    else if(g.getHours() == 9 && g.getMinutes() >= 22 && g.getMinutes() <= 42){
      document.getElementById("current").innerHTML = "Current Class: Activities";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.sixB;
    }
    else if((g.getHours() == 9 && g.getMinutes() >= 45) || (g.getHours() == 10 && g.getMinutes() <= 57)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.sixB;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.sevenB;
    }
    else if(mydata.sevenB_HS && ((g.getHours() == 11 && g.getMinutes() >= 0) || (g.getHours() == 12 && g.getMinutes() <= 12))){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.sevenB;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.oneB;
    }
    else if(mydata.sevenB_MS && ((g.getHours() == 11 && g.getMinutes() >= 30) || (g.getHours() == 12 && g.getMinutes() <= 42))){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.sevenB;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.oneB;
    }
    else if((g.getHours() == 12 && g.getMinutes() >= 45) || (g.getHours() == 13 && g.getMinutes() <= 57)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.oneB;
      document.getElementById("future").innerHTML = "Coming Up: Break and " + mydata.twoB;
    }
    else if((g.getHours() == 13 && g.getMinutes() >= 57) || (g.getHours() == 14 && g.getMinutes() <= 5)){
      document.getElementById("current").innerHTML = "Current Class: Break";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.twoB;
    }
    else if((g.getHours() == 14 && g.getMinutes() >= 8) || (g.getHours() == 15 && g.getMinutes() <= 20)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.twoB;
      document.getElementById("future").innerHTML = "Coming Up: End of School";
    }
    else if(mydata.sevenB_HS && g.getHours() == 12 && g.getMinutes() >= 12 && g.getMinutes() <= 42){
      document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
    }
    else if(mydata.sevenB_MS && ((g.getHours() == 10 && g.getMinutes() >= 57) || (g.getHours() == 11 && g.getMinutes() <= 27))){
      document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
    }
    else{
      document.getElementById("current").innerHTML = "No Classes At This Time";
    }
  }
  // start with 3rd (5th and 6th are A days)
  else if(g.getDay() == 3){
    if((g.getHours() == 9 && g.getMinutes() >= 0) || (g.getHours() == 10 && g.getMinutes() <= 9)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.threeB;
      document.getElementById("future").innerHTML = "Coming Up: Advisory, X-Period, and " + mydata.fourB;
    }
    else if(g.getHours() == 10 && g.getMinutes() >= 9 && g.getMinutes() <= 19){
      document.getElementById("current").innerHTML = "Current Class: Advisory";
      document.getElementById("future").innerHTML = "Coming Up: X-Period and " + mydata.fourB;
    }
    else if((g.getHours() == 10 && g.getMinutes() >= 22) || (g.getHours() == 11 && g.getMinutes() <= 12)){
      document.getElementById("current").innerHTML = "Current Class: X-Period";
      document.getElementById("future").innerHTML = "Coming Up:  " + mydata.fourB;
    }
    else if(mydata.fourB_HS && (g.getHours() == 11 && g.getMinutes() >= 15) || (g.getHours() == 12 && g.getMinutes() <= 24)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.fourB;
      document.getElementById("future").innerHTML = "Coming Up:  " + mydata.fiveA;
    }
    else if(mydata.fourB_MS && (g.getHours() == 11 && g.getMinutes() >= 40) || (g.getHours() == 12 && g.getMinutes() <= 49)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.fourB;
      document.getElementById("future").innerHTML = "Coming Up:  " + mydata.fiveA;
    }
    else if((g.getHours() == 12 && g.getMinutes() >= 52) || (g.getHours() == 14 && g.getMinutes() <= 1)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.fiveA;
      document.getElementById("future").innerHTML = "Coming Up: Break and" + mydata.sixA;
    }
    else if(g.getHours() == 14 && g.getMinutes() >= 1 && g.getMinutes() <= 8){
      document.getElementById("current").innerHTML = "Current Class: Break";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.sixA;
    }
    else if((g.getHours() == 14 && g.getMinutes() >= 11) || (g.getHours() == 15 && g.getMinutes() <= 20)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.sixA;
      document.getElementById("future").innerHTML = "Coming Up: End of School";
    }
    else if(mydata.fourB_HS && g.getHours() == 12 && g.getMinutes() >= 24 && g.getMinutes() <= 49){
      document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
    }
    else if(mydata.fourB_MS && g.getHours() == 11 && g.getMinutes() >= 12 && g.getMinutes() <= 37){
      document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
    }
    else{
      document.getElementById("current").innerHTML = "No Classes At This Time";
    }
  }
  //A days start with 7th
  else if(g.getDay() == 4){
    if((g.getHours() == 8 && g.getMinutes() >= 0) || (g.getHours() == 9 && g.getMinutes() <= 12)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.sevenA;
      document.getElementById("future").innerHTML = "Coming Up: Advisory, Activities and " + mydata.oneA;
    }
    else if(g.getHours() == 9 && g.getMinutes() >= 12 && g.getMinutes() <= 22){
      document.getElementById("current").innerHTML = "Current Class: Advisory";
      document.getElementById("future").innerHTML = "Coming Up: Activies and " + mydata.oneA;
    }
    else if(g.getHours() == 9 && g.getMinutes() >= 22 && g.getMinutes() <= 42){
      document.getElementById("current").innerHTML = "Current Class: Activies";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.oneA;
    }
    else if((g.getHours() == 9 && g.getMinutes() >= 45) || (g.getHours() == 10 && g.getMinutes() <= 57)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.oneA;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.twoA;
    }
    else if(mydata.twoA_MS && ((g.getHours() == 11 && g.getMinutes() >= 30) || (g.getHours() == 12 && g.getMinutes() <= 42))){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.twoA;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.threeA;
    }
    else if(mydata.twoA_HS && ((g.getHours() == 11 && g.getMinutes() >= 00) || (g.getHours() == 12 && g.getMinutes() <= 12))){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.twoA;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.threeA;
    }
    else if((g.getHours() == 12 && g.getMinutes() >= 45) || (g.getHours() == 13 && g.getMinutes() <= 57)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.threeA;
      document.getElementById("future").innerHTML = "Coming Up: Break and " + mydata.fourA;
    }
    else if((g.getHours() == 13 && g.getMinutes() >= 57) || (g.getHours() == 14 && g.getMinutes() <= 5)){
      document.getElementById("current").innerHTML = "Current Class: Break";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.fourA;
    }
    else if((g.getHours() == 14 && g.getMinutes() >= 8) || (g.getHours() == 15 && g.getMinutes() <= 20)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.fourA;
      document.getElementById("future").innerHTML = "Coming Up: End of School";
    }
    else if(mydata.twoA_HS && g.getHours() == 12 && g.getMinutes() >= 12 && g.getMinutes() <= 42){
      document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
    }
    else if(mydata.twoA_MS && (g.getHours() == 10 && g.getMinutes() >= 57) || (g.getHours() == 11 && g.getMinutes() <= 27)){
      document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
    }
    else{
      document.getElementById("current").innerHTML = "No Classes At This Time";
    }
  }
  //B days start with 2nd
  else if(g.getDay() == 5){
    if(g.getHours() == 8 && (g.getMinutes() >= 0 && g.getMinutes() <= 50)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.twoB;
      document.getElementById("future").innerHTML = "Coming Up: Advisory and " + mydata.threeB;
    }
    else if((g.getHours() == 8 && g.getMinutes() >= 50) || (g.getHours() == 9 && g.getMinutes() == 0)){
      document.getElementById("current").innerHTML = "Current Class: Advisory";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.threeB;
    }
    else if(g.getHours() == 9 && g.getMinutes() >= 3 && g.getMinutes() <= 53){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.threeB;
      document.getElementById("future").innerHTML = "Coming Up: Activities" + mydata.fourB;
    }
    else if((g.getHours() == 9 && g.getMinutes() >= 53) || (g.getHours() == 10 && g.getMinutes() <= 17)){
      document.getElementById("current").innerHTML = "Current Class: Activities";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.fourB;
    }
    else if((g.getHours() == 10 && g.getMinutes() >= 20) || (g.getHours() == 11 && g.getMinutes() <= 11)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.fourB;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.fiveB;
    }
    else if(mydata.fiveB_HS && (g.getHours() == 11 && g.getMinutes() >= 13) || (g.getHours() == 12 && g.getMinutes() <= 3)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.fiveB;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.sixB;
    }
    else if(mydata.fiveB_MS && (g.getHours() == 11 && g.getMinutes() >= 43) || (g.getHours() == 12 && g.getMinutes() <= 33)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.fiveB;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.sixB;
    }
    else if((g.getHours() == 12 && g.getMinutes() >= 36) || (g.getHours() == 13 && g.getMinutes() <= 26)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.sixB;
      document.getElementById("future").innerHTML = "Coming Up: Break and " + mydata.sevenB;
    }
    else if(g.getHours() == 13 && g.getMinutes() >= 26 && g.getMinutes() <= 34){
      document.getElementById("current").innerHTML = "Current Class: " + "Break";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.sevenB;
    }
    else if((g.getHours() == 13 && g.getMinutes() >= 37) || (g.getHours() == 14 && g.getMinutes() <= 27)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.sevenB;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.oneB;
    }
    else if((g.getHours() == 14 && g.getMinutes() >= 30) || (g.getHours() == 15 && g.getMinutes() <= 20)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.oneB;
      document.getElementById("future").innerHTML = "Coming Up: End of School";
    }
    else if(mydata.fiveB_HS && g.getHours() == 12 && g.getMinutes() >= 3 && g.getMinutes() <= 33){
      document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
    }
    else if(mydata.fiveB_MS && g.getHours() == 11 && g.getMinutes() >= 10 && g.getMinutes() <= 40){
      document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
    }
    else{
      document.getElementById("current").innerHTML = "No Classes At This Time";
    }
  }
  else{
    document.getElementById("current").innerHTML = "No school today"
  }
}
/**
 * WHITE SCHEDULE STARTS HERE
 */
function White(){
  const fs = require('fs');
  g = global_date;

  let mydata = JSON.parse(fs.readFileSync('data.json'));

  //A Days start with 4th period
  if(g.getDay() == 1){
    if(g.getHours() == 8 && (g.getMinutes() >= 0 && g.getMinutes() <= 50)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.fourA;
      document.getElementById("future").innerHTML = "Coming Up: Advisory and " + mydata.fiveA;
    }
    else if((g.getHours() == 8 && g.getMinutes() >= 50) || (g.getHours() == 9 && g.getMinutes() == 0)){
      document.getElementById("current").innerHTML = "Current Class: Advisory";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.fiveA;
    }
    else if(g.getHours() == 9 && g.getMinutes() >= 3 && g.getMinutes() <= 53){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.fiveA;
      document.getElementById("future").innerHTML = "Coming Up: Activities" + mydata.sixA;
    }
    else if((g.getHours() == 9 && g.getMinutes() >= 53) || (g.getHours() == 10 && g.getMinutes() <= 17)){
      document.getElementById("current").innerHTML = "Current Class: Activities";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.sixA;
    }
    else if((g.getHours() == 10 && g.getMinutes() >= 20) || (g.getHours() == 11 && g.getMinutes() <= 10)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.sixA;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.sevenA;
    }
    else if(mydata.sevenA_HS && (g.getHours() == 11 && g.getMinutes() >= 13) || (g.getHours() == 12 && g.getMinutes() <= 3)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.sevenA;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.oneA;
    }
    else if(mydata.sevenB_HS && g.getHours() == 12 && g.getMinutes() >= 3 && g.getMinutes() <= 33){
      document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
    }
    else if(mydata.sevenB_MS && g.getHours() == 11 && g.getMinutes() >= 10 && g.getMinutes() <= 40){
      document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
    }
    else if(mydata.sevenA_MS && (g.getHours() == 11 && g.getMinutes() >= 43) || (g.getHours() == 12 && g.getMinutes() <= 33)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.sevenA;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.oneA;
    }
    else if((g.getHours() == 12 && g.getMinutes() >= 36) || (g.getHours() == 13 && g.getMinutes() <= 26)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.oneA;
      document.getElementById("future").innerHTML = "Coming Up: Break and " + mydata.twoA;
    }
    else if(g.getHours() == 13 && g.getMinutes() >= 26 && g.getMinutes() <= 34){
      document.getElementById("current").innerHTML = "Current Class: " + "Break";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.twoA;
    }
    else if((g.getHours() == 13 && g.getMinutes() >= 37) || (g.getHours() == 14 && g.getMinutes() <= 27)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.twoA;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.threeA;
    }
    else if((g.getHours() == 14 && g.getMinutes() >= 30) || (g.getHours() == 15 && g.getMinutes() <= 20)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.threeA;
      document.getElementById("future").innerHTML = "Coming Up: End of School";
    }
    else{
      document.getElementById("current").innerHTML = "No Classes At This Time";
    }
  }
  //B days start with 1st
  else if(g.getDay() == 2){
    if((g.getHours() == 8 && g.getMinutes() >= 0) || (g.getHours() == 9 && g.getMinutes() <= 12)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.oneB;
      document.getElementById("future").innerHTML = "Coming Up: Advisory, Activities, and " + mydata.twoB;
    }
    else if(g.getHours() == 9 && (g.getMinutes() >= 12 && g.getMinutes() <= 22)){
      document.getElementById("current").innerHTML = "Current Class: Advisory";
      document.getElementById("future").innerHTML = "Coming Up: Activities and " + mydata.twoB;
    }
    else if(g.getHours() == 9 && g.getMinutes() >= 22 && g.getMinutes() <= 42){
      document.getElementById("current").innerHTML = "Current Class: Activities";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.twoB;
    }
    else if((g.getHours() == 9 && g.getMinutes() >= 45) || (g.getHours() == 10 && g.getMinutes() <= 57)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.twoB;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.threeB;
    }
    else if(mydata.threeB_HS && ((g.getHours() == 11 && g.getMinutes() >= 0) || (g.getHours() == 12 && g.getMinutes() <= 12))){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.threeB;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.fourB;
    }
    else if(mydata.threeB_MS && ((g.getHours() == 11 && g.getMinutes() >= 30) || (g.getHours() == 12 && g.getMinutes() <= 42))){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.threeB;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.fourB;
    }
    else if((g.getHours() == 12 && g.getMinutes() >= 45) || (g.getHours() == 13 && g.getMinutes() <= 57)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.fourB;
      document.getElementById("future").innerHTML = "Coming Up: Break and " + mydata.fiveB;
    }
    else if((g.getHours() == 13 && g.getMinutes() >= 57) || (g.getHours() == 14 && g.getMinutes() <= 5)){
      document.getElementById("current").innerHTML = "Current Class: Break";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.fiveB;
    }
    else if((g.getHours() == 14 && g.getMinutes() >= 8) || (g.getHours() == 15 && g.getMinutes() <= 20)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.fiveB;
      document.getElementById("future").innerHTML = "Coming Up: End of School";
    }
    else if(mydata.threeB_HS && g.getHours() == 12 && g.getMinutes() >= 12 && g.getMinutes() <= 42){
      document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
    }
    else if(mydata.threeB_MS && ((g.getHours() == 10 && g.getMinutes() >= 57) || (g.getHours() == 11 && g.getMinutes() <= 27))){
      document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
    }
    else{
      document.getElementById("current").innerHTML = "No Classes At This Time";
    }
  }
  // start with 6th (1st and 2nd are A days)
  else if(g.getDay() == 3){
    if((g.getHours() == 9 && g.getMinutes() >= 0) || (g.getHours() == 10 && g.getMinutes() <= 9)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.sixB;
      document.getElementById("future").innerHTML = "Coming Up: Advisory, X-Period, and " + mydata.sevenB;
    }
    else if(g.getHours() == 10 && g.getMinutes() >= 9 && g.getMinutes() <= 19){
      document.getElementById("current").innerHTML = "Current Class: Advisory";
      document.getElementById("future").innerHTML = "Coming Up: X-Period and " + mydata.sevenB;
    }
    else if((g.getHours() == 10 && g.getMinutes() >= 22) || (g.getHours() == 11 && g.getMinutes() <= 12)){
      document.getElementById("current").innerHTML = "Current Class: X-Period";
      document.getElementById("future").innerHTML = "Coming Up:  " + mydata.sevenB;
    }
    else if(mydata.sevenB_HS && (g.getHours() == 11 && g.getMinutes() >= 15) || (g.getHours() == 12 && g.getMinutes() <= 24)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.sevenB;
      document.getElementById("future").innerHTML = "Coming Up:  " + mydata.oneA;
    }
    else if(mydata.sevenB_MS && (g.getHours() == 11 && g.getMinutes() >= 40) || (g.getHours() == 12 && g.getMinutes() <= 49)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.sevenB;
      document.getElementById("future").innerHTML = "Coming Up:  " + mydata.oneA;
    }
    else if((g.getHours() == 12 && g.getMinutes() >= 52) || (g.getHours() == 14 && g.getMinutes() <= 1)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.oneA;
      document.getElementById("future").innerHTML = "Coming Up: Break and" + mydata.twoA;
    }
    else if(g.getHours() == 14 && g.getMinutes() >= 1 && g.getMinutes() <= 8){
      document.getElementById("current").innerHTML = "Current Class: Break";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.twoA;
    }
    else if((g.getHours() == 14 && g.getMinutes() >= 11) || (g.getHours() == 15 && g.getMinutes() <= 20)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.twoA;
      document.getElementById("future").innerHTML = "Coming Up: End of School";
    }
    else if(mydata.sevenB_HS && g.getHours() == 12 && g.getMinutes() >= 24 && g.getMinutes() <= 49){
      document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
    }
    else if(mydata.sevenB_MS && g.getHours() == 11 && g.getMinutes() >= 12 && g.getMinutes() <= 37){
      document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
    }
    else{
      document.getElementById("current").innerHTML = "No Classes At This Time";
    }
  }
  //A days start with 3rd
  else if(g.getDay() == 4){
    if((g.getHours() == 8 && g.getMinutes() >= 0) || (g.getHours() == 9 && g.getMinutes() <= 12)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.threeA;
      document.getElementById("future").innerHTML = "Coming Up: Advisory, Activities and " + mydata.fourA;
    }
    else if(g.getHours() == 9 && g.getMinutes() >= 12 && g.getMinutes() <= 22){
      document.getElementById("current").innerHTML = "Current Class: Advisory";
      document.getElementById("future").innerHTML = "Coming Up: Activies and " + mydata.fourA;
    }
    else if(g.getHours() == 9 && g.getMinutes() >= 22 && g.getMinutes() <= 42){
      document.getElementById("current").innerHTML = "Current Class: Activies";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.fourA;
    }
    else if((g.getHours() == 9 && g.getMinutes() >= 45) || (g.getHours() == 10 && g.getMinutes() <= 57)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.fourA;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.fiveA;
    }
    else if(mydata.fiveA_MS && ((g.getHours() == 11 && g.getMinutes() >= 30) || (g.getHours() == 12 && g.getMinutes() <= 42))){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.fiveA;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.sixA;
    }
    else if(mydata.fiveA_HS && ((g.getHours() == 11 && g.getMinutes() >= 00) || (g.getHours() == 12 && g.getMinutes() <= 12))){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.fiveA;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.sixA;
    }
    else if((g.getHours() == 12 && g.getMinutes() >= 45) || (g.getHours() == 13 && g.getMinutes() <= 57)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.sixA;
      document.getElementById("future").innerHTML = "Coming Up: Break and " + mydata.sevenA;
    }
    else if((g.getHours() == 13 && g.getMinutes() >= 57) || (g.getHours() == 14 && g.getMinutes() <= 5)){
      document.getElementById("current").innerHTML = "Current Class: Break";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.sevenA;
    }
    else if((g.getHours() == 14 && g.getMinutes() >= 8) || (g.getHours() == 15 && g.getMinutes() <= 20)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.sevenA;
      document.getElementById("future").innerHTML = "Coming Up: End of School";
    }
    else if(mydata.fiveA_HS && g.getHours() == 12 && g.getMinutes() >= 12 && g.getMinutes() <= 42){
      document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
    }
    else if(mydata.fiveA_MS && (g.getHours() == 10 && g.getMinutes() >= 57) || (g.getHours() == 11 && g.getMinutes() <= 27)){
      document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
    }
    else{
      document.getElementById("current").innerHTML = "No Classes At This Time";
    }
  }
  //B days start with 5th
  else if(g.getDay() == 5){
    if(g.getHours() == 8 && (g.getMinutes() >= 0 && g.getMinutes() <= 50)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.fiveB;
      document.getElementById("future").innerHTML = "Coming Up: Advisory and " + mydata.sixB;
    }
    else if((g.getHours() == 8 && g.getMinutes() >= 50) || (g.getHours() == 9 && g.getMinutes() == 0)){
      document.getElementById("current").innerHTML = "Current Class: Advisory";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.sixB;
    }
    else if(g.getHours() == 9 && g.getMinutes() >= 3 && g.getMinutes() <= 53){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.sixB;
      document.getElementById("future").innerHTML = "Coming Up: Activities" + mydata.sevenB;
    }
    else if((g.getHours() == 9 && g.getMinutes() >= 53) || (g.getHours() == 10 && g.getMinutes() <= 17)){
      document.getElementById("current").innerHTML = "Current Class: Activities";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.sevenB;
    }
    else if((g.getHours() == 10 && g.getMinutes() >= 20) || (g.getHours() == 11 && g.getMinutes() <= 11)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.sevenB;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.oneB;
    }
    else if(mydata.oneB_HS && (g.getHours() == 11 && g.getMinutes() >= 13) || (g.getHours() == 12 && g.getMinutes() <= 3)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.oneB;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.twoB;
    }
    else if(mydata.oneB_MS && (g.getHours() == 11 && g.getMinutes() >= 43) || (g.getHours() == 12 && g.getMinutes() <= 33)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.oneB;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.twoB;
    }
    else if((g.getHours() == 12 && g.getMinutes() >= 36) || (g.getHours() == 13 && g.getMinutes() <= 26)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.twoB;
      document.getElementById("future").innerHTML = "Coming Up: Break and " + mydata.threeB;
    }
    else if(g.getHours() == 13 && g.getMinutes() >= 26 && g.getMinutes() <= 34){
      document.getElementById("current").innerHTML = "Current Class: " + "Break";
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.threeB;
    }
    else if((g.getHours() == 13 && g.getMinutes() >= 37) || (g.getHours() == 14 && g.getMinutes() <= 27)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.threeB;
      document.getElementById("future").innerHTML = "Coming Up: " + mydata.fourB;
    }
    else if((g.getHours() == 14 && g.getMinutes() >= 30) || (g.getHours() == 15 && g.getMinutes() <= 20)){
      document.getElementById("current").innerHTML = "Current Class: " + mydata.fourB;
      document.getElementById("future").innerHTML = "Coming Up: End of School";
    }
    else if(mydata.fiveB_HS && g.getHours() == 12 && g.getMinutes() >= 3 && g.getMinutes() <= 33){
      document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
    }
    else if(mydata.fiveB_MS && g.getHours() == 11 && g.getMinutes() >= 10 && g.getMinutes() <= 40){
      document.getElementById("current").innerHTML = "Current Class: " + "Lunch Time";
    }
    else{
      document.getElementById("current").innerHTML = "No Classes At This Time";
    }
  }
  else{
    document.getElementById("current").innerHTML = "No school today"
  }

}
