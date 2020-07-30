function printDate() {
  let date = new Date;
  let dateNum = date.getDate();
  console.log(`Todays date is ${formattedDay()}, ${formattedMonth()} the ${dateSuffix(dateNum)}`);

  function formattedDay() {
    const dates = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    return dates[date.getDay()];
  }

  function formattedMonth() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[date.getMonth()];
  }

  function dateSuffix(day) {
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
}

printDate();
