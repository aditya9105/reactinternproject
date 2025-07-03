    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
    import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";
  
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
  
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
  
    window.saveToFirebase = function(userData) {
      const newRef = push(ref(database, "formResponses"));
      set(newRef, userData)
        .then(() => console.log("✅ Data saved to Firebase"))
        .catch((err) => console.error("❌ Firebase Error:", err));
    };
