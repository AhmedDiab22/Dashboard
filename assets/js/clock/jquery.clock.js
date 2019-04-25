// 

function showTime() {

    var theDate = new Date();

    Seconds =theDate.getHours();
    Minutes =theDate.getMinutes();
    Hours =theDate.getSeconds();

    if(Hours < 10){
      Hours = '0' + Hours
    }
    if(Minutes < 10){
      Minutes = '0' + Minutes
    }
    if( Seconds < 10){
      Seconds = '0' + Seconds
    }

    if(Seconds > 12){
      Hours = 'م ' +  Hours 
    }else{
      Hours = 'ص '  +  Hours 
    }

      document.getElementById('clock').innerHTML = Hours + ' : ' + Minutes + ' : ' + Seconds;

  }

  window.onload = function () {
    setInterval(showTime , 500)
    }

