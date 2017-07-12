function mailCount(emailData) {
  var earliest = 999999999999999;
  var latest = 0;
  var temp;
  var emailCount = emailData.split('##||##').map(function(part) {
     temp = new Date(part.split('#/#')[2].replace(/Date: /, ''));
     if (earliest > temp) earliest = temp;
     if (latest < temp) latest = temp;
     return undefined;
  }).length;

  return 'Count of Email: ' + emailCount + '\n' +
         'Date Range: ' + earliest.toDateString() + ' - ' + latest.toDateString();
}

console.log(mailCount(emailData));

// // console.output
// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016