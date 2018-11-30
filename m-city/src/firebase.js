import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9C2Lifhg9BMTaH95nUfh3I_3d7lPrs_o",
    authDomain: "m-city-c0dac.firebaseapp.com",
    databaseURL: "https://m-city-c0dac.firebaseio.com",
    projectId: "m-city-c0dac",
    storageBucket: "m-city-c0dac.appspot.com",
    messagingSenderId: "482103258512"
  };


  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');
  const firebasePromotions = firebaseDB.ref('promotions');

  export {
      firebase,
      firebaseMatches,
      firebasePromotions
  }
