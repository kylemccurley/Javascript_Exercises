 

  function formattedDate(date) {
    console.log(`Todays date is ${formattedDay(date)}, ${formattedMonth(date)} the ${dateSuffix(date)}`);
  
    function formattedDay(date) {
      const dates = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
      return dates[date.getDay()];
    }

    function formattedMonth(date) {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return months[date.getMonth()];
    }
 
    function dateSuffix(date) {
      let day = date.getDate();
      let dayStr = String(day);
      if ((day >= 4) && (day <= 20)) {
        return (day + 'th');
      } else if (dayStr[dayStr.length - 1] == 1) {
        return (day + 'st');
      } else if (dayStr[dayStr.length - 1] == 2) {
        return (day + 'nd');
      } else if (dayStr[dayStr.length - 1] == 3) {
        return (day + 'rd');
      } else {
        return (day + 'th');
      }
    }
    
    function formatTime(date) {
      let hours = addZero(date.getHours());
      let minutes = addZero(date.getMinutes());

      function addZero(hours) {
        let hourStr = String(hours);
        return (hourStr.length < 2) ? ('0' + hourStr) : hourStr;
      }
    }
  }

  let today = new Date;
  formattedDate(today);

  let tomorrow = new Date(today.getTime());
  tomorrow.setDate(today.getDate() + 1);
  formattedDate(tomorrow);

  let nextWeek = new Date(today.getTime());
  console.log(nextWeek.toDateString() == today.toDateString());

  nextWeek.setDate(today.getDate() + 7);
  console.log(nextWeek.getDate());
  
