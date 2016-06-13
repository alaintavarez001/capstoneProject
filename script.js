
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

$('#searchButton').click(function(){
   window.location.href='searchResults.html';
});
