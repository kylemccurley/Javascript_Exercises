function compareVersions(version1, version2) {
  const REGEX_CHECK = /^[0-9]+(\.[0-9]*)+/g
  let version1Sects = version1.split('.');
  let version2Sects = version2.split('.');
  let shortest = version1Sects.length > version2Sects.length ? version2Sects : version1Sects;
  for (let idx = 0; idx < shortest.length; idx++) {
    let section1 = Number(version1Sects[idx]);
    let section2 = Number(version2Sects[idx]);
    if (section1 < section2) {
      return -1;
    } else if (section1 > section2) {
      return 1;
    }
  }
  
  return 0;
}

console.log(compareVersions('0.1', '1') === -1);
console.log(compareVersions('1.0', '1.1') === -1);
console.log(compareVersions('1.1', '1.2') === -1);
console.log(compareVersions('1.18.2', '13.37') === -1);
console.log(compareVersions('1.2.0.0', '1.18.2') === -1);
console.log(compareVersions('1.4', '1.18') === -1);
console.log(compareVersions('1.1', '1.12') === -1);
console.log(compareVersions('1.2', '1.21') === -1);
console.log(compareVersions('1.2.3', '1.2.3') === 0);
