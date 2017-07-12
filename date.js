function dateSuffix(date) {
  date = String(date.getDay());
  var lastDigit = date[date.length - 1];
  switch(true) {
    case lastDigit === '1':
      return date + 'st';
    case lastDigit === '2':
      return date + 'nd';
    case lastDigit === '3':
      return date + 'rd';
    default:
      return date + 'th';
  }
}

function formattedMonth(date) {
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 
          'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];
}

function formattedDay(date) {
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
}

function formatTime(date) {
  var hour = String(date.getHours());
  var minute = String(date.getMinutes());
  if (hour.length === 1) { hour = '0' + hour }
  if (minute.length === 1) { minute = '0' + minute }
  return hour + ':' + minute;
}

function formattedDate(date) {
  var day = formattedDay(date);
  var month = formattedMonth(date);

  console.log("Today's date is " + day + ', ' + month + ' the ' + dateSuffix(date));

}

var today = new Date();
// formattedDate(today);
// console.log(today.getYear());
// console.log(today.getFullYear());
// console.log(today.getTime())

var tomorrow = new Date();
tomorrow.setTime(today.getTime() - 44800000);

formattedDate(tomorrow);

var nextWeek = new Date(today.getTime());

nextWeek.setDate(nextWeek.getDate() + 7);
// console.log(nextWeek.toDateString() === today.toDateString());

console.log(formatTime(tomorrow));




