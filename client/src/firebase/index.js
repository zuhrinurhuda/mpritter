import * as firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAJq_pGxcyUtTWz2nzQfx9WSo7E4zQId2Y',
  authDomain: 'hacktiv8-186802.firebaseapp.com',
  databaseURL: 'https://hacktiv8-186802.firebaseio.com',
  projectId: 'hacktiv8-186802',
  storageBucket: 'hacktiv8-186802.appspot.com',
  messagingSenderId: '367680524841'
}

firebase.initializeApp(config)
export default firebase
