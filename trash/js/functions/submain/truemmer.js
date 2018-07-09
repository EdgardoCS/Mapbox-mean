var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;
var polygondwanaland;
var minute;
var seconds;

function countTimer() {
  ++totalSeconds;
  hour = Math.floor(totalSeconds / 3600);
  minute = Math.floor((totalSeconds - hour * 3600) / 60);
  seconds = totalSeconds - (hour * 3600 + minute * 60);


}
console.log(polygondwanaland)
/*
countTimer = function(){
  totalSeconds;
  var hour = Math.floor(totalSeconds /3600);
  var minute = Math.floor((totalSeconds - hour*3600)/60);
  var seconds = totalSeconds - (hour*3600 + minute*60);

}
*/
