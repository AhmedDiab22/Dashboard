// 

function showTime() {

    var theDate = new Date();

    Hours =theDate.getHours();
    Minutes =theDate.getMinutes();
    Seconds =theDate.getSeconds();

    if(Hours < 10){
      Hours = '0' + Hours
    }
    if(Minutes < 10){
      Minutes = '0' + Minutes
    }
    if( Seconds < 10){
      Seconds = '0' + Seconds
    }

    if(Hours > 12){
      Seconds = 'PM ' +  Seconds 
    }else{
      Seconds = ' AM '  +  Seconds 
    }

      document.getElementById('clock').innerHTML = Hours + ' : ' + Minutes + ' : ' + Seconds;

  }

  window.onload = function () {
    setInterval(showTime , 500)
    }

