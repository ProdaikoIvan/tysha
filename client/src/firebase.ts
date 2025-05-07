// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJNWjot0TtpvaLYt3AVycrpRIcjKjgto0",
  authDomain: "tysha-5cac6.firebaseapp.com",
  projectId: "tysha-5cac6",
  storageBucket: "tysha-5cac6.firebasestorage.app",
  messagingSenderId: "250534833528",
  appId: "1:250534833528:web:fbd0d29e995814db7f6c8d",
  measurementId: "G-QXMLCK7XV3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
console.log("Firebase initialized")
const analytics = getAnalytics(app);

const getToken = async () => {
  try {
    // Перевіряємо чи користувач увійшов
    const user = auth.currentUser;
    console.log(user);
    if (!user) {
      console.error("Користувач не автентифікований");
      return;
    }

    // Отримуємо ID токен
    const token = await user.getIdToken();
    console.log("ID Token:", token); // Токен, який потрібно відправляти у запитах

    return token;
  } catch (error) {
    console.error("Помилка при отриманні токена:", error);
  }
};

// Приклад використання
getToken();