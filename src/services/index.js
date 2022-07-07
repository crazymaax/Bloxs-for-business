import axios from "axios";
import { initializeApp } from "firebase/app";

const instance = axios.create({
  baseURL: "https://conteudos.bloxs.com.br/wp-json/wp/v2/posts?_embed=1",
});

const firebaseConfig = {
    apiKey: "AIzaSyCHgmTS1MgfTFn0QlYM6y5qphg4ijEoabo",
    authDomain: "bloxs-auth.firebaseapp.com",
    projectId: "bloxs-auth",
    storageBucket: "bloxs-auth.appspot.com",
    messagingSenderId: "437559053914",
    appId: "1:437559053914:web:225caa07722b2dfc7f5263"
};

const app = initializeApp(firebaseConfig);

export { app, instance }

