function compareVersions(version1, version2) {
  version1 = splitConvertVersionNumber(version1);
  version2 = splitConvertVersionNumber(version2);
  for (var i = 0; i < version1.length; i++) {
    if (isNaN(version1[i]) || isNaN(version2[i])) return null;
    if (version1[i] > version2[i] || version2[i] === undefined) return 1;
    else if (version1[i] < version2[i] || version1[i] === undefined) return -1;
  }

  return 0;
}

function splitConvertVersionNumber(version) {
  return version.split('.').map(function(num) { return parseInt(num, 10); });
}

console.log(compareVersions('3.2.11', '3.2.11.1'))