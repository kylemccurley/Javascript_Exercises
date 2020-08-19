let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

/*
The Function should generate an Array of Objects that contain only the id and title key/value pairs. You may assume that id and title, when existing, is an integer greater than 0 and non-empty string respectively. Here are the rules:

Keep only releases that have both id and title property present.
Keep only the id and title data for each release.
*/

function processReleaseData(data) {
  // Filter: Find With Both Id and Title Existing (Not returning undefined on reference)
  // Transform: Create a new obj with only the id and titles of the object.

  let idandTitleObjs = data.filter(findIdandTitleExisting);
  let idTitleConv = idandTitleObjs.map(idTitleConversion);
  return idTitleConv;

  function findIdandTitleExisting(obj) {
    return (obj.hasOwnProperty('id') && obj.hasOwnProperty('title'));
  }

  function idTitleConversion(obj) {
    return {id: obj['id'], title: obj['title']}
  }
}

processReleaseData(newReleases);

// should return:
// [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];
