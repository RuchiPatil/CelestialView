
//this is just for the clock
//we can still use node.js I just don't know how it works lol
window.onload = function() {
    clock();  
      function clock() {
      var now = new Date();
      var TwentyFourHour = now.getHours();
      var hour = now.getHours();
      var min = now.getMinutes();
      var sec = now.getSeconds();
      var mid = 'pm';
      if (min < 10) {
        min = "0" + min;
      }
      if (hour > 12) {
        hour = hour - 12;
      }    
      if(hour==0){ 
        hour=12;
      }
      if(TwentyFourHour < 12) {
         mid = 'am';
      }     
    document.getElementById('clock').innerHTML =     hour+':'+min+':'+sec +' '+mid ;
      setTimeout(clock, 1000);
      }
  }