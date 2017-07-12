var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

function objectHasProperty(object, property) {
  return Object.keys(object).includes(property);
}
// console.log(objectHasProperty(pets, 'dog'));       // true
// console.log(objectHasProperty(pets, 'lizard'));    // false
// console.log(objectHasProperty(pets, 'mice'));      // true

var wins = {
  steve: 3,
  susie: 4,
};

function incrementProperty(object, property) {
  if (!Object.keys(object).includes(property)) { return object[property] = 1 }
  else { return ++object[property] }
}
// console.log(incrementProperty(wins, 'susie'));   // 5
// console.log(wins);                               // { steve: 3, susie: 5 }
// console.log(incrementProperty(wins, 'lucy'));    // 1
// console.log(wins);                              // { steve: 3, susie: 5, lucy: 1 }

var hal = {
  model: 9000,
  enabled: true,
};
var sal = {};

function copyProperties(obj1, obj2) {
  for(var prop in obj1) {
    obj2[prop] = obj1[prop];
  }
  return Object.keys(obj2).length;
}

// console.log(copyProperties(hal, sal));  // 2
// console.log(sal);                       // { model: 9000, enabled: true }

function wordCount(string) {
  var words = string.split(' ');
  var wordsObj = {};
  for (var i = 0; i < words.length; i++) {
    if (wordsObj[words[i]] == undefined ) { wordsObj[words[i]] = 1 }
    else { wordsObj[words[i]] += 1 }
  }

  return wordsObj;
}

console.log(wordCount('box car cat bag box')); 


