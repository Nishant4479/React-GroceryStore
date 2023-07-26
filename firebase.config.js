import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCyxobll6BpkH3dlrU6Y0U_f24aNPRKqAM",
    authDomain: "groceryapp-2eb76.firebaseapp.com",
    databaseURL: "https://groceryapp-2eb76-default-rtdb.firebaseio.com",
    projectId: "groceryapp-2eb76",
    storageBucket: "groceryapp-2eb76.appspot.com",
    messagingSenderId: "685179589039",
    appId: "1:685179589039:web:66d09ef4ea8f86a8bc9f5a"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };