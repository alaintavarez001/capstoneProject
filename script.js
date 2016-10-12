
var config = {
  apiKey: "AIzaSyAFz6meHC_mPZXfNxs_3w3zRYsn444Za-g",
  authDomain: "capstoneproject-d0813.firebaseapp.com",
  databaseURL: "https://capstoneproject-d0813.firebaseio.com",
  storageBucket: "",
};
var app= firebase.initializeApp(config);

function changeTheme(theme){
  document.getElementById("themeColors").setAttribute("href", theme);
  localStorage.setItem('theme', theme);
}

function loadTheme(){
  if(localStorage.getItem('theme')){
    changeTheme(localStorage.getItem('theme'));
  }
}

$('#searchButton').click(function(text){
  var searchText = $('#searchBar').val();
  localStorage.setItem('search',searchText);
  window.location.href='searchResults.html';
});

function matchExists(suspect, keyword){
  return suspect.gender == keyword || suspect.last_name == keyword ||
  suspect.first_name == keyword || suspect.alias == keyword ||
  suspect.age == keyword || suspect.ethnicity == keyword ||
  suspect.race == keyword || suspect.address == keyword ||
  suspect.phone == keyword || suspect.SSN == keyword ||
  suspect.ht_wt == keyword || suspect.eye_hair_color == keyword ||
  suspect.last_seen_wearing == keyword || suspect.affiliations == keyword ||
  suspect.location == keyword || suspect.vehicle == keyword;
};
