import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyANmhzyXmACTkTT6fODw0abp2vg463QdNM",
    authDomain: "wizzywit-mario-plan.firebaseapp.com",
    databaseURL: "https://wizzywit-mario-plan.firebaseio.com",
    projectId: "wizzywit-mario-plan",
    storageBucket: "wizzywit-mario-plan.appspot.com",
    messagingSenderId: "6781282277"
  };
  firebase.initializeApp(config);
  

  export default firebase