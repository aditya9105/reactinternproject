    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
    import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";
  
    const firebaseConfig = {
      apiKey: "...",
      // ...
      storageBucket: "publicis-project-349eb.appspot.com", // ✅ Fixed URL
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
