import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEotsu5-7sdVmtYJ8FOSautoxq95JbqUU",
  authDomain: "netflix-clone-1fd99.firebaseapp.com",
  projectId: "netflix-clone-1fd99",
  storageBucket: "netflix-clone-1fd99.appspot.com",
  messagingSenderId: "1063954881630",
  appId: "1:1063954881630:web:858fd0cc7ac94a640ca8cf",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
