    // ✅ Firebase Initialization + Data Save Function
    
    // ✅ Import Firebase Modules
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
    import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

    // ✅ Firebase Configuration Object
    const firebaseConfig = {
      apiKey: "AIzaSyCIdvxQ5IUI9tzTHkgXHC3n6ARmyfkRuHI",
      authDomain: "publicis-project-349eb.firebaseapp.com",
      projectId: "publicis-project-349eb",
      storageBucket: "publicis-project-349eb.appspot.com",  // ✅ fixed this line
      messagingSenderId: "700004136422",
      appId: "1:700004136422:web:4e44f6b1e260ff42a5d227",
      measurementId: "G-W63Q4BGC7C",
      databaseURL: "https://publicis-project-349eb-default-rtdb.firebaseio.com"
    };

    // ✅ Initialize Firebase App
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    // ✅ 1. 'Save' Function for Form Page
    window.saveToFirebase = function(userData) {
      const newRef = push(ref(database, "formResponses")); // creates a unique key
      set(newRef, userData)  // stores your form data under that key
        .then(() => console.log("✅ Data saved to Firebase"))
        .catch((err) => console.error("❌ Firebase Error:", err));
    };

    // ✅ 2. Realtime Listener for Database Page
    window.listenToFirebase = function (callback) {
      const dbRef = ref(database, "formResponses");
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        callback(data || {});
      });
    };
