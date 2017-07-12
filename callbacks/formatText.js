function capitalize(string) {
  var space = false;
  return string.split('').map(function(ch, i, arr) {
    if (i === 0) return ch.toUpperCase();
    if (ch === ' ') { 
      space = true;
      return ch;
    }
    else if (space === true) {
      space = false;
      return ch.toUpperCase();
    }
    else return ch;
  }).join('');
}

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return Object.assign(data).map(function(el) {
    return { name: capitalize(el.name).replace(/\./g, ''),
             country: 'Canada',
             active: el.active,
    }
  });
}


console.log(processBands(bands));

// should return:

// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]