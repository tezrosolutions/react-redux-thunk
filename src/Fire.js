import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBVcFcrSOc8O-OedXhHE4A7FNCuWaf-b7I",
    authDomain: "lexinsight-a7815.firebaseapp.com",
    databaseURL: "https://lexinsight-a7815.firebaseio.com/",
    storageBucket: "lexinsight-a7815.appspot.com",
    messagingSenderId: "989038097430"
};
var fire = firebase.initializeApp(config);
export default fire;