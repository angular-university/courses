
import {AuthProviders, AuthMethods} from "angularfire2";


export const firebaseConfig = {
  apiKey: "AIzaSyBhuIkN2d6xNe7DwxzjCRhBIWiu1-mJ9vo",
  authDomain: "final-project-ac645.firebaseapp.com",
  databaseURL: "https://final-project-ac645.firebaseio.com",
  storageBucket: "final-project-ac645.appspot.com",
};


export const authConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

