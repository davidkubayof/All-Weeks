// בחר database
// use("testDB");

// יצירת document חדש
db.users.insertOne({
  name: "David",
  age: 25,
  city: "Tel Aviv",
  createdAt: new Date()
});

// קריאת כל המשתמשים
db.users.find({});