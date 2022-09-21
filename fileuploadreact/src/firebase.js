import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDErLBxDN1MSZXoqRsPA8SfpPULK5FBkmE",
    authDomain: "uploading-files-b0278.firebaseapp.com",
    projectId: "uploading-files-b0278",
    storageBucket: "uploading-files-b0278.appspot.com",
    messagingSenderId: "253918272906",
    appId: "1:253918272906:web:0bb744f43de67eb8e13c73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app); 