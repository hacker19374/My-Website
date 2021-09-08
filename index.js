var x = 1
var elmt
var timer = setInterval(changeTitle, 3000);
var z = "hacker19374's Website"
function changeTitle() {
  if (x == 1) {
      z = "Home Page";
  }
  else {
      z = "hacker19374's Website";
  }
  document.title = z;
  x = Math.abs(x - 1);

};
function extendPic(num) {
  elmt = getElementById("img" + num).style.display = block;
};
function hidePic(num) {
    elmt = getElementById("img" + num).style.display = none;
};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgEM_GFvSdOHwjQYryF6SeyWyMsrkB1l4",
  authDomain: "tylers-tech84.firebaseapp.com",
  databaseURL: "https://tylers-tech84-default-rtdb.firebaseio.com",
  projectId: "tylers-tech84",
  storageBucket: "tylers-tech84.appspot.com",
  messagingSenderId: "1072672498505",
  appId: "1:1072672498505:web:9af4a11255a50c01bf7098",
  measurementId: "G-T7J24DPD1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
