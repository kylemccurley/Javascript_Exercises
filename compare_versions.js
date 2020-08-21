function compareVersions(version1, version2) {
  const REGEX_CHECK = /^[0-9]+(\.[0-9]+)*$/g
  if (REGEX_CHECK.test(version1) && REGEX_CHECK.test(version2)) {
    return null;
  }
  
  let version1Sects = version1.split('.');
  let version2Sects = version2.split('.');
  let longest = version1Sects.length > version2Sects.length ? version1Sects : version2Sects;
  for (let idx = 0; idx < longest.length; idx++) {
    let section1 = Number(version1Sects[idx]) || 0;
    let section2 = Number(version2Sects[idx]) || 0;
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
console.log(compareVersions('1.2', '1.2.3') === -1);

